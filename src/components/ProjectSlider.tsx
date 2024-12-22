'use client';

import React, { useState, useEffect } from 'react';

const images = [
  '/projects/tbs1.jpg',
  '/projects/tbs2.jpg',
  '/projects/tbs3.jpg',
  '/projects/tbs4.jpg',
  '/projects/tbs5.jpg'
];

const ProjectSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };
{/*
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);
*/}

  return (
    <section id="project-slider" className="relative w-full mx-auto">
      <div className="slickSlider relative overflow-hidden">
        {images.map((img, index) => (
          <div
            className={`slide ${currentSlide === index ? 'block' : 'hidden'} text-center`}
            key={index}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-black flex justify-center items-center">
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="max-h-full object-contain block"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 cursor-pointer z-10"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 cursor-pointer z-10"
        onClick={nextSlide}
      >
        &gt;
      </button>

      {/* Dots Navigation */}
      <div className="dots text-center mt-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot inline-block w-2.5 h-2.5 mx-1 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default ProjectSlider;
