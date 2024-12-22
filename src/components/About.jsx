import React from 'react';
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom

function About() {
  return (
    <section id="about" className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-xl mb-8">
          We specialize in crafting luxury bags with an emphasis on quality, craftsmanship, and timeless style.
        </p>
        <Link
          to="/contact"  // Example of linking to the Contact page
          className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default About;
