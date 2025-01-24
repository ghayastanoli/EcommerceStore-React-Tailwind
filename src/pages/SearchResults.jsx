import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import productsData from '../products.json';

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const filteredProducts = productsData.filter(product => 
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8 font-jak">
      <h1 className="text-2xl font-semibold mb-6">
        Search Results for "{searchQuery}"
      </h1>
      
      {products.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">No products found matching your search.</p>
          <Link to="/" className="text-orange-500 hover:text-orange-600 mt-4 inline-block">
            Return to Home
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="bg-white hover:bg-orange-200 transition duration-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg"
            >
              <div className="relative pb-[75%]">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="absolute h-full w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 min-h-16">{product.title}</h2>
                <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-slate-800 text-lg font-semibold">${product.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;