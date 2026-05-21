'use client';

import { useEffect } from 'react';

const STAGGER_MS = 80;

export default function RevealOnScroll() {
  useEffect(() => {
    const seen = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (!entry.isIntersecting || entry.target.classList.contains('visible')) return;
          window.setTimeout(() => entry.target.classList.add('visible'), index * STAGGER_MS);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -4% 0px' },
    );

    const observeNew = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        observer.observe(el);
      });
    };

    observeNew();

    const mutation = new MutationObserver(observeNew);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
