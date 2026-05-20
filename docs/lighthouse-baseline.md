# Lighthouse — baseline (home `/`)

Gerado em **2026-05-20T15:35:58.342Z** · Lighthouse **11.7.1** · URL: `http://localhost:3000/`

> Ambiente: `npm run dev` local. Perfil padrão Lighthouse (mobile emulado). Reproduzir com `npm run lighthouse:baseline` (servidor ativo) e depois `node scripts/lighthouse-summary.mjs`.

## Pontuações por categoria

- **performance:** 46
- **accessibility:** 100
- **best-practices:** 100
- **seo:** 100
- **pwa:** 38

## Métricas principais

- **first-contentful-paint:** 3.0 s
- **largest-contentful-paint:** 11.3 s
- **total-blocking-time:** 570 ms
- **cumulative-layout-shift:** 0.014
- **speed-index:** 12.0 s
- **interactive:** 11.0 s

## Notas

- **Performance** em dev costuma ser baixa (LCP alto, vídeos em `/videos/`, HMR). Comparar de preferência com `npm run build && npm run start` ou deploy de preview.
- **PWA** não é meta deste site; pode ignorar.
- Artefato bruto (opcional, não versionado): `docs/lighthouse-baseline.json`.
