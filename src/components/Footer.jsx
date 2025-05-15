import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Logo and Copyright Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-8 sm:mb-12">
         
          <div className="mb-6 sm:mb-0">
            <Image 
              src="/Leo.svg" 
              alt="LEO Pharma Logo" 
              width={120} 
              height={60} 
            />
          </div>
          
          {/* Copyright Info */}
          <div className=" text-xs sm:text-sm text-center sm:text-right">
            <p className="mb-1">© Copyright LEO Pharma 2020</p>
            <p className="mb-1">LEO and the LEO Lion Design</p>
            <p className="mb-1">are registered trademarks</p>
            <p className="mb-1">of LEO Pharma</p>
            <p className="mb-1">All rights reserved</p>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-center   pt-6">
          <nav className="flex flex-wrap justify-center">
            <Link 
              href="/contact" 
              className="mx-2 sm:mx-4 text-sm sm:text-base hover:underline mb-2 sm:mb-0"
            >
              Contact
            </Link>
            <span className="hidden sm:inline mx-1">|</span>
            <Link 
              href="/imprint" 
              className="mx-2 sm:mx-4 text-sm sm:text-base hover:underline mb-2 sm:mb-0"
            >
              Imprint
            </Link>
            <span className="hidden sm:inline mx-1">|</span>
            <Link 
              href="/conditions" 
              className="mx-2 sm:mx-4 text-sm sm:text-base hover:underline mb-2 sm:mb-0"
            >
              Conditions
            </Link>
            <span className="hidden sm:inline mx-1">|</span>
            <Link 
              href="/terms" 
              className="mx-2 sm:mx-4 text-sm sm:text-base hover:underline mb-2 sm:mb-0"
            >
              Terms of use
            </Link>
            <span className="hidden sm:inline mx-1">|</span>
            <Link 
              href="/privacy" 
              className="mx-2 sm:mx-4 text-sm sm:text-base hover:underline mb-2 sm:mb-0"
            >
              Privacy
            </Link>
            <span className="hidden sm:inline mx-1">|</span>
            <Link 
              href="/cookie" 
              className="mx-2 sm:mx-4 text-sm sm:text-base hover:underline mb-2 sm:mb-0"
            >
              Cookie content
            </Link>
          </nav>
        </div>
        
        {/* Corporate Website Link */}
        <div className="text-center sm:text-right mt-6">
          <Link 
            href="https://www.leo-pharma.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs sm:text-sm hover:underline"
          >
            LEO Pharma corporate website
          </Link>
        </div>
      </div>
    </footer>
  );
}