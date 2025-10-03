'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/jcb-real-1.jpg',
    alt: 'JCB Excavator in Action',
    title: 'Heavy Excavation Work',
    description: 'Professional JCB excavator performing heavy-duty construction and excavation tasks',
    bgGradient: 'from-blue-50 to-blue-100'
  },
  {
    src: '/jcb-real-2.jpg',
    alt: 'JCB Construction Equipment',
    title: 'Construction Site Operations',
    description: 'JCB machinery working efficiently on large-scale construction projects',
    bgGradient: 'from-yellow-50 to-orange-100'
  },
  {
    src: '/jcb-real-3.jpg',
    alt: 'JCB Earthmoving Equipment',
    title: 'Earthmoving & Site Preparation',
    description: 'Advanced JCB equipment for comprehensive earthmoving and site development',
    bgGradient: 'from-green-50 to-green-100'
  },
  {
    src: '/jcb-real-4.jpg',
    alt: 'JCB Machine Construction Site India',
    title: 'Soil Handling & Loading',
    description: 'JCB loader efficiently handling soil filling and material transportation',
    bgGradient: 'from-orange-50 to-orange-100'
  },
  {
    src: '/jcb-real-5.jpg',
    alt: 'JCB Equipment in Operation',
    title: 'Professional JCB Services',
    description: 'Reliable JCB equipment providing professional construction and excavation services',
    bgGradient: 'from-purple-50 to-purple-100'
  },
  {
    src: '/jcb-real-6.jpg',
    alt: 'JCB Crane Working Near Sand Quarry',
    title: 'Quarry & Mining Operations',
    description: 'JCB crane equipment working efficiently in sand quarry and mining operations',
    bgGradient: 'from-red-50 to-red-100'
  }
];

export default function JCBGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = galleryImages.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-600">JCB Fleet</span> in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our professional JCB equipment at work across various construction and earthmoving projects in Prayagraj
          </p>
        </div>
        
        {/* Gallery Container */}
        <div className="relative max-w-6xl mx-auto">
          <div 
            className="overflow-hidden rounded-2xl shadow-2xl"
            onMouseEnter={() => {/* Pause auto-slide on hover if needed */}}
            onMouseLeave={() => {/* Resume auto-slide if needed */}}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <div className={`relative h-96 md:h-[500px] bg-gradient-to-br ${image.bgGradient}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-200 text-lg">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            onClick={previousSlide}
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            onClick={nextSlide}
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {galleryImages.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-orange-600' 
                    : 'bg-gray-300 hover:bg-orange-400'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}