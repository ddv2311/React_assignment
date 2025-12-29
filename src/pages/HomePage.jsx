import React from 'react'
import TopOfferBar from '../components/TopOfferBar'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import NewArrivals from '../components/NewArrivals'
import TopSelling from '../components/TopSelling'
import BrowseByDressStyle from '../components/BrowseByDressStyle'
import HappyCustomers from '../components/HappyCustomers'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
    <TopOfferBar/>
    <Header/>
    <HeroSection/>
    <NewArrivals/>
    <TopSelling/>
    <BrowseByDressStyle/>
    <HappyCustomers/>
    <Footer/>
    </>
  )
}

export default HomePage
