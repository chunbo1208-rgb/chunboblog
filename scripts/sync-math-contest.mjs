import { createHash } from "node:crypto";
import { execFileSync, spawn } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  renameSync,
  rmSync,
  watch,
  writeFileSync,
} from "node:fs";
import { homedir, tmpdir } from "node:os";
import path from "node:path";
import process from "node:process";

const sourcePath = path.join(
  homedir(),
  "Library/Mobile Documents/iCloud~md~obsidian/Documents/Notes/Math Contest 2026.md"
);
const blogPath = path.resolve(
  "src/content/posts/math_contest/math-contest.md"
);
const statePath = path.resolve(".math-contest-sync.json");
const basePath = path.resolve(".math-contest-sync-base.md");
const backupPath = path.resolve(".math-contest-sync-backup");

function readMarkdownContent(content, label) {
  content = content.replaceAll("\r\n", "\n");
  const match = content.match(/^(---\n[\s\S]*?\n---)\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(`Expected YAML frontmatter in ${label}`);
  }

  return { frontmatter: match[1], body: match[2] };
}

function readMarkdown(filePath) {
  return readMarkdownContent(readFileSync(filePath, "utf8"), filePath);
}

function hash(body) {
  return createHash("sha256").update(body).digest("hex");
}

function writeMarkdown(filePath, frontmatter, body) {
  const temporaryPath = `${filePath}.syncing`;
  writeFileSync(temporaryPath, `${frontmatter}\n${body}`, "utf8");
  renameSync(temporaryPath, filePath);
}

function saveState(body) {
  writeFileSync(basePath, body, "utf8");
  writeFileSync(
    statePath,
    `${JSON.stringify({ bodyHash: hash(body) }, null, 2)}\n`,
    "utf8"
  );
}

function backupFiles(label) {
  const timestamp = new Date().toISOString().replaceAll(":", "-");
  mkdirSync(backupPath, { recursive: true });
  writeMarkdown(
    path.join(backupPath, `${timestamp}-${label}-icloud.md`),
    source.frontmatter,
    source.body
  );
  writeMarkdown(
    path.join(backupPath, `${timestamp}-${label}-blog.md`),
    blog.frontmatter,
    blog.body
  );
}

if (!existsSync(sourcePath)) {
  console.log("Math contest sync skipped: the iCloud note is unavailable.");
  process.exit(0);
}

if (!existsSync(blogPath)) {
  throw new Error(`Blog article not found: ${blogPath}`);
}

const source = readMarkdown(sourcePath);
const blog = readMarkdown(blogPath);
const sourceHash = hash(source.body);
const blogHash = hash(blog.body);
const command = process.argv[2];

if (command === "--merge") {
  const baseBody = existsSync(basePath)
    ? readFileSync(basePath, "utf8")
    : readMarkdownContent(
        execFileSync(
          "git",
          ["show", "HEAD:src/content/posts/math_contest/math-contest.md"],
          { encoding: "utf8" }
        ),
        "committed blog article"
      ).body;
  const temporaryDirectory = mkdtempSync(
    path.join(tmpdir(), "math-contest-sync-")
  );
  const blogBodyPath = path.join(temporaryDirectory, "blog.md");
  const baseBodyPath = path.join(temporaryDirectory, "base.md");
  const sourceBodyPath = path.join(temporaryDirectory, "icloud.md");

  try {
    writeFileSync(blogBodyPath, blog.body, "utf8");
    writeFileSync(baseBodyPath, baseBody, "utf8");
    writeFileSync(sourceBodyPath, source.body, "utf8");

    const mergedBody = execFileSync(
      "git",
      [
        "merge-file",
        "--stdout",
        "--ours",
        blogBodyPath,
        baseBodyPath,
        sourceBodyPath,
      ],
      { encoding: "utf8" }
    );

    backupFiles("before-merge");
    writeMarkdown(sourcePath, source.frontmatter, mergedBody);
    writeMarkdown(blogPath, blog.frontmatter, mergedBody);
    saveState(mergedBody);
    console.log(
      "Merged both files. Conflicts favored the current blog edits; backups were saved in .math-contest-sync-backup."
    );
  } finally {
    rmSync(temporaryDirectory, { recursive: true, force: true });
  }

  process.exit(0);
}

if (command === "--use-source") {
  backupFiles("before-use-source");
  writeMarkdown(blogPath, blog.frontmatter, source.body);
  saveState(source.body);
  console.log("Copied the iCloud note body to the blog article.");
  process.exit(0);
}

if (command === "--use-blog") {
  backupFiles("before-use-blog");
  writeMarkdown(sourcePath, source.frontmatter, blog.body);
  saveState(blog.body);
  console.log("Copied the blog article body to the iCloud note.");
  process.exit(0);
}

if (!existsSync(statePath)) {
  if (sourceHash !== blogHash) {
    throw new Error(
      [
        "The files differ and synchronization has not been initialized.",
        "Merge their bodies first, then run pnpm sync:math-contest.",
        "Alternatively, choose one version explicitly with --use-source or --use-blog.",
      ].join("\n")
    );
  }

  saveState(source.body);
  console.log("Math contest sync initialized.");
  if (command !== "--dev" && command !== "--watch") {
    process.exit(0);
  }
}

const { bodyHash: previousHash } = JSON.parse(readFileSync(statePath, "utf8"));
const sourceChanged = sourceHash !== previousHash;
const blogChanged = blogHash !== previousHash;

if (sourceHash === blogHash) {
  saveState(source.body);
  console.log("Math contest files are already synchronized.");
} else if (sourceChanged && blogChanged) {
  throw new Error(
    "Both math contest files changed since the last sync. Run pnpm sync:math-contest --merge to merge them; neither file was overwritten."
  );
} else if (sourceChanged) {
  writeMarkdown(blogPath, blog.frontmatter, source.body);
  saveState(source.body);
  console.log("Copied the updated iCloud note body to the blog article.");
} else if (blogChanged) {
  writeMarkdown(sourcePath, source.frontmatter, blog.body);
  saveState(blog.body);
  console.log("Copied the updated blog article body to the iCloud note.");
}

if (command === "--dev" || command === "--watch") {
  let syncTimer;
  const watchers = [sourcePath, blogPath].map(filePath =>
    watch(path.dirname(filePath), (_event, filename) => {
      if (filename?.toString() !== path.basename(filePath)) return;

      clearTimeout(syncTimer);
      syncTimer = setTimeout(() => {
        try {
          execFileSync(process.execPath, [process.argv[1]], {
            stdio: "inherit",
          });
        } catch {
          console.error("Automatic math contest sync needs attention.");
        }
      }, 300);
    })
  );

  console.log("Watching both math contest files for changes.");

  if (command === "--watch") {
    await new Promise(() => {});
  }

  const astroArguments = process.argv.slice(3);
  if (astroArguments[0] === "--") astroArguments.shift();
  const astro = spawn("pnpm", ["exec", "astro", "dev", ...astroArguments], {
    stdio: "inherit",
  });
  const exitCode = await new Promise(resolve => astro.on("close", resolve));
  watchers.forEach(watcher => watcher.close());
  process.exit(exitCode ?? 0);
}
