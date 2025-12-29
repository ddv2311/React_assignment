import { FiSearch, FiShoppingCart, FiUser, FiChevronDown, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">

        {/* LEFT: LOGO */}
        <Link to="/">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            SHOP.CO
          </h1>
        </Link>

        {/* CENTER: NAV (Desktop only) */}
        <nav className="hidden lg:flex items-center gap-16 text-sm font-medium">
          <div className="flex items-center gap-1 cursor-pointer">
            <Link to="/category">Shop</Link>
            <FiChevronDown size={14} />
          </div>
          <span className="cursor-pointer">On Sale</span>
          <span className="cursor-pointer">New Arrivals</span>
          <span className="cursor-pointer">Brands</span>
        </nav>

        {/* RIGHT: SEARCH + ICONS */}
        <div className="flex items-center gap-4">

          {/* Search Bar (Desktop only) */}
          <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full w-64">
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-transparent outline-none ml-2 text-sm w-full"
            />
          </div>

          {/* Icons */}
          <Link to="/cart">
            <FiShoppingCart size={22} />
          </Link>
          <FiUser size={22} />

          {/* Hamburger (Mobile only) */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden px-4 pb-4 space-y-3 text-sm font-medium">
          <Link to="/category" className="block">Shop</Link>
          <span className="block">On Sale</span>
          <span className="block">New Arrivals</span>
          <span className="block">Brands</span>
        </div>
      )}
    </header>
  );
}

export default Header;
