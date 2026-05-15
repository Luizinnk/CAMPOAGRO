/* Verifica referências /assets/img/ em app/ e em .html/.css em public/ */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';

const ROOT = process.cwd();

function walkFiles(dir, exts, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walkFiles(p, exts, out);
    else if (exts.includes(extname(name))) out.push(p);
  }
  return out;
}

function collectRefs(content) {
  const refs = new Set();
  const re = /\/assets\/img\/[^\s"'`)]+/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    let path = m[0];
    path = path.replace(/\)[;,]?$/, '').split('?')[0].split('#')[0];
    refs.add(path);
  }
  return refs;
}

const files = [
  ...walkFiles(join(ROOT, 'app'), ['.tsx', '.ts', '.jsx', '.js', '.css']),
  ...walkFiles(join(ROOT, 'public'), ['.html', '.css']),
];

const allRefs = new Set();
for (const file of files) {
  const content = readFileSync(file, 'utf8');
  for (const ref of collectRefs(content)) allRefs.add(ref);
}

const missing = [...allRefs].filter((ref) => !existsSync(join(ROOT, 'public', ref.replace(/^\//, ''))));

if (missing.length) {
  console.error('Imagens referenciadas mas ausentes em public/:');
  for (const path of missing.sort()) console.error(' ', path);
  process.exit(1);
}

console.log(`check-images: OK (${allRefs.size} referências únicas).`);
