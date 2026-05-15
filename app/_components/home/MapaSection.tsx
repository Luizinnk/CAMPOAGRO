export default function MapaSection() {
  return (
    <section className="mapa-section" id="mapa">
      <div className="container mapa-layout">
        <div className="section-head reveal">
          <div className="section-badge">Mapa do evento</div>
          <h2 className="section-title">Percurso claro, setores organizados e experiência fluida</h2>
        </div>
        <div className="mapa-premium reveal">
          <div className="map-zone zone-main">
            <strong>Arena de Shows</strong>
            <span>Palco, praça e ativações</span>
          </div>
          <div className="map-zone zone-agro">
            <strong>Feira Agro</strong>
            <span>Máquinas e negócios</span>
          </div>
          <div className="map-zone zone-food">
            <strong>Gastronomia</strong>
            <span>Convivência e sabores</span>
          </div>
          <div className="map-zone zone-family">
            <strong>Família</strong>
            <span>Kids e agricultura familiar</span>
          </div>
          <div className="map-path" />
        </div>
      </div>
    </section>
  );
}
