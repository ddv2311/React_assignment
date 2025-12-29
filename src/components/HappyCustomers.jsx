import { useState, useRef } from "react";
import {
  FaStar,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.",
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is diverse and on-point with the latest trends.",
  },
  {
    name: "Emily R.",
    text: "Shop.co has completely transformed my wardrobe. The quality is outstanding and the prices are reasonable. Highly recommend to anyone looking for stylish clothing!",
  },
  {
    name: "Michael P.",
    text: "The customer service at Shop.co is exceptional. They helped me find the perfect outfit for my event. Will definitely be shopping here again!",
  },
];

function HappyCustomers() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">

      {/* HEADER ROW */}
      <div className="flex items-center justify-between mb-6 sm:mb-8 lg:mb-12">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
          OUR HAPPY CUSTOMERS
        </h2>

        {/* ARROWS */}
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={() => scroll("left")}
            className={`p-2 sm:p-3 rounded-full border transition-colors ${
              canScrollLeft ? "hover:bg-gray-100" : "opacity-40 cursor-not-allowed"
            }`}
            disabled={!canScrollLeft}
          >
            <FaArrowLeft className="text-sm sm:text-base" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`p-2 sm:p-3 rounded-full border transition-colors ${
              canScrollRight ? "hover:bg-gray-100" : "opacity-40 cursor-not-allowed"
            }`}
            disabled={!canScrollRight}
          >
            <FaArrowRight className="text-sm sm:text-base" />
          </button>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] border rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6"
          >
            {/* STARS */}
            <div className="flex gap-1 text-yellow-500 mb-3 sm:mb-4 text-sm sm:text-base">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>

            {/* NAME */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <h3 className="font-bold text-sm sm:text-base">{testimonial.name}</h3>
              <FaCheckCircle className="text-green-500 text-xs sm:text-sm" />
            </div>

            {/* REVIEW */}
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HappyCustomers;
