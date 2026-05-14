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

# 4. Validar URLs de imagens (após editar lib/site-data.ts)
npm run check:images
```

---

## 📁 Estrutura do projeto

```
campoagro-2026/
├── app/
│   ├── layout.tsx          # Fontes, metadata SEO, root layout
│   ├── page.tsx            # Composição da home (todas as seções)
│   └── globals.css         # Tokens, reset, utilitários
├── components/             # 14 componentes, um por seção
│   ├── Hero.tsx
│   ├── Countdown.tsx
│   ├── Sobre.tsx
│   ├── Areas.tsx
│   ├── Programacao.tsx
│   ├── Ingressos.tsx
│   ├── Patrocinadores.tsx
│   ├── Galeria.tsx
│   ├── Expositores.tsx
│   ├── Mapa.tsx
│   ├── Noticias.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── LoadingScreen.tsx
│   ├── WhatsappFloat.tsx
│   ├── Reveal.tsx          # Wrapper de animação no scroll
│   └── SectionHeader.tsx   # Título de seção reutilizável
├── lib/
│   └── site-data.ts        # 🎯 TODOS os dados/imagens centralizados
├── public/
│   └── images/             # 📸 fotos reais ficam aqui
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

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

## 📸 Trocando as imagens (o mais importante)

> 📖 **Documento completo**: leia [`IMAGE_GUIDE.md`](./IMAGE_GUIDE.md) — tem o briefing pro fotógrafo, especificação visual de cada slot, e o passo-a-passo de substituição.

**Resumo rápido:**

**Todas** as URLs de imagem do site estão em `lib/site-data.ts`, no objeto `IMAGES`. Hoje apontam para o Unsplash como placeholder temático. Pra trocar pelas fotos reais do CampoAgro:

### Opção A — Fotos locais (recomendado pra produção)

1. Salve as fotos em `public/images/` (ex: `public/images/hero.jpg`)
2. Em `lib/site-data.ts`, troque a URL:

```ts
export const IMAGES = {
  hero: '/images/hero.jpg',          // ← em vez da URL do Unsplash
  sobre: {
    main: '/images/sobre-main.jpg',
    float: '/images/sobre-float.jpg',
  },
  galeria: [
    { url: '/images/galeria-1.jpg', caption: 'Shows Nacionais', alt: '...' },
    // ...
  ],
};
```

### Opção B — CDN externo

Se as fotos estiverem em S3, Cloudinary ou outro CDN, adicione o domínio em `next.config.mjs`:

```js
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    { protocol: 'https', hostname: 'SEU-CDN.com', pathname: '/**' }, // ← adicione
  ],
}
```

### Tamanhos sugeridos por slot

| Slot | Proporção | Resolução mínima |
|---|---|---|
| Hero | 16:9 ou wide | 1920×1080 |
| Sobre · main | 4:5 (vertical) | 900×1125 |
| Sobre · float | 4:3 | 700×525 |
| Galeria · destaque | 4:3 | 1200×900 |
| Galeria · demais | 1:1 ou 4:3 | 800×800 |
| Notícia destaque | 16:9 | 1200×675 |
| Notícia mini | 1:1 | 200×200 |

> 💡 O componente `next/image` faz otimização automática (WebP/AVIF, lazy loading, responsivo). Não precisa otimizar antes de subir.

---

## ✏️ Trocando textos, programação, ingressos

Tudo em `lib/site-data.ts`:

- `EVENT_INFO` → nome, telefone, e-mail, redes sociais, endereço
- `EVENT_DATE` → data do evento (afeta o countdown)
- `AREAS` → 10 cards de áreas (ícone, título, descrição)
- `PROGRAMACAO` → 5 dias × N atividades (horário, título, badge)
- `INGRESSOS` → 4 tipos (preço, lista de benefícios, qual é o "featured")
- `PATROCINADORES` → listas de ouro/prata/bronze
- `NOTICIAS` → manchete destaque + 4 mini
- `STATS`, `PILARES`, `MAPA_ZONES`

---

## 🎬 Animações

- **Reveal** (`components/Reveal.tsx`): wrapper Framer Motion que anima entrada de elementos quando entram no viewport. Use `<Reveal direction="left" delay={0.2}>...</Reveal>`.
- **Loading screen**: 2.2s de splash, depois fade-out.
- **Hero**: stagger de entrada (badge → título → tagline → CTAs) + partículas douradas flutuantes.
- **Patrocinadores**: track infinito CSS (pausa no hover).
- **Programação**: tabs com transição via `AnimatePresence`.

Tudo respeita `prefers-reduced-motion`.

---

## 🔌 Próximos passos (TODOs sugeridos)

- [ ] Substituir as imagens placeholder por fotos reais das edições anteriores e do parque de exposições
- [ ] Conectar o formulário de Expositor a um endpoint real (`/api/expositor` ou serviço como Resend, Formspree)
- [ ] Trocar os links `href="#"` dos botões "Comprar" pelos da plataforma de bilheteria (Sympla, Bilheto, etc.)
- [ ] Adicionar logos reais dos patrocinadores (substituir os textos por `<Image>`)
- [ ] Adicionar `og-image.jpg` em `public/` (1200×630) pra compartilhamento em redes
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
