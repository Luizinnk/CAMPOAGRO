export default function ContactSection() {
  return (
    <section className="premium-contact" id="contato">
      <div className="container contact-grid">
        <div className="contact-panel reveal">
          <div className="section-badge">Contato</div>
          <h2 className="section-title">
            Participe do <span className="highlight">CampoAgro 2026</span>
          </h2>
          <p>
            Para expositores, patrocinadores, imprensa e informações comerciais, fale com a organização e acompanhe
            os comunicados oficiais.
          </p>
          <div className="contact-actions">
            <a href="https://www.instagram.com/campoagrooficial/" className="btn-primary" target="_blank" rel="noopener">
              Instagram oficial
            </a>
            <a href="#expositores" className="btn-outline">
              Quero participar
            </a>
          </div>
        </div>
        <div className="contact-card reveal">
          <span>CAMPO DO TENENTE - PR</span>
          <strong>17 a 19 de julho de 2026</strong>
          <p>Feira agropecuária, negócios, tecnologia rural, gastronomia e shows nacionais.</p>
        </div>
      </div>
    </section>
  );
}
