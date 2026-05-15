export default function MediaModal() {
  return (
    <div className="media-modal" data-media-modal aria-hidden="true">
      <div className="media-modal-panel" role="dialog" aria-modal="true" aria-label="Visualização de mídia">
        <button type="button" className="media-modal-close" data-media-close aria-label="Fechar">
          ×
        </button>
        <div className="media-modal-content" data-media-content />
        <div className="media-modal-meta">
          <span data-media-category />
          <strong data-media-title />
        </div>
      </div>
    </div>
  );
}
