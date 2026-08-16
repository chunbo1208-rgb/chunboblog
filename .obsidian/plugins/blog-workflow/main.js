const { Notice, Platform, Plugin } = require("obsidian");

module.exports = class BlogWorkflowPlugin extends Plugin {
  async onload() {
    this.publishTimer = null;
    this.timestampTimers = new Map();
    this.updatingTimestamps = new Set();

    this.registerEvent(
      this.app.vault.on("modify", file => {
        if (!this.isPost(file) || this.updatingTimestamps.has(file.path)) return;

        clearTimeout(this.timestampTimers.get(file.path));
        const timer = setTimeout(() => this.updateModifiedTime(file), 1500);
        this.timestampTimers.set(file.path, timer);
      })
    );

    this.registerEvent(
      this.app.vault.on("create", file => {
        if (
          ["md", "mdx"].includes(file.extension) &&
          file.path.startsWith("src/content/posts/_drafts/")
        ) {
          setTimeout(() => this.initializeNewPost(file), 100);
        }
      })
    );

    this.registerEvent(
      this.app.vault.on("rename", (file, oldPath) => {
        if (!file.path.startsWith("src/content/posts/_drafts/")) return;
        const oldName = oldPath.split("/").pop().replace(/\.mdx?$/, "");
        this.app.fileManager.processFrontMatter(file, properties => {
          if (!properties.title || properties.title === oldName || properties.title === "Untitled") {
            properties.title = file.basename;
          }
        });
      })
    );

    this.registerEvent(
      this.app.metadataCache.on("changed", (file, _data, cache) => {
        if (this.isPost(file) && cache.frontmatter?.publishStatus === "ready") {
          this.schedulePublish();
        }
      })
    );

    this.addCommand({
      id: "publish-ready-posts",
      name: "Publish ready posts",
      callback: () => this.publishReadyPosts(),
    });

    this.app.workspace.onLayoutReady(() => {
      for (const file of this.app.vault.getMarkdownFiles()) {
        if (file.path.startsWith("src/content/posts/_drafts/")) {
          this.initializeNewPost(file);
        }
      }
    });

    if (Platform.isDesktopApp) this.schedulePublish();
  }

  onunload() {
    clearTimeout(this.publishTimer);
    for (const timer of this.timestampTimers.values()) clearTimeout(timer);
  }

  isPost(file) {
    return (
      ["md", "mdx"].includes(file.extension) &&
      file.path.startsWith("src/content/posts/") &&
      !file.path.includes("/_previous/")
    );
  }

  async initializeNewPost(file) {
    const source = await this.app.vault.read(file);
    if (source.trim()) return;

    const now = new Date().toISOString();
    const title = JSON.stringify(file.basename);
    await this.app.vault.modify(
      file,
      `---\nauthor: Chunbo Liu\ntitle: ${title}\ndescription: ""\npubDatetime: ${now}\nmodDatetime: ${now}\ndraft: true\npublishStatus: unpushed\ntags:\n  - others\n---\n\n# ${file.basename}\n`
    );
  }

  async updateModifiedTime(file) {
    this.timestampTimers.delete(file.path);
    const cache = this.app.metadataCache.getFileCache(file);
    if (!cache?.frontmatter?.pubDatetime) return;

    this.updatingTimestamps.add(file.path);
    try {
      await this.app.fileManager.processFrontMatter(file, properties => {
        properties.modDatetime = new Date().toISOString();
      });
    } finally {
      setTimeout(() => this.updatingTimestamps.delete(file.path), 500);
    }
  }

  schedulePublish() {
    if (!Platform.isDesktopApp) return;
    clearTimeout(this.publishTimer);
    this.publishTimer = setTimeout(() => this.publishReadyPosts(), 2500);
  }

  async publishReadyPosts() {
    if (!Platform.isDesktopApp) {
      new Notice("Publishing runs when this iCloud vault opens on your Mac.");
      return;
    }

    try {
      const { execFile } = require("node:child_process");
      const script = this.app.vault.adapter.getFullPath("scripts/publish-ready.mjs");
      execFile(
        "/bin/zsh",
        ["-lc", 'node "$1"', "blog-workflow", script],
        { cwd: this.app.vault.adapter.basePath },
        error => {
          if (error) new Notice(`Blog publish failed: ${error.message}`, 10000);
          else new Notice("Ready blog posts were pushed to GitHub.");
        }
      );
    } catch (error) {
      new Notice(`Blog publish failed: ${error.message}`, 10000);
    }
  }
};
