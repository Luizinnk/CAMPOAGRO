import Image from "next/image";

import HeroParticles from "./HeroParticles";

export default function HeroSection() {
  return (
    <section className="hero hero-v5 hero-campaign hero-reference" id="home" aria-label="CampoAgro 2026">
      <div className="hero-bg-photo" aria-hidden>
        <Image
          src="/img/banner15.png"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={88}
        />
      </div>
      <div className="hero-bg" />
      <div className="hero-cinematic-grain" aria-hidden="true" />
      <div className="hero-grid" />
      <div className="hero-particles" id="particles">
        <HeroParticles />
      </div>
      <div className="hero-light hero-light-one" />

      <div className="hero-layout">
        <div className="hero-content reveal">
          <div className="hero-badge">17 a 19 de julho de 2026 - Campo do Tenente - PR</div>
          <h1 className="hero-title hero-title-stacked">
            <span className="year">3ª edição</span>
            <span>CAMPO</span>
            <span className="gold">AGRO</span>
            <span>2026</span>
          </h1>
          <p className="hero-tagline">Plantando na terra, a semente do futuro.</p>
          <p className="hero-sub">
            O maior encontro do agronegócio, inovação rural e entretenimento da região.
          </p>
          <div className="hero-meta" aria-label="Destaques do evento">
            <span>Feira agro</span>
            <span>Shows nacionais</span>
            <span>Tratoraço</span>
          </div>
          <div className="hero-buttons">
            <a href="?interesse=ingresso#expositores" className="btn-primary">
              Comprar ingresso
            </a>
            <a href="#atracoes" className="btn-outline">
              Ver programação
            </a>
          </div>
        </div>

      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span className="scroll-text">Role para explorar</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
