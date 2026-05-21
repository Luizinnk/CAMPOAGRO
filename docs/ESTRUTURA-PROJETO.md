# Estrutura do projeto CampoAgro

Referência do que está **ativo** na landing (maio 2026). Use este arquivo como fonte única de verdade para rotas, seções e onde editar conteúdo.

## Rotas

| Rota | Arquivo | Função |
|------|---------|--------|
| `/` | `app/page.tsx` → `HomeLanding.tsx` | Landing completa |
| `/programacao` | `app/programacao/page.tsx` | Redireciona para `/#programacao` |
| `/privacidade` | `app/privacidade/page.tsx` | Política LGPD |
| `/api/leads/expositor` | `app/api/leads/expositor/route.ts` | POST do formulário (expositor / patrocinador / ingresso) |

## Landing — ordem no `<main>`

Definida em `app/_components/HomeLanding.tsx`:

| # | Componente | Âncora | Notas |
|---|--------------|--------|--------|
| 1 | `HeroSection` | `#home` | `HeroCountdown`, `HeroButtons`, `HeroParticles`; imagem `banner15.png` |
| 2 | `SobreSection` | `#sobre` | Texto + estatísticas animadas |
| 3 | `AttractionsSection` | `#atracoes` | Cards com `ImageExperienceCard` + `InfoModal` (fotos Pexels) |
| 4 | `AreasSection` | `#areas` | `EventAreaCard` + modais |
| 5 | `ProgramacaoSection` | `#programacao` | Abas sexta / sábado / domingo |
| 6 | `ExpositoresSection` | `#expositores` | `ExpositoresForm` + `POST /api/leads/expositor` |
| 7 | `MemoriasSection` | `#memorias` | Galeria 2023 (CDN) e 2025 (`tratoraco-2025/`) |
| 8 | `PatrocinadoresSection` | `#patrocinadores` | Faixa de logos |

Fora do `<main>`: `LoadingOverlay`, `WhatsAppFloat`, `Navbar`, `SiteFooter`, `RevealOnScroll`.

### Navbar (`#navbar`)

Links com hash: `#sobre`, `#atracoes`, `#areas`, `#expositores`, `#memorias` + Instagram.

### Adiar (não está na home)

| Recurso | Motivo |
|---------|--------|
| Seção de **shows / artistas** | Sem contrato assinado — sem nomes, fotos ou vídeos de cantores |
| `public/mapa-campoagro.html` | Mapa interativo existe como HTML estático; reintegrar quando houver seção `#mapa` na landing |

## Componentes auxiliares (`app/_components/home/`)

| Arquivo | Uso |
|---------|-----|
| `SectionHeader.tsx` | Cabeçalho de seção reutilizável |
| `ImageExperienceCard.tsx` | Card de atração com `next/image` |
| `InfoModal.tsx` | Modal “Ver mais” das atrações e áreas |
| `EventAreaCard.tsx` | Card da grade de áreas |
| `InterestPicker.tsx` | Tipo de interesse no formulário |
| `countdown-utils.ts` | Lógica da contagem regressiva |

## CSS

Entrada: `app/layout.tsx` → `app/globals.css`:

```
public/css/styles.css          → base legacy
public/css/premium.css         → tema premium
app/etapa4-performance.css     → hero, blur, reduced-motion
app/campoagro-standard.css     → overrides finais
app/cookie-banner.css          → banner LGPD
```

A UI usa classes legacy (`.hero`, `.container`, …), não utilitários Tailwind nos TSX. Em conflito de estilo, o último import em `globals.css` prevalece.

## Imagens (`public/img/`)

| Uso | Onde configurar |
|-----|-----------------|
| Hero | `HeroSection.tsx` → `banner15.png` |
| Atrações | `AttractionsSection.tsx` → URLs Pexels (`next.config.mjs`) |
| Marca / patrocínios | `logo-campoagro.png`, `campoagro-patrocinadores.png` |
| Memórias 2025 | `MemoriasSection.tsx` → `tratoraco-2025/*.JPG` |
| Memórias 2023 | `MemoriasSection.tsx` → CDN `ecrie.com.br` |

Validar ficheiros locais: `npm run check:images`.

## Backend de leads (`lib/leads/`)

| Ficheiro | Papel |
|----------|--------|
| `config.ts` | Env (WhatsApp, e-mail, demo) |
| `validation.ts` | Validação do formulário |
| `persist-lead.ts` | Orquestra persistência |
| `google-sheets.ts` / `google-credentials.ts` | Planilha (produção) |
| `demo-store.ts` | JSON em `data/` (dev) |
| `email.ts` / `whatsapp.ts` | Notificações |

Variáveis: `.env.example` → `.env.local`.

## Scripts

| Comando | Script |
|---------|--------|
| `npm run check:images` | `scripts/check-images.mjs` |
| `npm run smoke:home` | `scripts/smoke-home.mjs` (nav + lightbox `#memorias`) |
| `npm run optimize:hero` | `scripts/optimize-hero.mjs` (requer `sharp` — gera `banner15.webp`) |
| `npm run lighthouse:baseline` | Lighthouse + `scripts/lighthouse-summary.mjs` → `docs/lighthouse-baseline.md` |

## Performance (implementado)

- Fontes via `next/font` (`app/fonts.ts`) — sem stylesheet bloqueante do Google Fonts
- Overlay de loading: máx. ~1,4 s na 1ª visita; omitido na mesma sessão (`sessionStorage`)
- Hero: `next/image` com `quality={72}`; partículas adiadas (`requestIdleCallback`)
- Seções importadas estaticamente em `HomeLanding.tsx` (hidratação e reveals sincronizados)
- Galeria: ano padrão **2025** (local); modal em lotes de 24 fotos; `next/image` + CDN `ecrie.com.br` no `next.config`

## Outros docs

| Ficheiro | Conteúdo |
|----------|----------|
| `docs/analytics-guide.md` | Clarity para a organização |
| `docs/lighthouse-baseline.md` | Métricas de performance (baseline) |

## Cliente (`"use client"`)

`LoadingOverlay`, `Navbar`, `RevealOnScroll`, `HeroCountdown`, `HeroParticles`, `HeroButtons`, `SobreSection`, `AttractionsSection`, `AreasSection`, `ProgramacaoSection`, `ExpositoresForm`, `MemoriasSection`, `CookieBanner`, `ClarityScript`, `TrackLink`.

`HeroSection`, `ExpositoresSection`, `PatrocinadoresSection`, `SiteFooter`, `WhatsAppFloat` — Server Components (importam clientes onde necessário).
