import React from 'react'
import myImage from '../assets/heroimg.jpg';

const Hero = () => {
  return (
    <div>
        <img src={myImage} alt="" className='h-[540px] w-[100%]' />
    </div>
  )
}

export default Hero