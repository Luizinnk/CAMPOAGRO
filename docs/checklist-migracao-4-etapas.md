# Checklist — migração Next (4 etapas)

Referência de arquivos atuais relevantes:

| Caminho | Papel |
|---------|--------|
| `app/page.tsx` | Rota `/` — apenas `<HomeLanding />` (sem `<Script>`) |
| `app/layout.tsx` | Shell (`html`/`body`, metadata, fonts, `globals.css`) |
| `app/globals.css` | `@import` de `/assets/css/styles.css` e `premium.css` |
| `app/_components/HomeLanding.tsx` | Orquestra as seções em `home/*.tsx` |
| `app/_components/home/` | Um TSX por seção da landing (Etapa 2) |
| `public/index.html` | Opcional hospedagem estática; mantido alinhado; prioridade de edição: TSX |
| `public/assets/css/styles.css` | Estilos base |
| `public/assets/css/premium.css` | Estilos premium (blur, hero, cards) |
| `public/assets/js/main.js` | Orquestra módulos |
| `public/assets/js/modules/loading.js` | Overlay de carregamento |
| `public/assets/js/modules/navigation.js` | Nav / menu |
| `public/assets/js/modules/particles.js` | Partículas do hero |
| `public/assets/js/modules/countdown.js` | Contagem regressiva |
| `public/assets/js/modules/program-tabs.js` | Abas (`data-tab` + delegação em `.prog-tabs`; `window.showTab` mantido) |
| `public/assets/js/modules/reveal.js` | IntersectionObserver + `.reveal` |
| `public/assets/js/modules/memories.js` | Modal da galeria |
| `public/assets/img/` | Imagens (`banner15.png`, `banner2.png`, …) |
| `next.config.mjs` | `images.remotePatterns` (hoje focado em URLs remotas) |
| `tailwind.config.ts` / `postcss.config.js` | Tailwind (pouco usado nas rotas `app/` hoje) |
| `package.json` | Scripts `dev`, `build`, `lint`, `check:images` (este último aponta para `scripts/check-images.mjs` — criar o script se ainda não existir no repo) |

Use os checkboxes abaixo conforme for concluindo cada item.

---

## Etapa 1 — Documento único (sem iframe)

**Meta:** `/` renderiza uma árvore React/Next só, sem `iframe`/`srcDoc`.

**Estratégia aplicada:** (A) markup espelhado em TSX desde já (`HomeLanding.tsx`).

- [x] Definir estratégia: (A) markup espelhado em TSX desde já, ou (B) redirect para `index.html` estático **somente** se for política temporária documentada aqui ou no README.
- [x] Alterar `app/page.tsx`: remover `readFileSync` + `iframe` (ou equivalente definido na estratégia).
- [x] Garantir que `lang="pt-BR"` e equivalência SEO: conferir `app/layout.tsx` (`metadata`) vs `<title>` / meta em `public/index.html`.
- [x] Incluir estilos da home no fluxo Next: importar ou `@import` de `styles.css` e `premium.css` (ex.: `app/globals.css` que importa os dois — criar se necessário — e import em `app/layout.tsx`).
- [x] Ajustar caminhos de assets: de `href="assets/..."` (relativo ao HTML) para `/assets/...` (absoluto a partir de `public/`) onde o JSX exigir.
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
- [ ] Smoke test manual: nav, abas da programação, galeria/modal, scroll (após recarregar o dev server).

**Critério de pronto:** `HomeLanding.tsx` só importa e ordena seções; cada seção em arquivo dedicado em `home/`.

**Status:** estrutura concluída; validar comportamento no browser (checkbox acima).

---

## Etapa 3 — Interatividade em React (`"use client"`)

**Meta:** comportamentos em `public/assets/js/modules/*.js` replicados em Client Components na home Next.

- [x] Loading: `LoadingOverlay.tsx` (`load` + timeout, classe `hidden`).
- [x] Navegação: `Navbar.tsx` (scroll `scrolled`, `menu-open`, spy de seção, hash + `scrollIntoView` suave).
- [x] Programação: `ProgramacaoSection.tsx` (`useState` nas abas).
- [x] Countdown: `CountdownSection.tsx` (`setInterval` + cleanup; zera e limpa após o horário do evento).
- [x] Reveal: `RevealOnScroll.tsx` (`IntersectionObserver`, desconecta no unmount).
- [x] Galeria / modal: `MemoriasSection.tsx` (estado + `createPortal`; overlay, Escape, lock de scroll).
- [x] Partículas: `HeroParticles.tsx` (só cliente; desliga com `prefers-reduced-motion`).
- [x] `prefers-reduced-motion` aplicado às partículas.
- [x] Removido `next/script` / `main.js` de `app/page.tsx`.
- [x] `public/index.html`: continua com `<script type="module" src="/assets/js/main.js">` para **deploy estático** que não passa pelo Next; a home em `/` não usa mais esses módulos.

**Critério de pronto:** interações na rota `/` só com bundle Next.

**Status:** concluída para a app Next. Módulos em `public/assets/js/` permanecem para `index.html` opcional.

---

## Etapa 4 — Performance e produção

**Meta:** aliviar GPU/rede; alinhar com Next.

- [ ] Imagens grandes: `banner15.png`, `banner2.png`, `luan-pereira-tvz-2024.png` → formatos mais leves (WebP/AVIF) + `next/image` com `sizes` adequados onde fizer sentido.
- [ ] Revisar `public/assets/img/` (e, quando `scripts/check-images.mjs` existir, rodar `npm run check:images`) e corrigir referências quebradas.
- [ ] `next.config.mjs`: revisar `images` (patterns locais vs remotos conforme adoção de `next/image`).
- [ ] Reduzir uso de `backdrop-filter` onde for aceitável trocar por fundo sólido sem perda visual forte.
- [ ] CSS: agrupar animações infinitas; desligar ou suavizar com `prefers-reduced-motion` (hero drift, sponsors, particles, WhatsApp, etc.).
- [ ] Lighthouse / Performance: registrar baseline e meta (LCP, TBT apenas como referência; foco também em comportamento ao rolar GPU).
- [ ] README ou nota neste doc: como rodar `dev`/`build` e onde fica cada seção após a migração.

**Critério de pronto:** peso de imagens aceitável; menos jank perceptível ao rolar/abrir localhost; documentação mínima atualizada.

---

## Ordem rápida (dependência)

Etapa **1 → 2 → 3 → 4** (não pule a 1 antes de aumentar JSX na home).

Etapa 4 pode começar **parcialmente** antes (ex.: otimização de PNGs), desde que não conflite com URLs ainda fixas em HTML antigo — ideal concentrar merge de imagens quando `next/image` ou paths estáveis já estiverem definidos na etapa 2–3.

---

*Gerado para o repositório `CAMPOAGRO` com base na estrutura atual.*
