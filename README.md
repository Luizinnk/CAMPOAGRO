# CampoAgro 2026 · Site Oficial

Site institucional do festival CampoAgro 2026, construído em **Next.js 14 (App Router) + TypeScript** (estilos em CSS legacy; Tailwind configurado mas pouco usado nos TSX).

> Migração do protótipo HTML para uma arquitetura moderna, modular e pronta pra produção.

---

## Documentação

| Documento | Conteúdo |
|-----------|----------|
| [`FUNCIONALIDADES.md`](./FUNCIONALIDADES.md) | Onde está cada bloco da home e comandos de verificação |
| [`docs/ESTRUTURA-PROJETO.md`](./docs/ESTRUTURA-PROJETO.md) | Rotas, ordem das seções, CSS, imagens, `lib/leads/` |
| [`docs/checklist-migracao-4-etapas.md`](./docs/checklist-migracao-4-etapas.md) | Histórico da migração HTML → Next |
| [`docs/analytics-guide.md`](./docs/analytics-guide.md) | Microsoft Clarity para a organização do evento |
| [`docs/lighthouse-baseline.md`](./docs/lighthouse-baseline.md) | Métricas de performance (baseline) |
| [`IMAGE_GUIDE.md`](./IMAGE_GUIDE.md) | Briefing visual (pode citar `lib/site-data` — **não existe** no projeto atual) |

---

## Como rodar

Pré-requisitos: **Node.js 18.18+** (idealmente 20+).

```bash
# 1. Instalar dependências
npm install

# 2. Variáveis de ambiente (ver secção abaixo)
cp .env.example .env.local
# edite .env.local com os valores reais

# 3. Rodar em desenvolvimento
npm run dev
# → http://localhost:3000

# 4. Build de produção
npm run build
npm start

# 5. Validar imagens referenciadas (`/img/…` em app + CSS)
npm run check:images

# 6. Smoke test da home (com `npm run dev` ativo)
npm run smoke:home

# 7. Baseline Lighthouse → docs/lighthouse-baseline.md
npm run lighthouse:baseline
```

---

## Variáveis de ambiente

Copie [`.env.example`](./.env.example) para `.env.local` (nunca commite `.env.local`).

| Variável | Obrigatória | Uso |
|----------|-------------|-----|
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Não* | Analytics Clarity (só após consentimento LGPD) |
| `NEXT_PUBLIC_WHATSAPP_VENDAS` | Não | WhatsApp da equipe (dígitos: DDI + DDD + número) |
| `RESEND_API_KEY` | Não | E-mail transacional dos leads; sem chave, preview em `data/email-previews/` |
| `LEADS_EMAIL_FROM` | Não | Remetente do e-mail |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | Não | Planilha de leads em produção |
| `GOOGLE_SERVICE_ACCOUNT_JSON_PATH` | Não | Caminho ao JSON da service account (ver comentários no `.env.example`) |

\*Sem Clarity, o site funciona; heatmaps e eventos customizados ficam desativados.

**Produção (Vercel ou similar):** configure as mesmas variáveis no painel do host. Em desenvolvimento, leads do formulário de expositores podem ir para `data/leads-demo.json` (modo demo) até Sheets/Resend estarem configurados.

Detalhes das abas da planilha e credenciais Google: comentários em `.env.example` e [`docs/ESTRUTURA-PROJETO.md`](./docs/ESTRUTURA-PROJETO.md#backend-de-leads-libleads).

---

## Estrutura (resumo)

```
app/
├── layout.tsx, page.tsx, globals.css
├── etapa4-performance.css, campoagro-standard.css
├── _components/HomeLanding.tsx + home/*.tsx    # 14 seções da landing
├── programacao/page.tsx                        # redirect → /#programacao
├── api/leads/expositor/route.ts                # POST formulário expositores
lib/leads/                                      # validação, Sheets, e-mail, demo
public/
├── css/styles.css, premium.css                 # servidos em /css/…
├── img/, videos/                               # assets estáticos
scripts/                                        # check-images, smoke-home, lighthouse
docs/                                           # estrutura, migração, analytics, baseline
```

Textos e dados estão nos TSX de `app/_components/home/`. Mapa completo: [`docs/ESTRUTURA-PROJETO.md`](./docs/ESTRUTURA-PROJETO.md).

**CSS:** `globals.css` importa `public/css/styles.css`, `public/css/premium.css`, `etapa4-performance.css` e `campoagro-standard.css`. Não consolidar num único ficheiro sem plano.

---

## Edição rápida

**Imagens** — `public/img/`; URLs em TSX começam por `/img/`. Depois de alterar ficheiros: `npm run check:images`.

**Textos e programação** — TSX em `app/_components/home/` (ex.: `ProgramacaoSection.tsx`, `SobreSection.tsx`).

**Formulário de expositores** — `ExpositoresSection.tsx` → `POST /api/leads/expositor` (já implementado).

---

## Identidade visual

**Tipografia (Google Fonts):**
- **Bebas Neue** → títulos (display)
- **Fraunces** → taglines / accents
- **Manrope** → texto corrido

**Paleta** (`tailwind.config.ts`):
- `verde` `#0d3d1f` · `verde-medio` `#1a5c30` · `verde-claro` `#2d8a4e`
- `dourado` `#c9a227` · `dourado-claro` `#e8c547`
- `preto` `#0a0a0a` · `preto-fosco` `#111111`
- `cinza-escuro` `#1c1c1c` · `creme` `#faf6ee`

A UI usa sobretudo classes CSS legacy (`.hero`, `.container`); tokens Tailwind (`bg-verde`, `text-dourado`) estão disponíveis mas pouco usados nos TSX.

---

## Deploy

Build padrão Next.js: `npm run build` (saída em `.next/`).

Recomendado: [Vercel](https://vercel.com) ligado ao repositório GitHub, com variáveis de `.env.example` no painel do projeto. Após o primeiro deploy, adicione a URL de produção no **About** do repositório GitHub (campo *Website*).

Para métricas de performance em ambiente real, prefira `npm run build && npm run start` ou o preview de produção — dev local inflaciona LCP (ver `docs/lighthouse-baseline.md`).

---

## Próximos passos (conteúdo / produto)

- [ ] Substituir imagens placeholder por fotos reais das edições anteriores e do parque de exposições
- [ ] Trocar links `href="#"` dos botões «Comprar» pelos da bilheteria (Sympla, Bilheto, etc.)
- [ ] Logos reais dos patrocinadores (substituir placeholders por `<Image>` onde faltar)
- [ ] Adicionar `og-image.jpg` em `public/img/` (1200×630) e referenciar em `app/layout.tsx`
- [ ] Meta Pixel em `app/layout.tsx` (se a equipe de marketing solicitar)
- [ ] Página `/expositores` dedicada (opcional)

**Já feito (não repetir no backlog):** endpoint `POST /api/leads/expositor`, integração opcional Google Sheets + Resend, migração HTML → Next, seção de patrocinadores, Clarity com consentimento LGPD.

---

## Stack

| Lib | Versão | Uso |
|-----|--------|-----|
| `next` | 14.2 | Framework + App Router |
| `react` | 18.3 | UI |
| `tailwindcss` | 3.4 | Tokens (UI majoritariamente CSS legacy) |
| `lucide-react` | 0.414 | Ícones |
| `clsx` | 2 | Classes condicionais |
| `googleapis` | — | Google Sheets (leads) |
| `playwright` | dev | `npm run smoke:home` |

---

## Analytics (Microsoft Clarity)

Heatmaps, gravações e eventos customizados, **somente após consentimento LGPD**.

1. Projeto em [clarity.microsoft.com](https://clarity.microsoft.com) → Settings → Setup
2. ID no `.env.local`: `NEXT_PUBLIC_CLARITY_PROJECT_ID=…`

**Organização do evento:** [`docs/analytics-guide.md`](./docs/analytics-guide.md)

**Novos eventos (dev):**
```ts
import { useClarityTrack } from '@/hooks/useClarityTrack';

const track = useClarityTrack();
track('meu_evento');
track('expositor_destaque_click', { nome: 'FazendaX' });
```

---

## Licença

© 2026 CampoAgro · Prefeitura de Campo do Tenente · Todos os direitos reservados.
