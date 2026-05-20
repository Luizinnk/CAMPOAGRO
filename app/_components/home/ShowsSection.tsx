'use client';

import Image from 'next/image';
import { useState } from 'react';

const LUAN_VIDEO = '/videos/luan-pereira-voce-e-sua-amiguinha.mp4';
const JOAO_VIDEO = '/videos/joao-nelore-texano-sabor-cowboy.mp4';

export default function ShowsSection() {
  const [joaoSlide, setJoaoSlide] = useState<0 | 1>(0);
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
          <article className="artist-announcement-card artist-announcement-card--carousel">
            <div className="artist-slide-window">
              <div className="artist-slide-track" style={{ transform: `translateX(-${joaoSlide * 100}%)` }}>
                <div className="artist-slide">
                  <Image
                    src="/img/joao-nelore-texano-card.png"
                    alt="Anuncio oficial: Joao Nelore e Texano"
                    width={1536}
                    height={1024}
                    sizes="(max-width: 900px) 100vw, 50vw"
                    quality={90}
                  />
                </div>
                <div className="artist-slide artist-slide--video">
                  <video
                    src={JOAO_VIDEO}
                    title="Video oficial: Joao Nelore e Texano"
                    controls
                    playsInline
                    preload={joaoSlide === 1 ? 'metadata' : 'none'}
                  />
                </div>
              </div>
            </div>

            <div className="artist-carousel-controls" aria-label="Carrossel Joao Nelore e Texano">
              <button
                type="button"
                className={joaoSlide === 0 ? 'active' : undefined}
                onClick={() => setJoaoSlide(0)}
              >
                Arte
              </button>
              <button
                type="button"
                className={joaoSlide === 1 ? 'active' : undefined}
                onClick={() => setJoaoSlide(1)}
              >
                Video
              </button>
            </div>
          </article>

          <article className="artist-announcement-card artist-announcement-card--carousel">
            <div className="artist-slide-window">
              <div className="artist-slide-track" style={{ transform: `translateX(-${luanSlide * 100}%)` }}>
                <div className="artist-slide">
                  <Image
                    src="/img/luan-pereira-card.png"
                    alt="Anuncio oficial: Luan Pereira"
                    width={1536}
                    height={1024}
                    sizes="(max-width: 900px) 100vw, 50vw"
                    quality={90}
                  />
                </div>
                <div className="artist-slide artist-slide--video">
                  <video
                    src={LUAN_VIDEO}
                    title="Video oficial: Luan Pereira"
                    controls
                    playsInline
                    preload={luanSlide === 1 ? 'metadata' : 'none'}
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
                Video
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
