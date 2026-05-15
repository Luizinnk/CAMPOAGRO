export default function LoadingOverlay() {
  return (
    <div id="loading" aria-label="Carregando CampoAgro">
      <img className="loading-logo" src="/assets/img/logo-campoagro.png" alt="CampoAgro Campo do Tenente" />
      <div className="loading-bar-wrap">
        <div className="loading-bar" />
      </div>
      <p>Campo do Tenente · PR · 2026</p>
    </div>
  );
}
