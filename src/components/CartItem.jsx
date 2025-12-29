import { FaTrash } from "react-icons/fa";

function CartItem({ title, size, color, price, image }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

      {/* LEFT SECTION */}
      <div className="flex gap-4 sm:gap-5">

        <img
          src={image}
          alt={title}
          className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-xl object-cover"
        />

        <div>
          <h3 className="font-semibold text-sm sm:text-base">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Size: {size}
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Color: {color}
          </p>
          <p className="mt-2 font-bold text-sm sm:text-base">
            {price}
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4">

        <FaTrash className="text-red-500 cursor-pointer" />

        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 sm:px-4 sm:py-2">
          <button className="px-2 text-lg">−</button>
          <span className="px-3 sm:px-4 text-sm sm:text-base">1</span>
          <button className="px-2 text-lg">+</button>
        </div>
      </div>

    </div>
  );
}

export default CartItem;
