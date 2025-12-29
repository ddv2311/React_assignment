import React from 'react'
import TopOfferBar from '../components/TopOfferBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartItem from '../components/CartItem'

function CartPage() {
  return (
    <>
    <TopOfferBar/>
    <Header/>


    <section className="w-full px-16 py-12 ">
    
      {/* BREADCRUMB */}
      <div className="text-sm text-gray-400 mb-6">
        Home &gt; Cart
      </div>

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-extrabold mb-10">YOUR CART</h1>

      {/* MAIN GRID */}
      <div className="grid grid-cols-[2fr_1fr] gap-12 items-start mb-30">

        {/* ================= LEFT: CART ITEMS ================= */}
        <div className="border rounded-2xl p-8 space-y-8">

          {/* ITEM 1 */}
          <CartItem
            title="Gradient Graphic T-shirt"
            size="Large"
            color="White"
            price="$145"
            image="https://via.placeholder.com/120"
          />

          {/* ITEM 2 */}
          <CartItem
            title="Checkered Shirt"
            size="Medium"
            color="Red"
            price="$180"
            image="https://via.placeholder.com/120"/>
              {/* ITEM 3 */}
          <CartItem
            title="Skinny Fit Jeans"
            size="Large"
            color="Blue"
            price="$240"
            image="https://via.placeholder.com/120"
          />

        </div>

        {/* ================= RIGHT: ORDER SUMMARY ================= */}
        <div className="border rounded-2xl p-8">

          <h2 className="text-xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-4 text-sm">

            <div className='flex justify-between'>
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">$565</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Discount (-20%)</span>
              <span className="text-red-500">-$113</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Delivery Fee</span>
              <span className="font-medium">$15</span>
            </div>

            <hr />
             <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>$467</span>
            </div>
          </div>

          {/* PROMO CODE */}
          <div className="flex gap-3 mt-6">
            <input
              type="text"
              placeholder="Add promo code"
              className="flex-1 bg-gray-100 rounded-full px-5 py-3 text-sm outline-none"
            />
            <button className="bg-black text-white px-6 rounded-full text-sm">
              Apply
            </button>
          </div>

          {/* CHECKOUT */}
          <button className="w-full bg-black text-white py-4 rounded-full mt-6 flex items-center justify-center gap-2 text-sm font-medium">
            Go to Checkout →
          </button>

        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default CartPage
