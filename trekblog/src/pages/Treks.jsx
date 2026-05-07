import { useState, useMemo } from 'react';
import { motion }           from 'framer-motion';

import Card          from '../components/ui/Card';


import Button        from '../components/ui/Button';


import FilterSidebar from '../components/FilterSidebar';

import { treks }     from '../data/treks';

const regions      = ['All', ...new Set(treks.map(t => t.region))];
const difficulties = ['All', 'Easy–Moderate', 'Moderate', 'Challenging'];

export default function Treks() {
  // ── Existing filter state ─────────────────────────────────
  const [region,     setRegion]     = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [sort,       setSort]       = useState('featured');

  // ── FilterSidebar state ───────────────────────────────────

  const [filters, setFilters] = useState({


    continents: [], durations: [], activities: [], maxPrice: 10000,


  });


  const updateFilter = (key, value) =>


    setFilters(prev => ({ ...prev, [key]: value }));


  const resetAllFilters = () => {


    setFilters({ continents: [], durations: [], activities: [], maxPrice: 10000 });


    setRegion('All'); setDifficulty('All'); setSort('featured');


  };


  const filtered = useMemo(() => {
    let r = [...treks];
    if (region !== 'All')     r = r.filter(t => t.region     === region);
    if (difficulty !== 'All') r = r.filter(t => t.difficulty === difficulty);

    if (filters.maxPrice < 10000) r = r.filter(t => t.price <= filters.maxPrice);

    if      (sort === 'price-asc')  r.sort((a, b) => a.price    - b.price);
    else if (sort === 'price-desc') r.sort((a, b) => b.price    - a.price);
    else if (sort === 'duration')   r.sort((a, b) => a.duration - b.duration);
    else r.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return r;
  }, [region, difficulty, sort, filters]);

  return (
    <div className="min-h-screen bg-parchment">

      {/* ── Header ──────────────────────────────────────────── */}
      <section
        className="relative pt-28 pb-14 bg-bark overflow-hidden"
        aria-label="Treks header"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl text-white">Nepal Trekking Routes</h1>
          <p className="text-white/50 mt-3 text-sm">{filtered.length} treks across the Himalaya</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">

        {/* ── Button variants row — G1.3 evidence ────────────── */}

        <div className="flex gap-3 flex-wrap mb-8">


          <Button variant="primary"   onClick={() => {}}>Book a Trek</Button>


          <Button variant="secondary" onClick={() => {}}>Download Brochure</Button>


          <Button variant="outline"   onClick={() => {}}>Compare Routes</Button>


        </div>


        {/* ── FilterSidebar + content layout ─────────────────── */}

        <div className="flex gap-8 items-start">


          {/* FilterSidebar — visible on md screens and above */}

          <div className="w-64 flex-shrink-0 hidden md:block">


            <FilterSidebar


              filters={filters}


              onFilterChange={updateFilter}


              onReset={resetAllFilters}


            />


          </div>


          {/* Right column — existing filters + card grid */}

          <div className="flex-1 min-w-0">


            {/* ── Region / Difficulty / Sort filters ────────────── */}
            <div className="bg-parchment-dark border border-parchment-deep p-5 mb-8">
              <div className="flex flex-col md:flex-row gap-5 md:items-center">

                {/* Region */}
                <div className="flex-1">
                  <p className="text-xs text-bark/60 uppercase tracking-wider mb-2">Region</p>
                  <div className="flex flex-wrap gap-1.5">
                    {regions.map((r) => (
                      <button
                        key={r}
                        onClick={() => setRegion(r)}
                        className={`px-3 py-1.5 text-xs font-medium tracking-wider uppercase transition-all min-h-[44px] ${
                          region === r
                            ? 'bg-crimson text-white'
                            : 'bg-parchment border border-parchment-deep text-bark hover:border-saffron'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Difficulty */}
                <div>
                  <p className="text-xs text-bark/60 uppercase tracking-wider mb-2">Difficulty</p>
                  <div className="flex flex-wrap gap-1.5">
                    {difficulties.map((d) => (
                      <button
                        key={d}
                        onClick={() => setDifficulty(d)}
                        className={`px-3 py-1.5 text-xs font-medium tracking-wider uppercase transition-all min-h-[44px] ${
                          difficulty === d
                            ? 'bg-saffron text-white'
                            : 'bg-parchment border border-parchment-deep text-bark hover:border-saffron'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div className="flex-shrink-0">
                  <p className="text-xs text-bark/60 uppercase tracking-wider mb-2">Sort</p>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="text-xs border border-parchment-deep px-3 py-2.5 bg-parchment text-bark focus:outline-none focus:border-saffron min-h-[44px]"
                  >
                    <option value="featured">Featured First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="duration">Duration</option>
                  </select>
                </div>

              </div>
            </div>

            {/* ── Trek Cards grid ────────────────────────────────── */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-heading text-2xl text-bark/40">
                  No treks match those filters
                </p>
                <button
                  onClick={resetAllFilters}
                  className="mt-4 text-sm text-crimson hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">


                {filtered.map((t) => (


                  <Card


                    key={t.id}


                    type="destination"


                    imageUrl={t.image}      


                    title={t.name}         


                    description={t.description}


                    link={`/treks/${t.id}`}


                    price={t.price}


                    duration={t.duration}


                    region={t.region}


                  />


                ))}


              </div>

            )}


          </div> {/* end flex-1 right column */}


        </div> {/* end flex gap-8 layout   */}


      </div>
    </div>
  );
}