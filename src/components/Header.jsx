import { FiSearch, FiShoppingCart, FiUser, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Header() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/category?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setOpen(false);
    }
  };

  return (
    <header className="w-full border-b relative bg-white">
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
          <Link to="/category?filter=sale" className="cursor-pointer hover:text-gray-600 transition-colors">On Sale</Link>
          <Link to="/category?filter=new" className="cursor-pointer hover:text-gray-600 transition-colors">New Arrivals</Link>
          <span className="cursor-pointer hover:text-gray-600 transition-colors">Brands</span>
        </nav>

        {/* RIGHT: SEARCH + ICONS */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Search Bar (Desktop only) */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center bg-gray-100 px-3 lg:px-4 py-2 rounded-full w-40 lg:w-64">
            <FiSearch className="text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none ml-2 text-sm w-full"
            />
          </form>

          {/* Search Icon (Mobile only) */}
          <button className="md:hidden p-1" onClick={() => setOpen(true)}>
            <FiSearch size={20} />
          </button>

          {/* Cart Icon with Badge */}
          <Link to="/cart" className="p-1 relative">
            <FiShoppingCart size={20} className="sm:w-[22px] sm:h-[22px]" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center font-medium">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </Link>
          
          {/* User Icon */}
          <Link to="/login" className="p-1">
            <FiUser size={20} className="sm:w-[22px] sm:h-[22px]" />
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg z-50">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex items-center bg-gray-100 px-4 py-3 rounded-full">
              <FiSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none ml-2 text-sm w-full"
              />
            </form>

            {/* Mobile Nav Links */}
            <nav className="space-y-3 text-sm font-medium">
              <Link to="/category" className="block py-2 border-b border-gray-100" onClick={() => setOpen(false)}>
                Shop
              </Link>
              <Link to="/category?filter=sale" className="block py-2 border-b border-gray-100" onClick={() => setOpen(false)}>
                On Sale
              </Link>
              <Link to="/category?filter=new" className="block py-2 border-b border-gray-100" onClick={() => setOpen(false)}>
                New Arrivals
              </Link>
              <span className="block py-2 cursor-pointer">Brands</span>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
