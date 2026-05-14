import { readFileSync } from 'node:fs';
import path from 'node:path';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const html = readFileSync(
    path.join(process.cwd(), 'public', 'index.html'),
    'utf-8'
  );

  return (
    <iframe
      title="CampoAgro 2026"
      srcDoc={html}
      sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
      style={{
        border: 0,
        display: 'block',
        width: '100%',
        height: '100dvh',
      }}
    />
  );
}
