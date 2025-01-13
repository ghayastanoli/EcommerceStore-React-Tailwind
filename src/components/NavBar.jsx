import React from 'react'
import myImage from '../assets/search.png';

const NavBar = () => {
  return (
    <>
    <div className='flex px-8 p-5 text-white bg-orange-500 font-normal text-md border-white justify-center'>
        <div className='flex'>
                <div className='flex justify-center gap-6'>
                <div>    
                <ul className='flex gap-6'>
                <li>Whats New</li>
                <li>Sports</li>
                <li>Electronics</li>
                <li>Groccery</li>
                <li>Clothing</li>
                <li>Shoes</li>
                <li>Bags</li>
                <li>Men</li>
                <li>Beauty</li>
                <li>Home & Gift</li>
                <li>Jewelery & Accessories</li>
                <li>Sale</li>
                </ul>
                </div>
                <div>
                <img src={myImage} alt="" className='h-[22px]' />
                </div>
                </div>
                
          
        </div>
    </div>
    </>
  )
}

export default NavBar