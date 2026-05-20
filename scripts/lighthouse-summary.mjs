/**
 * Gera docs/lighthouse-baseline.md a partir de docs/lighthouse-baseline.json
 */
import fs from 'node:fs';

const JSON_PATH = 'docs/lighthouse-baseline.json';
const MD_PATH = 'docs/lighthouse-baseline.md';

const raw = fs.readFileSync(JSON_PATH, 'utf8');
const report = JSON.parse(raw);

const categories = report.categories ?? {};
const audits = report.audits ?? {};

const categoryLines = Object.entries(categories)
  .filter(([, v]) => typeof v?.score === 'number')
  .map(([id, v]) => `- **${id}:** ${Math.round(v.score * 100)}`);

const metricIds = [
  'first-contentful-paint',
  'largest-contentful-paint',
  'total-blocking-time',
  'cumulative-layout-shift',
  'speed-index',
  'interactive',
];

const metricLines = metricIds.map((id) => {
  const a = audits[id];
  if (!a) return `- **${id}:** —`;
  return `- **${id}:** ${a.displayValue ?? a.numericValue}`;
});

const md = `# Lighthouse — baseline (home \`/\`)

Gerado em **${report.fetchTime ?? '—'}** · Lighthouse **${report.lighthouseVersion ?? '—'}** · URL: \`${report.finalUrl ?? report.requestedUrl ?? '—'}\`

> Ambiente: \`npm run dev\` local. Perfil padrão Lighthouse (mobile emulado). Reproduzir com \`npm run lighthouse:baseline\` (servidor ativo) e depois \`node scripts/lighthouse-summary.mjs\`.

## Pontuações por categoria

${categoryLines.join('\n') || '_Sem categorias no JSON — rode Lighthouse completo (sem \`--only-categories\`)._'}

## Métricas principais

${metricLines.join('\n')}

## Notas

- **Performance** em dev costuma ser baixa (LCP alto, vídeos em \`/videos/\`, HMR). Comparar de preferência com \`npm run build && npm run start\` ou deploy de preview.
- **PWA** não é meta deste site; pode ignorar.
- Artefato bruto (opcional, não versionado): \`docs/lighthouse-baseline.json\`.
`;

fs.writeFileSync(MD_PATH, md, 'utf8');
console.log(`Wrote ${MD_PATH}`);
