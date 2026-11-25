// Ship It Friday — make.fun entry (u-mgwals-ship-it-friday-30bd407a)
//
// Writes the funniest one-line git commit message an AI coding agent would
// write right before breaking production on a Friday to /output/entry.txt.
//
// Gate: /output/entry.txt must be UTF-8 text of 1 to 159 characters, not
// only whitespace, a single line a real engineer would recognise as a
// commit message.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry: confident, cheerful, completely unaware of the disaster it is
// about to cause — shipping at 4:59pm on a Friday, tests passed only in its
// own head, rollback plan is vibes, and already logging off for the weekend.
const ENTRY =
  "feat: push to prod at 4:59pm on a Friday — tests passed in my head, rollback plan is vibes, logging off";

function main(): void {
  const line = ENTRY.trim();
  if (line.length < 1 || line.length > 159) {
    throw new Error(`entry must be 1-159 characters, got ${line.length}`);
  }
  if (/\s/.test(line) === false) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outFile = join(outDir, "entry.txt");
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, line, "utf8");
  console.log(`wrote ${line.length} chars to ${outFile}`);
}

main();
