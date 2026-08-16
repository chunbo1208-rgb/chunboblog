import { execFileSync } from "node:child_process";
import {
  existsSync,
  readdirSync,
  readFileSync,
  renameSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { basename, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const postsRoot = join(root, "src/content/posts");

function markdownFiles(directory) {
  return readdirSync(directory).flatMap(name => {
    const path = join(directory, name);
    if (name === "_previous") return [];
    if (statSync(path).isDirectory()) return markdownFiles(path);
    return /\.mdx?$/.test(name) ? [path] : [];
  });
}

function frontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const values = {};
  for (const line of match[1].split(/\r?\n/)) {
    const property = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
    if (property) values[property[1]] = property[2].replace(/^['"]|['"]$/g, "").trim();
  }
  return { block: match[1], values };
}

function git(...args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

const ready = markdownFiles(postsRoot).filter(path => {
  const metadata = frontmatter(readFileSync(path, "utf8"));
  return metadata?.values.publishStatus === "ready";
});
const stranded = markdownFiles(join(postsRoot, "_drafts")).filter(path => {
  const metadata = frontmatter(readFileSync(path, "utf8"));
  return metadata?.values.publishStatus === "published";
});

const ahead = Number(git("rev-list", "--count", "origin/main..HEAD"));
if (ahead > 0) git("push", "origin", "main");
if (ready.length === 0 && stranded.length === 0) process.exit(0);

const now = new Date().toISOString();
const titles = [];

for (const path of ready) {
  const source = readFileSync(path, "utf8");
  const metadata = frontmatter(source);
  const required = ["author", "title", "description", "pubDatetime", "tags"];
  const missing = required.filter(key => !metadata.values[key] && !(key === "tags" && /^tags:\s*\n\s*-\s*\S+/m.test(metadata.block)));

  if (missing.length) throw new Error(`${relative(root, path)} is missing: ${missing.join(", ")}`);
  if (Number.isNaN(Date.parse(metadata.values.pubDatetime))) throw new Error(`${relative(root, path)} has an invalid pubDatetime`);

  let block = metadata.block
    .replace(/^publishStatus:.*$/m, "publishStatus: published")
    .replace(/^modDatetime:.*$/m, `modDatetime: ${now}`);

  if (/^draft:/m.test(block)) block = block.replace(/^draft:.*$/m, "draft: false");
  else block += "\ndraft: false";

  writeFileSync(path, source.replace(metadata.block, block));
  titles.push(metadata.values.title);
}

const sourcePaths = [...ready, ...stranded];
const publishedPaths = sourcePaths.map(path => {
  if (!path.startsWith(join(postsRoot, "_drafts") + "/")) return path;

  const extension = extname(path);
  const slug = basename(path, extension)
    .normalize("NFKD")
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  const destination = join(postsRoot, `${slug || "post"}${extension}`);
  if (existsSync(destination)) throw new Error(`${relative(root, destination)} already exists`);
  renameSync(path, destination);
  return destination;
});

for (const path of stranded) {
  titles.push(frontmatter(readFileSync(publishedPaths[sourcePaths.indexOf(path)], "utf8")).values.title);
}

const paths = [...sourcePaths, ...publishedPaths].map(path => relative(root, path));
git("add", "-A", "--", ...paths);
git("commit", "-m", `publish: ${titles.join(", ")}`, "--", ...paths);

try {
  git("push", "origin", "main");
} catch {
  throw new Error("GitHub push failed. The commit is saved locally; run Publish ready posts again after fixing Git authentication.");
}
