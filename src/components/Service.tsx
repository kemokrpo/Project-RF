// src/components/Service.tsx

'use client';

import React from 'react';

// Define the types for the props
interface ServiceProps {
  title: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({ title, description }) => {
  return (
    <section id="services" className="py-20 px-4 bg-gray-800 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Naše usluge</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="service bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
          <h3 className="text-2xl font-semibold mb-4">Usluga #1</h3>
          <p className="text-base">{description}</p>
        </div>
        <div className="service bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
          <h3 className="text-2xl font-semibold mb-4">Usluga #2</h3>
          <p className="text-base">{description}</p>
        </div>
        <div className="service bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
          <h3 className="text-2xl font-semibold mb-4">Usluga #3</h3>
          <p className="text-base">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
