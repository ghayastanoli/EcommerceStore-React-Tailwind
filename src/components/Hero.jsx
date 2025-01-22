import React from 'react'
import { Link } from 'react-router-dom';
import myImage from '../assets/heroimg.jpg';



const Hero = () => {
  return (
    <div
      className=" bg-cover bg-center flex flex-col pb-[100px] "
      style={{ backgroundImage: `url(${myImage})` }}>
        <div className='max-w-[1350px] m-auto w-[100%]'>
        <div>
        <h2 className='font-mont text-2xl sm:text-4xl md:5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600  to-slate-600 font-semibold p-4 pt-6 pb-4 sm:px-6 sm:p-8 md:p-16 max-w-[260px] sm:max-w-[400px] md:max-w-[630px] md:pb-10'>Where Shopping Meets Convenience! </h2>
        <h4 className='px-4  sm:px-8 md:px-16 text-xs md:text-md lg:text-xl font-mont text-white max-w-[250px] md:max-w-[500px] lg:max-w-[600px]'>Find what you love, love what you find. Start shopping today and <span className='font-bold md:3xl text-xl'>save big.</span> </h4>
        </div>
        </div>
        <div className='max-w-[1350px] m-auto w-[100%]'>
          <button type='button' className='m-4 sm:m-8 md:m-16 mt-10 px-4 sm:px-8 py-1  sm:py-2 bg-orange-500 rounded-md font-jak text-sm md:text-md font-normal sm:font-semibold text-white hover:bg-orange-600 transition duration-300'>SHOP NOW</button>
        </div>
        
    </div>
  )
}

export default Hero