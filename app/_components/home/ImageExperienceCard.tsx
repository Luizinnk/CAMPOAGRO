import Image from 'next/image';

import type { InfoModalContent } from './InfoModal';

type ImageExperienceCardProps = {
  title: string;
  label: string;
  summary: string;
  src: string;
  index: number;
  details: InfoModalContent;
  onOpen: (content: InfoModalContent) => void;
};

export default function ImageExperienceCard({
  title,
  label,
  summary,
  src,
  index,
  details,
  onOpen,
}: ImageExperienceCardProps) {
  return (
    <article className="image-experience-card reveal">
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 860px) 100vw, 25vw"
        quality={84}
        className="object-cover"
      />
      <span className="image-card-category">{label}</span>
      <b aria-hidden="true">{String(index + 1).padStart(2, '0')}</b>
      <div className="image-card-footer">
        <strong>{title}</strong>
        <p>{summary}</p>
        <button type="button" onClick={() => onOpen(details)}>
          Ver mais
        </button>
      </div>
    </article>
  );
}
