import React, { useState, useEffect } from 'react';
import productsData from '../products.json';

const Listing = ({ category, limit }) => {
  const [products, setProducts] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState({});

  useEffect(() => {
    // Simulate fetching data from the JSON file
    const fetchProducts = () => {
      try {
        // Filter products by category if provided, otherwise show all products
        const filteredProducts = category
          ? productsData.filter((product) => product.category === category)
          : productsData;

        // Apply limit if provided
        const limitedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;
        setProducts(limitedProducts);

        // Initialize the showFullDescription state for each product
        const initialShowFullDescription = limitedProducts.reduce((acc, product) => {
          acc[product.id] = false;
          return acc;
        }, {});
        setShowFullDescription(initialShowFullDescription);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category, limit]);

  const toggleDescription = (id) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <div className="px-11">
        <div className="text-center font-mont text-2xl p-6 flex justify-center font-medium">
          <h2 className="flex justify-center border-2 rounded-md border-orange-500 px-6 mt-8 text-orange-500 ">
            {category || 'All Products'}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 font-jak">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md p-4 bg-orange-100 hover:bg-orange-200 transition duration-200 "
            >
              <div className="flex justify-center">
                <img
                  src={product.thumbnail}
                  alt={product.images}
                  className="object-contain h-[200px] w-[200px] rounded-md "
                />
              </div>
              <div className="px-1 py-4">
                <div className="min-h-[60px]">
                  <h2 className="text-xl font-semibold mt-2 tracking-wide ">{product.title}</h2>
                </div>
                <div className="min-h-[90px]">
                  <h4 className="text-md font-normal mt-2 min-h-[80px]">
                    {!showFullDescription[product.id]
                      ? product.description.substring(0, 70) + '...'
                      : product.description}
                  </h4>
                  <button
                    className="text-orange-500 underline mt-1"
                    onClick={() => toggleDescription(product.id)}
                  >
                    {showFullDescription[product.id] ? 'Show Less' : 'Read More'}
                  </button>
                </div>
                <p className="text-gray-700 text-md pt-3">Price: {product.price} $ </p>
                <p className="text-gray-700 text-md">
                  You Save: <span className="font-semibold">{product.discountPercentage}%</span>
                </p>
              </div>
              <div className="flex">
                <button className="bg-orange-500 text-white px-4 py-2 text-sm rounded-md mt-3">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Listing;