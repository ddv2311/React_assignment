import { Link } from "react-router-dom";
import { useState } from "react";
import { FiX } from "react-icons/fi";

function TopOfferBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-black text-white py-2 px-4 relative">
      <p className="text-xs sm:text-sm text-center leading-relaxed pr-6">
        Sign up and get <span className="font-semibold">20% off</span> on your first order.{" "}
        <Link
          to="/signup"
          className="underline font-medium ml-1 hover:text-gray-300"
        >
          Sign Up Now
        </Link>
      </p>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
      >
        <FiX size={16} />
      </button>
    </div>
  );
}

export default TopOfferBar;
