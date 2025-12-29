function BrowseByDressStyle() {
  return (
    <section className="w-full px-4 md:px-12 py-12 md:py-20">
      
      {/* OUTER CONTAINER */}
      <div className="bg-gray-100 rounded-3xl px-6 md:px-12 py-10 md:py-16">

        {/* SECTION TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12">
          BROWSE BY DRESS STYLE
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* CASUAL */}
          <div className="relative bg-white rounded-2xl overflow-hidden h-56 sm:h-64">
            <h3 className="absolute top-4 left-4 sm:top-6 sm:left-6 text-lg sm:text-xl font-bold z-10">
              Casual
            </h3>
            <img
              src="https://images.unsplash.com/photo-1516826957135-700dedea698c"
              alt="Casual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FORMAL */}
          <div className="relative bg-white rounded-2xl overflow-hidden h-56 sm:h-64">
            <h3 className="absolute top-4 left-4 sm:top-6 sm:left-6 text-lg sm:text-xl font-bold z-10">
              Formal
            </h3>
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
              alt="Formal"
              className="w-full h-full object-cover"
            />
          </div>

          {/* PARTY */}
          <div className="relative bg-white rounded-2xl overflow-hidden h-56 sm:h-64">
            <h3 className="absolute top-4 left-4 sm:top-6 sm:left-6 text-lg sm:text-xl font-bold z-10">
              Party
            </h3>
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              alt="Party"
              className="w-full h-full object-cover"
            />
          </div>

          {/* GYM */}
          <div className="relative bg-white rounded-2xl overflow-hidden h-56 sm:h-64">
            <h3 className="absolute top-4 left-4 sm:top-6 sm:left-6 text-lg sm:text-xl font-bold z-10">
              Gym
            </h3>
            <img
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
              alt="Gym"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default BrowseByDressStyle;
