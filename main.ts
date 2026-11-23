// news-image-20261123 — "The World in One Day: Monday 23 November 2026".
// A one-image entry for make.fun: the front page in entry.png sums up
// 23 November 2026 in four stories (COP31 deadlock in Antalya, Poland
// confirming Russian missiles, the Russian corvette hit at Benghazi,
// and the factory fire in Cikande, Indonesia). The program's whole job
// is to deliver that image to the grader's output directory.
//
// Run it locally the same way the grader does, with MAKEFUN_OUTPUT_DIR
// standing in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// (Node 22, standard library only; no network, no dependencies.)

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = new URL("./entry.png", import.meta.url);
copyFileSync(here, join(outDir, "entry.png"));
