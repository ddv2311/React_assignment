import { useState } from "react";
import { FaStar } from "react-icons/fa";

function ProductDetailsTop() {
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const colors = ["#5C4B2E", "#2F4F4F", "#2E2E5D"];
  const images = [
    "https://via.placeholder.com/450?text=View+1",
    "https://via.placeholder.com/450?text=View+2",
    "https://via.placeholder.com/450?text=View+3",
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-12">

      {/* BREADCRUMB */}
      <div className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 lg:mb-10">
        Home &gt; Shop &gt; Men &gt; T-shirts
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-start">

        {/* LEFT: IMAGES */}
        <div className="flex flex-col-reverse sm:flex-row gap-4 lg:gap-6">
          
          {/* THUMBNAILS */}
          <div className="flex sm:flex-col gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`flex-shrink-0 bg-gray-100 rounded-lg sm:rounded-xl p-2 sm:p-3 cursor-pointer w-16 sm:w-20 lg:w-24 transition-all ${
                  selectedImage === i ? "ring-2 ring-black" : "hover:ring-2 hover:ring-gray-300"
                }`}
              >
                <img
                  src={img}
                  alt={`thumbnail ${i + 1}`}
                  className="w-full h-16 sm:h-20 lg:h-24 object-cover rounded"
                />
              </div>
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="flex-1 bg-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <img
              src={images[selectedImage]}
              alt="product"
              className="w-full h-64 sm:h-80 lg:h-96 xl:h-[450px] object-contain"
            />
          </div>
        </div>

        {/* RIGHT: PRODUCT DETAILS */}
        <div className="lg:pl-4 xl:pl-8">

          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold mb-3 sm:mb-4 leading-tight">
            ONE LIFE GRAPHIC T-SHIRT
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
            <div className="flex text-yellow-400 text-sm sm:text-base">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-500">4.5/5</span>
          </div>

          {/* PRICE */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold">$260</span>
            <span className="text-base sm:text-lg lg:text-xl text-gray-400 line-through">$300</span>
            <span className="text-xs sm:text-sm bg-red-100 text-red-500 px-2 sm:px-3 py-1 rounded-full">
              -40%
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
            This graphic t-shirt which is perfect for any occasion.
            Crafted from a soft and breathable fabric, it offers superior
            comfort and style.
          </p>

          <hr className="mb-4 sm:mb-6" />

          {/* COLORS */}
          <div className="mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm font-medium mb-2 sm:mb-3">Select Colors</p>
            <div className="flex gap-3 sm:gap-4">
              {colors.map((color, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedColor(i)}
                  style={{ backgroundColor: color }}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full cursor-pointer transition-all ${
                    selectedColor === i ? "ring-2 ring-offset-2 ring-black" : "hover:scale-110"
                  }`}
                />
              ))}
            </div>
          </div>

          <hr className="mb-4 sm:mb-6" />

          {/* SIZE */}
          <div className="mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm font-medium mb-2 sm:mb-3">Choose Size</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition-colors ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <hr className="mb-4 sm:mb-6" />

          {/* CART */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">

            <div className="flex items-center justify-center bg-gray-100 rounded-full px-4 sm:px-5 py-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-lg sm:text-xl px-2 sm:px-3 hover:bg-gray-200 rounded-full transition-colors"
              >
                −
              </button>
              <span className="px-4 sm:px-5 font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-lg sm:text-xl px-2 sm:px-3 hover:bg-gray-200 rounded-full transition-colors"
              >
                +
              </button>
            </div>

            <button className="flex-1 sm:flex-none sm:w-48 lg:w-56 xl:w-60 bg-black text-white py-3 sm:py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductDetailsTop;
