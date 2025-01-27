import React from 'react'
import myImage from '../assets/vectors/cart.webp';
import myImage2 from '../assets/ins.png';
import myImage3 from '../assets/fb.png';
import myImage4 from '../assets/x.png';
import myImage5 from '../assets/wh.png';
import myImage6 from '../assets/vectors/05.webp';
import { Link } from 'react-router-dom';





const SaleBanner = () => {
  return (
    <>
    <div className='sm:px-16   sm:pb-0'>
    <div className='bg-gradient-to-r from-yellow-200  to-yellow-200 sm:rounded-2xl'>
    <div className='max-w-[1350px] m-auto w-[100%]'>
    <div className='flex flex-col-reverse sm:flex-row sm:justify-between justify-center '>
    <div className='flex justify-start  md:ml-36 lg:ml-0 pt-6 pl-7 lg:pl-20'>
        <img src={myImage} alt="" className='h-20 md:h-32 sm:h-36' />
        {/* <div>
            <h2 className='text-4xl pt-2 font-jak font-semibold'>ONLINE</h2>
            <h2 className='text-3xl mt-[-12px] ml-16 font-cur text-orange-500'>store</h2>
        </div> */}
    </div>
    <div className='flex justify-center sm:justify-end pt-0'>
        <div className='bg-orange-400 w-80 h-26 sm:w-80 sm:h-26 rounded-b-full'>
            <div className='flex justify-center sm:justify-end p-16 gap-3'>
                <img src={myImage2} alt="" className='h-10 cursor-pointer'/>
                <img src={myImage3} alt="" className='h-10 cursor-pointer'/>
                <img src={myImage4} alt="" className='h-10 cursor-pointer'/>
                <img src={myImage5} alt="" className='h-10 cursor-pointer'/>
            </div>
        </div>
    </div>
    </div>
    <div className='flex flex-col lg:flex-row justify-between  pt-4 items-center lg:items-start p-4 px-7 pb-0'>
        <div className='font-mont lg:pl-20'>
            <h3 className='text-xl xl:2xl font-bold pb-4'>BLACK FRIDAY SALE</h3>
            <h2 className='text-6xl xl:text-8xl font-bold text-orange-500 '>ONE SALE</h2>
            <h2 className='text-4xl xl:text-6xl font-bold text-orange-500'>MANY THINGS!</h2>
            <p className='text-sm lg:text-md font-jak max-w-[500px] pt-4'>Get ready for the biggest shopping event of the year! This Black Friday, enjoy massive discounts and exclusive deals on all your favorite items.</p>
            <p className='text-sm lg:text-md font-jak max-w-[500px] pt-2'>Don’t miss out—shop now and save big before it’s gone!</p>
           <Link to="/all-products"> <button type='button' className='py-3 w-[100%] mt-8 bg-white text-orange-500 font-bold font-jak tracking-wider shadow-lg text-md rounded-md hover:bg-orange-400 transition-all duration-200 hover:text-white'>DISCOVER MORE</button> </Link>
        </div>
        <div className=''>
            <img src={myImage6} alt="" className='' />
        </div>
    </div> 
    </div>
    </div>
    </div>
    </>
  )
}

export default SaleBanner