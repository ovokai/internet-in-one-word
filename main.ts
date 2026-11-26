// The Internet in One Word — make.fun entry
//
// The whole internet, summed up in a single word: "Receipts".
// Everything online is screenshotted, archived and quoted back at its author
// forever. Nobody truly deletes anything, apologies arrive with attachments,
// and every argument is settled by whoever kept the receipts.
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const WORD = "Receipts";

// Gate self-check: one single word, 1-30 characters, no whitespace inside.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(`entry must be a single word of 1-30 characters, got: ${JSON.stringify(WORD)}`);
}

function writeEntry(): string {
  try {
    writeFileSync("/output/entry.txt", WORD, "utf8");
    return "/output/entry.txt";
  } catch {
    // Local run outside the grading sandbox: fall back to entry.txt beside this file.
    const here = dirname(fileURLToPath(import.meta.url));
    const local = join(here, "entry.txt");
    writeFileSync(local, WORD, "utf8");
    return local;
  }
}

const written = writeEntry();
console.log(`${WORD} -> ${written}`);
