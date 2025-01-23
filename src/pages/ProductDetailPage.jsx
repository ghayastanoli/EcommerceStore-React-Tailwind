import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../products.json';
import { useCart } from '../context/CartContext';

const Toast = ({ message, onClose }) => (
  <div className="fixed top-16 sm:top-44 text-sm right-4 bg-green-400 text-white py-2 px-4 rounded shadow-md font-jak z-100">
    {message}
    <button onClick={onClose} className="ml-4 font-jak">X</button>
  </div>
);

const ProductDetails = () => {
    const { dispatch } = useCart(); 
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [toast, setToast] = useState(null); 

  const product = productsData.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-800">Product not found</h2>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const discountedPrice = product.price - product.price * (product.discountPercentage / 100);

  const handleAddToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
      },
    });
    setToast(`${product.title} added to cart!`);
    setTimeout(() => setToast(null), 3000); 
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden font-jak">
          <div className="md:flex">
            {/* Image Gallery */}
            <div className="md:w-1/2 relative">
              <div className="relative h-96">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-800"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-800"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              <div className="flex overflow-x-auto p-4 gap-2">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.title} - ${index + 1}`}
                    className={`w-20 h-20 object-cover cursor-pointer rounded-md ${
                      currentImageIndex === index ? 'border-2 border-orange-500' : ''
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-8">
              <div className="mb-4">
                <Link to="/" className="text-orange-500 hover:text-orange-600 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Home
                </Link>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={index < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className={`w-5 h-5 ${
                        index < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">({product.rating} rating)</span>
              </div>
              <div className="mb-6">
                <p className="text-3xl font-bold text-gray-900">
                  ${discountedPrice.toFixed(2)}
                  <span className="ml-2 text-lg text-gray-500 line-through">${product.price}</span>
                  <span className="ml-2 text-lg text-green-600">
                    {product.discountPercentage}% OFF
                  </span>
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
                <p className="text-gray-700">{product.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Brand</h3>
                  <p className="text-gray-700">{product.brand}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Category</h3>
                  <p className="text-gray-700">{product.category}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Stock</h3>
                  <p
                    className={`${
                      product.stock > 0 ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {product.stock > 0 ? `${product.stock} units` : 'Out of stock'}
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigation when adding to cart
                handleAddToCart(product);
                  }}
                className={`w-full py-3 px-8 rounded-md font-medium text-white ${
                  product.stock > 0
                    ? 'bg-orange-500 hover:bg-orange-600'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
                disabled={product.stock === 0}
              >
                {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;