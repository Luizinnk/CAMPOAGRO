'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const SESSION_KEY = 'campoagro_loading_seen';
/** Tempo mínimo para a barra de loading “respirar” antes do fade-out */
const MIN_VISIBLE_MS = 700;
const MAX_WAIT_MS = 1800;

export default function LoadingOverlay() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === '1') {
      setHidden(true);
      return;
    }

    const started = Date.now();
    let timeoutId: ReturnType<typeof setTimeout>;
    let maxTimeoutId: ReturnType<typeof setTimeout>;

    const hide = () => {
      sessionStorage.setItem(SESSION_KEY, '1');
      const elapsed = Date.now() - started;
      const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
      timeoutId = setTimeout(() => setHidden(true), wait);
    };

    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide, { once: true });
    }

    maxTimeoutId = setTimeout(() => setHidden(true), MAX_WAIT_MS);

    return () => {
      window.removeEventListener('load', hide);
      clearTimeout(timeoutId);
      clearTimeout(maxTimeoutId);
    };
  }, []);

  return (
    <div
      id="loading"
      className={hidden ? 'hidden' : undefined}
      aria-hidden={hidden}
      aria-label="Carregando CampoAgro"
    >
      <Image
        className="loading-logo"
        src="/img/logo-campoagro.png"
        alt="CampoAgro Campo do Tenente"
        width={280}
        height={90}
        sizes="280px"
        quality={75}
        priority
      />
      <div className="loading-bar-wrap">
        <div className="loading-bar" />
      </div>
      <p>Campo do Tenente · PR · 2026</p>
    </div>
  );
}
