import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL

  // Example product data, you would likely fetch this from an API or context in a real app
  const products = [
    { id: 1, name: 'Luxury Bag 1', description: 'A luxurious bag for everyday elegance.', price: '₱ 25,000', imageUrl: '/product1.webp' },
    { id: 2, name: 'Luxury Bag 2', description: 'Timeless design with exquisite craftsmanship.', price: '₱ 30,000', imageUrl: '/product2.webp' },
    { id: 3, name: 'Luxury Bag 3', description: 'A perfect blend of luxury and practicality.', price: '₱ 28,000', imageUrl: '/product3.webp' },
    { id: 4, name: 'Luxury Bag 4', description: 'Chic and elegant for every occasion.', price: '₱ 35,000', imageUrl: '/product4.webp' },
    { id: 5, name: 'Luxury Bag 5', description: 'A stylish statement piece for modern fashion.', price: '₱ 22,000', imageUrl: '/product5.jpg' },
    { id: 6, name: 'Luxury Bag 6', description: 'Elegant design with luxury at its finest.', price: '₱ 27,000', imageUrl: '/product6.jpg' },
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>; // Handle case if the product doesn't exist
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{product.name}</h2>
        <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover mb-4 rounded" />
        <p className="text-lg mb-4">{product.description}</p>
        <p className="font-bold text-xl mb-4">{product.price}</p>
      </div>
    </section>
  );
}

export default ProductDetail;
