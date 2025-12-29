import React from 'react'
import { useParams } from 'react-router-dom'
import TopOfferBar from '../components/TopOfferBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductDetailsTop from '../components/ProductDetailsTop'
import ProductReviews from '../components/ProductReviews'
import YouMightAlsoLike from '../components/YouMightAlsoLike'
import { getProductById } from '../data/products'

function ProductDetailsPage() {
  const { id } = useParams();
  const product = id ? getProductById(id) : null;
    
  return (
    <>
      <TopOfferBar />
      <Header />
      <ProductDetailsTop product={product} />
      <ProductReviews />
      <YouMightAlsoLike />
      <Footer />
    </>
  )
}

export default ProductDetailsPage
