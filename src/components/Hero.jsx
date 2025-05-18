"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function Hero({ taglines = [
  "Adtralza® is a new treatment for adult patients with moderate-to-severe atopic dermatitis (eczema) who are candidates for systemic therapy.",
  "Adtralza® offers a targeted approach to treating moderate-to-severe atopic dermatitis with proven efficacy and safety.",
  "Adtralza® specifically targets IL-13, a key driver in atopic dermatitis, providing relief for adult patients."
] }) {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Use modern useCallback for optimized function reference
  const rotateTaglines = useCallback(() => {
    setCurrentTagline(prev => (prev + 1) % taglines.length);
  }, [taglines.length]);

  // Modern useEffect with proper cleanup
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(rotateTaglines, 8000);
    
    // Cleanup function to prevent memory leaks
    return () => clearInterval(interval);
  }, [rotateTaglines]);

  return (
    <section 
      className="relative w-full" 
      aria-label="Hero section featuring Adtralza treatment information"
    >
      <div className="relative h-[300px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full">
        {/* Background image - improved for mobile through lg screens */}
        <Image
          src="/Hero.svg"
          alt="Three healthcare professionals standing together"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] sm:object-[70%_center] md:object-[70%_center] lg:object-[70%_center]" 
        />
                
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg text-white">
              <div className="mb-4 sm:mb-6 md:mb-6 lg:mb-8">
                <Image 
                  src="/Adtralza-logo.png" 
                  alt="Adtralza" 
                  width={400}
                  height={133}
                  className={`h-auto w-[100px] sm:w-[100px] md:w-[150px] lg:w-[150px] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
              
              <div 
                className="min-h-[180px] sm:min-h-[160px] md:min-h-[150px] lg:min-h-[140px]"
                aria-live="polite"
              >
                <p 
                  className={`text-sm sm:text-base md:text-lg lg:text-3xl font-light leading-relaxed md:leading-relaxed italic transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                  {taglines[currentTagline]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility enhancement: Skip link target */}
      <div id="content" className="sr-only" tabIndex={-1}>Main content starts here</div>
    </section>
  );
}