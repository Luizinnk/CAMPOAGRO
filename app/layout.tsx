import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CampoAgro 2026 | Plantando na terra a semente do futuro',
  description:
    'CampoAgro 2026 - O maior encontro do agronegócio e agricultura familiar da região Sul. Campo do Tenente, PR.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
