// src/components/Hero.tsx

'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center text-white py-24 px-4" style={{ backgroundImage: "url('@/public/backgrounds/slikk3.jpg')" }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Text 1</h1>
        <p className="text-lg md:text-xl mb-6">Slogan</p>
        <a href="#contact" className="bg-orange-600 py-2 px-6 text-white rounded-md text-lg hover:bg-orange-700 transition duration-300">
          Link
        </a>
      </div>
    </section>
  );
};

export default Hero;
