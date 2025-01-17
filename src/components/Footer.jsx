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


const Footer = () => {
  return (
    <>
    <div className='py-12'>
        <div className='flex p-8 mx-8 pb-3 font-jak justify-around  border-b-2 border-slate-300'>
            <div className='text-md border-r-2 border-slate-300 px-10 text-slate-600 '>
                <div className='flex items-center gap-3 py-2'>
               <img src={myImage13} alt="" className='h-6'/>
               <h3 className='py-2'>My Orders</h3>
               </div>
               <div className='flex items-center gap-3  py-2'>
               <img src={myImage12} alt="" className='h-6'/>
               <h3 className='py-2'>Store Locator</h3>
               </div>
               <div className='flex items-center gap-3  py-2'>
               <img src={myImage11} alt="" className='h-6'/>
               <h3 className='py-2'>Contact us</h3>
               </div>
            </div>
            <div className='px-10'>
               <h2 className='text-md text-slate-600'>Services</h2>
                <h3 className='py-2 text-sm pt-3'>Delivery Pass</h3>
                <h3 className='py-2 text-sm'>Click & Collect</h3>
                <h3 className='py-2 text-sm'>Rewards</h3>
                <h3 className='py-2 text-sm'>Express Delivery</h3>
            </div>
            <div className='px-10'>
               <h2 className='text-md text-slate-600'>About us</h2>
                <h3 className='py-2 text-sm pt-3'>Our services</h3>
                <h3 className='py-2 text-sm'>Return policy</h3>
                <h3 className='py-2 text-sm' >Careers</h3>
            </div>
            <div className='px-10'>
               <h2 className='text-md text-slate-600'>Help & Customer Service</h2>
                <h3 className='py-2 text-sm pt-3'>Help Center</h3>
                <h3 className='py-2 text-sm'>How to shop</h3>
                <h3 className='py-2 text-sm'>Product recalls</h3>
                <h3 className='py-2 text-sm'>Site feedback</h3>
            </div>
            <div className='px-10'>
               <h2 className='text-md text-slate-600'>Ways to save</h2>
                <h3 className='py-2 text-sm pt-3'>Delivery saver</h3>
                <h3 className='py-2 text-sm'>Clubcard</h3>
                <h3 className='py-2 text-sm'>Click+Collect</h3>
                <h3 className='py-2 text-sm'>Clubcard Prices</h3>
            </div>
        </div>
        <div className='pb-4 border-b-2 border-slate-300'>
            <div className='flex pl-14 pt-6 gap-2'>
                <img src={myImage2} alt="" className='h-10'/>
                <img src={myImage3} alt="" className='h-10'/>
                <img src={myImage4} alt="" className='h-10'/>
                <img src={myImage5} alt="" className='h-10'/>
             </div>
             <div className='pl-14 pt-4'>
                <p className='text-sm text-slate-600'>© 2025 store.com. All rights reserved</p>
             </div>
        </div>
        <div className='flex pl-14 pt-6 gap-2 items-center'>
                <img src={myImage6} alt="" className='h-8'/>
                <img src={myImage7} alt="" className='h-8'/>
                <img src={myImage8} alt="" className='h-8'/>
                <img src={myImage9} alt="" className='h-8'/>
                <img src={myImage10} alt="" className='h-8'/>
             </div>
    </div>
    </>
  )
}

export default Footer