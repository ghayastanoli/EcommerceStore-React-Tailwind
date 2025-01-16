import React from 'react'
import Hero from '../components/Hero'
import Listing from '../components/Listing'
import CategoryCards from '../components/CategoryCards'
import SaleBanner from '../components/SaleBanner'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <>
    <Hero/>
    <CategoryCards/>
    <Listing category="beauty" limit={4} />
  <Listing category="skin-care" limit={4} />
  <Listing category="home-decoration" limit={4} />
  <Listing category="kitchen-accessories" limit={4} />
  <Listing category="groceries" limit={4} />
  <Listing category="mobile-accessories" limit={4} />
  <Listing category="sports-accessories" limit={4} />
  <Listing category="laptops" limit={4} />
  <Listing category="tablets" limit={4} />
  <Listing category="tops" limit={4} />
  <Listing category="mens-shirts" limit={4} />
  <SaleBanner/>
  <Feedback/>
  <Footer/>

    </>
  )
}

export default HomePage