import React, { useState, useEffect } from 'react';
import productsData from '../products.json';

const Listing = ({ category, limit }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data from the JSON file
    const fetchProducts = () => {
      try {
        // Filter products by category if provided, otherwise show all products
        const filteredProducts = category
          ? productsData.filter(product => product.category === category)
          : productsData;

        // Apply limit if provided
        const limitedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;
        setProducts(limitedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category, limit]);

  return (
    <>
      <div className='text-center font-mont text-2xl p-6 flex justify-center font-medium'>
        <h2 className='flex justify-center border-2 rounded-md border-orange-500 px-6 mt-8 text-orange-500 '>
          {category || 'All Products'}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 font-jak">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md p-4 bg-orange-100 hover:bg-orange-200 transition duration-200 "
          >
            <img
              src={product.thumbnail}
              alt={product.images}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className='px-1 py-4'>
              <div className='min-h-[60px]'>
                <h2 className="text-md font-semibold mt-2 ">{product.title}</h2>
              </div>
              <div className='min-h-[90px]'>
                <h4 className="text-sm font-normal mt-2 min-h-[150px]">{product.description}</h4>
              </div>
              <p className="text-gray-700 text-sm">Price: {product.price} $ </p>
              <p className="text-gray-700 text-sm">You Save: <span className='font-semibold'>{product.discountPercentage}%</span>  </p>
            </div>
            <div className='flex'>
              <button className="bg-orange-500 text-white px-4 py-2 text-sm rounded-md mt-3">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Listing;
