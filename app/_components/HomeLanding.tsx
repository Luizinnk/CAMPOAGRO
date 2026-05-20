import AreasSection from './home/AreasSection';
import AttractionsSection from './home/AttractionsSection';
import ContactSection from './home/ContactSection';
import CountdownSection from './home/CountdownSection';
import ExpositoresSection from './home/ExpositoresSection';
import HeroSection from './home/HeroSection';
import LoadingOverlay from './home/LoadingOverlay';
import MapaSection from './home/MapaSection';
import MemoriasSection from './home/MemoriasSection';
import Navbar from './home/Navbar';
import NumbersSection from './home/NumbersSection';
import PatrocinadoresSection from './home/PatrocinadoresSection';
import ProgramacaoSection from './home/ProgramacaoSection';
import RevealOnScroll from './home/RevealOnScroll';
import SiteFooter from './home/SiteFooter';
import ShowsSection from './home/ShowsSection';
import SobreSection from './home/SobreSection';
import TratoracoSection from './home/TratoracoSection';
import WhatsAppFloat from './home/WhatsAppFloat';

export default function HomeLanding() {
  return (
    <>
      <LoadingOverlay />
      <WhatsAppFloat />
      <Navbar />
      <main>
        <HeroSection />
        <CountdownSection />
        <SobreSection />
        <NumbersSection />
        <AttractionsSection />
        <AreasSection />
        <ShowsSection />
        <ProgramacaoSection />
        <TratoracoSection />
        <ExpositoresSection />
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
