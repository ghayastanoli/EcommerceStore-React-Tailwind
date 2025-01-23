import React from 'react'
import { Link } from 'react-router-dom';
import myImage from '../assets/vectors/sofa2.webp';
import myImage2 from '../assets/vectors/shoes.webp';
import myImage3 from '../assets/vectors/bag.webp';
import myImage4 from '../assets/vectors/glasses.webp';
import myImage5 from '../assets/vectors/watch.webp';
import myImage6 from '../assets/vectors/basket.webp';


const CategoryCards = () => {
  return (
    <>
    <div className='py-8 max-w-[1350px] m-auto w-[100%]'>
        <h1 className='font-mont text-md text-center sm:text-left sm:text-2xl md:text-3xl text-slate-600 px-4 sm:px-16  font-normal py-8 pt-6'>Shop our most popular categories</h1>
    <div className='px-4 sm:px-11 font-mont'>
    <div className=' p-4 py-3'>
        <div className='flex flex-col min-[1120px]:flex-row gap-4'>
            <div className='w-[100%] min-[1120px]:w-[55%]'>
                <Link to="/furniture">
            <div className=' sm:flex sm:justify-between sm:gap-3 mb-[35px] sm:mb-0 px-4 bg-gray-200 rounded-xl w-[100%] shadow-md hover:bg-gray-300'>
                <div className='pt-12'>
                <h3 className='text-sm sm:text-md '>Home & Living</h3>
                <h1 className='text-xl sm:2xl xl:text-3xl font-bold text-gray-600'>SOFA</h1>
                <button className='text-xs font-jak bg-slate-400 text-white p-1 px-3 mt-3 rounded-sm'>SHOP NOW</button>
                </div>
                <div className='mb-[-30px] sm:mb-4 flex justify-end'>
                    <img src={myImage} alt="" className='h-[320px] mt-[-88px] sm:ml-12'/>
                </div>
            </div>
            </Link>
            </div>
            <div className='flex gap-4 w-[100%] min-[1120px]:w-[55%]'>
            <div className=' w-[100%]  px-4 bg-blue-200 rounded-xl shadow-md hover:bg-blue-300'>
            <Link to="/mens-shoes">
                <div className='pt-12'>
                <h3 className='text-sm sm:text-md text-blue-500 '>Clothing & Shoes</h3>
                <h1 className='text-xl sm:2xl xl:text-3xl font-bold text-gray-600'>Sneakers</h1>
                </div>
                <div className='flex justify-center'>
                    <img src={myImage2} alt="" className='h-[180px] sm:h-[206px] mt-[-20px]'/>
                </div>
            </Link>
            </div>
            <div className=' w-[100%]  px-4 bg-yellow-200 rounded-xl shadow-md hover:bg-yellow-300'>
                <Link to="womens-bags">
                <div className='pt-12'>
                <h3 className='text-sm sm:text-md text-yellow-600  '>Bags & Beyond</h3>
                <h1 className='text-xl sm:2xl xl:text-3xl font-bold text-gray-600'>Perfect Packs</h1>
                </div>
                <div className='flex justify-center'>
                    <img src={myImage3} alt="" className='sm:h-[180px] h-[150px]  ml-4'/>
                </div>
                </Link>
            </div>
            </div>
        </div>
        
    </div>
    </div>
    
    <div className='px-4 sm:px-11 font-mont '>
    <div className=' p-4 py-3 pt-1'>
        <div className='flex flex-col min-[1120px]:flex-row  gap-4'>
            <div className='flex gap-4 w-[100%] min-[1120px]:w-[55%]'>
            <div className='gap-3 px-4 bg-[#8eb19d] rounded-xl w-[100%] shadow-md hover:bg-[#7aa58c]'>
                <Link to="/sunglasses">
                <div className='pt-12'>
                <h3 className='text-sm sm:text-md text-[#416651] '>Eyewear & Style</h3>
                <h1 className='text-xl sm:2xl xl:text-3xl font-bold text-gray-600'>Vision Redefined</h1>
                </div>
                <div className='flex justify-center'>
                    <img src={myImage4} alt="" className='sm:h-[80px] h-[60px] mt-8'/>
                </div>
                </Link>
            </div>
            <div className=' w-[100%]  px-4 bg-red-200 rounded-xl shadow-md hover:bg-red-300'>
                <Link to="/mobile-accessories">
                <div className='pt-12'>
                <h3 className='text-sm sm:text-md text-red-700 '>Tech & Gadgets</h3>
                <h1 className='text-xl sm:2xl xl:text-3xl font-bold text-gray-600'>Smart Solutions</h1>
                </div>
                <div className='flex justify-end'>
                    <img src={myImage5} alt="" className='h-[120px] sm:h-[150px] xl:h-[175px] mt-[-10px]'/>
                </div>
                </Link>
            </div>
            </div>
            <div className='w-[100%] min-[1120px]:w-[55%]'>
            <Link to="/groceries">
            <div className=' sm:flex sm:justify-between min-w-[40%]  gap-1 px-4 bg-[#a7c957] rounded-xl shadow-md hover:bg-[#92af4e]'>
                <div className='pt-12'>
                <h3 className='text-sm sm:text-md text-green-700  '>Daily Essentials</h3>
                <h1 className='text-xl sm:2xl xl:text-3xl font-bold text-gray-600'>Fresh Basket</h1>
                <button className='text-xs font-jak bg-green-700 text-white p-1 px-3 mt-3 rounded-sm'>SHOP NOW</button>
                </div>
                <div className='flex justify-end'>
                    <img src={myImage6} alt="" className='sm:h-[250px] h-[220px] mt-[-20px] sm:mt-7 mr-4'/>
                </div>
            </div>
                </Link>
            </div>
        </div>
        
    </div>
    </div>
    </div>
    </>
  )
}

export default CategoryCards