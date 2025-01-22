import React from 'react'
import myImage from '../assets/phones.jpg';

const Ad = () => {
  return (
    <>
    <div>
    <div className='mx-7 sm:mx-14'>
        <div className="h-[100vh] w-full bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${myImage})` }}>
            <div className='max-w-[1350px] m-auto w-[100%]'>
            <div className='font-jak text-2xl max-[692px]:text-4xl md:text-5xl font-bold flex justify-center sm:justify-end px-4 sm:px-16 pt-8 sm:pt-10 text-white text-left'>
                <div>
                <h2>Top Selling Smartphones</h2>
                </div>
            </div>
            <div className='font-jak text-[18px] max-[692px]:text-3xl md:text-4xl font-bold flex justify-center sm:justify-end px-4 sm:px-16 pt-4 text-white text-left'>
                <h2>Latest technology, <span className='text-black'>Best Brands.</span></h2>
            </div>
            <div className='flex justify-center sm:justify-end sm:mr-16 font-jak text-white sm:font-semibold  '>
                <button type='button' className='px-2 min-[802px]:px-6 py-1 sm:py-2 mt-2 shadow-md rounded-md bg-orange-500 hover:bg-orange-600 transition-all duration-200'>Explore Now</button>
            </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Ad