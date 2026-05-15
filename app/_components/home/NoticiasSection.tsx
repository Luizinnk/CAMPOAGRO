import Image from 'next/image';

export default function NoticiasSection() {
  return (
    <section className="noticias-section" id="noticias">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-badge">Últimas notícias</div>
          <h2 className="section-title">Acompanhe os comunicados oficiais</h2>
        </div>
        <div className="news-grid">
          <article className="news-card news-card-featured reveal news-card-featured--optimized">
            <div className="news-card-featured__media" aria-hidden>
              <Image
                src="/assets/img/banner15.png"
                alt=""
                fill
                sizes="(max-width: 960px) 100vw, min(560px, 50vw)"
                quality={78}
                className="object-cover"
              />
            </div>
            <div className="news-card-featured__inner">
              <span>CAMPOAGRO 2026</span>
              <h3>Nova edição reforça inovação, tradição rural e entretenimento no sul do Paraná.</h3>
              <p>
                O evento reúne feira, negócios, Tratoraço, experiências e shows em uma programação pensada para toda a
                região.
              </p>
              <a href="https://www.instagram.com/campoagrooficial/" target="_blank" rel="noopener">
                Ver no Instagram
              </a>
            </div>
          </article>
          <article className="news-card reveal">
            <span>Shows</span>
            <h3>João Nelore e Texano confirmados como embaixadores do evento.</h3>
            <a href="#programacao">Ver programação</a>
          </article>
          <article className="news-card reveal">
            <span>Expositores</span>
            <h3>Espaços comerciais preparados para marcas do agro, varejo e serviços.</h3>
            <a href="#expositores">Quero participar</a>
          </article>
        </div>
      </div>
    </section>
  );
}
