'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type MediaOpen = {
  src: string;
  title: string;
  category: string;
  type: 'image' | 'video';
};

const CARDS: Array<{
  variant: 'hero' | 'portrait' | 'spotlight' | 'wide' | 'compact';
  src: string;
  title: string;
  category: string;
  caption: string;
  detail: string;
}> = [
  {
    variant: 'hero',
    src: '/img/banner15.png',
    title: 'Semente do futuro',
    category: 'CampoAgro 2026',
    caption: 'Família, terra e futuro',
    detail: 'Imagem principal da edição, com a essência do evento.',
  },
  {
    variant: 'portrait',
    src: '/img/joao-nelore-texano.jpg',
    title: 'João Nelore e Texano',
    category: 'Shows',
    caption: 'Encontro com o público',
    detail: 'Atração voltada para energia de palco e entretenimento.',
  },
  {
    variant: 'spotlight',
    src: '/img/luan-pereira-tvz-2024.png',
    title: 'Luan Pereira',
    category: 'Palco CampoAgro',
    caption: 'Arena principal',
    detail: 'Um card de destaque para show nacional e chamada visual.',
  },
  {
    variant: 'wide',
    src: '/img/tratoraco/tratoraco-01.png',
    title: 'Tratoraço',
    category: 'Tradição rural',
    caption: 'Tradição em movimento',
    detail: 'Máquinas, produtores e identidade rural na avenida.',
  },
  {
    variant: 'compact',
    src: '/img/banner2.png',
    title: 'Feira e negócios',
    category: 'Experiência',
    caption: 'Conexões do agro',
    detail: 'Espaço para marcas, produtores e oportunidades.',
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
              <Image
                src={open.src}
                alt={open.title || 'Memória do CampoAgro'}
                width={1600}
                height={1067}
                sizes="95vw"
                quality={85}
              />
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
          <div className="section-head memorias-head reveal">
            <div>
              <div className="section-badge">Galeria e memórias</div>
              <h2 className="section-title">
                Momentos que contam a história do <span className="highlight">CampoAgro</span>
              </h2>
            </div>
          </div>
          <div className="masonry-gallery memory-gallery-v2">
            {CARDS.map((c) => (
              <button
                key={c.src}
                type="button"
                className={clsx('memory-card', 'reveal', `memory-card--${c.variant}`)}
                data-media-type="image"
                data-src={c.src}
                data-title={c.title}
                data-category={c.category}
                onClick={() => setOpen({ src: c.src, title: c.title, category: c.category, type: 'image' })}
              >
                <Image
                  src={c.src}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={82}
                  className="object-cover"
                />
                <span className="memory-category">{c.category}</span>
                <span className="memory-content">
                  <strong>{c.caption}</strong>
                  <small>{c.detail}</small>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {mounted ? createPortal(modal, document.body) : null}
    </>
  );
}
