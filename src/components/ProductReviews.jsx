import { useState } from "react";
import { FaStar, FaEllipsisH, FaCheckCircle } from "react-icons/fa";

const reviews = [
  {
    name: "Samantha D.",
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail.",
    date: "August 14, 2023",
    rating: 5,
  },
  {
    name: "Alex M.",
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.",
    date: "August 15, 2023",
    rating: 5,
  },
  {
    name: "Ethan R.",
    text: "This t-shirt is a must-have for anyone who appreciates good design. The fit is perfect.",
    date: "August 16, 2023",
    rating: 4,
  },
  {
    name: "Olivia P.",
    text: "This t-shirt represents simplicity and functionality. You can feel the creativity behind it.",
    date: "August 17, 2023",
    rating: 5,
  },
  {
    name: "Liam K.",
    text: "The fabric is soft, and the design speaks volumes about the designer's skill.",
    date: "August 18, 2023",
    rating: 4,
  },
  {
    name: "Ava H.",
    text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy.",
    date: "August 19, 2023",
    rating: 5,
  },
];

function ProductReviews() {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-10 lg:py-16">

      {/* TOP TABS */}
      <div className="flex justify-center gap-4 sm:gap-8 lg:gap-12 xl:gap-20 border-b mb-6 sm:mb-8 lg:mb-10 text-xs sm:text-sm overflow-x-auto">
        <span
          onClick={() => setActiveTab("details")}
          className={`pb-3 sm:pb-4 cursor-pointer whitespace-nowrap transition-colors ${
            activeTab === "details" ? "border-b-2 border-black font-medium" : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Product Details
        </span>
        <span
          onClick={() => setActiveTab("reviews")}
          className={`pb-3 sm:pb-4 cursor-pointer whitespace-nowrap transition-colors ${
            activeTab === "reviews" ? "border-b-2 border-black font-medium" : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Rating & Reviews
        </span>
        <span
          onClick={() => setActiveTab("faqs")}
          className={`pb-3 sm:pb-4 cursor-pointer whitespace-nowrap transition-colors ${
            activeTab === "faqs" ? "border-b-2 border-black font-medium" : "text-gray-400 hover:text-gray-600"
          }`}
        >
          FAQs
        </span>
      </div>

      {/* HEADER ROW */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold">
          All Reviews <span className="text-gray-400 text-xs sm:text-sm">(451)</span>
        </h2>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          <button className="bg-gray-100 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm hover:bg-gray-200 transition-colors">
            Latest
          </button>
          <button className="bg-black text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm hover:bg-gray-800 transition-colors">
            Write a Review
          </button>
        </div>
      </div>

      {/* REVIEWS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">

        {reviews.map((review, index) => (
          <div
            key={index}
            className="border rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 relative bg-white"
          >
            {/* MENU ICON */}
            <FaEllipsisH className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-400 cursor-pointer hover:text-gray-600" />

            {/* STARS */}
            <div className="flex text-yellow-400 mb-2 sm:mb-3 text-sm sm:text-base">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < review.rating ? "opacity-100" : "opacity-30"} />
              ))}
            </div>

            {/* NAME + VERIFIED */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="font-semibold text-sm sm:text-base">{review.name}</span>
              <FaCheckCircle className="text-green-500 text-xs sm:text-sm" />
            </div>

            {/* REVIEW TEXT */}
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              "{review.text}"
            </p>

            {/* DATE */}
            <p className="text-[10px] sm:text-xs text-gray-400">
              Posted on {review.date}
            </p>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="flex justify-center mt-6 sm:mt-8 lg:mt-12">
        <button className="border px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm hover:bg-gray-50 transition-colors">
          Load More Reviews
        </button>
      </div>
    </section>
  );
}

export default ProductReviews;
