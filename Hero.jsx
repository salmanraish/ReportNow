import React, { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://r2.erweima.ai/imgcompressed/compressed_a06b9d1da96d7696782036fca24262cf.webp',
    'https://csiacademyflorida.com/wp-content/uploads/2018/03/AdobeStock_126928147.jpeg',
    'https://cybercrime.gov.in/images/fraction-slider/1930.png',
    'https://cybercrime.gov.in/images/fraction-slider/pmhm.png',
    'https://www.productivecorp.com/wp-content/uploads/2019/05/island-hopping1.jpg'
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="relative w-full max-w-10xl mx-auto">
      {/* Image Container */}
      <div className="relative h-56 md:h-96 overflow-hidden shadow-lg">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-fill transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full text-white hover:bg-gray-900"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full text-white hover:bg-gray-900"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
