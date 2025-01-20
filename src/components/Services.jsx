import React from 'react'
import myImage from '../assets/discount.png';
import myImage2 from '../assets/return.png';
import myImage3 from '../assets/secure.png';
import myImage4 from '../assets/quality.png';

const Services = () => {
  return (
    <>
    <div>
        <div className='flex justify-between items-center py-4 px-12 bg-white shadow-md mx-16 my-8 rounded-lg font-jak'>
            <div className='flex gap-3'>
                <div><img src={myImage} alt="" className='h-[50px]'/></div>
                <div>
                    <p className='text-md font-bold text-slate-600'>Discount</p>
                    <p className='text-sm text-slate-500'>On selected items</p>
                </div>
            </div>
            <div className='flex gap-3'>
                <div><img src={myImage2} alt="" className='h-[50px]'/></div>
                <div>
                    <p className='text-md font-bold text-slate-600'>Free Rerurn</p>
                    <p className='text-sm text-slate-500'>Get free returns within 7 days</p>
                </div>
            </div>
            <div className='flex gap-3'>
                <div><img src={myImage3} alt="" className='h-[50px]'/></div>
                <div>
                    <p className='text-md font-bold text-slate-600'>Secure Payment</p>
                    <p className='text-sm text-slate-500'>100% secure online payments</p>
                </div>
            </div>
            <div className='flex gap-3'>
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