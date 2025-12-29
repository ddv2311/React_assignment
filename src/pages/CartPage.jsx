import React from 'react'
import { Link } from 'react-router-dom'
import TopOfferBar from '../components/TopOfferBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { FaTrash, FaShoppingBag } from 'react-icons/fa'
import { FiTag } from 'react-icons/fi'

function CartPage() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    subtotal, 
    discount, 
    discountPercent,
    deliveryFee, 
    total 
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <TopOfferBar />
        <Header />
        <section className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-24">
          <div className="max-w-md mx-auto text-center">
            <FaShoppingBag className="mx-auto text-6xl sm:text-7xl text-gray-300 mb-6" />
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-4">Your cart is empty</h1>
            <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/category">
              <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Start Shopping
              </button>
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopOfferBar />
      <Header />

      <section className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-12">
      
        {/* BREADCRUMB */}
        <div className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <span>&gt;</span>
          <span>Cart</span>
        </div>

        {/* PAGE TITLE */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 sm:mb-8 lg:mb-10">YOUR CART</h1>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] xl:grid-cols-[2fr_1fr] gap-6 lg:gap-8 xl:gap-12 items-start mb-10 lg:mb-20">

          {/* ================= LEFT: CART ITEMS ================= */}
          <div className="border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            {cartItems.map((item, index) => (
              <div key={item.cartId}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                  {/* LEFT SECTION */}
                  <div className="flex gap-4 sm:gap-5">
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-xl object-cover"
                      />
                    </Link>

                    <div className="flex-1">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-semibold text-sm sm:text-base hover:underline">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Size: {item.selectedSize}
                      </p>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                        <span>Color:</span>
                        <span 
                          className="w-4 h-4 rounded-full border"
                          style={{ backgroundColor: item.selectedColor }}
                        />
                      </div>
                      <p className="mt-2 font-bold text-sm sm:text-base">
                        ${item.price}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT SECTION */}
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4">
                    <button 
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-red-500 hover:text-red-700 transition-colors p-2"
                    >
                      <FaTrash />
                    </button>

                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 sm:px-4 sm:py-2">
                      <button 
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="px-2 text-lg hover:bg-gray-200 rounded-full"
                      >
                        −
                      </button>
                      <span className="px-3 sm:px-4 text-sm sm:text-base font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="px-2 text-lg hover:bg-gray-200 rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {index < cartItems.length - 1 && <hr className="my-6 border-gray-200" />}
              </div>
            ))}
          </div>

          {/* ================= RIGHT: ORDER SUMMARY ================= */}
          <div className="border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 lg:sticky lg:top-4">

            <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Order Summary</h2>

            <div className="space-y-3 sm:space-y-4 text-sm">

              <div className='flex justify-between'>
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Discount (-{discountPercent}%)</span>
                <span className="text-red-500">-${discount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Delivery Fee</span>
                <span className="font-medium">
                  {deliveryFee === 0 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    `$${deliveryFee.toFixed(2)}`
                  )}
                </span>
              </div>

              <hr />
              <div className="flex justify-between text-base sm:text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* PROMO CODE */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
              <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 sm:px-5 py-3">
                <FiTag className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>
              <button className="bg-black text-white px-6 py-3 sm:py-0 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Apply
              </button>
            </div>

            {/* FREE SHIPPING NOTE */}
            {subtotal < 200 && (
              <p className="text-xs text-gray-500 mt-4 text-center">
                Add ${(200 - subtotal).toFixed(2)} more for FREE shipping!
              </p>
            )}

            {/* CHECKOUT */}
            <Link to="/checkout">
              <button className="w-full bg-black text-white py-3 sm:py-4 rounded-full mt-4 sm:mt-6 flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                Go to Checkout →
              </button>
            </Link>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default CartPage
