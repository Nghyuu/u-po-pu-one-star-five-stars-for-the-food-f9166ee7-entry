import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const sentence =
  "One star: the gravity kept dropping me, the locals screamed at the weather, but the flat cheese circles were so glorious I nearly missed my departure beam.";

if (sentence.length > 200) {
  throw new Error(`entry is ${sentence.length} chars, over the 200-char limit`);
}
if (sentence.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, sentence + "\n", "utf8");
chmodSync(entryPath, 0o644);
