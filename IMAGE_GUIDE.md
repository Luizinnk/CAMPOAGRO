# 📸 Guia de Imagens — CampoAgro 2026

> Este documento traduz **o que cada foto do site precisa transmitir**, em linguagem prática pra repassar ao fotógrafo, à equipe de marketing ou pra quem for selecionar fotos do acervo da prefeitura/edições anteriores.

Todas as imagens são gerenciadas em **um único lugar**: `lib/site-data.ts`, no objeto `IMAGES`. Trocar qualquer foto é editar uma linha.

---

## 🎯 Estratégia geral

A paleta do site é **verde escuro + dourado + preto**. Fotos com essa atmosfera (hora dourada, contraste alto, sombras profundas, céus crepusculares) **funcionam melhor** do que fotos planas de meio-dia. Fotos com excesso de azul-claro brigam com a identidade.

**Prioridade de fontes (em ordem):**

1. **Acervo da Prefeitura / edições anteriores do CampoAgro** — quando existirem. Nada substitui foto local com público e identidade do evento.
2. **Ensaio encomendado** — drone aéreo do parque de exposições, retratos de produtores da região, máquinas do município. Pra hero e seções premium, vale o investimento.
3. **Banco de imagens** — Unsplash, Pexels, Pixabay. Uso temporário ou pra slots secundários (notícias mini, galeria sobreposta).

> ⚠️ Hoje o site usa **placeholders do Unsplash**. Eles podem expirar ou simplesmente não bater 100% com a identidade. Substituir é o que destrava o "tudo de verdade".

---

## 📋 Especificação por slot

### 🎬 `IMAGES.hero` — Imagem principal de fundo

| | |
|---|---|
| **Onde aparece** | Tela cheia, atrás do título "CAMPOAGRO 2026" |
| **Resolução mínima** | 1920×1080 (recomendado 2400×1350 pra retina) |
| **Proporção** | 16:9 ou wider |
| **Mood** | Épico, dourado, vasto |
| **Conteúdo ideal** | Vista aérea de lavoura ao amanhecer/entardecer · Drone sobrevoando o parque de exposições · Multidão vista de cima na arena de shows · Lavoura de soja/milho no Paraná na hora dourada |
| **Evitar** | Closes faciais (perdem na escala) · Fotos centralizadas demais (o texto fica em cima) · Céus nublados sem contraste |
| **Atenção** | A imagem fica **com overlay escuro pesado em cima** (gradiente preto + tinge de verde). Foto muito escura some; foto muito clara dilui o overlay. Tom **médio-escuro com pontos de luz dourada** funciona perfeito. |

### 🌾 `IMAGES.sobre.main` — Foto vertical do bloco "Sobre"

| | |
|---|---|
| **Resolução mínima** | 900×1125 |
| **Proporção** | 4:5 (vertical) |
| **Conteúdo ideal** | Produtor rural no campo (retrato 3/4) · Mão segurando grãos · Plantação ao entardecer · Vaca/touro premiado em close |
| **Mood** | Humano, terroso, orgulhoso |

### 🚜 `IMAGES.sobre.float` — Foto sobreposta menor

| | |
|---|---|
| **Resolução mínima** | 700×525 |
| **Proporção** | 4:3 |
| **Conteúdo ideal** | Trator em ação · Implemento detalhado · Espiga de milho close · Detalhe de máquina agrícola |
| **Mood** | Tecnológico, máquina, força do agro |

### 🖼 `IMAGES.galeria` — 7 fotos das edições anteriores

A galeria é um mosaico assimétrico — a foto **#1 ocupa o dobro do espaço** (deve ser a melhor), e a #4 é wide.

| # | Caption atual | O que precisa transmitir |
|---|---|---|
| 1 | Shows Nacionais | **Foto-âncora.** Multidão em show, palco iluminado, energia. Tem que dar vontade de ir. |
| 2 | Exposição Animal | Bovino premiado, julgamento, gado em destaque |
| 3 | Máquinas Agrícolas | Trator em exposição, fila de implementos, brilho metálico |
| 4 | Lavouras da Região | Wide, aérea ou panorâmica de plantação. Paisagem. |
| 5 | Gastronomia | Churrasco, prato típico, comida sendo servida no evento |
| 6 | Agricultura Familiar | Pequenos produtores, cooperativa, cesta de produtos coloridos |
| 7 | Premiações | Entrega de troféu, momento de glória, mãos levantadas |

> 💡 **Dica:** Quando subir as fotos reais do CampoAgro, edite `lib/site-data.ts` e também atualize o `caption` e `alt` se quiser textos diferentes.

### 📰 `IMAGES.noticias` — Manchete + 4 miniaturas

- **`destaque`** — 1200×675 (16:9). É a foto grande da seção de notícias. Hoje aponta pra atração musical de abertura: ideal seria foto do artista anunciado ou show grande do agro brasileiro.
- **`mini1` a `mini4`** — 200×200 cada (quadrado). Cada uma ilustra uma manchete pequena: expositores, agropecuária, patrocínio (prefeitura), agricultura familiar.

---

## 🛠 Como substituir (passo a passo)

### Caminho A — Foto local (recomendado pra produção)

1. Coloque os arquivos em `public/images/` (já tem a pasta criada)
   ```
   public/images/
     hero.jpg
     sobre-produtor.jpg
     sobre-trator.jpg
     galeria-shows.jpg
     galeria-bovino.jpg
     ...
   ```
2. Otimize antes (não é obrigatório — o Next/Image faz, mas evita upload pesado):
   - **TinyPNG / Squoosh** pra comprimir
   - Salve em **JPG** (fotos) ou **WebP** (mais eficiente)
   - Largura máxima útil: **2400px** (acima disso é desperdício)

3. Edite `lib/site-data.ts`:
   ```ts
   export const IMAGES = {
     hero: '/images/hero.jpg',
     sobre: {
       main: '/images/sobre-produtor.jpg',
       float: '/images/sobre-trator.jpg',
     },
     galeria: [
       { url: '/images/galeria-shows.jpg', caption: 'Shows Nacionais', alt: 'Multidão em show nacional no CampoAgro 2024' },
       // ...
     ],
     // ...
   };
   ```

### Caminho B — CDN externo (Cloudinary, S3, Bunny)

1. Faça upload pro CDN
2. Adicione o domínio em `next.config.mjs`:
   ```js
   images: {
     remotePatterns: [
       { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
     ],
   }
   ```
3. Cole as URLs full em `lib/site-data.ts`

### Caminho C — Substituir individualmente uma foto Unsplash

Se você só quer trocar UMA imagem Unsplash por outra Unsplash (ex.: a galeria #5 não tá ficando legal):

1. Vá em `unsplash.com` e busque (ex.: "brazilian churrasco")
2. Clique na foto, depois em **Download free**
3. Copie a URL final do CDN (`https://images.unsplash.com/photo-XXX...`)
4. Cole em `lib/site-data.ts` no lugar da antiga

---

## ✍️ Briefing rápido pra fotógrafo (caso encomende ensaio)

> **Cliente:** CampoAgro 2026 / Prefeitura de Campo do Tenente
> **Paleta de identidade:** Verde profundo + dourado + preto (visual premium, dark)
> **Estilo de imagem desejado:** Hora dourada (golden hour), alto contraste, sombras profundas, atmosfera cinematográfica. Pensar em estética de feiras agro top do Brasil (Agrishow, Expointer) com toque de filme.
>
> **Lista de tomadas-chave:**
> 1. 🚁 **Drone aéreo do parque de exposições** ao amanhecer e ao entardecer (3-5 ângulos)
> 2. 🌾 **Lavoura local** (soja/milho/trigo) ao golden hour (wide + médios)
> 3. 👨‍🌾 **Retrato de produtor rural** da região, vestindo trabalho de campo, ambientado
> 4. 🐄 **Bovino de raça** em close (foco em raça regional)
> 5. 🚜 **Detalhe de trator/colheitadeira** em movimento (motion blur valoriza)
> 6. 🍖 **Churrasco / culinária paranaense** durante preparo (movimento, calor)
> 7. 🎤 **Palco de show** vazio iluminado (à noite) + multidão lotada
> 8. 🤝 **Pequenos produtores** em mercado/cooperativa (cores, gestos)
>
> **Entregas:**
> - 30-50 fotos finais editadas (cor + crop)
> - Versões: JPG 2400px wide + JPG 1200px wide (para retina e mobile)
> - Direitos de uso institucional ilimitado + redes sociais

---

## 🧪 Validando URLs (script utilitário)

Após mexer em `IMAGES`, rode:

```bash
node scripts/check-images.mjs
```

Ele verifica se cada URL responde com `200 OK` e avisa quais estão quebradas. Útil principalmente quando se usa Unsplash (URLs podem expirar) ou quando se troca várias fotos de uma vez.

---

## ⚡ Performance

- Todas as imagens usam **`next/image`** → formato automático (AVIF/WebP), lazy loading, srcset responsivo.
- O Hero tem `priority` (carrega antes do resto pra não atrasar o LCP).
- Galeria/Notícias usam `sizes` pra servir o tamanho certo em cada viewport.
- **Não precisa otimizar manualmente** — o Next faz no build.

---

## ❓ FAQ

**P: Posso usar PNG?**
R: Pode, mas pra fotos JPG/WebP é muito mais leve. PNG só pra logos com transparência.

**P: As fotos do Unsplash são livres pra uso comercial?**
R: Sim, sob a Unsplash License — uso comercial liberado, atribuição não obrigatória. Mas pra um evento oficial, fotos próprias dão muito mais legitimidade.

**P: Como adiciono uma foto NOVA na galeria (oitava foto)?**
R: Em `lib/site-data.ts`, no array `IMAGES.galeria`, acrescente um item. A grid se adapta — mas se passar de 7-8, vale ajustar o layout do componente `Galeria.tsx`.

**P: A foto fica cortada no mobile, o que faço?**
R: O `next/image` usa `object-cover`, que centraliza e corta o excesso. Se a foto tem o ponto focal fora do centro, ajuste com a prop `style={{ objectPosition: 'top' }}` (ou `bottom`, `left`, `25% 50%`) no componente que usa a imagem.
