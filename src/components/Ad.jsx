import React from 'react'
import myImage from '../assets/phones.jpg';

const Ad = () => {
  return (
    <>
    <div className='mx-14'>
        <div className="h-screen w-full bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${myImage})` }}>
            <div className='font-jak text-5xl font-bold flex justify-end px-16 pt-16 text-white text-left'>
                <div>
                <h2>Top Selling Smartphones</h2>
                </div>
            </div>
            <div className='font-jak text-4xl font-bold flex justify-end px-16 pt-4 text-white text-left'>
                <h2>Latest technology, <span className='text-black'>Best Brands.</span></h2>
            </div>
            <div className='flex justify-end mr-16 font-jak text-white font-semibold '>
                <button type='button' className='px-6 py-2 mt-2 shadow-md rounded-md bg-orange-500 hover:bg-orange-600 transition-all duration-200'>Explore Now</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Ad