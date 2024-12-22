import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

function Features() {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Features</h2>
        <p className="text-xl mb-8">Why our luxury bags stand out</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg group overflow-hidden">
            <div className="overflow-hidden rounded">
              <img
                src="/product1.webp"
                alt="Product 1"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="font-semibold text-2xl mt-4">Givenchy </h3>
            <p>Iconic design and timeless elegance.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg group overflow-hidden">
            <div className="overflow-hidden rounded">
              <img
                src="/product2.webp"
                alt="Product 2"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="font-semibold text-2xl mt-4">Limited edition coach</h3>
            <p>Contemporary style with high-quality craftsmanship.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg group overflow-hidden">
            <div className="overflow-hidden rounded">
              <img
                src="/product3.webp"
                alt="Product 3"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="font-semibold text-2xl mt-4">Limited edition coach</h3>
            <p>Elegance redefined with a bold statement.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg group overflow-hidden">
            <div className="overflow-hidden rounded">
              <img
                src="/product4.webp"
                alt="Product 4"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="font-semibold text-2xl mt-4">Burberry</h3>
            <p>Chic, classy, and elegant for every occasion.</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg group overflow-hidden">
            <div className="overflow-hidden rounded">
              <img
                src="/product5.jpg"
                alt="Product 5"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="font-semibold text-2xl mt-4">Saint Laurent</h3>
            <p>A stylish statement piece for modern fashion.</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg group overflow-hidden">
            <div className="overflow-hidden rounded">
              <img
                src="/product6.jpg"
                alt="Product 6"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="font-semibold text-2xl mt-4">Ysl</h3>
            <p>Elegant design with luxury at its finest.</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-8">
          <Link
            to="/about" // Link to About page
            className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition duration-300 mr-4"
          >
            Learn More About Us
          </Link>
          <Link
            to="/contact" // Link to Contact page
            className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Features;
