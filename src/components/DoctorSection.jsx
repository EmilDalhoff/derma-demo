import React from 'react';
import Image from 'next/image';

export default function DoctorSection() {
  return (
    <section className=" sm:py-16 bg-white">
      <div className="container mx-auto sm:px-6">
        
        <h2 className="text-2xl sm:text-3xl flex justify-center md:justify-start text-blue-600 font-light mb-8">
          Clinical tools - at a glance
        </h2>
        
       
        <div className="flex flex-col md:flex-row md:space-x-6">
          
          
          <div className="w-full md:w-1/2 bg-gray-100 px-4 md:px-0 mb-6 md:mb-0">
            <div className="h-48 sm:h-64 relative overflow-hidden ">
              <Image
                src="/Nurse.png"
                alt="Healthcare Professional"
                layout="fill"
                objectFit="cover"
                className="w-full"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl text-blue-600 mb-3">Dosing guide</h3>
              <p className="text-gray-700 text-sm sm:text-base mb-4">
                Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1).
              </p>
              <a href="#" className="text-pink-500 text-sm hover:underline">
                Learn more about application and dosing
              </a>
            </div>
          </div>
          
          
          <div className="w-full md:w-1/2 bg-gray-100 px-4 md:px-0 ">
            <div className="h-48 sm:h-64 relative overflow-hidden">
              <Image
                src="/Needle.png"
                alt="Injection demonstration"
                layout="fill"
                objectFit="cover"
                className="w-full"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl text-blue-600 mb-3">Patient injection made simple</h3>
              <p className="text-gray-700 text-sm sm:text-base mb-4">
                This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza® carton.
              </p>
              <a href="#" className="text-pink-500 text-sm hover:underline">
                Watch the video
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

