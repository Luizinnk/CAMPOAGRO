'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HASH_LINK_SECTION_IDS = [
  'sobre',
  'programacao',
  'areas',
  'memorias',
  'tratoraco',
  'patrocinadores',
  'expositores',
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = HASH_LINK_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    const updateNavState = () => {
      setScrolled(window.scrollY > 24);

      const active = [...sections]
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= 140);

      setActiveId(active?.id ?? null);
    };

    updateNavState();
    window.addEventListener('scroll', updateNavState, { passive: true });
    return () => window.removeEventListener('scroll', updateNavState);
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;

      const id = decodeURIComponent(href.slice(1));
      const dest = document.getElementById(id);
      if (!dest) return;

      e.preventDefault();
      dest.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);

      try {
        history.replaceState(null, '', href);
      } catch {
        // ignore
      }
    };

    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <nav
      id="navbar"
      className={clsx(scrolled && 'scrolled', menuOpen && 'menu-open')}
      aria-label="Navegação principal"
    >
      <a href="#home" className="nav-brand" aria-label="CampoAgro 2026 - início">
        <Image
          src="/assets/img/logo-campoagro.png"
          alt="CampoAgro Campo do Tenente"
          width={220}
          height={72}
          sizes="140px"
          quality={85}
        />
      </a>
      <ul className="nav-links">
        <li>
          <a href="#sobre" className={activeId === 'sobre' ? 'active' : undefined}>
            Evento
          </a>
        </li>
        <li>
          <a href="#programacao" className={activeId === 'programacao' ? 'active' : undefined}>
            Programação
          </a>
        </li>
        <li>
          <a href="#areas" className={activeId === 'areas' ? 'active' : undefined}>
            Áreas
          </a>
        </li>
        <li>
          <a href="#memorias" className={activeId === 'memorias' ? 'active' : undefined}>
            Galeria
          </a>
        </li>
        <li>
          <a href="#tratoraco" className={activeId === 'tratoraco' ? 'active' : undefined}>
            Tratoraço
          </a>
        </li>
        <li>
          <a href="#patrocinadores" className={activeId === 'patrocinadores' ? 'active' : undefined}>
            Parceiros
          </a>
        </li>
        <li>
          <a href="#expositores" className={activeId === 'expositores' ? 'active' : undefined}>
            Expositores
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/campoagrooficial/" className="nav-cta" target="_blank" rel="noopener">
            Instagram
          </a>
        </li>
      </ul>
      <button
        className="hamburger"
        id="hamburger"
        aria-label="Abrir menu"
        type="button"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
