# Guia de Analytics — CampoAgro 2026

> **Para quem é este guia:** organização do evento (não precisa ser técnico).
> Aqui você aprende a acessar os relatórios de comportamento do site e a usar os dados para captação de patrocinadores.

---

## 1. Acessando o painel

1. Acesse [clarity.microsoft.com](https://clarity.microsoft.com)
2. Faça login com a conta Microsoft da organização
3. Selecione o projeto **CampoAgro 2026** na lista de projetos
4. Você verá o painel principal com dados do site

> Se ainda não tem acesso, peça ao responsável técnico para te adicionar como **membro** do projeto em **Settings → Members**.

---

## 2. O que cada relatório mostra

### Visão Geral (aba "Dashboard")
Números do período selecionado (canto superior direito):

| Número | O que significa |
|---|---|
| **Sessions** | Quantas visitas únicas o site recebeu |
| **Pageviews** | Total de páginas carregadas |
| **Users** | Visitantes únicos (por device) |
| **Scroll depth** | Até onde as pessoas rolam a página (ex.: 78% = maioria viu 78% do conteúdo) |
| **Dead clicks** | Cliques em áreas que não fazem nada (sinaliza confusão dos visitantes) |
| **Rage clicks** | Cliques repetidos e frustrados no mesmo lugar |
| **Quick backs** | Usuário abriu uma página e voltou rápido (sinaliza que o conteúdo decepcionou) |

---

### Heatmaps (aba "Heatmaps")
Mostra um mapa de calor sobre o próprio site — áreas quentes = onde mais clicaram ou onde mais o olhar se concentra.

**Como usar para patrocinadores:**
- Vá em **Click map** → selecione a página principal
- Mostre que a área de patrocinadores/expositores recebe atenção real
- Use a captura de tela do heatmap na apresentação de cotas

---

### Gravações de Sessão (aba "Recordings")
Vídeos de visitantes navegando no site (completamente anônimos — sem nome, e-mail ou dados pessoais).

**Para encontrar sessões relevantes:**
1. Clique em **Filter**
2. Filtre por **Custom event** → escolha o evento que interessa (veja lista na seção 3)
3. Veja gravações de quem clicou em "Ver cotas premium" ou "Quero patrocinar"

---

### Funil de interesse dos visitantes (via eventos customizados)

Na aba **Events**, você vê quantas vezes cada ação foi executada no site.

---

## 3. Eventos registrados no site

Estes são os momentos que o site registra automaticamente (apenas para visitantes que aceitaram os cookies):

| Nome do evento | O que aconteceu |
|---|---|
| `header_logo_click` | Visitante clicou no logo do CampoAgro |
| `nav_sobre_click` | Clicou em "O evento" no menu |
| `nav_atracoes_click` | Clicou em "Atrações" no menu |
| `nav_expositores_click` | Clicou em "Expositores" no menu |
| `nav_memorias_click` | Clicou em "Memória" no menu |
| `nav_areas_click` | Clicou em "Estrutura" no menu |
| `cta_ingresso_click` | Clicou em **"Comprar ingresso"** no topo da página |
| `cta_programacao_click` | Clicou em **"Ver programação"** no hero |
| `cta_expositor_click` | Selecionou interesse como **expositor** no formulário |
| `cta_patrocinador_click` | Selecionou interesse como **patrocinador** no formulário |
| `cta_ingresso_click` | Selecionou interesse em **ingresso** no formulário |
| `form_lead_submit` | **Enviou o formulário** (lead capturado!) |
| `patrocinador_cota_click` | Clicou em "Ver cotas premium" na seção de patrocinadores |
| `cta_participar_click` | Clicou em "Quero participar" na seção de contato |
| `social_instagram_click` | Clicou no link do Instagram (navbar ou contato) |
| `social_whatsapp_click` | Clicou no botão flutuante do WhatsApp |

---

## 4. Como montar um relatório para patrocinadores

Sugestão de números para incluir na apresentação de cotas:

**Volume de audiência**
- Total de sessões no período (ex.: "2.400 visitas em 30 dias")
- Dispositivos: % mobile vs desktop (em Dashboard → Devices)
- Cidades de origem dos visitantes (Dashboard → Locations)

**Engajamento**
- Scroll depth médio (mostra que as pessoas chegam até a seção de patrocinadores)
- Evento `patrocinador_cota_click`: quantas pessoas clicaram em "Ver cotas"
- Evento `cta_patrocinador_click`: quantas iniciaram o processo de patrocínio

**Captação de leads**
- Evento `form_lead_submit` filtrado por tag `interesse = patrocinador`: leads de patrocínio diretos do site

### Passo a passo para exportar os dados

1. No painel do Clarity, vá em **Events**
2. Localize o evento desejado (ex.: `form_lead_submit`)
3. Clique nos três pontos `⋯` → **Export to CSV** (disponível nos planos pagos do Clarity)
4. Para capturas de heatmap: **Heatmaps** → posicione a visão desejada → **Download screenshot**

---

## 5. Período de retenção dos dados

O Clarity mantém os dados por **até 13 meses**. Recomendamos exportar relatórios mensalmente e guardar os CSVs antes do evento para ter o histórico de crescimento de audiência.

---

## 6. Configurando alertas (opcional)

1. No Clarity, vá em **Settings → Alerts** (se disponível no seu plano)
2. Configure para receber e-mail quando o número de sessões cair abaixo de um mínimo
3. Útil na semana do evento para monitorar o pico de acesso

---

## 7. Acesso de outros membros da equipe

Para dar acesso ao painel para outros organizadores:

1. **Settings → Members → Add member**
2. Insira o e-mail Microsoft da pessoa
3. Escolha o papel:
   - **Viewer** → apenas visualiza relatórios (recomendado para quem vai mostrar aos patrocinadores)
   - **Member** → pode configurar o projeto
   - **Admin** → acesso total

---

## 8. Privacidade e LGPD

- Os dados só são coletados de visitantes que **aceitaram os cookies** no banner do site
- O Clarity **não** captura senhas, CPFs, e-mails ou qualquer campo de formulário marcado como sensível
- As gravações de sessão são automàticamente mascaradas nos campos de entrada (`<input>`)
- Visitantes podem revogar o consentimento a qualquer momento clicando em **"Preferências de cookies"** no rodapé do site
- Política de privacidade completa: [campoagro.com.br/privacidade](/privacidade) *(ajuste a URL real)*

---

*Dúvidas técnicas sobre a integração: consulte o responsável pelo desenvolvimento do site.*
