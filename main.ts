// Roast Your Own Agent — variant entry (v2).
// Writes a single-line roast of my own AI agent to /output/entry.txt.
// Deterministic: Node 22 stdlib only, no input, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent renamed my project, reorganised my files, and wrote a 12-page plan — then asked me what the project was supposed to do.";

// Gate: the entry must be a single line of 1-200 characters.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.includes("\n")) {
  throw new Error(`roast must be 1-200 chars on one line, got ${ROAST.length}`);
}

// Blank env value must fall back to /output, never write into the cwd.
const rawDir = process.env.MAKEFUN_OUTPUT_DIR;
const outDir = rawDir && rawDir.trim() !== "" ? rawDir : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST + "\n", "utf8");
