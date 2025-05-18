'use client';

import { useState, useRef, useEffect } from 'react';

export default function VideoPlayer({ 
  videoId, 
  title, 
  description,
  thumbnailUrl = '/video-thumbnail-placeholder.jpg' 
}) {
  // State management with modern hooks
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [videoError, setVideoError] = useState(null);
  
  // Use refs to access DOM elements
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  
  // Load video metadata when component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
      setIsLoading(false);
    };
    
    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };
    
    const handleError = () => {
      setVideoError('Failed to load video. Please try again later.');
      setIsLoading(false);
    };
    
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('error', handleError);
  
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('error', handleError);
    };
  }, []);
  
  
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    
    if (isPlaying) {
      video.pause();
    } else {
    
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        setIsLoading(true);
        playPromise
          .then(() => {
            setIsLoading(false);
          })
          .catch(error => {
            setIsLoading(false);
            setVideoError('Failed to play video. Please try again.');
            console.error('Error playing video:', error);
          });
      }
    }
    
    setIsPlaying(!isPlaying);
  };
  
 
  const handleProgressBarClick = (e) => {
    const video = videoRef.current;
    const progressBar = progressBarRef.current;
    if (!video || !progressBar) return;
    
  
    const rect = progressBar.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width;
    

    video.currentTime = position * video.duration;
    setCurrentTime(video.currentTime);
  };
  
 
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
     
      {!isPlaying && (
        <div className="relative aspect-video">
          <img 
            src={thumbnailUrl} 
            alt={`Thumbnail for ${title}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <button
              onClick={togglePlay}
              className="bg-accent hover:bg-opacity-90 text-white rounded-full w-16 h-16 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-200"
              aria-label={`Play video: ${title}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <svg className="w-8 h-8 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
      
    
      <div className={`${isPlaying ? 'block' : 'hidden'}`}>
        <video
          ref={videoRef}
          className="w-full aspect-video"
          onClick={togglePlay}
          playsInline
          preload="metadata"
        >
          <source src={`/videos/${videoId}.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        
        <div className="bg-gray-800 text-white px-4 py-2">
        
          <div 
            ref={progressBarRef}
            className="h-2 bg-gray-600 rounded-full mb-2 cursor-pointer"
            onClick={handleProgressBarClick}
            role="progressbar"
            aria-label="Video progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={(currentTime / videoDuration) * 100 || 0}
          >
            <div 
              className="h-full bg-accent rounded-full" 
              style={{ width: `${(currentTime / videoDuration) * 100 || 0}%` }}
            ></div>
          </div>
              
          <div className="flex justify-between items-center">
            <button
              onClick={togglePlay}
              className="focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
            
            <div className="text-xs">
              <span aria-label="Current time">{formatTime(currentTime)}</span>
              <span aria-hidden="true"> / </span>
              <span aria-label="Total duration">{formatTime(videoDuration)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-white">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
      </div>
      
      {videoError && (
        <div className="p-3 bg-red-100 text-red-700 text-sm" role="alert">
          {videoError}
        </div>
      )}
    </div>
  );
}