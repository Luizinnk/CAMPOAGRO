'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

type TabId = 'prog-sexta' | 'prog-sabado' | 'prog-domingo';

type ScheduleItem = {
  time: string;
  title: string;
  badge: string;
};

const SCHEDULE: Record<TabId, ScheduleItem[]> = {
  'prog-sexta': [
    {
      time: '18h',
      title: 'Abertura do Evento e Confraternização dos expositores no pavilhão de Palestras',
      badge: 'Oficial',
    },
    {
      time: '19h',
      title: 'Escolha da garota CAMPOAGRO 2026',
      badge: 'Concurso',
    },
    {
      time: '20h',
      title: 'Coffee Break',
      badge: 'Intervalo',
    },
    {
      time: '21h',
      title: 'Início das Apresentações no Palco de Show Principal',
      badge: 'Palco',
    },
    {
      time: '23h',
      title: 'Show Nacional',
      badge: 'Show',
    },
    {
      time: '01h',
      title: 'Fechamento do Parque de Eventos',
      badge: 'Encerramento',
    },
  ],
  'prog-sabado': [
    {
      time: '13h',
      title: 'Abertura oficial da feira de agronegócios',
      badge: 'Feira',
    },
    {
      time: '14h',
      title: 'Abertura do Playground para Crianças',
      badge: 'Família',
    },
    {
      time: '19h',
      title: 'Sessão de fotos e autógrafos com João Nelore e Texano - Pavilhão Principal',
      badge: 'Encontro',
    },
    {
      time: '21h',
      title: 'Encerramento da feira de agronegócios',
      badge: 'Feira',
    },
    {
      time: '21h30',
      title: 'Início das Apresentações no Palco de Show Principal',
      badge: 'Palco',
    },
    {
      time: '23h30',
      title: 'Show Nacional com João Nelore e Texano',
      badge: 'Show confirmado',
    },
    {
      time: '02h',
      title: 'Fechamento do Parque de Eventos',
      badge: 'Encerramento',
    },
  ],
  'prog-domingo': [
    {
      time: '09h',
      title: 'Abertura oficial da feira de agronegócios',
      badge: 'Feira',
    },
    {
      time: '09h30',
      title: 'Tratoraço 2026 com a Benção dos equipamentos (Saída - Posto M7)',
      badge: 'Tratoraço',
    },
    {
      time: '12h',
      title: 'Almoço Costela a Fogo de Chão',
      badge: 'Gastronomia',
    },
    {
      time: '14h',
      title: 'Abertura do Playground para Crianças',
      badge: 'Família',
    },
    {
      time: '19h',
      title: 'Encerramento da feira de agronegócios',
      badge: 'Feira',
    },
    {
      time: '20h',
      title: 'Início das Apresentações no Palco de Show Principal',
      badge: 'Palco',
    },
    {
      time: '22h',
      title: 'Show de Encerramento com Luan Pereira',
      badge: 'Show confirmado',
    },
    {
      time: '00h30',
      title: 'Fechamento do Parque de Eventos',
      badge: 'Encerramento',
    },
  ],
};

const TABS: { id: TabId; label: string }[] = [
  { id: 'prog-sexta', label: 'Sexta · 17/07' },
  { id: 'prog-sabado', label: 'Sábado · 18/07' },
  { id: 'prog-domingo', label: 'Domingo · 19/07' },
];

export default function ProgramacaoSection() {
  const [active, setActive] = useState<TabId>('prog-sexta');

  useEffect(() => {
    const root = document.getElementById(active);
    root?.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('visible');
    });
  }, [active]);

  return (
    <section className="programacao" id="programacao">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-badge">Agenda oficial</div>
          <h2 className="section-title">
            Programação <span className="highlight">2026</span>
          </h2>
          <p>Uma agenda clara para acompanhar feira, arena, experiências, Tratoraço e grandes atrações.</p>
        </div>
        <div className="prog-tabs reveal" role="tablist" aria-label="Dias da programação">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={clsx('prog-tab', active === tab.id && 'active')}
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {TABS.map((tab) => (
          <div key={tab.id} id={tab.id} className={clsx('prog-content', active === tab.id && 'active')}>
            <div className="timeline">
              {SCHEDULE[tab.id].map((item) => (
                <article key={`${tab.id}-${item.time}-${item.title}`} className="tl-item reveal">
                  <div className="tl-time">{item.time}</div>
                  <div>
                    <h3 className="tl-title">{item.title}</h3>
                  </div>
                  <span className="tl-badge">{item.badge}</span>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
