'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import VideoPlayer from './VideoPlayer';

export default function InfoSection() {
  // State for video modal
  const [showVideo, setShowVideo] = useState(false);
  
  // Use our custom hook for element visibility
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  });
  
  // Animation classes based on visibility
  const animationClasses = isVisible 
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-10';

  return (
    <section 
      ref={sectionRef}
      className="py-10 sm:py-16 bg-gray-200 transition-all duration-700 ease-in-out"
      aria-labelledby="info-section-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Text content - with animated entrance */}
          <div 
            className={`md:w-1/2 mb-8 md:mb-0 transition duration-700 ${animationClasses} delay-100`}
          >
            <h2 
              id="info-section-heading" 
              className="text-blue-600 text-2xl md:text-3xl font-medium mb-4"
            >
              Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs and symptoms.
            </h2>
            
            <p className="text-gray-700 text-sm sm:text-base mb-6">
              By specifically targeting the IL-13 cytokine, Adtralza® inhibits the 
              interaction with type II receptors and prevents IL-13-induced 
              inflammatory responses in the skin(1,2).
            </p>
            
            <p className="text-gray-700 text-sm sm:text-base mb-6">
              Adtralza® selectively modulates the dysregulated immune system 
              by(1):
            </p>
            
            {/* Semantic list with proper spacing and focus styles */}
            <ul 
              className="mb-8 space-y-2" 
              aria-label="Benefits of Adtralza"
            >
              <li className="flex items-start">
                <span className="text-gray-500 mr-2" aria-hidden="true">—</span>
                <span className="text-black">Reducing markers of skin inflammation</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2" aria-hidden="true">—</span>
                <span className="text-black">Improving markers of skin barrier integrity</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2" aria-hidden="true">—</span>
                <span className="text-black">Reducing epidermal thickness</span>
              </li>
            </ul>
            
            <button 
              className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              onClick={() => setShowVideo(true)}
              aria-label="Watch video about how Adtralza works"
            >
              Watch the video
            </button>
            
            <p className="text-gray-500 text-xs mt-3" aria-label="Video duration">
              Duration: 2:43
            </p>
          </div>
          
          {/* Image - with animated entrance */}
          <div 
            className={`md:w-1/2 transition duration-700 ${animationClasses} delay-300`}
          >
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src="/Molecyle.png"
                alt="Visualization of IL-13 cytokine mechanism"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Modal - only shown when state is true */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 id="video-modal-title" className="text-lg font-medium">Adtralza® Mode of Action</h3>
              <button 
                onClick={() => setShowVideo(false)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                aria-label="Close video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <VideoPlayer 
                videoId="adtralza-mechanism" 
                title="Adtralza® Mode of Action"
                description="This video explains how Adtralza® works to neutralize IL-13, a key driver in atopic dermatitis."
                thumbnailUrl="/Molecyle.png"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}