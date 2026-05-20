'use client';

import { useState } from 'react';

import EventAreaCard from './EventAreaCard';
import InfoModal, { type InfoModalContent } from './InfoModal';
import SectionHeader from './SectionHeader';

const AREAS = [
  {
    number: '01',
    title: 'Exposição agropecuária',
    desc: 'Animais, genética, produtores e experiências ligadas à força rural.',
    tag: 'Campo vivo',
    tone: 'terra',
    details: {
      eyebrow: 'Campo vivo',
      title: 'Exposição agropecuária',
      description:
        'Área dedicada à presença rural, com experiências ligadas à produção, genética, produtores e valorização do campo.',
      bullets: ['Exposição rural', 'Presença de produtores', 'Valorização da identidade agropecuária'],
    },
  },
  {
    number: '02',
    title: 'Máquinas agrícolas',
    desc: 'Tratores, implementos, equipamentos e tecnologia para o campo.',
    tag: 'Tecnologia',
    tone: 'maquina',
    details: {
      eyebrow: 'Tecnologia',
      title: 'Máquinas agrícolas',
      description:
        'Espaço para máquinas, implementos e soluções que mostram a evolução tecnológica do trabalho no campo.',
      bullets: ['Tratores e implementos', 'Equipamentos para o produtor', 'Demonstração de soluções'],
    },
  },
  {
    number: '03',
    title: 'Feira de negócios',
    desc: 'Ambiente premium para marcas, vendas, relacionamento e oportunidades.',
    tag: 'Conexões',
    tone: 'negocios',
    details: {
      eyebrow: 'Conexões',
      title: 'Feira de negócios',
      description:
        'Um ambiente estratégico para relacionamento comercial, visibilidade de marca e novas oportunidades no agronegócio.',
      bullets: ['Expositores', 'Networking', 'Geração de relacionamento e vendas'],
      cta: { label: 'Falar com a organização', href: '#contato' },
    },
  },
  {
    number: '04',
    title: 'Arena de shows',
    desc: 'Palco principal com experiência visual, som, alimentação e ativações.',
    tag: 'Palco',
    tone: 'show',
    details: {
      eyebrow: 'Entretenimento',
      title: 'Arena de shows',
      description:
        'Área dedicada aos shows nacionais e à experiência do público durante a programação noturna do evento.',
      bullets: ['Palco principal', 'Shows nacionais', 'Operação para alto fluxo de visitantes'],
    },
  },
  {
    number: '05',
    title: 'Agricultura familiar',
    desc: 'Produtos locais, cooperativas, associações e valorização regional.',
    tag: 'Origem',
    tone: 'familia',
    details: {
      eyebrow: 'Origem',
      title: 'Agricultura familiar',
      description:
        'Espaço para valorizar produtores locais, cooperativas, associações e produtos que representam a região.',
      bullets: ['Produtos locais', 'Cooperativas e associações', 'Valorização regional'],
    },
  },
  {
    number: '06',
    title: 'Gastronomia',
    desc: 'Sabores do Paraná, operação organizada e áreas de convivência.',
    tag: 'Sabores',
    tone: 'gastro',
    details: {
      eyebrow: 'Convivência',
      title: 'Gastronomia',
      description:
        'Uma área para receber famílias, visitantes e parceiros com alimentação, permanência e convivência durante o evento.',
      bullets: ['Praça de alimentação', 'Sabores regionais', 'Espaços de permanência'],
    },
  },
];

export default function AreasSection() {
  const [open, setOpen] = useState<InfoModalContent | null>(null);

  return (
    <section className="areas areas-upgrade" id="areas">
      <div className="container">
        <SectionHeader
          badge="Áreas do evento"
          className="areas-head"
          title={
            <>
              Estrutura completa para viver o <span className="highlight">CampoAgro</span>
            </>
          }
          description="Uma estrutura pensada para receber produtores, visitantes, marcas, famílias e parceiros em diferentes ambientes do evento."
        />

        <div className="areas-grid areas-grid--premium">
          {AREAS.map((area) => (
            <EventAreaCard key={area.number} {...area} onOpen={setOpen} />
          ))}
        </div>
      </div>
      <InfoModal content={open} onClose={() => setOpen(null)} />
    </section>
  );
}
