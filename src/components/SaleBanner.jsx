import React from 'react'
import myImage from '../assets/vectors/cart.png';
import myImage2 from '../assets/ins.png';
import myImage3 from '../assets/fb.png';
import myImage4 from '../assets/x.png';
import myImage5 from '../assets/wh.png';
import myImage6 from '../assets/vectors/05.png';
import myImage7 from '../assets/vectors/white.png';





const SaleBanner = () => {
  return (
    <>
    <div className='px-14 py-20 '>
    <div className='bg-gradient-to-r from-yellow-200  to-yellow-200 rounded-2xl'>
    <div className='flex justify-between '>
    <div className='flex justify-start pt-6 pl-20'>
        <img src={myImage} alt="" className='h-36' />
        {/* <div>
            <h2 className='text-4xl pt-2 font-jak font-semibold'>ONLINE</h2>
            <h2 className='text-3xl mt-[-12px] ml-16 font-cur text-orange-500'>store</h2>
        </div> */}
    </div>
    <div className='flex justify-end pt-0'>
        <div className='bg-orange-400 w-80 h-26 rounded-b-full'>
            <div className='flex justify-end p-16 gap-3'>
                <img src={myImage2} alt="" className='h-10'/>
                <img src={myImage3} alt="" className='h-10'/>
                <img src={myImage4} alt="" className='h-10'/>
                <img src={myImage5} alt="" className='h-10'/>
            </div>
        </div>
    </div>
    </div>
    <div className='flex justify-between pt-4 items-start p-4 pb-0'>
        <div className='font-mont pl-20'>
            <h3 className='text-2xl font-bold pb-4'>BLACK FRIDAY SALE</h3>
            <h2 className='text-8xl font-bold text-orange-500 '>ONE SALE</h2>
            <h2 className='text-6xl font-bold text-orange-500'>MANY THINGS!</h2>
            <p className='text-md font-jak max-w-[500px] pt-4'>Get ready for the biggest shopping event of the year! This Black Friday, enjoy massive discounts and exclusive deals on all your favorite items.</p>
            <p className='text-md font-jak max-w-[500px] pt-2'>Don’t miss out—shop now and save big before it’s gone!</p>
            <button type='button' className='py-3 w-[100%] mt-8 bg-white text-orange-500 font-bold font-jak tracking-wider shadow-lg text-md rounded-md hover:bg-orange-400 transition-all duration-200 hover:text-white'>DISCOVER MORE</button>
        </div>
        <div className=''>
            <img src={myImage6} alt="" className='' />
        </div>
        
    </div>
    </div>
    </div>
    </>
  )
}

export default SaleBanner