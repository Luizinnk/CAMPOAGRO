'use client';

import { useEffect, useState } from 'react';

const TARGET_ISO = '2026-07-17T18:00:00-03:00';

type CountdownParts = {
  days: string;
  hours: string;
  mins: string;
  secs: string;
};

const UNITS: Array<{ key: keyof CountdownParts; label: string }> = [
  { key: 'days', label: 'Dias' },
  { key: 'hours', label: 'Horas' },
  { key: 'mins', label: 'Minutos' },
  { key: 'secs', label: 'Segundos' },
];

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function getCountdownParts(): CountdownParts {
  const target = new Date(TARGET_ISO).getTime();
  const diff = Math.max(target - Date.now(), 0);

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  return {
    days: String(days),
    hours: pad(hours),
    mins: pad(mins),
    secs: pad(secs),
  };
}

export default function CountdownSection() {
  const [parts, setParts] = useState<CountdownParts>(() => ({
    days: '0',
    hours: '00',
    mins: '00',
    secs: '00',
  }));

  useEffect(() => {
    setParts(getCountdownParts());
    const id = window.setInterval(() => setParts(getCountdownParts()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="countdown-section premium-countdown" aria-label="Contagem regressiva oficial">
      <div className="container countdown-shell reveal">
        <div className="countdown-copy">
          <p className="eyebrow">Contagem regressiva oficial</p>
          <h2>A contagem para o maior evento agro da região já começou</h2>
          <span className="countdown-date">17 julho 2026 • 18:00h</span>
        </div>

        <div className="countdown-grid" aria-label="Tempo restante para o CampoAgro 2026">
          {UNITS.map((unit) => (
            <div className="count-item" key={unit.key}>
              <div className="count-num" aria-live={unit.key === 'secs' ? 'off' : undefined}>
                {parts[unit.key]}
              </div>
              <span className="count-label">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
