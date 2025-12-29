import React from "react";
import TopOfferBar from "../components/TopOfferBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { FaStar } from "react-icons/fa";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

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
  return (
    <>
      <TopOfferBar />
      <Header />

      <section className="w-full px-4 sm:px-6 lg:px-12 py-8 sm:py-10">

        {/* BREADCRUMB */}
        <div className="text-sm text-gray-400 mb-6">
          Home &gt; Casual
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12">

          {/* ================= LEFT FILTERS ================= */}
          <aside className="border rounded-2xl p-6 space-y-8 h-fit">

            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Filters</h3>
              <span className="text-gray-400">⫶</span>
            </div>

            {/* CATEGORIES */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="font-medium">Categories</p>
                <FiChevronDown />
              </div>

              <ul className="space-y-3 text-sm text-gray-600">
                {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <span>{item}</span>
                      <FiChevronRight />
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* PRICE */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="font-medium">Price</p>
                <FiChevronDown />
              </div>

              <input type="range" className="w-full" />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>$50</span>
                <span>$200</span>
              </div>
            </div>

            {/* COLORS */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="font-medium">Colors</p>
                <FiChevronDown />
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "bg-green-500",
                  "bg-red-500",
                  "bg-yellow-400",
                  "bg-blue-500",
                  "bg-purple-500",
                  "bg-black",
                ].map((c, i) => (
                  <span
                    key={i}
                    className={`w-6 h-6 rounded-full ${c} cursor-pointer`}
                  />
                ))}
              </div>
            </div>

            {/* SIZE */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="font-medium">Size</p>
                <FiChevronDown />
              </div>

              <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-1 rounded-full text-sm ${
                      size === "L"
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-full text-sm">
              Apply Filter
            </button>
          </aside>

          {/* ================= PRODUCTS ================= */}
          <main>

            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold">Casual</h2>
              <p className="text-sm text-gray-500">
                Showing 1–6 of 100 · Sort by <b>Most Popular</b>
              </p>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10">
              {products.map((product, i) => (
                <div key={i}>

                  <div className="bg-gray-100 rounded-2xl p-6">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-52 sm:h-60 object-contain"
                    />
                  </div>

                  <h3 className="mt-4 font-semibold">
                    {product.title}
                  </h3>

                  {/* RATING */}
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-yellow-400">
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
                    <span className="text-sm text-gray-500">
                      {product.rating}/5
                    </span>
                  </div>

                  {/* PRICE */}
                  <div className="flex items-center gap-3 mt-2">
                    <span className="font-bold text-lg">
                      ${product.price}
                    </span>

                    {product.oldPrice && (
                      <>
                        <span className="text-gray-400 line-through">
                          ${product.oldPrice}
                        </span>
                        <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">
                          {product.discount}
                        </span>
                      </>
                    )}
                  </div>

                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 mt-16 text-sm">
              <button className="px-4 py-2 border rounded-full">
                ← Previous
              </button>

              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    className={n === 1 ? "font-bold" : "text-gray-500"}
                  >
                    {n}
                  </span>
                ))}
              </div>

              <button className="px-4 py-2 border rounded-full">
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
