'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

type TabId = 'prog-sexta' | 'prog-sabado' | 'prog-domingo';

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
          <button
            type="button"
            className={clsx('prog-tab', active === 'prog-sexta' && 'active')}
            aria-selected={active === 'prog-sexta'}
            onClick={() => setActive('prog-sexta')}
          >
            Sexta · 17/07
          </button>
          <button
            type="button"
            className={clsx('prog-tab', active === 'prog-sabado' && 'active')}
            aria-selected={active === 'prog-sabado'}
            onClick={() => setActive('prog-sabado')}
          >
            Sábado · 18/07
          </button>
          <button
            type="button"
            className={clsx('prog-tab', active === 'prog-domingo' && 'active')}
            aria-selected={active === 'prog-domingo'}
            onClick={() => setActive('prog-domingo')}
          >
            Domingo · 19/07
          </button>
        </div>
        <div id="prog-sexta" className={clsx('prog-content', active === 'prog-sexta' && 'active')}>
          <div className="timeline">
            <article className="tl-item reveal">
              <div className="tl-time">14h</div>
              <div>
                <h3 className="tl-title">Abertura da feira e visitação aos estandes</h3>
                <p className="tl-desc">
                  Expositores, máquinas, agricultura familiar, gastronomia e ativações de parceiros.
                </p>
              </div>
              <span className="tl-badge">Feira</span>
            </article>
            <article className="tl-item reveal">
              <div className="tl-time">19h</div>
              <div>
                <h3 className="tl-title">Cerimônia oficial CAMPOAGRO 2026</h3>
                <p className="tl-desc">
                  Abertura institucional com autoridades, patrocinadores e lideranças do agro regional.
                </p>
              </div>
              <span className="tl-badge">Oficial</span>
            </article>
            <article className="tl-item reveal">
              <div className="tl-time">22h</div>
              <div>
                <h3 className="tl-title">Palco principal · atração a confirmar</h3>
                <p className="tl-desc">Novidades serão publicadas nos canais oficiais do evento.</p>
              </div>
              <span className="tl-badge">Show</span>
            </article>
          </div>
        </div>
        <div id="prog-sabado" className={clsx('prog-content', active === 'prog-sabado' && 'active')}>
          <div className="timeline">
            <article className="tl-item reveal">
              <div className="tl-time">10h</div>
              <div>
                <h3 className="tl-title">Exposição agropecuária e feira de negócios</h3>
                <p className="tl-desc">
                  Demonstrações, networking, estandes comerciais e experiências para toda a família.
                </p>
              </div>
              <span className="tl-badge">Negócios</span>
            </article>
            <article className="tl-item reveal">
              <div className="tl-time">16h</div>
              <div>
                <h3 className="tl-title">Tratoraço CampoAgro</h3>
                <p className="tl-desc">
                  Desfile de tratores, produtores e famílias celebrando a identidade rural da região.
                </p>
              </div>
              <span className="tl-badge">Tradição</span>
            </article>
            <article className="tl-item reveal">
              <div className="tl-time">22h</div>
              <div>
                <h3 className="tl-title">João Nelore e Texano</h3>
                <p className="tl-desc">Embaixadores do evento no palco principal.</p>
              </div>
              <span className="tl-badge">Show confirmado</span>
            </article>
          </div>
        </div>
        <div id="prog-domingo" className={clsx('prog-content', active === 'prog-domingo' && 'active')}>
          <div className="timeline">
            <article className="tl-item reveal">
              <div className="tl-time">09h</div>
              <div>
                <h3 className="tl-title">Programação familiar e experiências do campo</h3>
                <p className="tl-desc">
                  Conteúdos, praça gastronômica, áreas temáticas e visitação aos expositores.
                </p>
              </div>
              <span className="tl-badge">Família</span>
            </article>
            <article className="tl-item reveal">
              <div className="tl-time">18h</div>
              <div>
                <h3 className="tl-title">Encerramento institucional</h3>
                <p className="tl-desc">
                  Celebração dos parceiros, expositores e produtores que fazem o CampoAgro acontecer.
                </p>
              </div>
              <span className="tl-badge">Oficial</span>
            </article>
            <article className="tl-item reveal">
              <div className="tl-time">21h</div>
              <div>
                <h3 className="tl-title">Luan Pereira</h3>
                <p className="tl-desc">
                  Show de encerramento com um dos grandes nomes do agronejo nacional.
                </p>
              </div>
              <span className="tl-badge">Show confirmado</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
