'use client';

import { useEffect } from 'react';

export type InfoModalContent = {
  title: string;
  eyebrow?: string;
  description: string;
  bullets?: string[];
  cta?: {
    label: string;
    href: string;
  };
};

type InfoModalProps = {
  content: InfoModalContent | null;
  onClose: () => void;
};

export default function InfoModal({ content, onClose }: InfoModalProps) {
  useEffect(() => {
    if (!content) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [content, onClose]);

  if (!content) return null;

  return (
    <div
      className="info-modal"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article className="info-modal-panel" role="dialog" aria-modal="true" aria-labelledby="info-modal-title">
        <button className="info-modal-close" type="button" onClick={onClose} aria-label="Fechar">
          ×
        </button>
        {content.eyebrow ? <span className="info-modal-eyebrow">{content.eyebrow}</span> : null}
        <h3 id="info-modal-title">{content.title}</h3>
        <p>{content.description}</p>
        {content.bullets?.length ? (
          <ul>
            {content.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {content.cta ? (
          <a className="btn-primary" href={content.cta.href}>
            {content.cta.label}
          </a>
        ) : null}
      </article>
    </div>
  );
}
