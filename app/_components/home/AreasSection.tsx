const AREAS = [
  {
    number: '01',
    title: 'Exposição agropecuária',
    desc: 'Animais, genética, produtores e experiências ligadas à força rural.',
    tag: 'Campo vivo',
    tone: 'terra',
  },
  {
    number: '02',
    title: 'Máquinas agrícolas',
    desc: 'Tratores, implementos, equipamentos e tecnologia para o campo.',
    tag: 'Tecnologia',
    tone: 'maquina',
  },
  {
    number: '03',
    title: 'Feira de negócios',
    desc: 'Ambiente premium para marcas, vendas, relacionamento e oportunidades.',
    tag: 'Conexões',
    tone: 'negocios',
  },
  {
    number: '04',
    title: 'Arena de shows',
    desc: 'Palco principal com experiência visual, som, praça de alimentação e ativações.',
    tag: 'Palco',
    tone: 'show',
  },
  {
    number: '05',
    title: 'Agricultura familiar',
    desc: 'Produtos locais, cooperativas, associações e valorização regional.',
    tag: 'Origem',
    tone: 'familia',
  },
  {
    number: '06',
    title: 'Gastronomia',
    desc: 'Sabores do Paraná, operação organizada e áreas de convivência.',
    tag: 'Sabores',
    tone: 'gastro',
  },
];

export default function AreasSection() {
  return (
    <section className="areas areas-upgrade" id="areas">
      <div className="container">
        <div className="section-head areas-head reveal">
          <div>
            <div className="section-badge">Áreas do evento</div>
            <h2 className="section-title">
              Estrutura completa para viver o <span className="highlight">CampoAgro</span>
            </h2>
          </div>
        </div>
        <div className="areas-grid areas-grid--premium">
          {AREAS.map((area) => (
            <article key={area.number} className={`area-card reveal area-card--${area.tone}`}>
              <div className="area-card-top">
                <span className="area-icon">{area.number}</span>
                <span className="area-tag">{area.tag}</span>
              </div>
              <h3 className="area-title">{area.title}</h3>
              <p className="area-desc">{area.desc}</p>
              <span className="area-line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
