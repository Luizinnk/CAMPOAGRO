export default function AreasSection() {
  return (
    <section className="areas" id="areas">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-badge">Áreas do evento</div>
          <h2 className="section-title">
            Estrutura completa para viver o <span className="highlight">CampoAgro</span>
          </h2>
        </div>
        <div className="areas-grid">
          <article className="area-card reveal">
            <span className="area-icon">01</span>
            <h3 className="area-title">Exposição agropecuária</h3>
            <p className="area-desc">Animais, genética, produtores e experiências ligadas à força rural.</p>
          </article>
          <article className="area-card reveal">
            <span className="area-icon">02</span>
            <h3 className="area-title">Máquinas agrícolas</h3>
            <p className="area-desc">Tratores, implementos, equipamentos e tecnologia para o campo.</p>
          </article>
          <article className="area-card reveal">
            <span className="area-icon">03</span>
            <h3 className="area-title">Feira de negócios</h3>
            <p className="area-desc">Ambiente premium para marcas, vendas, relacionamento e oportunidades.</p>
          </article>
          <article className="area-card reveal">
            <span className="area-icon">04</span>
            <h3 className="area-title">Arena de shows</h3>
            <p className="area-desc">
              Palco principal com experiência visual, som, praça de alimentação e ativações.
            </p>
          </article>
          <article className="area-card reveal">
            <span className="area-icon">05</span>
            <h3 className="area-title">Agricultura familiar</h3>
            <p className="area-desc">Produtos locais, cooperativas, associações e valorização regional.</p>
          </article>
          <article className="area-card reveal">
            <span className="area-icon">06</span>
            <h3 className="area-title">Gastronomia</h3>
            <p className="area-desc">Sabores do Paraná, operação organizada e áreas de convivência.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
