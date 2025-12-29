import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

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
    <section className="w-full px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 sm:mb-14">
        YOU MIGHT ALSO LIKE
      </h2>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">

            {/* IMAGE */}
            <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 flex items-center justify-center mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-48 sm:h-56 object-contain"
              />
            </div>

            {/* TITLE */}
            <h3 className="font-semibold mb-2 text-center sm:text-left">
              {product.title}
            </h3>

            {/* RATING */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-yellow-400">
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
              <span className="text-sm text-gray-500">
                {product.rating}/5
              </span>
            </div>

            {/* PRICE */}
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold">${product.price}</span>

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
    </section>
  );
}

export default YouMightAlsoLike;
