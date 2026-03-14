import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const TARGET_DIRS = ["src/app", "src/components"];
const EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx"]);
const HEX_REGEX = /#[0-9A-Fa-f]{6}\b/g;

const ALLOWLIST_FILES = new Set([
  path.join("src", "app", "layout.tsx"),
]);

function walk(dir, fileList = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, fileList);
      continue;
    }
    if (EXTENSIONS.has(path.extname(entry.name))) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const violations = [];

for (const relativeDir of TARGET_DIRS) {
  const absoluteDir = path.join(ROOT, relativeDir);
  if (!fs.existsSync(absoluteDir)) continue;

  for (const filePath of walk(absoluteDir)) {
    const relativePath = path.relative(ROOT, filePath);
    if (ALLOWLIST_FILES.has(relativePath)) continue;

    const content = fs.readFileSync(filePath, "utf8");
    const lines = content.split(/\r?\n/);

    lines.forEach((line, index) => {
      const matches = line.match(HEX_REGEX);
      if (!matches) return;
      for (const match of matches) {
        violations.push({
          file: relativePath,
          line: index + 1,
          value: match,
          snippet: line.trim(),
        });
      }
    });
  }
}

if (violations.length > 0) {
  console.error("Raw hex colors detected in app/components. Use semantic tokens instead:\n");
  for (const violation of violations) {
    console.error(`${violation.file}:${violation.line} ${violation.value} -> ${violation.snippet}`);
  }
  process.exit(1);
}

console.log("No raw hex colors found in app/components.");
