import React from 'react';
import Image from 'next/image';

export default function InfoSection() {
  return (
    <section className="py-10 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Text content - stacks on mobile, side-by-side on larger screens */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-blue-600 text-2xl md:text-3xl font-medium mb-4">
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
            
            <ul className="mb-8">
              <li className="flex items-start mb-2">
                <span className="text-gray-500 mr-2">—</span>
                <span className="text-black">Reducing markers of skin inflammation</span>
              </li>
              <li className="flex items-start mb-2">
                <span className="text-gray-500 mr-2">—</span>
                <span className="text-black">Improving markers of skin barrier integrity</span>
              </li>
              <li className="flex items-start mb-2">
                <span className="text-gray-500 mr-2">—</span>
                <span className="text-black">Reducing epidermal thickness</span>
              </li>
            </ul>
            
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
              Watch the video
            </button>
            
            <p className="text-gray-500 text-xs mt-3">
              Duration: 2:43
            </p>
          </div>
          
          {/* Image - displayed below text on mobile, beside text on larger screens */}
          <div className="md:w-1/2">
            <div className=" overflow-hidden">
              <Image
                src="/Molecyle.png"
                alt="IL-13 molecules visualization"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}