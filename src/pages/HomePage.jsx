import React from 'react'
import Hero from '../components/Hero'
import Listing from '../components/Listing'
import CategoryCards from '../components/CategoryCards'
import SaleBanner from '../components/SaleBanner'
import Feedback from '../components/Feedback'
import ProductCarousel from '../components/ProductCarousel'
import Services from '../components/Services'
import Gifts from '../components/Gifts'
import Ad from '../components/Ad'
const HomePage = () => {
  const formatTitle = (category) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };


  return (
    <>
      <Hero/>
      <Services/>
      <CategoryCards/>
      <ProductCarousel />
      <Ad/>
      <Gifts/>
      <SaleBanner/>
      <Feedback/>
    </>
  )
}

export default HomePage