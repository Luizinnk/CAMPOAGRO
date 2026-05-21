/**
 * Gera WebP do banner do hero (reduz LCP).
 * Uso: npm install --save-dev sharp && npm run optimize:hero
 */
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const input = join(root, 'public/img/banner15.png');
const output = join(root, 'public/img/banner15.webp');

async function main() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch {
    console.error('Instale sharp: npm install --save-dev sharp');
    process.exit(1);
  }

  if (!existsSync(input)) {
    console.error('Arquivo não encontrado:', input);
    process.exit(1);
  }

  await sharp(input)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(output);

  console.log('OK:', output);
  console.log('Atualize HeroSection.tsx para src="/img/banner15.webp" quando validar visualmente.');
}

main();
