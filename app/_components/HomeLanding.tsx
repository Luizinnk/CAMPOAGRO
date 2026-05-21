import AreasSection from './home/AreasSection';
import AttractionsSection from './home/AttractionsSection';
import ExpositoresSection from './home/ExpositoresSection';
import HeroSection from './home/HeroSection';
import LoadingOverlay from './home/LoadingOverlay';
import MemoriasSection from './home/MemoriasSection';
import Navbar from './home/Navbar';
import NumbersSection from './home/NumbersSection';
import PatrocinadoresSection from './home/PatrocinadoresSection';
import ProgramacaoSection from './home/ProgramacaoSection';
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
        <NumbersSection />
        <AttractionsSection />
        <ShowsSection />
        <AreasSection />
        <ProgramacaoSection />
        <ExpositoresSection />
        <MemoriasSection />
        <PatrocinadoresSection />
      </main>
      <SiteFooter />
      <RevealOnScroll />
    </>
  );
}

