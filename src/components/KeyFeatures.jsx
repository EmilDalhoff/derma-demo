"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function KeyFeatures() {
  const scrollContainerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  // Features data
  const features = [
    {
      image: "/Nine.svg",
      alt: "9 out of 10",
      title: "Long term sustained improvement",
      text: "9 out of 10 respondents experienced sustained disease control in clinical trials, providing sustained improvements in the burden of disease(1,2, †, 8*†‡).",
      link: "See efficacy and trial data",
      href: "#"
    },
    {
      image: "/HandHeart.svg",
      alt: "Hand with heart",
      title: "Improvements in the burden of disease",
      text: "Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements in burden of disease from week 16 to 32(1,2,3).",
      link: "Learn more about quality of life improvements",
      href: "#"
    },
    {
      image: "/HandShield.svg",
      alt: "Hand with shield",
      title: "Good safety profile",
      text: "The most common side effects were upper respiratory tract infections, conjunctivitis, injection site reactions and eosinophilia.",
      link: "See safety profile",
      href: "#"
    }
  ];

  // Scroll to specific slide
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

  // Handle scroll events to update active dot
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const slideWidth = scrollContainerRef.current.clientWidth;
      const newActiveSlide = Math.round(scrollPosition / slideWidth);
      setActiveSlide(newActiveSlide);
    }
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      const nextSlide = Math.min(activeSlide + 1, features.length - 1);
      scrollToSlide(nextSlide);
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      const prevSlide = Math.max(activeSlide - 1, 0);
      scrollToSlide(prevSlide);
    }
  };

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full snap-center px-4"
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
                  <a href={feature.href} className="text-pink-500 text-sm mt-4 hover:underline">
                    {feature.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Indicators (Dots) */}
          <div className="flex justify-center space-x-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  activeSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
       
        <div className="hidden md:flex md:flex-row md:flex-wrap md:justify-between">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center mb-4 md:mb-0 md:w-1/3 md:px-4">
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
              <a href={feature.href} className="text-pink-500 text-sm mt-4 hover:underline">
                {feature.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}