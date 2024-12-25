// src/components/Hero.tsx

'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center text-white py-24 px-4" style={{ backgroundImage: "url('/backgrounds/blueprint.png')" }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl text-black md:text-5xl font-bold mb-4">WEKAS</h1>
        <p className="text-lg text-black md:text-xl mb-6">Water, Environment, Knowledge, Air, Solar</p>
        <a href="#contact" className="bg-teal-900 py-2 px-6 text-white rounded-md text-lg hover:bg-orange-700 transition duration-300">
          Link
        </a>
      </div>
    </section>
  );
};

export default Hero;
