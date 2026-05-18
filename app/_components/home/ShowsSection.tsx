'use client';

import Image from 'next/image';
import { useState } from 'react';

const LUAN_VIDEO =
  'https://www.youtube.com/embed/Fbht6qFj9nI?autoplay=1&mute=1&loop=1&playlist=Fbht6qFj9nI&controls=1&rel=0&modestbranding=1';

export default function ShowsSection() {
  const [luanSlide, setLuanSlide] = useState<0 | 1>(0);

  return (
    <section className="premium-shows shows-reference" id="shows">
      <div className="container">
        <div className="section-head split-head reveal">
          <div>
            <div className="section-badge">Atrações confirmadas</div>
            <h2 className="section-title">Anúncios oficiais dos cantores</h2>
          </div>
        </div>

        <div className="artist-announcement-grid reveal" aria-label="Anúncios dos cantores">
          <article className="artist-announcement-card">
            <Image
              src="/img/joao-nelore-texano-card.png"
              alt="Anúncio oficial: João Nelore e Texano"
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 50vw"
              quality={90}
            />
          </article>

          <article className="artist-announcement-card artist-announcement-card--carousel">
            <div className="artist-slide-window">
              <div className="artist-slide-track" style={{ transform: `translateX(-${luanSlide * 100}%)` }}>
                <div className="artist-slide">
                  <Image
                    src="/img/luan-pereira-card.png"
                    alt="Anúncio oficial: Luan Pereira"
                    width={1536}
                    height={1024}
                    sizes="(max-width: 900px) 100vw, 50vw"
                    quality={90}
                  />
                </div>
                <div className="artist-slide artist-slide--video">
                  <iframe
                    src={luanSlide === 1 ? LUAN_VIDEO : 'about:blank'}
                    title="Vídeo oficial: Luan Pereira"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="artist-carousel-controls" aria-label="Carrossel Luan Pereira">
              <button
                type="button"
                className={luanSlide === 0 ? 'active' : undefined}
                onClick={() => setLuanSlide(0)}
              >
                Arte
              </button>
              <button
                type="button"
                className={luanSlide === 1 ? 'active' : undefined}
                onClick={() => setLuanSlide(1)}
              >
                Vídeo
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
