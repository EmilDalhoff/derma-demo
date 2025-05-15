import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import KeyFeatures from '@/components/KeyFeatures';
import InfoSection from '@/components/InfoSection';
import DoctorSection from '@/components/DoctorSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductShowcase />
      <KeyFeatures />
      <InfoSection />
     <DoctorSection />
      <Testimonials />
      <Footer />
      <BackToTop />
    </main>
  );
}