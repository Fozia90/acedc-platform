import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Frequences from '@/components/Frequences';
import Zones from '@/components/Zones';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Frequences />
        <Zones />
        <CTA />
      </main>
      <Footer />
    </>
  );
}