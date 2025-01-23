import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Listing from '../components/Listing';
import { categoryMapping } from '../utils/CategoryMapping';
import { useCart } from '../context/CartContext';

const CategoryPage = () => {
  const { category } = useParams();
  const { dispatch } = useCart(); // Access the cart context

  // Function to get categories
  const getCategories = (cat) => {
    if (!cat || cat === 'all-products') return undefined;
    return categoryMapping[cat] || [cat];
  };

  // Function to format the page title
  const formatPageTitle = (cat) => {
    if (!cat || cat === 'all-products') return 'All Products';
    return cat
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity: 1 }, // Add product with quantity 1
    });
  };

  return (
    <div>
      <div className="px-4 sm:px-12 pt-4 font-jak">
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

      {/* Listing Component */}
      <Listing
        categories={getCategories(category)}
        pageTitle={formatPageTitle(category)}
        limit={undefined}
        onAddToCart={handleAddToCart} // Pass the add-to-cart function
      />
    </div>
  );
};

export default CategoryPage;
