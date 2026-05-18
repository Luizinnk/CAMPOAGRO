export default function MapaSection() {
  return (
    <section className="mapa-section premium-map-section" id="mapa">
      <div className="container mapa-layout">
        <div className="section-head split-head reveal">
          <div>
            <div className="section-badge">Mapa do evento</div>
            <h2 className="section-title">
              Mapa interativo oficial do <span className="highlight">CampoAgro</span>
            </h2>
          </div>
        </div>
        <div className="campoagro-map-frame reveal">
          <iframe
            src="/mapa-campoagro.html"
            title="Mapa interativo oficial do CampoAgro"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
