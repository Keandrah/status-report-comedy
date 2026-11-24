import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const output = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(output, { recursive: true });
writeFileSync(join(output, 'entry.txt'), 'Weekly status: I fixed the bug; the regression test found another. I promoted it to project manager. It has put me on a performance plan.');
