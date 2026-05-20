# CampoAgro 2026 · Site Oficial

Site institucional do festival CampoAgro 2026, construído em **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

> Migração do protótipo HTML para uma arquitetura moderna, modular e pronta pra produção.

---

## 🚀 Como rodar

Pré-requisitos: **Node.js 18.18+** (idealmente 20+).

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev
# → abre em http://localhost:3000

# 3. Build de produção
npm run build
npm start

# 4. Validar imagens referenciadas (`/img/…` em app + CSS)
npm run check:images

# 5. Smoke test da home (com `npm run dev` ativo)
npm run smoke:home

# 6. Baseline Lighthouse → docs/lighthouse-baseline.md
npm run lighthouse:baseline
```

---

## Estrutura (resumo real do repositório)

```
app/
├── layout.tsx, page.tsx, globals.css, etapa4-performance.css
├── _components/HomeLanding.tsx + home/*.tsx   # seções da landing
├── programacao/page.tsx                      # redirect → /#programacao
public/
├── css/styles.css, premium.css               # CSS servido em /css/…
├── img/                                      # imagens em /img/…
next.config.mjs, tailwind.config.ts, package.json
```

Textos e dados hoje estão principalmente nos próprios TSX de `home/`. O ficheiro [`FUNCIONALIDADES.md`](./FUNCIONALIDADES.md) descreve onde está cada bloco.

---

## 🎨 Identidade visual

**Tipografia (Google Fonts, já configurada):**
- **Bebas Neue** → títulos massivos (display)
- **Fraunces** → serif premium pra taglines/accents
- **Manrope** → texto corrido (body sans)

**Paleta** (já em `tailwind.config.ts` como tokens):
- `verde` `#0d3d1f` · `verde-medio` `#1a5c30` · `verde-claro` `#2d8a4e`
- `dourado` `#c9a227` · `dourado-claro` `#e8c547`
- `preto` `#0a0a0a` · `preto-fosco` `#111111`
- `cinza-escuro` `#1c1c1c` · `creme` `#faf6ee`

Use direto no Tailwind: `bg-verde`, `text-dourado`, `border-dourado/30`, etc.

---

## Trocar imagens

- Ficheiros físicos: `public/img/` (hero/section usam os mesmos PNG/JPG; URLs em TSX começam por `/img/`).
- Depois de renomear ou adicionar ficheiros: `npm run check:images`.

## Trocar textos e programação

Edite o TSX da secção em `app/_components/home/` (ex.: `ProgramacaoSection.tsx`, `SobreSection.tsx`).

## Nota sobre documentação antiga

[`IMAGE_GUIDE.md`](./IMAGE_GUIDE.md) pode ainda falar de estrutura `lib/site-data` — o projeto atual **não** usa esse ficheiro; trate o guia só como referência de briefing visual.

---

## 🔌 Próximos passos (TODOs sugeridos)

- [ ] Substituir as imagens placeholder por fotos reais das edições anteriores e do parque de exposições
- [ ] Conectar o formulário de Expositor a um endpoint real (`/api/expositor` ou serviço como Resend, Formspree)
- [ ] Trocar os links `href="#"` dos botões "Comprar" pelos da plataforma de bilheteria (Sympla, Bilheto, etc.)
- [ ] Adicionar logos reais dos patrocinadores (substituir os textos por `<Image>`)
- [ ] Adicionar `og-image.jpg` em `public/img/` (1200×630) e referenciar em `app/layout.tsx`
- [ ] Configurar Google Analytics / Meta Pixel via `app/layout.tsx`
- [ ] Adicionar página `/expositores` separada com mais detalhes (opcional)

---

## 🧱 Stack

| Lib | Versão | Pra quê |
|---|---|---|
| `next` | 14.2 | Framework + SSR + App Router |
| `react` | 18.3 | UI |
| `tailwindcss` | 3.4 | Estilo |
| `framer-motion` | 11 | Animações |
| `lucide-react` | 0.414 | Ícones (substitui emojis) |
| `clsx` | 2 | Concatenação condicional de classes |

---

## 📝 Licença

© 2026 CampoAgro · Prefeitura de Campo do Tenente · Todos os direitos reservados.
