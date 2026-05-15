export default function CountdownSection() {
  return (
    <section className="countdown-section premium-band" aria-label="Contagem regressiva">
      <div className="container countdown-shell reveal">
        <div>
          <p className="eyebrow">Contagem regressiva</p>
          <h2>O agro se encontra em Campo do Tenente</h2>
        </div>
        <div className="countdown-grid">
          <div className="count-item">
            <div className="count-num" id="cd-days">
              0
            </div>
            <span className="count-label">Dias</span>
          </div>
          <div className="count-item">
            <div className="count-num" id="cd-hours">
              00
            </div>
            <span className="count-label">Horas</span>
          </div>
          <div className="count-item">
            <div className="count-num" id="cd-mins">
              00
            </div>
            <span className="count-label">Minutos</span>
          </div>
          <div className="count-item">
            <div className="count-num" id="cd-secs">
              00
            </div>
            <span className="count-label">Segundos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
