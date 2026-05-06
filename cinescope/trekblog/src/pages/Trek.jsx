import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { treks } from '../data/treks';
import { TrekCard, Mandala } from '../components/UI';


function BookingWidget({ trek }) {
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [sent, setSent] = useState(false);

  const total = guests * trek.price;

  if (sent) return (
    <div className="card-parchment p-6 text-center">
      <Mandala size={40} className="mx-auto mb-4" />
      <h3 className="font-heading text-xl text-bark-dark mb-2">Namaste! 🙏</h3>
      <p className="text-sm text-bark/70 mb-3">Your enquiry for <strong>{trek.name}</strong> has been received. Our team will reply within 24 hours.</p>
      <button onClick={() => setSent(false)} className="text-xs text-crimson hover:underline">Send another</button>
    </div>
  );

  return (
    <div className="card-parchment p-6 sticky top-24">
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-parchment-deep">
        <div>
          <p className="text-xs text-bark/50 uppercase tracking-wider">From</p>
          <p className="font-heading text-3xl text-bark-dark">NRS {trek.price.toLocaleString()}</p>
          <p className="text-xs text-bark/50">per person</p>
        </div>
        <div className="text-right">
          <p className="text-saffron text-sm">★ {trek.rating}</p>
          <p className="text-xs text-bark/50">({trek.reviews} reviews)</p>
        </div>
      </div>

      <div className="space-y-4 mb-5">
        <div>
          <label htmlFor="dep-date" className="block devanagari-label mb-1.5">Departure Date</label>
          <input
            id="dep-date"
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full border border-parchment-deep bg-parchment px-3 py-2.5 text-sm text-bark focus:outline-none focus:border-saffron min-h-[44px]"
          />
        </div>

        <div>
          <label className="block devanagari-label mb-1.5">Trekkers</label>
          <div className="flex items-center gap-3 border border-parchment-deep bg-parchment px-4 py-2.5">
            <button
              type="button"
              onClick={() => setGuests(g => Math.max(1, g - 1))}
              className="w-8 h-8 flex items-center justify-center text-saffron border border-saffron hover:bg-saffron hover:text-white transition-colors min-w-[44px] min-h-[44px]"
              aria-label="Decrease guests"
            >−</button>
            <span className="flex-1 text-center font-heading text-lg text-bark-dark">{guests}</span>
            <button
              type="button"
              onClick={() => setGuests(g => g + 1)}
              className="w-8 h-8 flex items-center justify-center text-saffron border border-saffron hover:bg-saffron hover:text-white transition-colors min-w-[44px] min-h-[44px]"
              aria-label="Increase guests"
            >+</button>
          </div>
        </div>
      </div>

      <div className="bg-parchment-dark p-3 mb-5 border border-parchment-deep">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-bark/60">{guests} × NRS {trek.price.toLocaleString()}</span>
          <span className="text-bark">NRS {total.toLocaleString()}</span>
        </div>
        <div className="flex justify-between font-heading text-base border-t border-parchment-deep pt-2 mt-2">
          <span className="text-bark-dark">Total</span>
          <span className="text-crimson">NRS {total.toLocaleString()}</span>
        </div>
      </div>

      <button
        onClick={() => setSent(true)}
        className="w-full bg-crimson text-white text-xs tracking-widest uppercase font-medium py-3.5 hover:bg-crimson-light transition-colors min-h-[44px]"
      >
        Send Enquiry 🙏
      </button>
      <p className="text-xs text-bark/40 text-center mt-2">No payment now · Free cancellation 90 days prior</p>

      <div className="mt-5 pt-4 border-t border-parchment-deep space-y-1.5">
        {trek.includes.map(item => (
          <p key={item} className="text-xs text-bark/60 flex items-center gap-1.5">
            <span className="text-saffron">✓</span> {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function Gallery({ images, name }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="relative overflow-hidden aspect-video bg-parchment-dark mb-2">
        <motion.img
          key={active}
          src={images[active]}
          alt={`${name} photo ${active + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover cursor-zoom-in"
        />
        <div className="absolute bottom-2 right-2 bg-bark-dark/70 text-white text-xs px-2 py-0.5">
          {active + 1}/{images.length}
        </div>
      </div>
      <div className="flex gap-1.5">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-1 aspect-video overflow-hidden transition-all ${i === active ? 'ring-2 ring-saffron' : 'opacity-50 hover:opacity-80'}`}
            aria-label={`View photo ${i + 1}`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Trek() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trek = treks.find(t => t.id === id);

  if (!trek) return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-24 text-center px-4">
      <Mandala size={48} className="mb-4 opacity-30" />
      <p className="font-heading text-3xl text-bark/40 mb-4">Trek not found</p>
      <button onClick={() => navigate('/treks')} className="bg-crimson text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-crimson-light transition-colors">
        View All Treks
      </button>
    </div>
  );

  const related = treks.filter(t => t.id !== trek.id && t.region === trek.region).slice(0, 3);

  return (
    <article>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[420px] overflow-hidden" aria-label="Trek hero">
        <img src={trek.image} alt={trek.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bark-dark/85 via-bark/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-4 md:px-8 pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-2">{trek.name}</h1>
            <p className="text-white/60 italic mb-4">{trek.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {[trek.region, trek.difficulty, `${trek.duration} days`, trek.elevation, `Best: ${trek.bestSeason}`].map(t => (
                <span key={t} className="bg-white/15 backdrop-blur-sm text-white text-xs px-3 py-1 font-medium">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-bark text-white/60 px-4 py-3 text-xs" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto flex gap-2">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>›</span>
          <Link to="/treks" className="hover:text-white">Treks</Link>
          <span>›</span>
          <span className="text-saffron">{trek.name}</span>
        </div>
      </nav>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left */}
          <div className="lg:col-span-2 space-y-10">
            <section aria-labelledby="overview-h">
              <h2 id="overview-h" className="font-heading text-2xl text-bark-dark mb-3">Overview</h2>
              <p className="text-bark/75 leading-relaxed">{trek.description}</p>
            </section>

            <section aria-labelledby="gallery-h">
              <h2 id="gallery-h" className="font-heading text-2xl text-bark-dark mb-3">Gallery</h2>
              <Gallery images={trek.gallery} name={trek.name} />
            </section>

            <section aria-labelledby="highlights-h">
              <h2 id="highlights-h" className="font-heading text-2xl text-bark-dark mb-3">Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {trek.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2 text-sm text-bark/75 card-parchment px-4 py-3">
                    <span className="text-saffron mt-0.5">✦</span> {h}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="itinerary-h">
              <h2 id="itinerary-h" className="font-heading text-2xl text-bark-dark mb-4">Day-by-Day Itinerary</h2>
              <div className="relative pl-6 border-l-2 border-saffron/30 space-y-5">
                {trek.itinerary.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="relative"
                  >
                    <div className="absolute -left-[29px] top-1 w-4 h-4 bg-saffron flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white" />
                    </div>
                    <div className="card-parchment p-4">
                      <p className="text-xs text-bark/60 uppercase tracking-wider font-medium mb-1">Day {item.day}</p>
                      <h4 className="font-heading text-base text-bark-dark mb-1">{item.title}</h4>
                      <p className="text-sm text-bark/65 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {trek.tags.map(tag => <span key={tag} className="trek-tag">{tag}</span>)}
            </div>
          </div>

          {/* Booking widget */}
          <div className="lg:col-span-1">
            <BookingWidget trek={trek} />
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16 pt-10 border-t-2 border-parchment-deep" aria-labelledby="related-h">
            <div className="flex items-end justify-between mb-6">
              <div>
                <h2 id="related-h" className="font-heading text-3xl text-bark-dark">More in {trek.region}</h2>
              </div>
              <Link to="/treks" className="text-xs text-crimson uppercase tracking-wider hover:text-crimson-light">All treks →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((t, i) => <TrekCard key={t.id} trek={t} index={i} />)}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
