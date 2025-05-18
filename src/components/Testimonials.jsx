'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import VideoPlayer from './VideoPlayer';

export default function Testimonials() {
  // State for the selected video
  const [activeVideo, setActiveVideo] = useState(null);
  
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  
 
  const videos = [
    {
      id: "video-1",
      title: "Efficacy in Moderate-to-Severe AD",
      description: "Dr. Johnson discusses the clinical efficacy of Adtralza in treating moderate-to-severe atopic dermatitis patients.",
      thumbnail: "/video-thumbnail-placeholder.jpg",
      duration: "4:26",
      doctor: {
        name: "Dr. Sarah Johnson",
        specialty: "Dermatology",
        hospital: "University Medical Center"
      }
    },
    {
      id: "video-2",
      title: "Safety Profile & Patient Selection",
      description: "An overview of Adtralza's safety profile and identifying appropriate candidates for treatment.",
      thumbnail: "/video-thumbnail-placeholder.jpg",
      duration: "3:15",
      doctor: {
        name: "Dr. Michael Chen",
        specialty: "Clinical Immunology",
        hospital: "Metropolitan Hospital"
      }
    },
    {
      id: "video-3",
      title: "Long-term Management with Adtralza",
      description: "Discussion on the benefits of Adtralza in long-term atopic dermatitis management strategies.",
      thumbnail: "/video-thumbnail-placeholder.jpg",
      duration: "5:08",
      doctor: {
        name: "Dr. Maria Rodriguez",
        specialty: "Dermatology",
        hospital: "Advanced Skin Clinic"
      }
    },
    {
      id: "video-4",
      title: "Patient Quality of Life Improvements",
      description: "Real-world observations on quality of life improvements for patients using Adtralza.",
      thumbnail: "/video-thumbnail-placeholder.jpg",
      duration: "3:42",
      doctor: {
        name: "Dr. Thomas Wilson",
        specialty: "Dermatology",
        hospital: "Regional Medical Center"
      }
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-10 sm:py-16 bg-gray-100 transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-6 sm:mb-10">
          <h2 
            id="testimonials-heading"
            className="text-2xl sm:text-3xl text-blue-600 font-light mb-2"
          >
            KOL Videos - get expert insights here
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            See what Key Opinion Leaders have to say about their experiences with Adtralza®
          </p>
        </div>
        
        {activeVideo && (
          <div className="mb-8 md:mb-12">
            <h3 className="text-xl text-primary font-light mb-4">Featured Expert Opinion</h3>
            <div className="max-w-3xl mx-auto">
              <VideoPlayer 
                videoId={activeVideo}
                title={videos.find(v => v.id === activeVideo)?.title || ""}
                description={videos.find(v => v.id === activeVideo)?.description}
                thumbnailUrl={videos.find(v => v.id === activeVideo)?.thumbnail}
              />
              <div className="mt-4 text-center">
                <button 
                  onClick={() => setActiveVideo(null)}
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Close video and view all
                </button>
              </div>
            </div>
          </div>
        )}
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          role="list"
          aria-label="Expert video testimonials"
        >
          {videos.map((video) => (
            <article 
              key={video.id} 
              className={`flex bg-white rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:shadow-lg ${
                activeVideo === video.id ? 'ring-2 ring-primary' : ''
              }`}
              role="listitem"
            >
              <div className="w-1/3 relative">
                <div className="h-full relative flex items-center justify-center bg-gray-200">
                  <img 
                    src={video.thumbnail} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-hidden="true"
                  />
                  <button 
                    className="w-12 h-12 rounded-full bg-pink-500 hover:bg-pink-600 flex items-center justify-center z-10 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                    aria-label={`Play video: ${video.title}`}
                    onClick={() => setActiveVideo(video.id)}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="white" 
                      className="w-6 h-6"
                      style={{ marginLeft: '2px' }}
                      aria-hidden="true"
                    >
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              
          
              <div className="w-2/3 p-4">
                <h3 className="text-blue-600 text-base sm:text-lg mb-1 font-medium">
                  {video.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm mb-2">
                  {video.description}
                </p>
                <div className="mt-auto">
                  <p className="text-xs text-gray-500 mt-2 flex items-center">
                    <span className="inline-block mr-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </span>
                    Duration: {video.duration}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {video.doctor.name} - {video.doctor.specialty}
                    {video.doctor.hospital && `, ${video.doctor.hospital}`}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}