import React from 'react'
import myImage from '../assets/vectors/sofa2.png';
import myImage2 from '../assets/vectors/shoes.png';
import myImage3 from '../assets/vectors/bag.png';
import myImage4 from '../assets/vectors/glasses.png';
import myImage5 from '../assets/vectors/watch.png';
import myImage6 from '../assets/vectors/basket.png';
import myImage7 from '../assets/vectors/makeup.png';


const CategoryCards = () => {
  return (
    <>
    <div className='py-8'>
    <div className='px-11 font-mont'>
    <div className=' p-4 py-3'>
        <div className='flex gap-4'>
            <div className='w-[55%]'>
            <div className=' flex justify-between gap-3 px-4 bg-gray-200 rounded-xl w-[100%] shadow-md hover:bg-gray-300'>
                <div className='pt-12'>
                <h3 className='text-md '>Home & Living</h3>
                <h1 className='text-3xl font-bold text-gray-600'>SOFA</h1>
                <button className='text-xs font-jak bg-slate-400 text-white p-1 px-3 mt-3 rounded-sm'>SHOP NOW</button>
                </div>
                <div>
                    <img src={myImage} alt="" className='h-[320px] ml-12'/>
                </div>
            </div>
            </div>
            <div className='flex gap-4 w-[55%]'>
            <div className=' w-[100%]  px-4 bg-blue-200 rounded-xl shadow-md hover:bg-blue-300'>
                <div className='pt-12'>
                <h3 className='text-md text-blue-500 '>Clothing & Shoes</h3>
                <h1 className='text-3xl font-bold text-gray-600'>Sneakers</h1>
                </div>
                <div className='flex justify-center'>
                    <img src={myImage2} alt="" className='h-[206px] mt-[-20px]'/>
                </div>
            </div>
            <div className=' w-[100%]  px-4 bg-yellow-200 rounded-xl shadow-md hover:bg-yellow-300'>
                <div className='pt-12'>
                <h3 className='text-md text-yellow-600  '>Bags & Beyond</h3>
                <h1 className='text-3xl font-bold text-gray-600'>Perfect Packs</h1>
                </div>
                <div className='flex justify-center'>
                    <img src={myImage3} alt="" className='h-[200px]  ml-4'/>
                </div>
            </div>
            </div>
        </div>
        
    </div>
    </div>
    
    <div className='px-11 font-mont'>
    <div className=' p-4 py-3 pt-1'>
        <div className='flex gap-4'>
            <div className='flex gap-4 w-[55%]'>
            <div className='gap-3 px-4 bg-[#8eb19d] rounded-xl w-[100%] shadow-md hover:bg-[#7aa58c]'>
                <div className='pt-12'>
                <h3 className='text-md text-[#416651] '>Eyewear & Style</h3>
                <h1 className='text-3xl font-bold text-gray-600'>Vision Redefined</h1>
                </div>
                <div className='flex justify-center'>
                    <img src={myImage4} alt="" className='h-[80px] mt-8'/>
                </div>
            </div>
            <div className=' w-[100%]  px-4 bg-red-200 rounded-xl shadow-md hover:bg-red-300'>
                <div className='pt-12'>
                <h3 className='text-md text-red-700 '>Tech & Gadgets</h3>
                <h1 className='text-3xl font-bold text-gray-600'>Smart Solutions</h1>
                </div>
                <div className='flex justify-end'>
                    <img src={myImage5} alt="" className='h-[175px] mt-[-10px]'/>
                </div>
            </div>
            </div>
            <div className='w-[55%]'>
            <div className=' flex justify-between min-w-[40%]  gap-1 px-4 bg-[#a7c957] rounded-xl shadow-md hover:bg-[#8ba846]'>
                <div className='pt-12'>
                <h3 className='text-md text-green-700  '>Daily Essentials</h3>
                <h1 className='text-3xl font-bold text-gray-600'>Fresh Basket</h1>
                <button className='text-xs font-jak bg-green-700 text-white p-1 px-3 mt-3 rounded-sm'>SHOP NOW</button>
                </div>
                <div>
                    <img src={myImage6} alt="" className='h-[250px] mt-7 mr-4'/>
                </div>
            </div>
            </div>
        </div>
        
    </div>
    </div>
    </div>
    </>
  )
}

export default CategoryCards