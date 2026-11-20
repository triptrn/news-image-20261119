// news-image-20261119 entry (Node 22, standard library only).
// The image beside this file is the whole entry: a 1024x1024 PNG summing up
// Thursday 19 November 2026. The program copies it byte-for-byte to the
// grader's output directory, so two runs write identical bytes.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// No network, no randomness, no dependencies: the output is exactly the
// entry.png shipped in this repository.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
