import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import TopOfferBar from "../components/TopOfferBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { FaStar } from "react-icons/fa";
import { FiChevronRight, FiChevronDown, FiChevronUp, FiSliders, FiX } from "react-icons/fi";
import { products, categories, allColors, allSizes } from "../data/products";

/* ================= PAGE ================= */
function CategoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([50, 300]);
  const [sortBy, setSortBy] = useState("popular");
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Get search query from URL
  const searchQuery = searchParams.get("search") || "";
  const filterType = searchParams.get("filter") || "";

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Special filters (On Sale, New Arrivals)
    if (filterType === "sale") {
      result = result.filter((p) => p.discount || p.oldPrice);
    } else if (filterType === "new") {
      result = result.filter((p) => p.isNew);
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Size filter
    if (selectedSizes.length > 0) {
      result = result.filter((p) => selectedSizes.some((s) => p.sizes.includes(s)));
    }

    // Color filter
    if (selectedColors.length > 0) {
      result = result.filter((p) => selectedColors.some((c) => p.colors.includes(c)));
    }

    // Price filter
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    }

    return result;
  }, [searchQuery, filterType, selectedCategory, selectedSizes, selectedColors, priceRange, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  // Toggle size selection
  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
    setCurrentPage(1);
  };

  // Toggle color selection
  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
    setCurrentPage(1);
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Handle price range change
  const handlePriceChange = (value) => {
    setPriceRange([priceRange[0], parseInt(value)]);
    setCurrentPage(1);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([50, 300]);
    setSearchParams({});
    setCurrentPage(1);
  };

  const hasActiveFilters = selectedCategory || selectedSizes.length > 0 || selectedColors.length > 0 || searchQuery || filterType;

  // Get page title
  const getPageTitle = () => {
    if (searchQuery) return `Search: "${searchQuery}"`;
    if (filterType === "sale") return "On Sale";
    if (filterType === "new") return "New Arrivals";
    if (selectedCategory) return selectedCategory;
    return "All Products";
  };

  return (
    <>
      <TopOfferBar />
      <Header />

      <section className="w-full px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-10">

        {/* BREADCRUMB */}
        <div className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <span>&gt;</span>
          <span className="capitalize">{getPageTitle()}</span>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr] gap-6 lg:gap-8 xl:gap-12">

          {/* ================= MOBILE FILTER TOGGLE ================= */}
          <button 
            className="lg:hidden flex items-center justify-center gap-2 border rounded-full py-3 text-sm font-medium"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FiSliders />
            {showFilters ? "Hide Filters" : "Show Filters"}
            {showFilters ? <FiChevronUp /> : <FiChevronDown />}
          </button>

          {/* ================= LEFT FILTERS ================= */}
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block border rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-6 sm:space-y-8 h-fit`}>

            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-base sm:text-lg">Filters</h3>
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-xs text-red-500 hover:text-red-700"
                >
                  Clear All
                </button>
              )}
            </div>

            <hr className="border-gray-200" />

            {/* CATEGORIES */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <p className="font-medium text-sm sm:text-base">Categories</p>
                <FiChevronDown className="text-gray-400" />
              </div>

              <ul className="space-y-2 sm:space-y-3 text-sm text-gray-600">
                <li
                  onClick={() => handleCategoryChange("")}
                  className={`flex items-center justify-between cursor-pointer hover:text-black transition-colors py-1 ${
                    !selectedCategory ? "font-semibold text-black" : ""
                  }`}
                >
                  <span>All Products</span>
                  <FiChevronRight className="text-gray-400" />
                </li>
                {categories.map((item) => (
                  <li
                    key={item}
                    onClick={() => handleCategoryChange(item.toLowerCase())}
                    className={`flex items-center justify-between cursor-pointer hover:text-black transition-colors py-1 ${
                      selectedCategory === item.toLowerCase() ? "font-semibold text-black" : ""
                    }`}
                  >
                    <span>{item}</span>
                    <FiChevronRight className="text-gray-400" />
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-gray-200" />

            {/* PRICE */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <p className="font-medium text-sm sm:text-base">Price</p>
                <FiChevronDown className="text-gray-400" />
              </div>

              <input 
                type="range" 
                min="50" 
                max="300" 
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e.target.value)}
                className="w-full accent-black" 
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* COLORS */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <p className="font-medium text-sm sm:text-base">Colors</p>
                <FiChevronDown className="text-gray-400" />
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {allColors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => toggleColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full cursor-pointer transition-all border ${
                      selectedColors.includes(color) 
                        ? "ring-2 ring-offset-2 ring-black scale-110" 
                        : "hover:scale-110"
                    } ${color === "#FFFFFF" ? "border-gray-300" : "border-transparent"}`}
                  />
                ))}
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* SIZE */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <p className="font-medium text-sm sm:text-base">Size</p>
                <FiChevronDown className="text-gray-400" />
              </div>

              <div className="flex flex-wrap gap-2">
                {allSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors ${
                      selectedSizes.includes(size)
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setShowFilters(false)}
              className="w-full bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors lg:hidden"
            >
              Apply Filters ({filteredProducts.length} products)
            </button>
          </aside>

          {/* ================= PRODUCTS ================= */}
          <main>

            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold capitalize">{getPageTitle()}</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Showing {paginatedProducts.length} of {filteredProducts.length} products
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-100 px-3 py-2 rounded-full text-sm outline-none cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Active Filters Tags */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {searchQuery && (
                  <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Search: {searchQuery}
                    <button onClick={() => setSearchParams({})}><FiX /></button>
                  </span>
                )}
                {selectedCategory && (
                  <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm capitalize">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory("")}><FiX /></button>
                  </span>
                )}
                {selectedSizes.map((size) => (
                  <span key={size} className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {size}
                    <button onClick={() => toggleSize(size)}><FiX /></button>
                  </span>
                ))}
                {selectedColors.map((color) => (
                  <span key={color} className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
                    <span className="w-3 h-3 rounded-full border" style={{ backgroundColor: color }} />
                    <button onClick={() => toggleColor(color)}><FiX /></button>
                  </span>
                ))}
              </div>
            )}

            {/* NO RESULTS */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 mb-4">No products found matching your criteria.</p>
                <button 
                  onClick={clearFilters}
                  className="text-black underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                {/* PRODUCT GRID */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {paginatedProducts.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="cursor-pointer group">

                      <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 overflow-hidden relative">
                        {product.isNew && (
                          <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-1 rounded">NEW</span>
                        )}
                        {product.discount && (
                          <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded">
                            -{product.discount}%
                          </span>
                        )}
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-36 sm:h-44 md:h-52 lg:h-60 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <h3 className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base line-clamp-1">
                        {product.title}
                      </h3>

                      {/* RATING */}
                      <div className="flex items-center gap-1 sm:gap-2 mt-1">
                        <div className="flex text-yellow-400 text-xs sm:text-sm">
                          {[...Array(5)].map((_, j) => (
                            <FaStar
                              key={j}
                              className={
                                j < Math.round(product.rating)
                                  ? "opacity-100"
                                  : "opacity-30"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm text-gray-500">
                          {product.rating}/5
                        </span>
                      </div>

                      {/* PRICE */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
                        <span className="font-bold text-sm sm:text-base lg:text-lg">
                          ${product.price}
                        </span>

                        {product.oldPrice && (
                          <>
                            <span className="text-gray-400 line-through text-xs sm:text-sm">
                              ${product.oldPrice}
                            </span>
                            <span className="text-[10px] sm:text-xs bg-red-100 text-red-500 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                              -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                            </span>
                          </>
                        )}
                      </div>

                    </Link>
                  ))}
                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between gap-4 mt-8 sm:mt-12 lg:mt-16 text-sm">
                    <button 
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className={`px-3 sm:px-4 py-2 border rounded-full text-xs sm:text-sm transition-colors ${
                        currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
                      }`}
                    >
                      ← Previous
                    </button>

                    <div className="flex gap-2 sm:gap-4">
                      {[...Array(Math.min(totalPages, 5))].map((_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }
                        
                        return (
                          <button
                            key={i}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded ${
                              currentPage === pageNum 
                                ? "font-bold bg-gray-100" 
                                : "text-gray-500 hover:text-black"
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    <button 
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className={`px-3 sm:px-4 py-2 border rounded-full text-xs sm:text-sm transition-colors ${
                        currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
                      }`}
                    >
                      Next →
                    </button>
                  </div>
                )}
              </>
            )}

          </main>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CategoryPage;
