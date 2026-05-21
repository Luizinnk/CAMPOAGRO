export const COUNTDOWN_TARGET_ISO = '2026-07-17T18:00:00-03:00';

export type CountdownParts = {
  days: string;
  hours: string;
  mins: string;
  secs: string;
};

export const COUNTDOWN_UNITS: Array<{ key: keyof CountdownParts; label: string }> = [
  { key: 'days', label: 'Dias' },
  { key: 'hours', label: 'Horas' },
  { key: 'mins', label: 'Minutos' },
  { key: 'secs', label: 'Segundos' },
];

/** Labels curtas para o contador no hero (melhor leitura em espaço reduzido). */
export const HERO_COUNTDOWN_UNITS: Array<{ key: keyof CountdownParts; label: string }> = [
  { key: 'days', label: 'Dias' },
  { key: 'hours', label: 'Hor' },
  { key: 'mins', label: 'Min' },
  { key: 'secs', label: 'Seg' },
];

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export function getCountdownParts(): CountdownParts {
  const target = new Date(COUNTDOWN_TARGET_ISO).getTime();
  const diff = Math.max(target - Date.now(), 0);

  return {
    days: String(Math.floor(diff / 86400000)),
    hours: pad(Math.floor((diff % 86400000) / 3600000)),
    mins: pad(Math.floor((diff % 3600000) / 60000)),
    secs: pad(Math.floor((diff % 60000) / 1000)),
  };
}
