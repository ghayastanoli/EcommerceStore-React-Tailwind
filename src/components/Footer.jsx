import React from 'react'
import { Link } from 'react-router-dom';
import myImage2 from '../assets/in-b.png';
import myImage3 from '../assets/fb-b.png';
import myImage4 from '../assets/li-b.png';
import myImage5 from '../assets/p-b.png';
import myImage6 from '../assets/vs.png';
import myImage7 from '../assets/mc.png';
import myImage8 from '../assets/up.png';
import myImage9 from '../assets/pp.png';
import myImage10 from '../assets/ae.png';
import myImage11 from '../assets/email.png';
import myImage12 from '../assets/loc.png';
import myImage13 from '../assets/order.png';
import myImage14 from '../assets/cards.png';
import Logo from "../assets/zap.png";



const Footer = () => {
  return (
    <>
    <div className='py-12 '>
        <div className='max-w-[1350px] m-auto w-[100%]'>
        <div className='flex flex-col sm:flex-row p-2 lg:p-8 lg:mx-8 pb-3 font-jak sm:justify-around  border-b-2 border-slate-300'>
            <div className='text-xs md:text-lg sm:border-r-2 border-slate-300 px-6 lg:px-10 text-slate-600 pb-3 sm:pb-0 flex justify-around gap-3 sm:block'>
                <div className='flex justify-start items-center gap-3 my-2  cursor-pointer'>
               <img src={myImage13} alt="" className='h-6'/>
               <h3 className='my-2'>My Orders</h3>
               </div>
               <div className='flex items-center gap-3  my-2  cursor-pointer'>
               <img src={myImage12} alt="" className='h-6'/>
               <h3 className='my-2'>Store Locator</h3>
               </div>
               <div className='flex items-center gap-3  my-2 cursor-pointer'>
               <img src={myImage11} alt="" className='h-6'/>
               <h3 className='my-2'>Contact us</h3>
               </div>
            </div>
            <div className='px-6 lg:px-10 py-3 sm:py-0'>
               <h2 className='text-md text-slate-600 '>Services</h2>
                <h3 className='my-2 text-sm mt-3 cursor-pointer'>Delivery Pass</h3>
                <h3 className='my-4 text-sm cursor-pointer'>Click & Collect</h3>
                <h3 className='my-4 text-sm cursor-pointer'>Rewards</h3>
                <h3 className='my-4 text-sm cursor-pointer'>Express Delivery</h3>
            </div>
            <div className='px-6 lg:px-10 py-3 sm:py-0'>
               <h2 className='text-md text-slate-600'>About us</h2>
                <h3 className='my-4 text-sm mt-3 cursor-pointer'>Our services</h3>
                <h3 className='my-4 text-sm cursor-pointer'>Return policy</h3>
                <h3 className='my-4 text-sm cursor-pointer' >Careers</h3>
            </div>
            <div className='px-6 lg:px-10 py-3 sm:py-0'>
               <h2 className='text-md text-slate-600'>Help & Customer Service</h2>
                <h3 className='my-4 text-sm mt-3 cursor-pointer'>Help Center</h3>
                <h3 className='my-4 text-sm cursor-pointer'>How to shop</h3>
                <h3 className='my-4 text-sm cursor-pointer'>Product recalls</h3>
                <h3 className='my-4 text-sm cursor-pointer'>Site feedback</h3>
            </div>
            <div className='px-6 lg:px-10 py-3 sm:py-0'>
               <h2 className='text-md text-slate-600'>Ways to save</h2>
                <h3 className='my-4 text-sm mt-3 cursor-pointer'>Delivery saver</h3>
                <h3 className='my-4 text-sm cursor-pointer'>Clubcard</h3>
                <h3 className='my-4 text-sm cursor-pointer'>Click+Collect</h3>
                <h3 className='my-4 text-sm cursor-pointer'>Clubcard Prices</h3>
            </div>
        </div>
        </div>
        <div className='pb-4 border-b-2 border-slate-300 '>
            <div className='flex justify-between items-center px-7 sm:px-16 max-w-[1350px] w-[100%] m-auto' >
            <div>
            <div className='flex  pt-6  gap-1 sm:gap-2'>
                <img src={myImage2} alt="" className='h-6 sm:h-8 cursor-pointer'/>
                <img src={myImage3} alt="" className='h-6 sm:h-8 cursor-pointer'/>
                <img src={myImage4} alt="" className='h-6 sm:h-8 cursor-pointer'/>
                <img src={myImage5} alt="" className='h-6 sm:h-8 cursor-pointer'/>
             </div>
             <div className=' pt-4'>
                <p className='text-xs sm:text-sm text-slate-600'>© 2025 store.com. All rights reserved</p>
             </div>
             </div>
             <div>
                <img src={Logo} alt="" className='h-[50px]'/>
             </div>
            </div>
        </div>
        <div className='flex pl-8 sm:pl-16 pt-6 gap-1 sm:gap-2 items-center max-w-[1350px] m-auto w-[100%]'>
                <img src={myImage6} alt="" className='h-4 sm:h-8'/>
                <img src={myImage7} alt="" className='h-4 sm:h-8'/>
                <img src={myImage8} alt="" className='h-4 sm:h-8'/>
                <img src={myImage9} alt="" className='h-4 sm:h-8'/>
                <img src={myImage10} alt="" className='h-4 sm:h-8'/>
                <img src={myImage14} alt="" className='h-4 sm:h-8'/>
             </div>
    </div>
    </>
  )
}

export default Footer