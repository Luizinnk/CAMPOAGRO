import HeroParticles from './HeroParticles';

export default function HeroSection() {
  return (
    <section className="hero hero-v5" id="home" aria-label="CampoAgro 2026">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-particles" id="particles">
        <HeroParticles />
      </div>
      <div className="hero-light hero-light-one" />
      <div className="hero-light hero-light-two" />
      <div className="hero-content reveal">
        <div className="hero-badge">17 a 19 de julho de 2026 · Campo do Tenente · PR</div>
        <h1 className="hero-title">
          <span className="year">3ª edição</span>
          CAMPO<span className="gold">AGRO</span> 2026
        </h1>
        <p className="hero-tagline">Plantando na terra, a semente do futuro.</p>
        <p className="hero-sub">
          O maior encontro do agronegócio, inovação rural e entretenimento do sul do Paraná.
        </p>
        <div className="hero-buttons">
          <a href="#programacao" className="btn-primary">
            Ver Programação
          </a>
          <a href="https://www.instagram.com/campoagrooficial/" className="btn-outline" target="_blank" rel="noopener">
            Comprar Ingresso
          </a>
        </div>
      </div>
      <div className="hero-proof reveal" aria-label="Resumo do evento">
        <span>Feira agro</span>
        <strong>Negócios · Tecnologia · Shows · Tratoraço</strong>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span className="scroll-text">Role para baixo</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
