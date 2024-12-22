import React from 'react';
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6">
      <div>
        <p>&copy; 2024 Luxury Bags. All rights reserved.</p>
        <div className="mt-4">
          {/* Footer navigation links */}
          <Link
            to="/home"  // Link to Home page
            className="text-white mx-4 hover:text-gray-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"  // Link to About page
            className="text-white mx-4 hover:text-gray-400 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/features"  // Link to Features page
            className="text-white mx-4 hover:text-gray-400 transition duration-300"
          >
            Features
          </Link>
          <Link
            to="/contact"  // Link to Contact page
            className="text-white mx-4 hover:text-gray-400 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
