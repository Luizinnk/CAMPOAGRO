'use client';

import clsx from 'clsx';
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const HASH_LINK_SECTION_IDS = [
  'sobre',
  'atracoes',
  'shows',
  'expositores',
  'mapa',
  'memorias',
  'contato',
] as const;

const SECTION_GAP_PX = 14;
const SPY_TOLERANCE_PX = 18;

function getNavScrollOffset(): number {
  const nav = document.getElementById('navbar');
  if (!nav) return 94;
  return Math.ceil(nav.getBoundingClientRect().bottom) + SECTION_GAP_PX;
}

function getSectionAnchor(section: HTMLElement): HTMLElement {
  return section.querySelector<HTMLElement>('.section-head, .partners-hero, .editorial-copy, .contact-panel') ?? section;
}

function scrollToAnchorSection(section: HTMLElement, behavior: ScrollBehavior = 'smooth') {
  const anchor = getSectionAnchor(section);
  const top = anchor.getBoundingClientRect().top + window.scrollY - getNavScrollOffset();
  window.scrollTo({ top: Math.max(0, top), behavior });
}

function findActiveSection(sections: HTMLElement[]): string | null {
  const line = getNavScrollOffset() + SPY_TOLERANCE_PX;
  let active: HTMLElement | null = null;
  let bestTop = -Infinity;

  for (const section of sections) {
    const top = getSectionAnchor(section).getBoundingClientRect().top;
    if (top <= line && top > bestTop) {
      bestTop = top;
      active = section;
    }
  }

  return active?.id ?? null;
}

function isHashSectionId(id: string): id is (typeof HASH_LINK_SECTION_IDS)[number] {
  return (HASH_LINK_SECTION_IDS as readonly string[]).includes(id);
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const pendingNavId = useRef<string | null>(null);

  useEffect(() => {
    const sections = HASH_LINK_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    const updateNavState = () => {
      setScrolled(window.scrollY > 18);
      if (pendingNavId.current) return;
      setActiveId(findActiveSection(sections));
    };

    updateNavState();
    window.addEventListener('scroll', updateNavState, { passive: true });
    window.addEventListener('resize', updateNavState, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateNavState);
      window.removeEventListener('resize', updateNavState);
    };
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;

      const id = decodeURIComponent(href.slice(1));
      if (!isHashSectionId(id)) return;

      const dest = document.getElementById(id);
      if (!dest) return;

      e.preventDefault();
      pendingNavId.current = id;
      setActiveId(id);
      scrollToAnchorSection(dest);
      setMenuOpen(false);

      window.setTimeout(() => {
        const targetId = pendingNavId.current;
        pendingNavId.current = null;
        if (targetId) setActiveId(targetId);
      }, 760);

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
      className={clsx('site-nav-premium header-reference', scrolled && 'scrolled', menuOpen && 'menu-open')}
      aria-label="Navegação principal"
    >
      <a href="#home" className="nav-brand" aria-label="CampoAgro 2026 - início">
        <Image
          src="/img/logo-campoagro.png"
          alt="CampoAgro Campo do Tenente"
          width={220}
          height={72}
          sizes="180px"
          quality={88}
          priority
        />
      </a>
      <ul className="nav-links">
        {[
          ['sobre', 'O evento'],
          ['atracoes', 'Atrações'],
          ['expositores', 'Expositores'],
          ['mapa', 'Mapa'],
          ['memorias', 'Memória'],
          ['contato', 'Contato'],
        ].map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`} className={activeId === id ? 'active' : undefined}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="https://www.instagram.com/campoagrooficial/"
        className="nav-buy nav-instagram"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram oficial CampoAgro (abre em nova aba)"
      >
        <Instagram className="nav-instagram-icon" aria-hidden />
        <span className="nav-instagram-sep" aria-hidden>
          |
        </span>
        <span>Instagram</span>
      </a>
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
