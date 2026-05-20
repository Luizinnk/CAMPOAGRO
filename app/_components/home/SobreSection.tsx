'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 20, prefix: '+', suffix: ' mil', label: 'visitantes esperados' },
  { value: 100, prefix: '+', suffix: '', label: 'expositores e marcas' },
  { value: 3, prefix: '', suffix: ' dias', label: 'de programação oficial' },
  { value: 10, prefix: '+', suffix: '', label: 'experiências e ativações' },
];

const PILLARS = [
  {
    title: 'Negócios do agro',
    text: 'Ambiente para marcas, produtores e lideranças criarem conexões comerciais reais.',
  },
  {
    title: 'Tecnologia rural',
    text: 'Máquinas, soluções, inovação aplicada e vitrines para o futuro do campo.',
  },
  {
    title: 'Experiência familiar',
    text: 'Gastronomia, shows, arena, agricultura familiar e espaços de convivência.',
  },
];

type AnimatedStatProps = {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
};

function AnimatedStat({ value, prefix, suffix, label }: AnimatedStatProps) {
  const ref = useRef<HTMLElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    let started = false;

    const animate = () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) {
        setDisplayValue(value);
        return;
      }

      const duration = 1200;
      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(value * eased));

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started) return;
        started = true;
        animate();
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <article className="about-stat" ref={ref}>
      <strong>
        {prefix}
        {displayValue}
        {suffix}
      </strong>
      <span>{label}</span>
    </article>
  );
}

export default function SobreSection() {
  return (
    <section className="sobre premium-about" id="sobre">
      <div className="container premium-about-grid">
        <div className="editorial-copy reveal">
          <div className="section-badge">Sobre o evento</div>
          <h2 className="section-title">
            Uma vitrine nacional para a força do <span className="highlight">agro brasileiro</span>
          </h2>
          <p>
            O CampoAgro 2026 posiciona Campo do Tenente no mapa dos grandes encontros agropecuários,
            unindo <mark>negócios</mark>, <mark>inovação</mark>, <mark>tradição rural</mark> e{' '}
            <mark>entretenimento</mark> em uma jornada premium.
          </p>
          <p>
            Cada seção do site foi reorganizada para vender a escala do evento: do primeiro impacto
            cinematográfico à jornada de expositores, patrocinadores, shows, mapa e galeria.
          </p>
        </div>

        <div className="about-stat-stack reveal" aria-label="Números do evento">
          {STATS.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      <div className="container about-pillars reveal">
        {PILLARS.map((pillar, index) => (
          <article className="about-pillar" key={pillar.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
