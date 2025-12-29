
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-screen bg-gray-100">
        <div className="flex items-center px-12 py-16">

        {/* LEFT CONTENT */}
<div className="w-1/2 flex justify-center">
  <div className="max-w-md">
    <h1 className="text-5xl font-extrabold leading-tight">
      FIND CLOTHES <br />
      THAT MATCHES <br />
      YOUR STYLE
    </h1>

    <p className="mt-6 text-gray-600">
      Browse through our diverse range of meticulously crafted garments,
      designed to bring out your individuality and cater to your sense of style.
    </p>

    <button className="mt-8 bg-black text-white px-8 py-3 rounded-full font-medium">
      <Link to="/category">      Shop Now</Link>

    </button>

    <div className="mt-12 flex gap-12">
      <div>
        <h2 className="text-2xl font-bold">200+</h2>
        <p className="text-sm text-gray-600">International Brands</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">2000+</h2>
        <p className="text-sm text-gray-600">High-Quality Apparels</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">30000+</h2>
        <p className="text-sm text-gray-600">Happy Customers</p>
      </div>
    </div>
  </div>
</div>


          {/* RIGHT IMAGE */}
          <div className="w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1521334884684-d80222895322"
              alt="Fashion"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* BRAND BAR */}
    <div className="w-screen bg-black py-6 px-12">
  <div className="flex justify-between items-center text-white font-bold text-lg">
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
