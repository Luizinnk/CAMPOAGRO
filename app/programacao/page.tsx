'use client';

import { useEffect } from 'react';

/** Deep links como /programacao → âncora na landing (única página). */
export default function ProgramacaoRedirectPage() {
  useEffect(() => {
    window.location.replace(`${window.location.origin}/#programacao`);
  }, []);

  return (
    <p style={{ padding: '2rem', color: '#f5f5f5', background: '#040404', minHeight: '100dvh', margin: 0 }}>
      A redirecionar para a programação…
    </p>
  );
}
