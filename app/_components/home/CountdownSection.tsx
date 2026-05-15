'use client';

import { useEffect, useState } from 'react';

const TARGET_ISO = '2026-07-17T18:00:00-03:00';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function CountdownSection() {
  const [parts, setParts] = useState({ days: '0', hours: '00', mins: '00', secs: '00' });

  useEffect(() => {
    const target = new Date(TARGET_ISO).getTime();
    let id: ReturnType<typeof setInterval>;

    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setParts({ days: '0', hours: '00', mins: '00', secs: '00' });
        clearInterval(id);
        return;
      }
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      setParts({
        days: String(days),
        hours: pad(hours),
        mins: pad(mins),
        secs: pad(secs),
      });
    };

    tick();
    id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="countdown-section premium-band" aria-label="Contagem regressiva">
      <div className="container countdown-shell reveal">
        <div>
          <p className="eyebrow">Contagem regressiva</p>
          <h2>O agro se encontra em Campo do Tenente</h2>
        </div>
        <div className="countdown-grid">
          <div className="count-item">
            <div className="count-num" id="cd-days">
              {parts.days}
            </div>
            <span className="count-label">Dias</span>
          </div>
          <div className="count-item">
            <div className="count-num" id="cd-hours">
              {parts.hours}
            </div>
            <span className="count-label">Horas</span>
          </div>
          <div className="count-item">
            <div className="count-num" id="cd-mins">
              {parts.mins}
            </div>
            <span className="count-label">Minutos</span>
          </div>
          <div className="count-item">
            <div className="count-num" id="cd-secs">
              {parts.secs}
            </div>
            <span className="count-label">Segundos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
