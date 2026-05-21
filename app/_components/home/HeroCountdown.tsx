'use client';

import { useEffect, useState } from 'react';

import {
  HERO_COUNTDOWN_UNITS,
  getCountdownParts,
  type CountdownParts,
} from './countdown-utils';

const INITIAL: CountdownParts = {
  days: '0',
  hours: '00',
  mins: '00',
  secs: '00',
};

export default function HeroCountdown() {
  const [parts, setParts] = useState<CountdownParts>(INITIAL);

  useEffect(() => {
    setParts(getCountdownParts());
    const id = window.setInterval(() => setParts(getCountdownParts()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="premium-countdown premium-countdown--hero reveal"
      aria-label="Contagem regressiva oficial"
    >
      <div className="countdown-shell">
        <div className="countdown-copy">
          <p className="eyebrow">Abertura oficial</p>
          <h2>
            <span className="countdown-title-line">CampoAgro</span>
            <span className="countdown-title-line">2026 começa em</span>
          </h2>
          <span className="countdown-date">17 julho 2026 • 18:00h</span>
        </div>

        <div className="countdown-grid" aria-label="Tempo restante para o CampoAgro 2026">
          {HERO_COUNTDOWN_UNITS.map((unit) => (
            <div className="count-item" key={unit.key}>
              <div className="count-num" aria-live={unit.key === 'secs' ? 'off' : undefined}>
                {parts[unit.key]}
              </div>
              <span className="count-label">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
