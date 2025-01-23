import React from 'react'
import myImage from '../assets/candle.jpg';
import myImage2 from '../assets/bear.webp';
import myImage3 from '../assets/bottle.jpg';
import myImage4 from '../assets/watch.webp';
import myImage5 from '../assets/air.jpg';

const Gifts = () => {
  return (
    <>
    <div>
        <div className='px-10 sm:px-16 py-8 max-w-[1350px] m-auto w-[100%]'>
            <h2 className=" font-mont text-md text-center sm:text-left sm:text-2xl md:text-3xl text-slate-600 font-normal py-8 pb-10">Discover gifts for every occasion</h2>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-items-center'>
                <div className='cursor-pointer font-jak text-slate-800 text-md text-center font-semibold p-4 border-white  rounded-lg  hover:border-slate-300 hover:shadow-lg hover:bg-orange-100 transition duration-200'>
                    <img src={myImage} alt="" className='h-[120px] sm:h-[150px] border rounded-full border-slate-300'  />
                    <h3 className='py-4'>Heartwarming Gifts</h3>
                </div>
                <div className='cursor-pointer font-jak text-slate-800 text-md text-center font-semibold p-4 border-white rounded-lg  hover:border-slate-300 hover:shadow-lg hover:bg-orange-100 transition duration-200'>
                    <img src={myImage2} alt="" className='h-[120px] sm:h-[150px] border rounded-full border-slate-300'  />
                    <h3 className='py-4'>Baby Gifts</h3>
                </div>
                <div className='cursor-pointer font-jak text-slate-800 text-md text-center font-semibold p-4 border-white rounded-lg  hover:border-slate-300 hover:shadow-lg hover:bg-orange-100 transition duration-200'>
                    <img src={myImage3} alt="" className='h-[120px] sm:h-[150px] border rounded-full border-slate-300'  />
                    <h3 className='py-4'>Gifts for Her</h3>
                </div>
                <div className='cursor-pointer font-jak text-slate-800 text-md text-center font-semibold p-4 border-white rounded-lg  hover:border-slate-300 hover:shadow-lg hover:bg-orange-100 transition duration-200'>
                    <img src={myImage4} alt="" className='h-[120px] sm:h-[150px] border rounded-full border-slate-300'  />
                    <h3 className='py-4'>Gifts for Him</h3>
                </div>
                <div className='cursor-pointer font-jak text-slate-800 text-md text-center font-semibold p-4 border-white rounded-lg  hover:border-slate-300 hover:shadow-lg hover:bg-orange-100 transition duration-200'>
                    <img src={myImage5} alt="" className='h-[120px] sm:h-[150px] border rounded-full border-slate-300'  />
                    <h3 className='py-4'>Wellness Gifts</h3>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Gifts