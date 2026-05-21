'use client';

import { useState } from 'react';

import ImageExperienceCard from './ImageExperienceCard';
import InfoModal, { type InfoModalContent } from './InfoModal';
import SectionHeader from './SectionHeader';

const ATTRACTIONS = [
  {
    title: 'Evento tecnológico',
    label: 'Inovação',
    summary: 'Soluções, máquinas e conhecimento aplicados ao campo.',
    src: 'https://images.pexels.com/photos/37288733/pexels-photo-37288733.jpeg?auto=compress&cs=tinysrgb&w=1400',
    details: {
      eyebrow: 'Inovação no campo',
      title: 'Evento tecnológico',
      description:
        'Um espaço para aproximar produtores, empresas e visitantes das soluções que impulsionam o agronegócio regional.',
      bullets: ['Máquinas e implementos', 'Soluções para o produtor', 'Conteúdo técnico e demonstrações'],
    },
  },
  {
    title: 'Visita em stands',
    label: 'Negócios',
    summary: 'Marcas, expositores e oportunidades em um ambiente estratégico.',
    src: 'https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=1400',
    details: {
      eyebrow: 'Relacionamento comercial',
      title: 'Visita em stands',
      description:
        'A feira cria um ambiente de contato direto entre público, empresas, produtores e instituições parceiras.',
      bullets: ['Exposição de marcas', 'Relacionamento com visitantes', 'Geração de oportunidades'],
      cta: { label: 'Quero expor', href: '#expositores' },
    },
  },
  {
    title: 'Tratoraço',
    label: 'Tradição',
    summary: 'A força do produtor rural em movimento.',
    src: 'https://images.pexels.com/photos/12670276/pexels-photo-12670276.png?auto=compress&cs=tinysrgb&w=1400',
    details: {
      eyebrow: 'Identidade rural',
      title: 'Tratoraço',
      description:
        'Uma das marcas do CampoAgro, o Tratoraço valoriza a agricultura, os produtores e a presença das máquinas na cultura local.',
      bullets: ['Desfile de tratores', 'Participação da comunidade rural', 'Celebração da tradição agrícola'],
    },
  },
  {
    title: 'Shows nacionais',
    label: 'Entretenimento',
    summary: 'Atrações musicais para conectar cidade, campo e família.',
    src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1400',
    details: {
      eyebrow: 'Arena de shows',
      title: 'Shows nacionais',
      description:
        'A programação artística amplia a experiência do visitante e transforma o CampoAgro em um encontro completo para toda a região.',
      bullets: ['Arena principal', 'Atrações musicais', 'Experiência para toda a família'],
    },
  },
];

export default function AttractionsSection() {
  const [open, setOpen] = useState<InfoModalContent | null>(null);

  return (
    <section className="premium-attractions" id="atracoes">
      <div className="container">
        <SectionHeader
          badge="Atrações"
          title={
            <>
              Experiências que conectam <span className="highlight">campo, negócios e entretenimento</span>
            </>
          }
        />

        <div className="attraction-grid attraction-grid--clean">
          {ATTRACTIONS.map((item, index) => (
            <ImageExperienceCard
              key={item.title}
              title={item.title}
              label={item.label}
              summary={item.summary}
              src={item.src}
              index={index}
              details={item.details}
              onOpen={setOpen}
            />
          ))}
        </div>
      </div>
      <InfoModal content={open} onClose={() => setOpen(null)} />
    </section>
  );
}
