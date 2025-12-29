import React, { useState } from "react";
import TopOfferBar from "../components/TopOfferBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { FaStar } from "react-icons/fa";
import { FiChevronRight, FiChevronDown, FiChevronUp, FiSliders } from "react-icons/fi";

/* ================= PRODUCT DATA ================= */
const products = [
  {
    title: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    title: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  },
  {
    title: "Black Striped T-shirt",
    price: 120,
    oldPrice: 150,
    discount: "-30%",
    rating: 5,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },
  {
    title: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: "-20%",
    rating: 3.5,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
  {
    title: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    title: "Sleeve Striped T-shirt",
    price: 130,
    oldPrice: 160,
    discount: "-30%",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
];

/* ================= PAGE ================= */
function CategoryPage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <TopOfferBar />
      <Header />

      <section className="w-full px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-10">

        {/* BREADCRUMB */}
        <div className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
          Home &gt; Casual
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr] gap-6 lg:gap-8 xl:gap-12">

          {/* ================= MOBILE FILTER TOGGLE ================= */}
          <button 
            className="lg:hidden flex items-center justify-center gap-2 border rounded-full py-3 text-sm font-medium"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FiSliders />
            {showFilters ? "Hide Filters" : "Show Filters"}
            {showFilters ? <FiChevronUp /> : <FiChevronDown />}
          </button>

          {/* ================= LEFT FILTERS ================= */}
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block border rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-6 sm:space-y-8 h-fit`}>

            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-base sm:text-lg">Filters</h3>
              <span className="text-gray-400">⫶</span>
            </div>

            <hr className="border-gray-200" />

            {/* CATEGORIES */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <p className="font-medium text-sm sm:text-base">Categories</p>
                <FiChevronDown className="text-gray-400" />
              </div>

              <ul className="space-y-2 sm:space-y-3 text-sm text-gray-600">
                {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between cursor-pointer hover:text-black transition-colors py-1"
                    >
                      <span>{item}</span>
                      <FiChevronRight className="text-gray-400" />
                    </li>
                  )
                )}
              </ul>
            </div>

            <hr className="border-gray-200" />

            {/* PRICE */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <p className="font-medium text-sm sm:text-base">Price</p>
                <FiChevronDown className="text-gray-400" />
              </div>

              <input type="range" className="w-full accent-black" />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>$50</span>
                <span>$200</span>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* COLORS */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <p className="font-medium text-sm sm:text-base">Colors</p>
                <FiChevronDown className="text-gray-400" />
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "bg-green-500",
                  "bg-red-500",
                  "bg-yellow-400",
                  "bg-blue-500",
                  "bg-purple-500",
                  "bg-black",
                  "bg-pink-400",
                  "bg-orange-500",
                  "bg-cyan-500",
                  "bg-white border",
                ].map((c, i) => (
                  <span
                    key={i}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${c} cursor-pointer hover:scale-110 transition-transform`}
                  />
                ))}
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* SIZE */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <p className="font-medium text-sm sm:text-base">Size</p>
                <FiChevronDown className="text-gray-400" />
              </div>

              <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors ${
                      size === "L"
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Apply Filter
            </button>
          </aside>

          {/* ================= PRODUCTS ================= */}
          <main>

            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold">Casual</h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Showing 1–6 of 100 · Sort by <b>Most Popular</b>
              </p>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {products.map((product, i) => (
                <div key={i} className="cursor-pointer group">

                  <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-36 sm:h-44 md:h-52 lg:h-60 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base line-clamp-1">
                    {product.title}
                  </h3>

                  {/* RATING */}
                  <div className="flex items-center gap-1 sm:gap-2 mt-1">
                    <div className="flex text-yellow-400 text-xs sm:text-sm">
                      {[...Array(5)].map((_, j) => (
                        <FaStar
                          key={j}
                          className={
                            j < Math.round(product.rating)
                              ? "opacity-100"
                              : "opacity-30"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500">
                      {product.rating}/5
                    </span>
                  </div>

                  {/* PRICE */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
                    <span className="font-bold text-sm sm:text-base lg:text-lg">
                      ${product.price}
                    </span>

                    {product.oldPrice && (
                      <>
                        <span className="text-gray-400 line-through text-xs sm:text-sm">
                          ${product.oldPrice}
                        </span>
                        <span className="text-[10px] sm:text-xs bg-red-100 text-red-500 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                          {product.discount}
                        </span>
                      </>
                    )}
                  </div>

                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex items-center justify-between gap-4 mt-8 sm:mt-12 lg:mt-16 text-sm">
              <button className="px-3 sm:px-4 py-2 border rounded-full text-xs sm:text-sm hover:bg-gray-50 transition-colors">
                ← Previous
              </button>

              <div className="flex gap-2 sm:gap-4">
                {[1, 2, 3, "...", 8, 9, 10].map((n, i) => (
                  <span
                    key={i}
                    className={`cursor-pointer text-xs sm:text-sm ${n === 1 ? "font-bold bg-gray-100 px-2 sm:px-3 py-1 rounded" : "text-gray-500 hover:text-black"}`}
                  >
                    {n}
                  </span>
                ))}
              </div>

              <button className="px-3 sm:px-4 py-2 border rounded-full text-xs sm:text-sm hover:bg-gray-50 transition-colors">
                Next →
              </button>
            </div>

          </main>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CategoryPage;
