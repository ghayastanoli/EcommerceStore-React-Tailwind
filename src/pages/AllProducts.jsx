import React, { useState, useEffect } from 'react';
import productsData from '../products.json';
import myImage from '../assets/filter.png';
import myImage2 from '../assets/money.png';
import myImage3 from '../assets/ship.png';
import myImage4 from '../assets/star.png';
import myImage5 from '../assets/down.png';
import myImage6 from '../assets/rightarr.png';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState('');
  const [shippingTime, setShippingTime] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    const fetchProducts = () => {
      try {
        setProducts(productsData);
        setFilteredProducts(productsData); // Initially, show all products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  const handleShippingChange = (time) => {
    setShippingTime(time);
  };

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  // Filter products based on selected criteria
  useEffect(() => {
    let filtered = products;

    // Filter by Price
    if (priceRange) {
      filtered = filtered.filter((product) => {
        if (priceRange === '<50') return product.price < 50;
        if (priceRange === '50-100') return product.price >= 50 && product.price <= 100;
        if (priceRange === '100-200') return product.price >= 100 && product.price <= 200;
        if (priceRange === '>500') return product.price > 500;
        return true;
      });
    }

    // Filter by Shipping Time
    if (shippingTime) {
      filtered = filtered.filter((product) => product.shippingInformation === shippingTime);
    }

    // Filter by Rating
    if (rating) {
      filtered = filtered.filter((product) => {
        // Calculate average rating from reviews
        const avgRating = Math.floor(
          product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
        );
        return avgRating === parseInt(rating);
      });
    }

    setFilteredProducts(filtered); // Update the filtered products list
  }, [priceRange, shippingTime, rating, products]);

  return (
    <>
      <div className="text-center font-mont text-2xl p-6 flex justify-center font-medium">
        <h2 className="flex justify-center border-2 rounded-md border-orange-500 px-6 mt-8 text-orange-500">
          All Products
        </h2>
      </div>
      <div className="px-6 font-yak text-sm relative pb-2">
        <div className="flex gap-4 items-center relative">
          {/* All Filters */}
          <button
            type="button"
            onClick={toggleFilters}
            className="bg-slate-200 hover:bg-slate-300 text-slate-800 p-1 font-medium px-4 rounded-lg flex items-center"
          >
            <img src={myImage} alt="" className="h-[18px] pr-2" /> All Filters
            <img src={myImage6} alt="" className="h-[16px] pl-2" />
          </button>

          {/* Filters */}
          <div
            className={`flex gap-4 transition-all duration-500 ease-in-out transform ${
              showFilters ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[150%] pointer-events-none'
            }`}
          >
            {/* Price */}
            <div className="relative group">
              <button
                type="button"
                className="bg-slate-200 text-slate-800 p-1 font-medium px-4 rounded-lg flex"
              >
                <img src={myImage2} alt="" className="h-[18px] pr-2" /> Price
                <img src={myImage5} alt="" className="h-[18px] pl-2" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md w-40  group-hover:block hidden">
                <ul className="p-2">
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer" onClick={() => handlePriceChange('<50')}>{'<'} than 50$</li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer" onClick={() => handlePriceChange('50-100')}>Between 50$ & 100$</li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer" onClick={() => handlePriceChange('100-200')}>Between 100$ & 200$</li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer" onClick={() => handlePriceChange('>500')}>{'>'} than 500$</li>
                </ul>
              </div>
            </div>

            {/* Shipping */}
            <div className="relative group">
              <button
                type="button"
                className="bg-slate-200 text-slate-800 p-1 font-medium px-4 rounded-lg flex"
              >
                <img src={myImage3} alt="" className="h-[18px] pr-2" /> Shipping Time
                <img src={myImage5} alt="" className="h-[18px] pl-2" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md w-40  group-hover:block hidden">
                <ul>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleShippingChange('Ships overnight')}>Ships overnight</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleShippingChange('Ships in 1-2 business days')}>Ships in 1-2 business days</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleShippingChange('Ships in 3-5 business days')}>Ships in 3-5 business days</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleShippingChange('Ships in 1 week')}>Ships within a week</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleShippingChange('Ships in 2 weeks')}>Ships in two weeks</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleShippingChange('Ships in 1 month')}>Ships within a month</li>
                </ul>
              </div>
            </div>

            {/* Rating */}
            <div className="relative group">
              <button
                type="button"
                className="bg-slate-200 text-slate-800 p-1 font-medium px-4 rounded-lg flex"
              >
                <img src={myImage4} alt="" className="h-[18px] pr-2" /> Rating
                <img src={myImage5} alt="" className="h-[18px] pl-2" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md w-40  group-hover:block hidden">
                <ul className="p-2">
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleRatingChange('1')}>1 Star</li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleRatingChange('2')}>2 Stars</li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleRatingChange('3')}>3 Stars</li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleRatingChange('4')}>4 Stars</li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleRatingChange('5')}>5 Stars</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 font-jak">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md p-4 bg-orange-100 hover:bg-orange-200 transition duration-200"
          >
            <img
              src={product.thumbnail}
              alt={product.images}
              className="w-full object-contain h-[200px]  rounded-md"
            />
            <div className="px-1 py-4">
              <div className="min-h-[60px]">
                <h2 className="text-md font-semibold mt-2">{product.title}</h2>
              </div>
              <p className="text-gray-700 text-sm">Price: {product.price} $</p>
              <p className="text-gray-700 text-sm">
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
    </>
  );
};

export default AllProducts;