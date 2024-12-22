import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

function Products() {
  return (
    <section id="products" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/product1.webp"
              alt="Product 1"
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h3 className="font-semibold text-2xl mb-4">Luxury Bag 1</h3>
            <p>A premium luxury bag for everyday elegance.</p>
            <p className="text-xl font-bold">₱ 25,000</p>
            <Link
              to={`/products/1`} // Dynamic link to the product detail page
              className="text-blue-500 hover:underline mt-4 block"
            >
              View Details
            </Link>
          </div>

          {/* Product 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/product2.webp"
              alt="Product 2"
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h3 className="font-semibold text-2xl mb-4">Luxury Bag 2</h3>
            <p>Timeless design with exquisite craftsmanship.</p>
            <p className="text-xl font-bold">₱ 30,000</p>
            <Link
              to={`/products/2`} // Dynamic link to the product detail page
              className="text-blue-500 hover:underline mt-4 block"
            >
              View Details
            </Link>
          </div>

          {/* Product 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/product3.webp"
              alt="Product 3"
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h3 className="font-semibold text-2xl mb-4">Luxury Bag 3</h3>
            <p>A perfect blend of luxury and practicality.</p>
            <p className="text-xl font-bold">₱ 28,000</p>
            <Link
              to={`/products/3`} // Dynamic link to the product detail page
              className="text-blue-500 hover:underline mt-4 block"
            >
              View Details
            </Link>
          </div>

          {/* Product 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/product4.webp"
              alt="Product 4"
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h3 className="font-semibold text-2xl mb-4">Luxury Bag 4</h3>
            <p>Chic, classy, and elegant for every occasion.</p>
            <p className="text-xl font-bold">₱ 35,000</p>
            <Link
              to={`/products/4`} // Dynamic link to the product detail page
              className="text-blue-500 hover:underline mt-4 block"
            >
              View Details
            </Link>
          </div>

          {/* Product 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/product5.jpg"
              alt="Product 5"
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h3 className="font-semibold text-2xl mb-4">Luxury Bag 5</h3>
            <p>A stylish statement piece for modern fashion.</p>
            <p className="text-xl font-bold">₱ 22,000</p>
            <Link
              to={`/products/5`} // Dynamic link to the product detail page
              className="text-blue-500 hover:underline mt-4 block"
            >
              View Details
            </Link>
          </div>

          {/* Product 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/product6.jpg"
              alt="Product 6"
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h3 className="font-semibold text-2xl mb-4">Luxury Bag 6</h3>
            <p>Elegant design with luxury at its finest.</p>
            <p className="text-xl font-bold">₱ 27,000</p>
            <Link
              to={`/products/6`} // Dynamic link to the product detail page
              className="text-blue-500 hover:underline mt-4 block"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
