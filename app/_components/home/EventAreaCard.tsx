import type { InfoModalContent } from './InfoModal';

type EventAreaCardProps = {
  number: string;
  title: string;
  desc: string;
  tag: string;
  tone: string;
  details: InfoModalContent;
  onOpen: (content: InfoModalContent) => void;
};

export default function EventAreaCard({ number, title, desc, tag, tone, details, onOpen }: EventAreaCardProps) {
  return (
    <article className={`area-card reveal area-card--${tone}`}>
      <div className="area-card-top">
        <span className="area-icon">{number}</span>
        <span className="area-tag">{tag}</span>
      </div>
      <h3 className="area-title">{title}</h3>
      <p className="area-desc">{desc}</p>
      <button className="area-details-btn" type="button" onClick={() => onOpen(details)}>
        Detalhes
      </button>
      <span className="area-line" aria-hidden="true" />
    </article>
  );
}
