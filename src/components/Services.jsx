import React from 'react'
import myImage from '../assets/discount.png';
import myImage2 from '../assets/return.png';
import myImage3 from '../assets/secure.png';
import myImage4 from '../assets/quality.png';

const Services = () => {
  return (
    <>
    <div className='max-w-[1350px] m-auto w-[100%]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center lg:grid-cols-4 lg:gap-2 items-center py-4 px-4 sm:px-12 bg-white shadow-md mx-16 my-8 rounded-lg font-jak'>
            <div className='flex gap-3 pb-4 lg:pb-0'>
                <div><img src={myImage} alt="" className='h-[50px]'/></div>
                <div>
                    <p className='text-md font-bold text-slate-600'>Discount</p>
                    <p className='text-sm text-slate-500'>Flat discount on selected items</p>
                </div>
            </div>
            <div className='flex gap-3 pb-4 lg:pb-0'>
                <div><img src={myImage2} alt="" className='h-[50px]'/></div>
                <div>
                    <p className='text-md font-bold text-slate-600'>Free Rerurn</p>
                    <p className='text-sm text-slate-500'>Get free returns within 7 days</p>
                </div>
            </div>
            <div className='flex gap-3 pb-4 sm:pb-0'>
                <div><img src={myImage3} alt="" className='h-[50px]'/></div>
                <div>
                    <p className='text-md font-bold text-slate-600'>Secure Payment</p>
                    <p className='text-sm text-slate-500'>100% secure online payments</p>
                </div>
            </div>
            <div className='flex gap-3 pb-4 sm:pb-0'>
                <div><img src={myImage4} alt="" className='h-[50px]'/></div>
                <div>
                    <p className='text-md font-bold text-slate-600'>Best Quality</p>
                    <p className='text-sm text-slate-500'>No compromise on quality</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services