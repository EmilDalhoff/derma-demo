// src/components/Header.js
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMainNav, setActiveMainNav] = useState(null); // For first nav
  const [activeSecondaryNav, setActiveSecondaryNav] = useState(null); // For second nav
  const [activeDetailNav, setActiveDetailNav] = useState("Overview"); // For third nav
  
  // Define navigation data structure
  const navItems = [
    {
      name: "Bedingungen",
      treatments: ["Adtralza", "Diavonex", "Diavobel", "Enstilar", "Fucidin", "Kyntheum", "Xamiol", "Tralokinumab", "Skinoren", "Protopic"],
    },
    {
      name: "Behandlungen",
      treatments: ["Kyntheum", "Protopic", "Skinoren", "Tralokinumab", "Xamiol"],
    },
    {
      name: "Veranstaltungen",
      treatments: [],
    },
    {
      name: "Werkzeuge",
      treatments: [],
    },
    {
      name: "Forschung und Erkenntnisse",
      treatments: [],
    }
  ];

  // Details for third navigation level
  const treatmentDetails = {
    "Adtralza": ["Overview", "Mode of Action", "Efficacy", "Quality of Life", "Safety", "Dosing", "News", "Technical Information"],
    "Kyntheum": ["Overview", "Efficacy", "Safety", "Dosing"],
    "Diavonex": ["Overview", "Efficacy", "Safety", "Dosing"],
    "Diavobel": ["Overview", "Efficacy", "Safety", "Dosing"],
    "Enstilar": ["Overview", "Efficacy", "Safety", "Dosing"],
    "Fucidin": ["Overview", "Efficacy", "Safety", "Dosing"],
    "Protopic": ["Overview", "Efficacy", "Safety", "Dosing"],
    "Skinoren": ["Overview", "Efficacy", "Safety", "Dosing"],
    "Tralokinumab": ["Overview", "Efficacy", "Safety", "Dosing"],
    "Xamiol": ["Overview", "Efficacy", "Safety", "Dosing"],
    // Add more as needed
  };

  // Handle main navigation item click
  const handleMainNavClick = (navItem) => {
    if (activeMainNav === navItem) {
      setActiveMainNav(null); 
      setActiveSecondaryNav(null); 
    } else {
      setActiveMainNav(navItem);
      setActiveSecondaryNav(null); 
    }
  };

  
  const handleSecondaryNavClick = (treatment) => {
    if (activeSecondaryNav === treatment) {
      setActiveSecondaryNav(null); 
    } else {
      setActiveSecondaryNav(treatment);
      
      if (treatmentDetails[treatment] && treatmentDetails[treatment].length > 0) {
        setActiveDetailNav(treatmentDetails[treatment][0]);
      }
    }
  };
  
 
  const handleDetailNavClick = (detail) => {
    setActiveDetailNav(detail);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2">
        {/* Main navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <Link href="/" className="flex items-center">
              <Image 
                src="/DermaWorld.svg" 
                alt="DERMAWorld Logo" 
                width={150} 
                height={50} 
                className="h-auto w-auto"
              />
            </Link>
          </div>
                  
          <div className="relative w-1/3 hidden md:block">
            <input 
              type="text" 
              placeholder="SEARCH" 
              className="w-full rounded-full text-black border border-gray-300 py-2 px-4 pr-10 text-sm focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          <button className="md:hidden text-gray-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* First navigation level - desktop */}
        <nav className="hidden md:flex space-x-8 mt-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMainNavClick(item.name)}
              className={`text-secondary hover:text-primary pb-2 border-b-2 ${
                activeMainNav === item.name ? 'border-primary text-primary' : 'border-transparent'
              } hover:border-primary transition-colors font-medium`}
            >
              {item.name}
            </button>
          ))}
        </nav>
        
        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-4 border-t border-gray-200">
            <div className="py-2">
              {/* Mobile search */}
              <div className="relative px-4 py-3">
                <input 
                  type="text" 
                  placeholder="SEARCH" 
                  className="w-full rounded-full text-black border border-gray-300 py-2 px-4 pr-10 text-sm focus:outline-none"
                />
                <button className="absolute right-7 top-1/2 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              {/* Mobile main nav */}
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => handleMainNavClick(item.name)}
                      className={`w-full text-left px-4 py-3 flex justify-between items-center border-l-4 ${
                        activeMainNav === item.name ? 'border-primary text-primary bg-blue-50' : 'border-transparent'
                      }`}
                    >
                      <span className="text-black">{item.name}</span>
                      {item.treatments.length > 0 && (
                        <svg className={`h-4 w-4 transition-transform ${activeMainNav === item.name ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    
                    {/* Mobile secondary nav */}
                    {activeMainNav === item.name && item.treatments.length > 0 && (
                      <div className="bg-gray-100">
                        {item.treatments.map((treatment) => (
                          <div key={treatment}>
                            <button
                              onClick={() => handleSecondaryNavClick(treatment)}
                              className={`w-full text-left px-8 py-2 flex justify-between items-center ${
                                activeSecondaryNav === treatment ? 'text-primary font-medium' : 'text-secondary'
                              }`}
                            >
                              <span>{treatment}</span>
                              {treatmentDetails[treatment] && (
                                <svg className={`h-4 w-4 transition-transform ${activeSecondaryNav === treatment ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              )}
                            </button>
                            
                            {/* Mobile tertiary nav */}
                            {activeSecondaryNav === treatment && treatmentDetails[treatment] && (
                              <div className="bg-primary text-white">
                                {treatmentDetails[treatment].map((detail) => (
                                  <button
                                    key={detail}
                                    onClick={() => handleDetailNavClick(detail)}
                                    className={`w-full text-left px-12 py-2 ${
                                      activeDetailNav === detail ? 'font-medium bg-blue-700' : ''
                                    }`}
                                  >
                                    {detail}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
      
      {/* Second navigation level - treatments (desktop) */}
      {activeMainNav && (
        <div className="hidden md:block bg-gray-100">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-nowrap gap-6 text-sm">
              {navItems.find(item => item.name === activeMainNav)?.treatments.map((treatment) => (
                <button
                  key={treatment}
                  onClick={() => handleSecondaryNavClick(treatment)}
                  className={`${
                    activeSecondaryNav === treatment ? 'text-primary italic border-b-1' : 'text-secondary'
                  } hover:text-primary`}
                >
                  {treatment}
                </button>
              ))}
              {navItems.find(item => item.name === activeMainNav)?.treatments.length === 0 && (
                <span className="text-gray-500 italic">No items available</span>
              )}
            </nav>
          </div>
        </div>
      )}
      
      
      {activeSecondaryNav && treatmentDetails[activeSecondaryNav] && (
        <div className="hidden md:block bg-primary text-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex space-x-6 overflow-x-auto whitespace-nowrap text-sm">
              {treatmentDetails[activeSecondaryNav].map((detail) => (
                <button
                  key={detail}
                  onClick={() => handleDetailNavClick(detail)}
                  className={`text-white hover:opacity-90 pb-1 ${
                    activeDetailNav === detail ? 'italic border-b-1' : 'border-b-0'
                  }`}
                >
                  {detail}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}