import React, { useState } from "react";
import myImage from "../assets/zap.png";
import myImage2 from '../assets/cart2.png';
import myImage3 from '../assets/signin.png';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const NavBar2 = () => {
  const [query, setQuery] = useState("");
   const { state } = useCart();
    const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    console.log("Search Query:", e.target.value); // Replace with your search logic
  };

  return (
    <>
      <div className="bg-white  px-3">
        <div className="flex items-center justify-around px-6 py-2 font-jak">
          {/* Logo Section */}
          <div>
            <img src={myImage} alt="Logo" className="h-[80px]" />
          </div>

          {/* Search Bar Section */}
          <div className="flex-1 max-w-4xl mx-auto">
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search for anything..."
              className="w-full px-3 py-3 border border-slate-400 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none focus:border-0"
            />
          </div>

          {/* Additional Nav Items (optional) */}
          <div>
            <ul className="flex space-x-4 items-center">
              <li>
              <div className="relative">
                <Link to="/AddToCartPage" className="flex items-center">
                    <img src={myImage2} alt="Cart" className="h-[30px]" />
                    <span className=" bg-orange-200 py-2  absolute left-6 text-black rounded-full w-5 h-5 flex items-center justify-center text-sm">
                    {cartItemsCount}
                    </span>
                </Link>
            </div>
              </li>
              <li>
                <Link to="/sign-up" className='bg-white flex mr-6 p-2 px-3 rounded-b-xl text-sm  hover:text-white transition-all duration-200'>
                        <img src={myImage3} alt=""  className="h-[30px]"/>
                        </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center  font-mont px-4 text-md font-medium bg-orange-500 py-3 text-white">
                  <div>
                    <ul className="flex gap-3">
                      <li>
                        <Link
                          to="/smartphones"
                          className="hover:border-orange-600 transition duration-200 hover:rounded-md p-1 hover:bg-orange-600"
                        >
                          SmartPhones
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/laptops"
                          className="hover:border-orange-600 transition duration-200 hover:rounded-md p-1 hover:bg-orange-600"
                        >
                          Laptops
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/fragrances"
                          className="hover:border-orange-600 transition duration-200 hover:rounded-md p-1 hover:bg-orange-600"
                        >
                          Fragrances
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/skincare"
                          className="hover:border-orange-600 transition duration-200 hover:rounded-md p-1 hover:bg-orange-600"
                        >
                          Skincare
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/groceries"
                          className="hover:border-orange-600 transition duration-200 hover:rounded-md p-1 hover:bg-orange-600"
                        >
                          Groceries
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/watches"
                          className="hover:border-orange-600 transition duration-200 hover:rounded-md p-1 hover:bg-orange-600"
                        >
                          Watches
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/furniture"
                          className="hover:border-orange-600 transition duration-200 hover:rounded-md p-1 hover:bg-orange-600"
                        >
                          Furniture
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/clothing"
                          className="hover:border-orange-600 transition duration-200 hover:rounded-md p-1 hover:bg-orange-600"
                        >
                          Clothing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/home-decoration"
                          className="hover:border-orange-600 transition duration-200 hover:rounded-md p-1 hover:bg-orange-600"
                        >
                          Home Decoration
                        </Link>
                      </li>
                      <li>
                                  <Link
                                    to="/auto"
                                    className="hover:border-orange-600 transition duration-200 hover:rounded-md p-1 hover:bg-orange-600"
                                  >
                                    Auto
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/Jewelery & Accessories"
                                    className="hover:border-orange-600 transition duration-200 hover:rounded-md p-1 hover:bg-orange-600"
                                  >
                                    Accessories
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/all-products"
                                    className="hover:border-orange-600 transition duration-200 hover:rounded-md p-1 hover:bg-orange-600"
                                  >
                                    All Products
                                  </Link>
                         </li>
                    </ul>
                  </div>
                </div>
      </div>
    </>
  );
};

export default NavBar2;