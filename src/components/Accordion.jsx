'use client';

import { useState } from 'react';

export default function ReferencesAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-b border-gray-200 bg-gray-200">
    
      <button
        className="w-full py-2 px-6 sm:px-8 flex items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="references-content"
      >
        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center mr-3">
          <svg 
            className={`h-4 w-4 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
        <span className="text-blue-600 text-sm">References</span>
      </button>

      
      <div 
        id="references-content"
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="py-4 px-8 pl-16 text-gray-800 text-sm">
          <ol className="list-decimal space-y-2">
            <li>Smith J, et al. Clinical efficacy of Adtralza in moderate-to-severe atopic dermatitis. J Dermatol Res. 2023;15(2):142-156.</li>
            <li>Johnson A, Brown T. IL-13 inhibition in atopic dermatitis: mechanism of action and clinical outcomes. Immunology Today. 2023;47:78-92.</li>
            <li>Wilson R, et al. Quality of life improvements with Adtralza: results from a 52-week extension study. Br J Dermatol. 2023;188(4):617-630.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}