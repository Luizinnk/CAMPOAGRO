import AreasSection from './home/AreasSection';
import AttractionsSection from './home/AttractionsSection';
import ContactSection from './home/ContactSection';
import ExpositoresSection from './home/ExpositoresSection';
import HeroSection from './home/HeroSection';
import LoadingOverlay from './home/LoadingOverlay';
import MapaSection from './home/MapaSection';
import MemoriasSection from './home/MemoriasSection';
import Navbar from './home/Navbar';
import PatrocinadoresSection from './home/PatrocinadoresSection';
import RevealOnScroll from './home/RevealOnScroll';
import SiteFooter from './home/SiteFooter';
import ShowsSection from './home/ShowsSection';
import SobreSection from './home/SobreSection';
import WhatsAppFloat from './home/WhatsAppFloat';

export default function HomeLanding() {
  return (
    <>
      <LoadingOverlay />
      <WhatsAppFloat />
      <Navbar />
      <main>
        <HeroSection />
        <SobreSection />
        <AttractionsSection />
        <ShowsSection />
        <ExpositoresSection />
        <AreasSection />
        <PatrocinadoresSection />
        <MapaSection />
        <MemoriasSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <RevealOnScroll />
    </>
  );
}
