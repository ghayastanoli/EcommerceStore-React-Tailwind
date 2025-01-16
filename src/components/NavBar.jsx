import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../assets/search.png';
import myImage2 from '../assets/cart.png';

const NavBar = () => {
  return (
    <>
      <div className='flex px-8 p-5 text-white bg-orange-500 font-medium text-md border-white justify-center'>
        <div className=''>
          <div className='flex justify-center gap-10 font-mont'>
            <div>
              <ul className='flex gap-6 '>
                <li>
                  <Link to="/smartphones" className=' hover:border-orange-600  transition duration-200 hover:rounded-md p-1 hover:bg-orange-600 '>SmartPhones</Link>
                </li>
                <li>
                  <Link to="/laptops" className='hover:border-orange-600  transition duration-200 hover:rounded-md p-1 hover:bg-orange-600'>Laptops</Link>
                </li>
                <li>
                  <Link to="/fragrances" className='hover:border-orange-600  transition duration-200 hover:rounded-md p-1 hover:bg-orange-600'>Fragrances</Link>
                </li>
                <li>
                  <Link to="/skincare" className='hover:border-orange-600  transition duration-200 hover:rounded-md p-1 hover:bg-orange-600'>Skincare</Link>
                </li>
                <li>
                  <Link to="/groceries" className='hover:border-orange-600  transition duration-200 hover:rounded-md p-1 hover:bg-orange-600'>Groceries</Link>
                </li>
                <li>
                  <Link to="/watches" className='hover:border-orange-600  transition duration-200 hover:rounded-md p-1 hover:bg-orange-600'>Watches</Link>
                </li>
                <li>
                  <Link to="/furniture" className='hover:border-orange-600  transition duration-200 hover:rounded-md p-1 hover:bg-orange-600'>Furniture</Link>
                </li>
                <li>
                  <Link to="/clothing" className='hover:border-orange-600  transition duration-200 hover:rounded-md p-1 hover:bg-orange-600'>Clothing</Link>
                </li>
                <li>
                  <Link to="/sale" className='hover:border-orange-600  transition duration-200 hover:rounded-md p-1 hover:bg-orange-600'>Sale</Link>
                </li>
                <li>
              <Link to="/home-decoration" className='hover:border-orange-600  transition duration-200 hover:rounded-md p-1 hover:bg-orange-600'>Home Decoration</Link>
                </li>
              </ul>
            </div>
            <div>
              <img src={myImage} alt="" className='h-[24px]' />
            </div>
            <div>
              <img src={myImage2} alt="" className='h-[24px]' />
            </div>
          </div>
          <div className='flex justify-center gap-10 font-jak list-none pt-2'>
            
            <li>
              <Link to="/auto" className='hover:border-orange-600  transition duration-200 hover:rounded-md p-1 hover:bg-orange-600'>Auto</Link>
            </li>
            <li>
              <Link to="/jewelry-accessories" className='hover:border-orange-600  transition duration-200 hover:rounded-md p-1 hover:bg-orange-600'>Jewelry & Accessories</Link>
            </li>
            <li>
              <Link to="/all-products" className='hover:border-orange-600  transition duration-200 hover:rounded-md p-1 hover:bg-orange-600'>All Products</Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;