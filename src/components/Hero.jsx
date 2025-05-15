import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[300px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full">
        {/* Background image - improved for mobile through lg screens */}
        <Image
          src="/Hero.svg"
          alt="Adtralza treatment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] sm:object-[70%_center] md:object-[70%_center] lg:object-[70%_center]" 
        />
                
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg text-white">
              <div className="mb-4 sm:mb-6 md:mb-6 lg:mb-8">
                <Image 
                  src="/Adtralza-logo.png" 
                  alt="Adtralza" 
                  width={400}
                  height={133}
                  className="h-auto w-[100px] sm:w-[100px] md:w-[150px] lg:w-[150px]" 
                />
              
              </div>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-3xl font-light leading-relaxed md:leading-relaxed italic">
                Adtralza® is a new treatment for 
                adult patients with 
                moderate-to-severe atopic dermatitis
                (eczema) who are candidates for
                systemic therapy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}