import SectionHeader from './SectionHeader';

export default function MapaSection() {
  return (
    <section className="mapa-section premium-map-section" id="mapa">
      <div className="container mapa-layout">
        <SectionHeader
          badge="Mapa do evento"
          title={
            <>
              Explore os setores do <span className="highlight">CampoAgro</span>
            </>
          }
          description="Encontre áreas de interesse, veja os principais setores do evento e planeje sua visita com mais facilidade."
        />
        <div className="map-actions reveal">
          <a href="/mapa-campoagro.html" className="btn-outline" target="_blank" rel="noopener noreferrer">
            Explorar mapa
          </a>
        </div>
        <div className="campoagro-map-frame reveal">
          <iframe src="/mapa-campoagro.html" title="Mapa interativo oficial do CampoAgro" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
