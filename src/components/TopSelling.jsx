import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getBestSellers } from "../data/products";

function TopSelling() {
  const products = getBestSellers().slice(0, 4);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 border-t">

      {/* SECTION TITLE */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-center mb-6 sm:mb-8 lg:mb-12">
        TOP SELLING
      </h2>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer">
            {/* IMAGE */}
            <div className="bg-gray-100 p-3 sm:p-4 rounded-lg sm:rounded-xl overflow-hidden relative">
              {product.discount && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded z-10">
                  -{product.discount}%
                </span>
              )}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 sm:h-52 lg:h-64 xl:h-72 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* DETAILS */}
            <div className="mt-3 sm:mt-4">
              <h3 className="font-semibold text-sm sm:text-base line-clamp-1">{product.title}</h3>

              {/* RATING */}
              <div className="flex items-center gap-1 mt-1 text-yellow-500 text-xs sm:text-sm">
                {[...Array(5)].map((_, i) => {
                  if (i + 1 <= Math.floor(product.rating)) return <FaStar key={i} />;
                  if (i < product.rating) return <FaStarHalfAlt key={i} />;
                  return <FaRegStar key={i} />;
                })}
                <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-700">{product.rating}/5</span>
              </div>

              {/* PRICE */}
              <div className="mt-1 sm:mt-2 flex flex-wrap gap-1 sm:gap-2 items-center">
                <span className="font-bold text-sm sm:text-base lg:text-lg">${product.price}</span>
                {product.oldPrice && (
                  <>
                    <span className="line-through text-gray-400 text-xs sm:text-sm">${product.oldPrice}</span>
                    <span className="text-[10px] sm:text-xs bg-red-100 text-red-500 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                      -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>
            </div>
          </Link>
        ))}

      </div>

      {/* VIEW ALL BUTTON */}
      <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10">
        <Link to="/category">
          <button className="border border-gray-300 px-8 sm:px-12 py-2.5 sm:py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
            View All
          </button>
        </Link>
      </div>
    </section>
  );
}

export default TopSelling;
