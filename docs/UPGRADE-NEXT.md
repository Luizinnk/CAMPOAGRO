# Next.js — versão e upgrades

## Versão atual

- **Produção:** `next@14.2.35` (patch da linha 14.2, alinhado a `eslint-config-next`)
- Atualizado em maio/2026 a partir de `14.2.5` para corrigir CVEs conhecidas da série 14.2 sem mudar major.

## Verificação após bump de patch

```bash
npm install
npm run build
npm run check:images
npm run smoke:home   # servidor em http://localhost:3000
```

## Próximo passo (quando houver janela)

| Etapa | Ação | Risco |
|-------|------|--------|
| 1 | Manter `14.2.x` no último patch (`npm view next@14 version`) | Baixo |
| 2 | Migrar para **Next 15** com [guia oficial](https://nextjs.org/docs/app/building-your-application/upgrading/version-15) | Médio (React 19, APIs async) |
| 3 | Revisar `npm audit` e dependências de dev (`glob`, etc.) | Baixo em runtime |

Não subir para Next 15 neste projeto sem rodar build + smoke + teste manual do formulário de leads e da galeria de memórias.
