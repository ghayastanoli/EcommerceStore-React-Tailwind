import React from 'react'
import Hero from '../components/Hero'
import Listing from '../components/Listing'
import CategoryCards from '../components/CategoryCards'
import SaleBanner from '../components/SaleBanner'
import Feedback from '../components/Feedback'

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
      <CategoryCards/>
      <Listing category="beauty" pageTitle={formatTitle('beauty')} limit={4} />
      <Listing category="skin-care" pageTitle={formatTitle('skin-care')} limit={4} />
      <Listing category="home-decoration" pageTitle={formatTitle('home-decoration')} limit={4} />
      <Listing category="kitchen-accessories" pageTitle={formatTitle('kitchen-accessories')} limit={4} />
      <Listing category="groceries" pageTitle={formatTitle('groceries')} limit={4} />
      <Listing category="mobile-accessories" pageTitle={formatTitle('mobile-accessories')} limit={4} />
      <Listing category="sports-accessories" pageTitle={formatTitle('sports-accessories')} limit={4} />
      <Listing category="laptops" pageTitle={formatTitle('laptops')} limit={4} />
      <Listing category="tablets" pageTitle={formatTitle('tablets')} limit={4} />
      <Listing category="tops" pageTitle={formatTitle('tops')} limit={4} />
      <Listing category="mens-shirts" pageTitle={formatTitle('mens-shirts')} limit={4} />
      <SaleBanner/>
      <Feedback/>
    </>
  )
}

export default HomePage