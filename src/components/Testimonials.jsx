import React from 'react';
import Image from 'next/image';

export default function Testimonials() {
  // Mock video data - you can replace this with actual data
  const videos = [
    {
      id: 1,
      title: "Video title",
      description: "Short description of the contents or subject of the video. You can upload a screen from the video as thumbnail image",
      thumbnail: "/video-thumbnail-placeholder.jpg"
    },
    {
      id: 2,
      title: "Video title",
      description: "Short description of the contents or subject of the video. You can upload a screen from the video as thumbnail image",
      thumbnail: "/video-thumbnail-placeholder.jpg"
    },
    {
      id: 3,
      title: "Video title",
      description: "Short description of the contents or subject of the video. You can upload a screen from the video as thumbnail image",
      thumbnail: "/video-thumbnail-placeholder.jpg"
    },
    {
      id: 4,
      title: "Video title",
      description: "Short description of the contents or subject of the video. You can upload a screen from the video as thumbnail image",
      thumbnail: "/video-thumbnail-placeholder.jpg"
    }
  ];

  return (
    <section className="py-10 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl text-blue-600 font-light mb-2">
            KOL Videos - get expert insights here
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            See what Key Opinion Leaders have to say about their experiences with Adtralza®
          </p>
        </div>
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {videos.map((video) => (
            <div key={video.id} className="flex bg-white">
              {/* Video Thumbnail with Play Button */}
              <div className="w-1/3 relative">
                <div className="h-full relative flex items-center justify-center bg-gray-200">
                  <button 
                    className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center z-10"
                    aria-label="Play video"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="white" 
                      className="w-6 h-6"
                      style={{ marginLeft: '2px' }}
                    >
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Video Information */}
              <div className="w-2/3 p-4">
                <h3 className="text-blue-600 text-base sm:text-lg mb-1">{video.title}</h3>
                <p className="text-gray-700 text-xs sm:text-sm">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}