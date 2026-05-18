import Image from 'next/image';

const ATTRACTIONS = [
  {
    title: 'Arena agro',
    label: 'Experiência',
    text: 'Feira, máquinas, animais, tecnologia e relacionamento em uma estrutura pensada para alto fluxo.',
    src: '/img/banner2.png',
  },
  {
    title: 'Tratoraço',
    label: 'Tradição',
    text: 'A força do produtor rural em movimento, com identidade popular e presença visual marcante.',
    src: '/img/tratoraco/tratoraco-03.png',
  },
  {
    title: 'Gastronomia e família',
    label: 'Convivência',
    text: 'Praça organizada, produtos locais, agricultura familiar e programação para todos os públicos.',
    src: '/img/campoagro-hero-topo.png',
  },
];

export default function AttractionsSection() {
  return (
    <section className="premium-attractions" id="atracoes">
      <div className="container">
        <div className="section-head split-head reveal">
          <div>
            <div className="section-badge">Atrações</div>
            <h2 className="section-title">
              Uma jornada completa entre <span className="highlight">campo, tecnologia e espetáculo</span>
            </h2>
          </div>
        </div>

        <div className="attraction-grid">
          {ATTRACTIONS.map((item, index) => (
            <article className="attraction-card reveal" key={item.title}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 860px) 100vw, 33vw"
                quality={82}
                className="object-cover"
              />
              <div className="attraction-card-content">
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
              <b aria-hidden="true">{String(index + 1).padStart(2, '0')}</b>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
