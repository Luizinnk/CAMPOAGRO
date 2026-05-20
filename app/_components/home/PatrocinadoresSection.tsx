import Image from 'next/image';

export default function PatrocinadoresSection() {
  return (
    <section className="patrocinadores premium-sponsors" id="patrocinadores">
      <div className="container">
        <div className="partners-hero reveal">
          <div>
            <div className="section-badge">Parceiros oficiais</div>
            <h2 className="section-title">
              Marcas que assinam a força do <span className="highlight">CampoAgro 2026</span>
            </h2>
          </div>
          <a href="#contato" className="btn-primary">
            Ver cotas premium
          </a>
        </div>

        <div className="sponsor-tier sponsor-tier-featured reveal">
          <div className="sponsor-track" aria-label="Patrocinadores em movimento">
            <div className="sponsor-row sponsor-logo-row">
              {[0, 1].map((item) => (
                <div
                  className="sponsor-slide"
                  role="group"
                  aria-label={item === 0 ? 'Patrocinadores' : 'Patrocinadores duplicados'}
                  aria-hidden={item === 1}
                  key={item}
                >
                  <div className="sponsor-logo-strip">
                    <Image
                      src="/img/campoagro-patrocinadores.png"
                      alt={item === 0 ? 'Patrocinadores e apoiadores oficiais do CampoAgro' : ''}
                      width={1120}
                      height={96}
                      sizes="(max-width: 1200px) 92vw, 1120px"
                      quality={86}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="partners-cta reveal">
          Presença institucional para marcas que querem se posicionar ao lado de um evento agro nacional.
        </p>
      </div>
    </section>
  );
}
