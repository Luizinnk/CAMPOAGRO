export default function MemoriasSection() {
  return (
    <section className="memorias-section" id="memorias">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-badge">Galeria e memórias</div>
          <h2 className="section-title">
            Momentos que contam a história do <span className="highlight">CampoAgro</span>
          </h2>
        </div>
        <div className="masonry-gallery">
          <button
            className="memory-card tall reveal"
            type="button"
            data-media-type="image"
            data-src="/assets/img/banner15.png"
            data-title="Semente do futuro"
            data-category="CAMPOAGRO 2026"
          >
            <img src="/assets/img/banner15.png" alt="Família plantando no campo" loading="lazy" />
            <span>Semente do futuro</span>
          </button>
          <button
            className="memory-card reveal"
            type="button"
            data-media-type="image"
            data-src="/assets/img/joao-nelore-texano.jpg"
            data-title="João Nelore e Texano"
            data-category="Shows"
          >
            <img src="/assets/img/joao-nelore-texano.jpg" alt="João Nelore e Texano" loading="lazy" />
            <span>Shows nacionais</span>
          </button>
          <button
            className="memory-card reveal"
            type="button"
            data-media-type="image"
            data-src="/assets/img/luan-pereira-tvz-2024.png"
            data-title="Luan Pereira"
            data-category="Palco CampoAgro"
          >
            <img src="/assets/img/luan-pereira-tvz-2024.png" alt="Luan Pereira" loading="lazy" />
            <span>Arena principal</span>
          </button>
          <button
            className="memory-card wide reveal"
            type="button"
            data-media-type="image"
            data-src="/assets/img/tratoraco/tratoraco-01.png"
            data-title="Tratoraço"
            data-category="Tradição rural"
          >
            <img src="/assets/img/tratoraco/tratoraco-01.png" alt="Tratoraço CampoAgro" loading="lazy" />
            <span>Tradição em movimento</span>
          </button>
        </div>
      </div>
    </section>
  );
}
