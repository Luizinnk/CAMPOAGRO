export default function SobreSection() {
  return (
    <section className="sobre editorial-section" id="sobre">
      <div className="container editorial-grid">
        <div className="editorial-copy reveal">
          <div className="section-badge">Sobre o evento</div>
          <h2 className="section-title">
            Uma vitrine premium para a força do <span className="highlight">agro brasileiro</span>
          </h2>
          <p>
            O CampoAgro 2026 conecta produtores, empresas, famílias, tecnologia, cultura rural e entretenimento em
            uma experiência de alto impacto para Campo do Tenente e toda a região.
          </p>
          <p>
            A proposta é unir feira de negócios, exposição agropecuária, máquinas, agricultura familiar, gastronomia,
            conteúdo técnico e shows em um fluxo organizado, elegante e fácil de navegar.
          </p>
          <div className="editorial-tags" aria-label="Pilares do evento">
            <span>Negócios</span>
            <span>Tecnologia</span>
            <span>Agricultura familiar</span>
            <span>Máquinas</span>
            <span>Shows</span>
            <span>Gastronomia</span>
          </div>
        </div>
        <div className="editorial-visual reveal">
          <img src="/assets/img/banner15.png" alt="Família plantando uma muda no campo ao pôr do sol" loading="lazy" />
          <div className="visual-caption">
            <span>Campo do Tenente</span>
            <strong>Tradição rural com visão de futuro</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
