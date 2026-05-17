import Image from 'next/image';

export default function PatrocinadoresSection() {
  return (
    <section className="patrocinadores" id="patrocinadores">
      <div className="container">
        <div className="partners-hero reveal">
          <div>
            <div className="section-badge">Parceiros oficiais</div>
            <h2 className="section-title">Marcas que fortalecem o maior evento agro da região</h2>
          </div>
          <a href="#expositores" className="btn-primary">
            Ver cotas de patrocínio
          </a>
        </div>
        <div className="sponsor-tier sponsor-tier-featured reveal">
          <div className="sponsor-track" aria-label="Patrocinadores em carrossel">
            {/* Modelo tipo "slides" (como no exemplo Elementor): strip repetida + duplicata aria-hidden */}
            <div className="sponsor-row sponsor-logo-row" data-cg-sponsor-row>
              <div className="sponsor-slide" role="group" aria-roledescription="slide" aria-label="Patrocinadores" tabIndex={-1}>
                <div className="sponsor-logo-strip">
                  <Image
                    src="/img/campoagro-patrocinadores.png"
                    alt="Patrocinadores e apoiadores oficiais do CampoAgro"
                    width={1120}
                    height={96}
                    sizes="(max-width: 1200px) 92vw, 1120px"
                    quality={80}
                  />
                </div>
              </div>
              <div
                className="sponsor-slide"
                role="group"
                aria-roledescription="slide"
                aria-label="Patrocinadores (duplicado)"
                aria-hidden="true"
                tabIndex={-1}
              >
                <div className="sponsor-logo-strip" aria-hidden="true">
                  <Image
                    src="/img/campoagro-patrocinadores.png"
                    alt=""
                    width={1120}
                    height={96}
                    sizes="(max-width: 1200px) 92vw, 1120px"
                    quality={80}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="partners-cta reveal">Associe sua marca ao maior evento agro da região.</p>
      </div>
    </section>
  );
}
