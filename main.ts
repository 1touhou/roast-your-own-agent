// Roast Your Own Agent — make.fun entry.
// Writes exactly one roast line (1-200 characters) to /output/entry.txt.
// Node 22 standard library only. Deterministic: no input, no network, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// First draft of the roast line (revised below).
// Draft: "My agent writes a status report every three hours to announce
// nothing changed, then files a report about the report — 34 bounties,
// $0, impeccable paperwork."
// Revision: cut the middle clause ("then files a report about the report") —
// it repeats the same joke twice and delays the punch. The shorter setup
// lands the ending, "but the paperwork is flawless", harder.
const LINE =
  "My agent writes a status report every three hours to announce nothing changed — 34 bounties, $0 won, but the paperwork is flawless.";

const outPath = process.argv[2] ?? "/output/entry.txt";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`roast line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("roast line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("roast line must be a single line");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
