import { Link } from "react-router-dom";

function BrowseByDressStyle() {
  const styles = [
    { name: "Casual", image: "https://images.unsplash.com/photo-1516826957135-700dedea698c", wide: false },
    { name: "Formal", image: "https://images.unsplash.com/photo-1520975916090-3105956dac38", wide: true },
    { name: "Party", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f", wide: true },
    { name: "Gym", image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e", wide: false },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
      
      {/* OUTER CONTAINER */}
      <div className="bg-gray-100 rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-12 py-6 sm:py-10 lg:py-16">

        {/* SECTION TITLE */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-6 sm:mb-8 lg:mb-12">
          BROWSE BY DRESS STYLE
        </h2>

        {/* GRID - Asymmetric layout on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">

          {/* CASUAL - Takes 1 column on lg */}
          <Link to="/category" className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden h-40 sm:h-48 lg:h-56 group cursor-pointer">
            <h3 className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 text-base sm:text-lg lg:text-xl font-bold z-10 bg-white/80 px-2 py-1 rounded">
              Casual
            </h3>
            <img
              src={styles[0].image}
              alt="Casual"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* FORMAL - Takes 2 columns on lg */}
          <Link to="/category" className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden h-40 sm:h-48 lg:h-56 lg:col-span-2 group cursor-pointer">
            <h3 className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 text-base sm:text-lg lg:text-xl font-bold z-10 bg-white/80 px-2 py-1 rounded">
              Formal
            </h3>
            <img
              src={styles[1].image}
              alt="Formal"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* PARTY - Takes 2 columns on lg */}
          <Link to="/category" className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden h-40 sm:h-48 lg:h-56 lg:col-span-2 group cursor-pointer">
            <h3 className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 text-base sm:text-lg lg:text-xl font-bold z-10 bg-white/80 px-2 py-1 rounded">
              Party
            </h3>
            <img
              src={styles[2].image}
              alt="Party"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* GYM - Takes 1 column on lg */}
          <Link to="/category" className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden h-40 sm:h-48 lg:h-56 group cursor-pointer">
            <h3 className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 text-base sm:text-lg lg:text-xl font-bold z-10 bg-white/80 px-2 py-1 rounded">
              Gym
            </h3>
            <img
              src={styles[3].image}
              alt="Gym"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

        </div>
      </div>
    </section>
  );
}

export default BrowseByDressStyle;
