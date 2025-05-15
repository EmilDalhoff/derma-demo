import React from 'react';
import Image from 'next/image';

export default function ProductShowcase() {
  return (
    <section className="bg-gray-100 py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-[280px] h-[220px] sm:w-[320px] sm:h-[240px] md:w-[380px] md:h-[280px]">
              <Image
                src="/ProductShowcase.svg"
                alt="Adtralza product packaging"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-blue-600 text-lg sm:text-xl md:text-2xl font-light italic mb-4">
              It is the first and only biologic developed to specifically neutralize IL-13, a key driver of atopic dermatitis signs and symptoms(1,2)
            </h2>
            
            <p className="text-gray-700 text-sm sm:text-base md:text-lg font-light mt-6">
              Learn more about how Adtralza® works and how to use it in treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}