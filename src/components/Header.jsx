import { FiSearch, FiShoppingCart, FiUser, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b relative">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">

        {/* LEFT: HAMBURGER (Mobile) + LOGO */}
        <div className="flex items-center gap-3">
          {/* Hamburger (Mobile only) */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <Link to="/">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
              SHOP.CO
            </h1>
          </Link>
        </div>

        {/* CENTER: NAV (Desktop only) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-sm font-medium">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors">
            <Link to="/category">Shop</Link>
            <FiChevronDown size={14} />
          </div>
          <span className="cursor-pointer hover:text-gray-600 transition-colors">On Sale</span>
          <span className="cursor-pointer hover:text-gray-600 transition-colors">New Arrivals</span>
          <span className="cursor-pointer hover:text-gray-600 transition-colors">Brands</span>
        </nav>

        {/* RIGHT: SEARCH + ICONS */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Search Bar (Desktop only) */}
          <div className="hidden md:flex items-center bg-gray-100 px-3 lg:px-4 py-2 rounded-full w-40 lg:w-64">
            <FiSearch className="text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-transparent outline-none ml-2 text-sm w-full"
            />
          </div>

          {/* Search Icon (Mobile only) */}
          <button className="md:hidden p-1">
            <FiSearch size={20} />
          </button>

          {/* Icons */}
          <Link to="/cart" className="p-1">
            <FiShoppingCart size={20} className="sm:w-[22px] sm:h-[22px]" />
          </Link>
          <button className="p-1">
            <FiUser size={20} className="sm:w-[22px] sm:h-[22px]" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg z-50">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="flex items-center bg-gray-100 px-4 py-3 rounded-full">
              <FiSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search here"
                className="bg-transparent outline-none ml-2 text-sm w-full"
              />
            </div>

            {/* Mobile Nav Links */}
            <nav className="space-y-3 text-sm font-medium">
              <Link to="/category" className="block py-2 border-b border-gray-100" onClick={() => setOpen(false)}>
                Shop
              </Link>
              <span className="block py-2 border-b border-gray-100 cursor-pointer">On Sale</span>
              <span className="block py-2 border-b border-gray-100 cursor-pointer">New Arrivals</span>
              <span className="block py-2 cursor-pointer">Brands</span>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
