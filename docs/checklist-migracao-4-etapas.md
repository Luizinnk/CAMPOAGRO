# Checklist — migração Next (4 etapas)

Referência de arquivos atuais relevantes:

| Caminho | Papel |
|---------|--------|
| `app/page.tsx` | Rota `/` — apenas `<HomeLanding />` (sem `<Script>`) |
| `app/layout.tsx` | Shell (`html`/`body`, metadata, fonts, `globals.css`) |
| `app/globals.css` | Importa styles + premium + **etapa4-performance.css** |
| `app/etapa4-performance.css` | Hero sem PNG duplicado no BG, blur mais leve, `prefers-reduced-motion`, notícia destaque |
| `app/_components/HomeLanding.tsx` | Orquestra as seções em `home/*.tsx` |
| `app/_components/home/` | Um TSX por seção da landing (Etapa 2) |
| `public/css/styles.css` | Estilos base (URLs relativas `../img/…`) |
| `public/css/premium.css` | Estilos premium |
| `public/img/` | Imagens estáticas (`tratoraco/` incluído) |
| `next.config.mjs` | `images.remotePatterns` (hoje focado em URLs remotas) |
| `tailwind.config.ts` / `postcss.config.js` | Tailwind (pouco usado nas rotas `app/` hoje) |
| `package.json` | Scripts `dev`, `build`, `lint`, `check:images` → `scripts/check-images.mjs` |

Use os checkboxes abaixo conforme for concluindo cada item.

---

## Etapa 1 — Documento único (sem iframe)

**Meta:** `/` renderiza uma árvore React/Next só, sem `iframe`/`srcDoc`.

**Estratégia aplicada:** (A) markup espelhado em TSX desde já (`HomeLanding.tsx`).

- [x] Definir estratégia: (A) markup espelhado em TSX desde já, ou (B) redirect para `index.html` estático **somente** se for política temporária documentada aqui ou no README.
- [x] Alterar `app/page.tsx`: remover `readFileSync` + `iframe` (ou equivalente definido na estratégia).
- [x] Garantir que `lang="pt-BR"` e equivalência SEO: conferir `app/layout.tsx` (`metadata`) vs `<title>` / meta em `public/index.html`.
- [x] Incluir estilos da home no fluxo Next: importar ou `@import` de `styles.css` e `premium.css` (ex.: `app/globals.css` que importa os dois — criar se necessário — e import em `app/layout.tsx`).
- [x] Ajustar caminhos públicos (`/css/`, `/img/` na raíz de `public/`).
- [x] JS vanilla sem `onclick` no React: delegação nas abas (`data-tab`) e listener em `#hamburger` (`navigation.js`).
- [x] Rodar `npm run dev` e `npm run build` sem erros.

**Critério de pronto:** abrir `/` no DevTools → um único documento; não há `#document` aninhado de iframe para a página principal.

**Status:** concluída (landing em `HomeLanding.tsx`; `public/index.html` alinhado para deploy estático).

---

## Etapa 2 — Componentização por seções

**Meta:** composição apenas por imports de seções (`HomeLanding.tsx` delega para `home/*`); `app/page.tsx` permanece focado na rota (ex.: `<Script>` + `<HomeLanding />`).

- [x] Criar pasta `app/_components/home/`.
- [x] Extrair seções para componentes nomeados:
  - [x] `LoadingOverlay.tsx` (`#loading`)
  - [x] `WhatsAppFloat.tsx`
  - [x] `Navbar.tsx` (`#navbar`)
  - [x] `HeroSection.tsx` (`#home`)
  - [x] `CountdownSection.tsx` (`#cd-*`)
  - [x] `SobreSection.tsx` (`#sobre`)
  - [x] `NumbersSection.tsx` (`#numeros`)
  - [x] `ProgramacaoSection.tsx` (`#programacao`)
  - [x] `AreasSection.tsx` (`#areas`)
  - [x] `MemoriasSection.tsx` (`#memorias`)
  - [x] `TratoracoSection.tsx` (`#tratoraco`)
  - [x] `PatrocinadoresSection.tsx` (`#patrocinadores`)
  - [x] `ExpositoresSection.tsx` (`#expositores` + formulário)
  - [x] `MapaSection.tsx` (`#mapa`)
  - [x] `NoticiasSection.tsx` (`#noticias`)
  - [x] `SiteFooter.tsx`
  - [x] Modal de mídia integrado em `MemoriasSection.tsx` (portal em `document.body`)
- [x] Prioridade de edição: TSX em `app/_components/`; `public/index.html` só para espelho estático — evitar divergência.
- [x] Anchors `id=""` preservados.
- [x] Smoke test: `npm run smoke:home` (nav mobile + hash, carrosséis em `#shows`, galeria/modal em `#memorias`). Ver `scripts/smoke-home.mjs`.

**Critério de pronto:** `HomeLanding.tsx` só importa e ordena seções; cada seção em arquivo dedicado em `home/`.

**Status:** estrutura concluída; validar comportamento no browser (checkbox acima).

---

## Etapa 3 — Interatividade em React (`"use client"`)

**Meta:** comportamentos antigos dos módulos JS (removidos) replicados em Client Components (`app/_components/home/*`).

- [x] Loading: `LoadingOverlay.tsx` (`load` + timeout, classe `hidden`).
- [x] Navegação: `Navbar.tsx` (scroll `scrolled`, `menu-open`, spy de seção, hash + `scrollIntoView` suave).
- [x] Programação: `ProgramacaoSection.tsx` (`useState` nas abas).
- [x] Countdown: `CountdownSection.tsx` (`setInterval` + cleanup; zera e limpa após o horário do evento).
- [x] Reveal: `RevealOnScroll.tsx` (`IntersectionObserver`, desconecta no unmount).
- [x] Galeria / modal: `MemoriasSection.tsx` (estado + `createPortal`; overlay, Escape, lock de scroll).
- [x] Partículas: `HeroParticles.tsx` (só cliente; desliga com `prefers-reduced-motion`).
- [x] `prefers-reduced-motion` aplicado às partículas.
- [x] Removido `next/script` / `main.js` de `app/page.tsx`.

**Critério de pronto:** interações na rota `/` só com bundle Next.

**Nota:** Espelho estático `public/index.html` + `public/assets/js/` foi removido na consolidação de `public/` (ver Etapa 4 / nota final).

**Status:** concluída para a app Next.

---

## Etapa 4 — Performance e produção

**Meta:** aliviar GPU/rede; alinhar com Next.

- [x] **`next/image`** na home: hero (`priority` + `sizes`), logos (nav/loading/footer), editorial (`fill`), carrossel Tratoraço, faixa de patrocinadores, galeria (`fill`), modal da galeria, card de notícia em destaque (`fill`).
- [x] **Hero:** foto principal via `<Image fill>` + `.hero-bg` só com gradientes (sem URL duplicada do PNG em CSS — ver `app/etapa4-performance.css`).
- [x] **Notícia em destaque:** classe `news-card-featured--optimized` + camada `<Image>`; remove background-image pesado no CSS para esse card.
- [x] **`scripts/check-images.mjs`** — referências `/img/…` e `url(../img/…)` em CSS; `npm run check:images`.
- [x] **Backdrop/blur:** valores mais baixos nos cards repetidos, modal e elementos-chave (mantém vidro, menos custo na GPU).
- [x] **`prefers-reduced-motion`:** hero drift, sponsors, WhatsApp, loading bar, scroll cue, partículas (complementa `HeroParticles`).
- [x] **Lighthouse / métricas:** baseline em `docs/lighthouse-baseline.md` (2026-05-20, dev local). Regenerar: `npm run lighthouse:baseline` com `npm run dev` ativo.
- [ ] **README** ampliado no repo (opcional); fluxo mínimo já está neste checklist.

**Critério de pronto:** assets servidos pelo otimizador do Next onde aplicável; menos blur/agitação por defeito e com respeito à preferência do utilizador.

**Nota:** PNG/JPG em `public/img/`; Next pode servir WebP/AVIF no pedido.

**Consolidação `public/`:** `public/assets/{css,img}` fundiu-se em `public/css` e `public/img`; removidos `index.html`, pasta `js/` e `server.mjs` (servidor estático legado).

**Status:** concluída para o âmbito definido acima.

---

## Ordem rápida (dependência)

Etapa **1 → 2 → 3 → 4** (não pule a 1 antes de aumentar JSX na home).

Etapa 4 pode começar **parcialmente** antes (ex.: otimização de PNGs), desde que paths em `app/` e CSS usem `public/img` consistentemente.

---

*Gerado para o repositório `CAMPOAGRO` com base na estrutura atual.*
