'use client';

import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type MediaOpen = {
  src: string;
  title: string;
  category: string;
  type: 'image' | 'video';
};

const CARDS: Array<{
  variant: 'tall' | 'wide' | '';
  src: string;
  title: string;
  category: string;
  caption: string;
}> = [
  {
    variant: 'tall',
    src: '/assets/img/banner15.png',
    title: 'Semente do futuro',
    category: 'CAMPOAGRO 2026',
    caption: 'Semente do futuro',
  },
  {
    variant: '',
    src: '/assets/img/joao-nelore-texano.jpg',
    title: 'João Nelore e Texano',
    category: 'Shows',
    caption: 'Shows nacionais',
  },
  {
    variant: '',
    src: '/assets/img/luan-pereira-tvz-2024.png',
    title: 'Luan Pereira',
    category: 'Palco CampoAgro',
    caption: 'Arena principal',
  },
  {
    variant: 'wide',
    src: '/assets/img/tratoraco/tratoraco-01.png',
    title: 'Tratoraço',
    category: 'Tradição rural',
    caption: 'Tradição em movimento',
  },
];

export default function MemoriasSection() {
  const [open, setOpen] = useState<MediaOpen | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const modal = (
    <div
      className={clsx('media-modal', open && 'open')}
      data-media-modal
      aria-hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="media-modal-panel" role="dialog" aria-modal="true" aria-label="Visualização de mídia">
        <button type="button" className="media-modal-close" data-media-close aria-label="Fechar" onClick={close}>
          ×
        </button>
        <div className="media-modal-content" data-media-content>
          {open &&
            (open.type === 'video' ? (
              <video src={open.src} controls autoPlay playsInline />
            ) : (
              <img src={open.src} alt={open.title || 'Memória do CampoAgro'} />
            ))}
        </div>
        <div className="media-modal-meta">
          <span data-media-category>{open?.category ?? ''}</span>
          <strong data-media-title>{open?.title ?? ''}</strong>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="memorias-section" id="memorias">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-badge">Galeria e memórias</div>
            <h2 className="section-title">
              Momentos que contam a história do <span className="highlight">CampoAgro</span>
            </h2>
          </div>
          <div className="masonry-gallery">
            {CARDS.map((c) => (
              <button
                key={c.src}
                type="button"
                className={clsx(
                  'memory-card',
                  'reveal',
                  c.variant === 'tall' && 'tall',
                  c.variant === 'wide' && 'wide'
                )}
                data-media-type="image"
                data-src={c.src}
                data-title={c.title}
                data-category={c.category}
                onClick={() => setOpen({ src: c.src, title: c.title, category: c.category, type: 'image' })}
              >
                <img src={c.src} alt={c.title} loading="lazy" />
                <span>{c.caption}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {mounted ? createPortal(modal, document.body) : null}
    </>
  );
}
