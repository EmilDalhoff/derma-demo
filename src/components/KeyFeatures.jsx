'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function KeyFeatures() {
 
  const [sectionRef, isVisible] = useIntersectionObserver({ 
    threshold: 0.2, 
    triggerOnce: true 
  });
  
  const scrollContainerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const features = [
    {
      id: 'sustained-improvement',
      image: "/Nine.svg",
      alt: "9 out of 10",
      title: "Long term sustained improvement",
      text: "9 out of 10 respondents experienced sustained disease control in clinical trials, providing sustained improvements in the burden of disease(1,2, †, 8*†‡).",
      link: "See efficacy and trial data",
      href: "#efficacy"
    },
    {
      id: 'disease-burden',
      image: "/HandHeart.svg",
      alt: "Hand with heart",
      title: "Improvements in the burden of disease",
      text: "Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements in burden of disease from week 16 to 32(1,2,3).",
      link: "Learn more about quality of life improvements",
      href: "#quality-of-life"
    },
    {
      id: 'safety-profile',
      image: "/HandShield.svg",
      alt: "Hand with shield",
      title: "Good safety profile",
      text: "The most common side effects were upper respiratory tract infections, conjunctivitis, injection site reactions and eosinophilia.",
      link: "See safety profile",
      href: "#safety"
    }
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile, { passive: true });
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  
  const scrollToSlide = (index) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setActiveSlide(index);
    }
  };

 
  const handleKeydown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSlide(index);
    }
  };

  
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const slideWidth = scrollContainerRef.current.clientWidth;
      const newActiveSlide = Math.round(scrollPosition / slideWidth);
      setActiveSlide(newActiveSlide);
    }
  };

 
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      
      const nextSlide = Math.min(activeSlide + 1, features.length - 1);
      scrollToSlide(nextSlide);
    }

    if (touchStart - touchEnd < -50) {
      
      const prevSlide = Math.max(activeSlide - 1, 0);
      scrollToSlide(prevSlide);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-10 sm:py-16 bg-white transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-labelledby="key-features-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 
          id="key-features-heading" 
          className="text-2xl sm:text-3xl text-primary font-light mb-8 text-center"
        >
          Key Benefits of Adtralza
        </h2>
        
      
        <div className="md:hidden relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-label="Feature carousel"
          >
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                className="flex-shrink-0 w-full snap-center px-4"
                id={feature.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${features.length}`}
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={180}
                    height={184}
                    className="mb-6"
                  />
                  <h3 className="text-blue-600 text-xl font-light text-center italic mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base text-center">
                    {feature.text}
                  </p>
                  <a 
                    href={feature.href} 
                    className="text-pink-500 text-sm mt-4 hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm"
                  >
                    {feature.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          
          <div 
            className="flex justify-center space-x-2 mt-6" 
            role="tablist" 
            aria-label="Feature slides"
          >
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                onKeyDown={(e) => handleKeydown(e, index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  activeSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                role="tab"
                aria-selected={activeSlide === index}
                aria-controls={feature.id}
                tabIndex={activeSlide === index ? 0 : -1}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
    
        <div className="hidden md:flex md:flex-row md:flex-wrap md:justify-between">
          {features.map((feature) => (
            <article 
              key={feature.id} 
              className="flex flex-col items-center mb-4 md:mb-0 md:w-1/3 md:px-4 transform transition-transform duration-500 hover:scale-105"
              id={feature.id}
            >
              <Image
                src={feature.image}
                alt={feature.alt}
                width={180}
                height={184}
                className="mb-6"
              />
              <h3 className="text-blue-600 text-xl font-light text-center italic mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base text-center">
                {feature.text}
              </p>
              <a 
                href={feature.href} 
                className="text-pink-500 text-sm mt-4 hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm"
                aria-labelledby={`read-more-${feature.id}`}
              >
                <span id={`read-more-${feature.id}`}>{feature.link}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}