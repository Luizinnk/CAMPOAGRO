# Lighthouse — baseline (home `/`)

Gerado em **2026-05-21T21:51:21.877Z** · Lighthouse **11.7.1** · URL: `http://localhost:3000/`

> Ambiente: `npm run dev` local. Perfil padrão Lighthouse (mobile emulado). Reproduzir com `npm run lighthouse:baseline` (servidor ativo) e depois `node scripts/lighthouse-summary.mjs`.

## Pontuações por categoria

- **performance:** 80
- **accessibility:** 89
- **best-practices:** 100
- **seo:** 92
- **pwa:** 38

## Métricas principais

- **first-contentful-paint:** 2.1 s
- **largest-contentful-paint:** 4.4 s
- **total-blocking-time:** 10 ms
- **cumulative-layout-shift:** 0
- **speed-index:** 4.6 s
- **interactive:** 3.9 s

## Notas

- **Performance** em dev costuma ser baixa (LCP alto, hero/galeria pesados, HMR). Comparar de preferência com `npm run build && npm run start` ou deploy de preview.
- **PWA** não é meta deste site; pode ignorar.
- Artefato bruto (opcional, não versionado): `docs/lighthouse-baseline.json`.
