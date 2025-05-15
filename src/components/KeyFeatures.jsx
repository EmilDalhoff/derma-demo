import React from 'react';
import Image from 'next/image';

export default function KeyFeatures() {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
          
          {/* Feature 1 - Nine out of 10 */}
          <div className="flex flex-col items-center mb-12 md:mb-0 md:w-1/3 md:px-4">
            <Image
              src="/Nine.svg"
              alt="9 out of 10"
              width={180}
              height={184}
              className="mb-6"
            />
            <h3 className="text-blue-600 text-xl font-light text-center italic mb-3">
              Long term sustained improvement
            </h3>
            <p className="text-gray-700 text-sm sm:text-base text-center">
              9 out of 10 respondents experienced sustained disease control in clinical trials, 
              providing sustained improvements in the burden of disease(1,2, †, 8*†‡).
            </p>
            <a href="#" className="text-pink-500 text-sm mt-4 hover:underline">
              See efficacy and trial data
            </a>
          </div>

          {/* Feature 2 - HandHeart */}
          <div className="flex flex-col items-center mb-12 md:mb-0 md:w-1/3 md:px-4">
            <Image
              src="/HandHeart.svg"
              alt="Hand with heart"
              width={180}
              height={184}
              className="mb-6"
            />
            <h3 className="text-blue-600 text-xl font-light text-center italic mb-3">
              Improvements in the burden of disease
            </h3>
            <p className="text-gray-700 text-sm sm:text-base text-center">
              Patients in clinical trials saw an improvement in Quality of Life with early 
              symptom relief and sustained improvements in burden of disease from week 16 to 32(1,2,3).
            </p>
            <a href="#" className="text-pink-500 text-sm mt-4 hover:underline">
              Learn more about quality of life improvements
            </a>
          </div>

          {/* Feature 3 - HandShield */}
          <div className="flex flex-col items-center mb-4 md:mb-0 md:w-1/3 md:px-4">
            <Image
              src="/HandShield.svg"
              alt="Hand with shield"
              width={180}
              height={184}
              className="mb-6"
            />
            <h3 className="text-blue-600 text-xl font-light text-center italic mb-3">
              Good safety profile
            </h3>
            <p className="text-gray-700 text-sm sm:text-base text-center">
              The most common side effects were upper respiratory tract infections, 
              conjunctivitis, injection site reactions and eosinophilia.
            </p>
            <a href="#" className="text-pink-500 text-sm mt-4 hover:underline">
              See safety profile
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}