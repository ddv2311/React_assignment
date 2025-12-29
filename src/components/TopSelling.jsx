import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function TopSelling() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-12 sm:py-16">

      {/* SECTION TITLE */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 sm:mb-12">
        TOP SELLING
      </h2>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* PRODUCT 1 */}
        <div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              alt="T-shirt"
              className="w-full h-56 sm:h-64 lg:h-72 object-cover rounded-md"
            />
          </div>

          <div className="mt-4 flex flex-col items-center text-center">
            <h3 className="font-semibold">Graphic T-Shirt</h3>

            <div className="flex items-center gap-1 mt-1 text-yellow-500">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              <span className="ml-2 text-sm text-gray-700">4.5/5</span>
            </div>

            <p className="mt-2 font-bold text-lg">$130</p>
          </div>
        </div>

        {/* PRODUCT 2 (DISCOUNT) */}
        <div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
              alt="Jacket"
              className="w-full h-56 sm:h-64 lg:h-72 object-cover rounded-md"
            />
          </div>

          <div className="mt-4 flex flex-col items-center text-center">
            <h3 className="font-semibold">Leather Jacket</h3>

            <div className="flex items-center gap-1 mt-1 text-yellow-500">
              <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
              <span className="ml-2 text-sm text-gray-700">3.5/5</span>
            </div>

            <div className="mt-2 flex gap-2 items-center">
              <span className="line-through text-gray-400">$260</span>
              <span className="font-bold text-lg">$210</span>
            </div>
          </div>
        </div>

        {/* PRODUCT 3 */}
        <div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
              alt="Hoodie"
              className="w-full h-56 sm:h-64 lg:h-72 object-cover rounded-md"
            />
          </div>

          <div className="mt-4 flex flex-col items-center text-center">
            <h3 className="font-semibold">Casual Hoodie</h3>

            <div className="flex items-center gap-1 mt-1 text-yellow-500">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              <span className="ml-2 text-sm text-gray-700">5/5</span>
            </div>

            <p className="mt-2 font-bold text-lg">$200</p>
          </div>
        </div>

        {/* PRODUCT 4 (DISCOUNT) */}
        <div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
              alt="Jeans"
              className="w-full h-56 sm:h-64 lg:h-72 object-cover rounded-md"
            />
          </div>

          <div className="mt-4 flex flex-col items-center text-center">
            <h3 className="font-semibold">Slim Fit Jeans</h3>

            <div className="flex items-center gap-1 mt-1 text-yellow-500">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              <span className="ml-2 text-sm text-gray-700">4.5/5</span>
            </div>

            <div className="mt-2 flex gap-2 items-center">
              <span className="line-through text-gray-400">$180</span>
              <span className="font-bold text-lg">$150</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TopSelling;
