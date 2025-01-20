import React, { useState, useEffect } from 'react';
import productsData from '../products.json';
import { Link } from 'react-router-dom';

const Listing = ({ categories, category, pageTitle, limit }) => {
  const [productsByCategory, setProductsByCategory] = useState({});
  const [showFullDescription, setShowFullDescription] = useState({});

  useEffect(() => {
    const fetchProducts = () => {
      try {
        const groupedProducts = {};

        if (categories) {
          // For category pages with multiple categories
          categories.forEach((cat) => {
            const categoryProducts = productsData.filter(
              (product) => product.category === cat
            );
            if (categoryProducts.length > 0) {
              groupedProducts[cat] = limit
                ? categoryProducts.slice(0, limit)
                : categoryProducts;
            }
          });
        } else if (category) {
          // For homepage with single category
          const categoryProducts = productsData.filter(
            (product) => product.category === category
          );
          groupedProducts[category] = limit
            ? categoryProducts.slice(0, limit)
            : categoryProducts;
        } else {
          // If no categories specified, group all products
          productsData.forEach((product) => {
            if (!groupedProducts[product.category]) {
              groupedProducts[product.category] = [];
            }
            groupedProducts[product.category].push(product);
          });
        }

        setProductsByCategory(groupedProducts);

        // Initialize showFullDescription state for all products
        const initialShowFullDescription = {};
        Object.values(groupedProducts)
          .flat()
          .forEach((product) => {
            initialShowFullDescription[product.id] = false;
          });
        setShowFullDescription(initialShowFullDescription);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [categories, category, limit]);

  const toggleDescription = (id) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const formatCategoryName = (cat) => {
    return cat
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const showCategoryDivider = categories && categories.length > 0;

  return (
    <div className="px-11">
      <div className="text-center font-mont text-2xl p-6 flex justify-center font-medium">
        <h2 className="flex justify-center border-2 rounded-md border-orange-500 px-6 mt-8 text-orange-500">
          {pageTitle}
        </h2>
      </div>

      {Object.entries(productsByCategory).map(([currentCategory, products]) => (
        <div key={currentCategory} className="mb-12">
          {showCategoryDivider && (
            <div className="border-b-2 border-orange-500 mb-6">
              <h3 className="text-2xl text-orange-600 py-2 font-jak">
                {formatCategoryName(currentCategory)}
              </h3>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-jak">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div className="border rounded-lg shadow-md p-4 bg-orange-100 hover:bg-orange-200 transition duration-200">
                  <div className="flex justify-center">
                    <img
                      src={product.thumbnail}
                      alt={product.images}
                      className="object-contain h-[200px] w-[200px] rounded-md"
                    />
                  </div>
                  <div className="px-1 py-4">
                    <div className="min-h-[60px]">
                      <h2 className="text-xl font-semibold mt-2 tracking-wide">
                        {product.title}
                      </h2>
                    </div>
                    <div className="min-h-[90px]">
                      <h4 className="text-md font-normal mt-2 min-h-[80px]">
                        {!showFullDescription[product.id]
                          ? product.description.substring(0, 70) + '...'
                          : product.description}
                      </h4>
                      <button
                        className="text-orange-500 underline mt-1"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent navigation when toggling description
                          toggleDescription(product.id);
                        }}
                      >
                        {showFullDescription[product.id]
                          ? 'Show Less'
                          : 'Read More'}
                      </button>
                    </div>
                    <p className="text-gray-700 text-md pt-3">
                      Price: {product.price} $
                    </p>
                    <p className="text-gray-700 text-md">
                      You Save:{' '}
                      <span className="font-semibold">
                        {product.discountPercentage}%
                      </span>
                    </p>
                  </div>
                  <div className="flex">
                    <button
                      className="bg-orange-500 text-white px-4 py-2 text-sm rounded-md mt-3"
                      onClick={(e) => e.preventDefault()} // Prevent navigation when clicking Add to Cart
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;