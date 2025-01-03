// src/components/ContactForm.tsx

'use client';

import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white text-teal-600">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Kontaktirajte nas</h2>

      <form
        id="contact-form"
        action="mailto:nkrpo.main@gmail.com"
        method="post"
        className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="mb-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-gray-700 text-black rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-gray-700 text-black rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Your Message"
            required
            className="w-full p-3 bg-gray-700 text-black rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows={6}
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
