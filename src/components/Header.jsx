import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-black text-white p-5 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Luxury Bags</h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link to="/home" className="hover:text-gray-300 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-gray-300 transition duration-300">
                Features
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300 transition duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-300 transition duration-300">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
