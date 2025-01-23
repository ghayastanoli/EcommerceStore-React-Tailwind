import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../assets/search.png';
import myImage2 from '../assets/cart2.png';
import { useCart } from '../context/CartContext';

const NavBar = () => {
  const { state } = useCart();
  const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="flex px-8 p-5 text-white bg-orange-500 font-medium text-md border-white justify-center">
      <div>
        {/* Main Navigation Links */}
        <div className="flex justify-center gap-10 font-mont">
          <div>
            <ul className="flex gap-6">
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
                  to="/sale"
                  className="hover:border-orange-600 transition duration-200 hover:rounded-md p-1 hover:bg-orange-600"
                >
                  Sale
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
            </ul>
          </div>

          {/* Search Icon */}
          <div>
            <img src={myImage} alt="Search" className="h-[30px]" />
          </div>

          {/* Cart Icon */}
          <div>
            <Link to="/AddToCartPage" className="flex items-center">
              <img src={myImage2} alt="Cart" className="h-[30px]" />
              <span className=" bg-white text-orange-500 rounded-full w-5 h-5 flex items-center justify-center text-sm">
                {cartItemsCount}
              </span>
            </Link>
          </div>
        </div>

        {/* Additional Navigation Links */}
        <div className="flex justify-center gap-10 font-jak list-none pt-2">
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
              Jewelry & Accessories
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;