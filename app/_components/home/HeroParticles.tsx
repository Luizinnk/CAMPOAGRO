'use client';

import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';

const PARTICLE_COUNT = 18;

export default function HeroParticles() {
  const [particles, setParticles] = useState<
    { left: string; duration: string; delay: string; drift: string }[]
  >([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setParticles(
      Array.from({ length: PARTICLE_COUNT }, () => ({
        left: `${Math.random() * 100}%`,
        duration: `${8 + Math.random() * 12}s`,
        delay: `${Math.random() * 10}s`,
        drift: `${Math.random() * 100 - 50}px`,
      })),
    );
  }, []);

  return (
    <>
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={
            {
              left: p.left,
              animationDuration: p.duration,
              animationDelay: p.delay,
              ['--drift']: p.drift,
            } as CSSProperties
          }
        />
      ))}
    </>
  );
}
