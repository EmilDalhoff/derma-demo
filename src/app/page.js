import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import KeyFeatures from '@/components/KeyFeatures';
import InfoSection from '@/components/InfoSection';
import DoctorSection from '@/components/DoctorSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ReferencesAccordion from '@/components/Accordion';


export default function Home() {
  return (
    <>
      {/* Skip to main content link for keyboard accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <ProductShowcase />
        <KeyFeatures />
        <InfoSection />
        <DoctorSection />
        <Testimonials />
        <BackToTop />
        
        {/* Placeholder for future content */}
      </main>
      
      {/* References Accordion - just before the footer, outside of main */}
      <ReferencesAccordion />
      
      <Footer />
      
     
    </>
  );
}