import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiCreditCard, FiTruck, FiCheck } from 'react-icons/fi';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import TopOfferBar from '../components/TopOfferBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, subtotal, discount, discountPercent, deliveryFee, total, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    saveCard: false,
  });

  const [shippingMethod, setShippingMethod] = useState('standard');
  const [errors, setErrors] = useState({});

  const shippingOptions = [
    { id: 'standard', name: 'Standard Shipping', price: 15, days: '5-7 business days' },
    { id: 'express', name: 'Express Shipping', price: 25, days: '2-3 business days' },
    { id: 'overnight', name: 'Overnight Shipping', price: 45, days: '1 business day' },
  ];

  const selectedShipping = shippingOptions.find(s => s.id === shippingMethod);
  const finalTotal = total - deliveryFee + selectedShipping.price;

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handlePaymentChange = (e) => {
    const { name, value, type, checked } = e.target;
    let formattedValue = value;

    // Format card number
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim().slice(0, 19);
    }
    // Format expiry
    if (name === 'expiry') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').slice(0, 5);
    }
    // Format CVV
    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    setPaymentData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : formattedValue,
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateShipping = () => {
    const newErrors = {};
    if (!shippingData.firstName) newErrors.firstName = 'First name is required';
    if (!shippingData.lastName) newErrors.lastName = 'Last name is required';
    if (!shippingData.email) newErrors.email = 'Email is required';
    if (!shippingData.phone) newErrors.phone = 'Phone is required';
    if (!shippingData.address) newErrors.address = 'Address is required';
    if (!shippingData.city) newErrors.city = 'City is required';
    if (!shippingData.zipCode) newErrors.zipCode = 'ZIP code is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePayment = () => {
    const newErrors = {};
    if (!paymentData.cardNumber || paymentData.cardNumber.replace(/\s/g, '').length < 16) {
      newErrors.cardNumber = 'Valid card number is required';
    }
    if (!paymentData.cardName) newErrors.cardName = 'Cardholder name is required';
    if (!paymentData.expiry || paymentData.expiry.length < 5) {
      newErrors.expiry = 'Valid expiry date is required';
    }
    if (!paymentData.cvv || paymentData.cvv.length < 3) {
      newErrors.cvv = 'Valid CVV is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (step === 1 && validateShipping()) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handlePlaceOrder = () => {
    if (!validatePayment()) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderPlaced(true);
      clearCart();
    }, 2000);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <>
        <TopOfferBar />
        <Header />
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Add some items to your cart before checkout</p>
          <Link to="/category">
            <button className="bg-black text-white px-8 py-3 rounded-full">
              Continue Shopping
            </button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  if (orderPlaced) {
    return (
      <>
        <TopOfferBar />
        <Header />
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <FiCheck className="text-green-600 text-4xl" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Order Placed Successfully!</h2>
          <p className="text-gray-500 mb-2 text-center">Thank you for your purchase.</p>
          <p className="text-gray-500 mb-8 text-center">Order #SHP{Date.now().toString().slice(-8)}</p>
          <p className="text-sm text-gray-400 mb-8 text-center max-w-md">
            We've sent a confirmation email to {shippingData.email}. Your order will be shipped within 24 hours.
          </p>
          <div className="flex gap-4">
            <Link to="/">
              <button className="border border-black px-6 py-3 rounded-full hover:bg-gray-50">
                Back to Home
              </button>
            </Link>
            <Link to="/category">
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopOfferBar />
      <Header />

      <section className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-12">
        {/* Back Button */}
        <Link to="/cart" className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-6">
          <FiChevronLeft />
          <span className="text-sm">Back to Cart</span>
        </Link>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8">CHECKOUT</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-10">
          {['Shipping', 'Delivery', 'Payment'].map((label, i) => (
            <React.Fragment key={label}>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  step > i + 1 ? 'bg-green-600 text-white' : step === i + 1 ? 'bg-black text-white' : 'bg-gray-200'
                }`}>
                  {step > i + 1 ? <FiCheck /> : i + 1}
                </div>
                <span className={`text-xs mt-2 ${step === i + 1 ? 'font-medium' : 'text-gray-400'}`}>
                  {label}
                </span>
              </div>
              {i < 2 && (
                <div className={`w-16 sm:w-24 h-0.5 mx-2 ${step > i + 1 ? 'bg-green-600' : 'bg-gray-200'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12">
          {/* LEFT: FORM */}
          <div>
            {/* Step 1: Shipping */}
            {step === 1 && (
              <div className="border rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FiTruck /> Shipping Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={shippingData.firstName}
                      onChange={handleShippingChange}
                      className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:border-black ${errors.firstName ? 'border-red-500' : ''}`}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={shippingData.lastName}
                      onChange={handleShippingChange}
                      className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:border-black ${errors.lastName ? 'border-red-500' : ''}`}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={shippingData.email}
                      onChange={handleShippingChange}
                      className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:border-black ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={shippingData.phone}
                      onChange={handleShippingChange}
                      className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:border-black ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={shippingData.address}
                      onChange={handleShippingChange}
                      className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:border-black ${errors.address ? 'border-red-500' : ''}`}
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={shippingData.city}
                      onChange={handleShippingChange}
                      className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:border-black ${errors.city ? 'border-red-500' : ''}`}
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={shippingData.state}
                      onChange={handleShippingChange}
                      className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={shippingData.zipCode}
                      onChange={handleShippingChange}
                      className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:border-black ${errors.zipCode ? 'border-red-500' : ''}`}
                    />
                    {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Country</label>
                    <select
                      name="country"
                      value={shippingData.country}
                      onChange={handleShippingChange}
                      className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:border-black"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleContinue}
                  className="w-full bg-black text-white py-4 rounded-full mt-8 font-medium hover:bg-gray-800"
                >
                  Continue to Delivery
                </button>
              </div>
            )}

            {/* Step 2: Delivery */}
            {step === 2 && (
              <div className="border rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FiTruck /> Delivery Method
                </h2>

                <div className="space-y-4">
                  {shippingOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-colors ${
                        shippingMethod === option.id ? 'border-black bg-gray-50' : 'hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name="shipping"
                          value={option.id}
                          checked={shippingMethod === option.id}
                          onChange={(e) => setShippingMethod(e.target.value)}
                          className="w-4 h-4 accent-black"
                        />
                        <div>
                          <p className="font-medium">{option.name}</p>
                          <p className="text-sm text-gray-500">{option.days}</p>
                        </div>
                      </div>
                      <span className="font-bold">${option.price}</span>
                    </label>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 border border-black py-4 rounded-full font-medium hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleContinue}
                    className="flex-1 bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="border rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FiCreditCard /> Payment Details
                </h2>

                {/* Card Icons */}
                <div className="flex gap-4 mb-6 text-3xl text-gray-400">
                  <FaCcVisa className="hover:text-blue-600 cursor-pointer" />
                  <FaCcMastercard className="hover:text-red-500 cursor-pointer" />
                  <FaCcPaypal className="hover:text-blue-500 cursor-pointer" />
                  <FaCcApplePay className="hover:text-black cursor-pointer" />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={paymentData.cardNumber}
                      onChange={handlePaymentChange}
                      placeholder="1234 5678 9012 3456"
                      className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:border-black ${errors.cardNumber ? 'border-red-500' : ''}`}
                    />
                    {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      name="cardName"
                      value={paymentData.cardName}
                      onChange={handlePaymentChange}
                      placeholder="John Doe"
                      className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:border-black ${errors.cardName ? 'border-red-500' : ''}`}
                    />
                    {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="expiry"
                        value={paymentData.expiry}
                        onChange={handlePaymentChange}
                        placeholder="MM/YY"
                        className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:border-black ${errors.expiry ? 'border-red-500' : ''}`}
                      />
                      {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={paymentData.cvv}
                        onChange={handlePaymentChange}
                        placeholder="123"
                        className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:border-black ${errors.cvv ? 'border-red-500' : ''}`}
                      />
                      {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                    </div>
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="saveCard"
                      checked={paymentData.saveCard}
                      onChange={handlePaymentChange}
                      className="w-4 h-4 accent-black"
                    />
                    <span className="text-sm">Save card for future purchases</span>
                  </label>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 border border-black py-4 rounded-full font-medium hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className="flex-1 bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 disabled:opacity-70 flex items-center justify-center"
                  >
                    {isProcessing ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      `Pay $${finalTotal.toFixed(2)}`
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: ORDER SUMMARY */}
          <div className="lg:sticky lg:top-4">
            <div className="border rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              {/* Items */}
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 bg-gray-100 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm line-clamp-1">{item.title}</h4>
                      <p className="text-xs text-gray-500">Size: {item.selectedSize} × {item.quantity}</p>
                      <p className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <hr className="mb-4" />

              {/* Totals */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Discount (-{discountPercent}%)</span>
                  <span className="text-red-500">-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span>${selectedShipping.price.toFixed(2)}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="mt-4 p-4 bg-gray-50 rounded-xl text-center">
              <p className="text-xs text-gray-500">
                🔒 Your payment information is encrypted and secure
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CheckoutPage;

