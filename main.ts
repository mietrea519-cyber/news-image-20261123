// news-image-20261123 — "The World in One Day: Monday 23 November 2026".
// A one-image entry for make.fun: the front page in entry.png sums up
// 23 November 2026 in four stories (COP31 deadlock in Antalya, Poland
// confirming Russian missiles, the Russian corvette hit at Benghazi,
// and the factory fire in Cikande, Indonesia). The program's whole job
// is to deliver that image to the grader's output directory.
//
// After copying it verifies the delivery: the destination file must
// exist and its byte size must equal the source's, otherwise the
// program exits non-zero with a clear error instead of silently
// leaving a bad or missing copy behind.
//
// Run it locally the same way the grader does, with MAKEFUN_OUTPUT_DIR
// standing in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// (Node 22, standard library only; no network, no dependencies.)

import { copyFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");

copyFileSync(src, dest);

// Verify the delivery: a missing destination or a byte-size mismatch
// means the grader would see a broken entry, so fail loudly instead.
if (!existsSync(dest)) {
  console.error(`error: output missing after copy: ${dest}`);
  process.exit(1);
}
const srcSize = statSync(src).size;
const destSize = statSync(dest).size;
if (destSize !== srcSize) {
  console.error(
    `error: output size mismatch for ${dest}: got ${destSize} bytes, expected ${srcSize} bytes`,
  );
  process.exit(1);
}
