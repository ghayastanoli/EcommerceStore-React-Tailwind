import React from 'react'
import myImage from '../assets/heroimg.jpg';

const Hero = () => {
  return (
    <div
      className="h-[690px] bg-cover bg-center flex flex-col "
      style={{ backgroundImage: `url(${myImage})` }}>
        <div>
          <div className='flex justify-end'>
            <div className='bg-white flex mr-6 p-2 px-3 rounded-b-xl text-sm hover:bg-gradient-to-r from-orange-600  to-slate-600 hover:text-white transition-all duration-200'>
            <p className='font-jak'>Sign in / Register</p>
            </div>
          </div>
        <h2 className='font-mont text-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600  to-slate-600 font-semibold p-16 max-w-[630px] pb-10'>Where Shopping Meets Convenience! </h2>
        <h4 className='px-16 text-xl font-mont text-white max-w-[600px]'>Find what you love, love what you find. Start shopping today and <span className='font-bold text-3xl'>save big.</span> </h4>
        </div>
        <div>
          <button type='button' className='m-16 mt-10 px-8 py-2 bg-orange-500 rounded-md font-jak font-semibold text-white hover:bg-gradient-to-r from-orange-600  to-orange-400 transition duration-300'>SHOP NOW</button>
        </div>
        
    </div>
  )
}

export default Hero