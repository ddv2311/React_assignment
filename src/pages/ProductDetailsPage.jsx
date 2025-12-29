import React from 'react'

import TopOfferBar from '../components/TopOfferBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductDetailsTop from '../components/ProductDetailsTop'
import ProductReviews from '../components/ProductReviews'
import YouMightAlsoLike from '../components/YouMightAlsoLike'

function ProductDetailsPage() {
    
  return (
    <>
    <TopOfferBar/>
    <Header/>

<ProductDetailsTop/>
<ProductReviews/>
<YouMightAlsoLike/>
    <Footer/>
    </>
  )
}

export default ProductDetailsPage
