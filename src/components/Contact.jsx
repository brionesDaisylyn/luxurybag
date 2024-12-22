import React from 'react';
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom

function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-xl mb-8">We'd love to hear from you! Reach out to us for any inquiries.</p>
        
        {/* Contact Form */}
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 rounded"
          />
          <button type="submit" className="bg-white text-black py-2 px-6 rounded">
            Send Message
          </button>
        </form>

        {/* Link back to Home */}
        <div className="mt-8">
          <Link
            to="/"
            className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
