# CampoAgro 2026 · Site Oficial

Landing institucional do CampoAgro 2026 em **Next.js 14 (App Router) + TypeScript**, com estilos em CSS legacy (`public/css/` + overrides em `app/`).

## Documentação

| Documento | Conteúdo |
|-----------|----------|
| [`docs/ESTRUTURA-PROJETO.md`](./docs/ESTRUTURA-PROJETO.md) | **Fonte principal** — rotas, seções da home, CSS, imagens, leads, scripts |
| [`docs/analytics-guide.md`](./docs/analytics-guide.md) | Microsoft Clarity (LGPD) |
| [`docs/lighthouse-baseline.md`](./docs/lighthouse-baseline.md) | Baseline de performance |

## Como rodar

Pré-requisitos: **Node.js 18.18+** (idealmente 20+).

```bash
npm install
cp .env.example .env.local   # editar com valores reais
npm run dev                  # http://localhost:3000
npm run build && npm start   # produção local
npm run check:images         # valida /img/ referenciados
npm run smoke:home           # smoke Playwright (dev ativo)
```

## Variáveis de ambiente

Ver [`.env.example`](./.env.example). Principais:

| Variável | Uso |
|----------|-----|
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Clarity (após consentimento) |
| `NEXT_PUBLIC_WHATSAPP_VENDAS` | WhatsApp no float e leads |
| `RESEND_API_KEY` / `LEADS_EMAIL_FROM` | E-mail de confirmação |
| `GOOGLE_SHEETS_SPREADSHEET_ID` / `GOOGLE_SERVICE_ACCOUNT_JSON_PATH` | Planilha de leads |

Sem Sheets/Resend em dev, leads podem ir para `data/leads-demo.json`.

## Estrutura (resumo)

```
app/
├── layout.tsx, page.tsx, globals.css
├── _components/HomeLanding.tsx      # 8 seções no <main>
├── _components/home/*.tsx
├── programacao/page.tsx             # → /#programacao
├── api/leads/expositor/route.ts
lib/leads/
public/css/, public/img/, public/mapa-campoagro.html
scripts/                             # check-images, smoke-home, lighthouse
docs/                                # ESTRUTURA, analytics, lighthouse
```

Detalhe de cada seção e âncora: [`docs/ESTRUTURA-PROJETO.md`](./docs/ESTRUTURA-PROJETO.md).

## Edição rápida

- **Textos / programação** — TSX em `app/_components/home/` (ex.: `ProgramacaoSection.tsx`, `SobreSection.tsx`)
- **Imagens locais** — `public/img/`; depois `npm run check:images`
- **Formulário** — `ExpositoresForm.tsx` → `POST /api/leads/expositor`

## Identidade visual

**Fontes** (`app/layout.tsx`): Bebas Neue, Inter, Barlow, Barlow Condensed.

**Paleta** (CSS + `tailwind.config.ts`): verde escuro, dourado, preto fosco — classes legacy `.hero`, `.section-title`, `.highlight`, etc.

## Deploy

`npm run build` → Vercel ou host Node com variáveis de `.env.example`.

Para métricas fiéis, medir com `npm run build && npm run start` ou preview de produção (dev inflaciona LCP).

## Backlog de produto

- [ ] `npm install -D sharp && npm run optimize:hero` → trocar hero para `banner15.webp`
- [ ] Comprimir fotos `tratoraco-2025/` (WebP em lote)
- [ ] `og-image` em `app/layout.tsx` (1200×630)
- [ ] Fotos reais nas atrações (substituir Pexels)
- [ ] Seção de shows quando contratos de artistas estiverem fechados
- [ ] Reintegrar mapa (`public/mapa-campoagro.html`) na landing, se desejado

**Já em produção no código:** leads (API + Sheets/Resend opcional), Clarity com consentimento, galeria de memórias, programação por dia.

## Analytics

`NEXT_PUBLIC_CLARITY_PROJECT_ID` + guia em [`docs/analytics-guide.md`](./docs/analytics-guide.md).

Eventos customizados: `useClarityTrack()` em `hooks/useClarityTrack.ts`.

## Licença

© 2026 CampoAgro · Prefeitura de Campo do Tenente · Todos os direitos reservados.
