import React from 'react';
import { useParams } from 'react-router-dom';
import Listing from '../components/Listing';
import { categoryMapping } from '../utils/CategoryMapping';
import { Link } from 'react-router-dom';
import myImage from '../assets/home.png';


const CategoryPage = () => {
  const { category } = useParams();
  
  const getCategories = (cat) => {
    if (!cat || cat === 'all-products') return undefined;
    return categoryMapping[cat] || [cat];
  };

  const formatPageTitle = (cat) => {
    if (!cat || cat === 'all-products') return 'All Products';
    return cat
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div>
        <div className='px-12 pt-4 font-jak'>
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
      <Listing 
        categories={getCategories(category)}
        pageTitle={formatPageTitle(category)}
        limit={undefined}
      />
      
    </div>
  );
};

export default CategoryPage;