import React from 'react';
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom

function Home() {
  return (
    <section
      id="home"
      className="bg-cover bg-center text-center py-16 h-screen flex items-center justify-center"
      style={{ backgroundImage: 'url(/background.jpg)' }} // Reference to the image in the public folder
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h2 className="text-4xl font-bold text-white mb-4">
          Welcome to Luxury Bags
        </h2>
        <p className="text-xl text-white mb-4">
          The finest collection of luxury bags for the sophisticated you.
        </p>
        <Link
          to="/features"  // Use Link for React Router navigation
          className="bg-white text-black py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300"
        >
          Explore Our Collection
        </Link>
      </div>
    </section>
  );
}

export default Home;
