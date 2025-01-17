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
        <div className='px-12'>
            <div className='flex justify-start'>
            <Link to="/" className='flex items-center gap-3 py-1 px-2 bg-white text-orange-500 mt-3 rounded-md font-jak border-2 hover:border-orange-500 transition duration-300 font-medium'>
            <img src={myImage} alt="" className='h-8' /> Home</Link></div>
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