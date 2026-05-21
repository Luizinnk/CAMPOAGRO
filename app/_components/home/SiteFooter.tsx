import Image from 'next/image';

import CookiePrefsButton from '@/app/_components/consent/CookiePrefsButton';

export default function SiteFooter() {
  return (
    <footer className="premium-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image
            className="footer-logo"
            src="/img/logo-campoagro.png"
            alt="CampoAgro Campo do Tenente"
            width={220}
            height={72}
            sizes="180px"
            quality={88}
          />
          <p>Evento oficial do agro, inovação rural, negócios e entretenimento em Campo do Tenente, Paraná.</p>
        </div>
        <div>
          <h3>Experiência</h3>
          <a href="#sobre">Sobre</a>
          <a href="#atracoes">Atrações</a>
          <a href="#programacao">Programação</a>
          <a href="#areas">Áreas</a>
        </div>
        <div>
          <h3>Participe</h3>
          <a href="#expositores">Expositores</a>
          <a href="#patrocinadores">Patrocinadores</a>
          <a href="https://www.instagram.com/campoagrooficial/" target="_blank" rel="noopener">
            Instagram oficial
          </a>
        </div>
        <div>
          <h3>CAMPOAGRO 2026</h3>
          <p>
            17 a 19 de julho de 2026
            <br />
            Campo do Tenente - PR
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 CampoAgro. Todos os direitos reservados.
        {' · '}
        <a href="/privacidade" style={{ color: 'inherit', opacity: 0.6, textDecoration: 'underline' }}>
          Privacidade
        </a>
        {' · '}
        <CookiePrefsButton />
      </div>
    </footer>
  );
}
