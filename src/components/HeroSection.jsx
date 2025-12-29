
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full bg-gray-100">
        <div className="flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="max-w-md text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                FIND CLOTHES <br />
                THAT MATCHES <br />
                YOUR STYLE
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600">
                Browse through our diverse range of meticulously crafted garments,
                designed to bring out your individuality and cater to your sense of style.
              </p>

              <Link to="/category">
                <button className="mt-6 sm:mt-8 bg-black text-white px-6 sm:px-8 py-3 rounded-full font-medium text-sm sm:text-base">
                  Shop Now
                </button>
              </Link>

              <div className="mt-8 sm:mt-12 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">200+</h2>
                  <p className="text-xs sm:text-sm text-gray-600">International Brands</p>
                </div>
                <div className="border-l border-gray-300 pl-6 sm:pl-8 lg:border-0 lg:pl-0">
                  <h2 className="text-xl sm:text-2xl font-bold">2000+</h2>
                  <p className="text-xs sm:text-sm text-gray-600">High-Quality Apparels</p>
                </div>
                <div className="border-l border-gray-300 pl-6 sm:pl-8 lg:border-0 lg:pl-0">
                  <h2 className="text-xl sm:text-2xl font-bold">30000+</h2>
                  <p className="text-xs sm:text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1521334884684-d80222895322"
              alt="Fashion"
              className="w-full h-64 sm:h-80 lg:h-[500px] object-cover rounded-lg lg:rounded-none"
            />
          </div>

        </div>
      </section>

      {/* BRAND BAR */}
      <div className="w-full bg-black py-4 sm:py-6 px-4 sm:px-8 lg:px-12 overflow-x-auto">
        <div className="flex justify-between items-center text-white font-bold text-xs sm:text-sm lg:text-lg min-w-[400px] gap-4 sm:gap-6">
          <span>PRADA</span>
          <span>ZARA</span>
          <span>VERSACE</span>
          <span>GUCCI</span>
          <span>CALVIN KLEIN</span>
        </div>
      </div>

    </>
  );
}

export default HeroSection;
