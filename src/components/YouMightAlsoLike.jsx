import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function YouMightAlsoLike() {
  const products = [
    {
      title: "Polo with Contrast Trims",
      price: 212,
      oldPrice: 242,
      discount: "-20%",
      rating: 4.0,
      image: "https://via.placeholder.com/300x360?text=Polo+1",
    },
    {
      title: "Gradient Graphic T-shirt",
      price: 145,
      rating: 3.5,
      image: "https://via.placeholder.com/300x360?text=T-shirt+2",
    },
    {
      title: "Polo with Tipping Details",
      price: 180,
      rating: 4.5,
      image: "https://via.placeholder.com/300x360?text=Polo+3",
    },
    {
      title: "Black Striped T-shirt",
      price: 120,
      oldPrice: 150,
      discount: "-30%",
      rating: 5,
      image: "https://via.placeholder.com/300x360?text=T-shirt+4",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16">

      {/* TITLE */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-center mb-6 sm:mb-8 lg:mb-12">
        YOU MIGHT ALSO LIKE
      </h2>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {products.map((product, index) => (
          <Link to="/product" key={index} className="flex flex-col group cursor-pointer">

            {/* IMAGE */}
            <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center justify-center mb-3 sm:mb-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="h-32 sm:h-40 lg:h-48 xl:h-56 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2 line-clamp-1">
              {product.title}
            </h3>

            {/* RATING */}
            <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
              <div className="flex text-yellow-400 text-xs sm:text-sm">
                {Array.from({ length: 5 }).map((_, i) => {
                  if (i + 1 <= Math.floor(product.rating)) {
                    return <FaStar key={i} />;
                  }
                  if (i < product.rating) {
                    return <FaStarHalfAlt key={i} />;
                  }
                  return <FaRegStar key={i} />;
                })}
              </div>
              <span className="text-xs sm:text-sm text-gray-500">
                {product.rating}/5
              </span>
            </div>

            {/* PRICE */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 lg:gap-3">
              <span className="text-sm sm:text-base lg:text-lg font-bold">${product.price}</span>

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

          </Link>
        ))}
      </div>
    </section>
  );
}

export default YouMightAlsoLike;
