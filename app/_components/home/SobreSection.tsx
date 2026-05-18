const STATS = [
  ['+20 mil', 'visitantes esperados'],
  ['+100', 'expositores e marcas'],
  ['3 dias', 'de programação oficial'],
  ['+10', 'experiências e ativações'],
];

const PILLARS = [
  {
    title: 'Negócios do agro',
    text: 'Ambiente para marcas, produtores e lideranças criarem conexões comerciais reais.',
  },
  {
    title: 'Tecnologia rural',
    text: 'Máquinas, soluções, inovação aplicada e vitrines para o futuro do campo.',
  },
  {
    title: 'Experiência familiar',
    text: 'Gastronomia, shows, arena, agricultura familiar e espaços de convivência.',
  },
];

export default function SobreSection() {
  return (
    <section className="sobre premium-about" id="sobre">
      <div className="container premium-about-grid">
        <div className="editorial-copy reveal">
          <div className="section-badge">Sobre o evento</div>
          <h2 className="section-title">
            Uma vitrine nacional para a força do <span className="highlight">agro brasileiro</span>
          </h2>
          <p>
            O CampoAgro 2026 posiciona Campo do Tenente no mapa dos grandes encontros agropecuários,
            unindo negócios, inovação, tradição rural e entretenimento em uma jornada premium.
          </p>
          <p>
            Cada seção do site foi reorganizada para vender a escala do evento: do primeiro impacto
            cinematográfico à jornada de expositores, patrocinadores, shows, mapa e galeria.
          </p>
        </div>

        <div className="about-stat-stack reveal" aria-label="Números do evento">
          {STATS.map(([value, label]) => (
            <article className="about-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="container about-pillars reveal">
        {PILLARS.map((pillar, index) => (
          <article className="about-pillar" key={pillar.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
