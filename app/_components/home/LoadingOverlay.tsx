'use client';

import { useEffect, useState } from 'react';

export default function LoadingOverlay() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleHide = () => {
      timeoutId = setTimeout(() => setHidden(true), 2200);
    };

    if (document.readyState === 'complete') {
      scheduleHide();
    } else {
      window.addEventListener('load', scheduleHide);
    }

    return () => {
      window.removeEventListener('load', scheduleHide);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div id="loading" className={hidden ? 'hidden' : undefined} aria-label="Carregando CampoAgro">
      <img className="loading-logo" src="/assets/img/logo-campoagro.png" alt="CampoAgro Campo do Tenente" />
      <div className="loading-bar-wrap">
        <div className="loading-bar" />
      </div>
      <p>Campo do Tenente · PR · 2026</p>
    </div>
  );
}
