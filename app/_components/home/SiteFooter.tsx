export default function SiteFooter() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/assets/img/logo-campoagro.png"
            alt="CampoAgro Campo do Tenente"
            loading="lazy"
          />
          <p>Evento oficial do agro, inovação rural e entretenimento em Campo do Tenente, Paraná.</p>
        </div>
        <div>
          <h3>Evento</h3>
          <a href="#sobre">Sobre</a>
          <a href="#programacao">Programação</a>
          <a href="#areas">Áreas</a>
          <a href="#mapa">Mapa</a>
        </div>
        <div>
          <h3>Participe</h3>
          <a href="#patrocinadores">Patrocinadores</a>
          <a href="#expositores">Expositores</a>
          <a href="https://www.instagram.com/campoagrooficial/" target="_blank" rel="noopener">
            Instagram oficial
          </a>
        </div>
        <div>
          <h3>CAMPOAGRO 2026</h3>
          <p>
            17 a 19 de julho de 2026
            <br />
            Campo do Tenente · PR
          </p>
        </div>
      </div>
      <div className="footer-bottom">© 2026 CampoAgro. Todos os direitos reservados.</div>
    </footer>
  );
}
