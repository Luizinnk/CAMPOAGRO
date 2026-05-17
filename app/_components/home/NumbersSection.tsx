export default function NumbersSection() {
  return (
    <section
      className="numbers-section"
      id="numeros"
      aria-label="Números do evento"
    >
      <div className="container">
        <div className="numbers-grid reveal">
          <article className="stat-card">
            <div className="stat-num">+25 mil</div>
            <div className="stat-desc">visitantes esperados</div>
          </article>
          <article className="stat-card">
            <div className="stat-num">+50</div>
            <div className="stat-desc">marcas e expositores</div>
          </article>
          <article className="stat-card">
            <div className="stat-num">3 dias</div>
            <div className="stat-desc">de programação oficial</div>
          </article>
          <article className="stat-card">
            <div className="stat-num">+10</div>
            <div className="stat-desc">atrações, ativações e experiências</div>
          </article>
        </div>
      </div>
    </section>
  );
}
