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
        <div className='px-16 py-8'>
            <h2 className=" font-mont text-3xl text-slate-600 font-normal py-8 pb-10">Discover gifts for every occasion</h2>
            <div className='grid grid-cols-5 justify-items-center'>
                <div className='font-jak text-slate-800 text-md text-center font-semibold p-4 border-white  rounded-lg  hover:border-slate-300 hover:shadow-lg hover:bg-orange-100 transition duration-200'>
                    <img src={myImage} alt="" className='h-[150px] border rounded-full border-slate-300'  />
                    <h3 className='py-4'>Heartwarming Gifts</h3>
                </div>
                <div className='font-jak text-slate-800 text-md text-center font-semibold p-4 border-white rounded-lg  hover:border-slate-300 hover:shadow-lg hover:bg-orange-100 transition duration-200'>
                    <img src={myImage2} alt="" className='h-[150px] border rounded-full border-slate-300'  />
                    <h3 className='py-4'>Baby Gifts</h3>
                </div>
                <div className='font-jak text-slate-800 text-md text-center font-semibold p-4 border-white rounded-lg  hover:border-slate-300 hover:shadow-lg hover:bg-orange-100 transition duration-200'>
                    <img src={myImage3} alt="" className='h-[150px] border rounded-full border-slate-300'  />
                    <h3 className='py-4'>Gifts for Her</h3>
                </div>
                <div className='font-jak text-slate-800 text-md text-center font-semibold p-4 border-white rounded-lg  hover:border-slate-300 hover:shadow-lg hover:bg-orange-100 transition duration-200'>
                    <img src={myImage4} alt="" className='h-[150px] border rounded-full border-slate-300'  />
                    <h3 className='py-4'>Gifts for Him</h3>
                </div>
                <div className='font-jak text-slate-800 text-md text-center font-semibold p-4 border-white rounded-lg  hover:border-slate-300 hover:shadow-lg hover:bg-orange-100 transition duration-200'>
                    <img src={myImage5} alt="" className='h-[150px] border rounded-full border-slate-300'  />
                    <h3 className='py-4'>Wellness Gifts</h3>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Gifts