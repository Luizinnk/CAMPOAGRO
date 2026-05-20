'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import InfoModal, { type InfoModalContent } from './InfoModal';
import SectionHeader from './SectionHeader';

const CARDS: Array<{
  variant: 'featured' | 'small';
  src: string;
  title: string;
  category: string;
  summary: string;
  details: InfoModalContent;
}> = [
  {
    variant: 'featured',
    src: '/img/memorias/campoagro-2023-palestras.jpg',
    title: 'O início da história',
    category: '1ª edição • 2023',
    summary: 'Palestras, produtores e empresas deram origem ao CampoAgro.',
    details: {
      eyebrow: '1ª Festa CampoAgro',
      title: 'O início da história',
      description:
        'A primeira edição da CampoAgro reuniu palestras técnicas, especialistas, produtores rurais e empresas para fortalecer o conhecimento e a conexão do agro em Campo do Tenente.',
      bullets: ['Palestras técnicas', 'Participação de produtores', 'Apoio de empresas do setor'],
    },
  },
  {
    variant: 'small',
    src: '/img/memorias/campoagro-2023-tratoraco-01.jpg',
    title: '1º Tratoraço',
    category: 'Tradição rural',
    summary: 'Máquinas e produtores na avenida.',
    details: {
      eyebrow: 'Tratoraço',
      title: '1º Tratoraço',
      description:
        'O primeiro Tratoraço marcou a identidade rural do evento, levando a força do produtor e das máquinas agrícolas para a programação da cidade.',
      bullets: ['Desfile de tratores', 'Valorização do produtor rural', 'Celebração da tradição agrícola'],
    },
  },
  {
    variant: 'small',
    src: '/img/memorias/campoagro-2023-tratoraco-02.jpg',
    title: 'Campo em movimento',
    category: '1ª edição',
    summary: 'Registros da tradição que virou marca.',
    details: {
      eyebrow: 'Memória rural',
      title: 'Campo em movimento',
      description:
        'Os registros da primeira edição mostram a força comunitária que ajudou a transformar o CampoAgro em um evento de identidade própria.',
      bullets: ['Comunidade presente', 'Máquinas agrícolas', 'Orgulho rural'],
    },
  },
  {
    variant: 'small',
    src: '/img/memorias/campoagro-2025-banner.jpeg',
    title: '2ª edição ampliada',
    category: 'CampoAgro',
    summary: 'Feira, empresas, shows e programação regional.',
    details: {
      eyebrow: '2ª edição',
      title: '2ª edição ampliada',
      description:
        'A segunda edição ampliou a estrutura do evento, reunindo empresas, expositores, shows nacionais e programação para diferentes públicos.',
      bullets: ['Mais de 50 empresas', 'Shows nacionais', 'Tratoraço e feira de negócios'],
    },
  },
  {
    variant: 'small',
    src: '/img/memorias/campoagro-2025-evento.jfif',
    title: 'Stands e conexões',
    category: 'Negócios',
    summary: 'Marcas e visitantes em relacionamento direto.',
    details: {
      eyebrow: 'Feira de negócios',
      title: 'Stands e conexões',
      description:
        'A área de expositores fortaleceu o relacionamento entre marcas, produtores e visitantes, ampliando as oportunidades comerciais do evento.',
      bullets: ['Visibilidade para marcas', 'Contato com público qualificado', 'Ambiente de relacionamento'],
    },
  },
];

export default function MemoriasSection() {
  const [open, setOpen] = useState<InfoModalContent | null>(null);

  return (
    <section className="memorias-section" id="memorias">
      <div className="container">
        <SectionHeader
          badge="Memória CampoAgro"
          className="memorias-head"
          title={
            <>
              A trajetória que prepara a <span className="highlight">3ª edição</span>
            </>
          }
          description="Registros oficiais da primeira edição, do Tratoraço e da expansão do evento, mostrando como o CampoAgro cresceu com produtores, empresas, cidade e público."
        />

        <div className="memory-editorial-grid">
          {CARDS.map((card) => (
            <article
              className={clsx('editorial-card', 'reveal', card.variant === 'featured' && 'editorial-card--featured')}
              key={card.src}
            >
              <Image
                src={card.src}
                alt={card.title}
                fill
                sizes={card.variant === 'featured' ? '(max-width: 900px) 100vw, 54vw' : '(max-width: 900px) 100vw, 23vw'}
                quality={84}
                className="object-cover"
              />
              <span className="editorial-category">{card.category}</span>
              <div className="editorial-card-footer">
                <strong>{card.title}</strong>
                <p>{card.summary}</p>
                <button type="button" onClick={() => setOpen(card.details)}>
                  Ler mais
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <InfoModal content={open} onClose={() => setOpen(null)} />
    </section>
  );
}
