export default function Navbar() {
  return (
    <nav id="navbar" aria-label="Navegação principal">
      <a href="#home" className="nav-brand" aria-label="CampoAgro 2026 - início">
        <img src="/assets/img/logo-campoagro.png" alt="CampoAgro Campo do Tenente" />
      </a>
      <ul className="nav-links">
        <li>
          <a href="#sobre">Evento</a>
        </li>
        <li>
          <a href="#programacao">Programação</a>
        </li>
        <li>
          <a href="#areas">Áreas</a>
        </li>
        <li>
          <a href="#memorias">Galeria</a>
        </li>
        <li>
          <a href="#tratoraco">Tratoraço</a>
        </li>
        <li>
          <a href="#patrocinadores">Parceiros</a>
        </li>
        <li>
          <a href="#expositores">Expositores</a>
        </li>
        <li>
          <a href="https://www.instagram.com/campoagrooficial/" className="nav-cta" target="_blank" rel="noopener">
            Instagram
          </a>
        </li>
      </ul>
      <button className="hamburger" id="hamburger" aria-label="Abrir menu" type="button">
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
