import { Suspense } from 'react';

import ExpositoresForm from './ExpositoresForm';

const BENEFITS = [
  'Stands premium',
  'Ativações de marca',
  'Networking regional',
  'Visibilidade institucional',
  'Público qualificado',
  'Negócios no campo',
];

export default function ExpositoresSection() {
  return (
    <section className="expositor-section premium-exhibitors" id="expositores">
      <div className="container expositor-grid">
        <div className="reveal">
          <div className="section-badge">Expositores</div>
          <h2 className="section-title">
            Sua marca no centro dos <span className="highlight">negócios do agro</span>
          </h2>
          <p className="section-lead">
            Posicione sua marca em um ambiente estratégico para gerar relacionamento, visibilidade e novas
            oportunidades no agro. Também atendemos patrocínio e ingressos pelo formulário ao lado.
          </p>
          <div className="expo-benefits">
            {BENEFITS.map((benefit) => (
              <span key={benefit}>{benefit}</span>
            ))}
          </div>
        </div>
        <Suspense fallback={<div className="premium-form reveal" aria-hidden />}>
          <ExpositoresForm />
        </Suspense>
      </div>
    </section>
  );
}
