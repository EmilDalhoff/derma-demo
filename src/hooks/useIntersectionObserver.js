'use client';

import { useState, useEffect, useRef } from 'react';

export function useIntersectionObserver(options = {}) {
  const { 
    root = null, 
    rootMargin = '0px', 
    threshold = 0.1,
    triggerOnce = false 
  } = options;
  
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // If element has been observed and we only want to trigger once, unobserve
        if (triggerOnce && entry.isIntersecting) {
          observer.unobserve(element);
        }
      },
      { root, rootMargin, threshold }
    );
    
    observer.observe(element);
    
    // Clean up observer on component unmount
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [root, rootMargin, threshold, triggerOnce]);
  
  return [ref, isIntersecting];
}

// Custom hook for detecting if user has scrolled
export function useScrollDetection(threshold = 100) {
  const [hasScrolled, setHasScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > threshold);
    };
    
    // Add event listener with passive option for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);
  
  return hasScrolled;
}

// Hook for detecting preferred color scheme
export function usePrefersDarkMode() {
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);
  
  useEffect(() => {
    // Check initial preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setPrefersDarkMode(mediaQuery.matches);
    
    // Add listener for changes
    const handler = (e) => {
      setPrefersDarkMode(e.matches);
    };
    
    mediaQuery.addEventListener('change', handler);
    
    // Clean up
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  return prefersDarkMode;
}