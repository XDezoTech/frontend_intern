import { Link } from 'react-router-dom';
import { TrekCard, TestimonialCard } from '../components/UI';
import { treks, testimonials } from '../data/treks';
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const featured = treks.filter(t => t.featured).slice(0, 3);

const regions = [
  {
    name: "Khumbu & Everest",
    image:
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=700&q=80",
    count: 4,
  },
  {
    name: "Annapurna",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80",
    count: 5,
  },
  {
    name: "Mustang",
    image:
      "https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=700&q=80",
    count: 2,
  },
  {
    name: "Langtang",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSRS8x4aV1vh8q5h57LFeLbfFLsrhAiD_W7_6HKzqeP5r_e5qPir4orz6Buy3vVhoiD0tlbFtqriBlpLnxlEBJt-Ow&s=19",
    count: 3,
  },
];

const whys = [
  { icon: '🏔', title: 'Local Guides', text: 'Every lead guide is from a Himalayan community. The Khumbu is home to Dawa, not just a job site.' },
  { icon: '🙏', title: 'Porter Ethics', text: 'Fair wages, proper gear, and insurance for every porter. Not a checkbox — a commitment.' },
  { icon: '🛕', title: 'Cultural Access', text: 'Private monastery visits, family teahouse stays, and festival timing no booking site can offer.' },
  { icon: '🌿', title: 'Leave No Trace', text: 'All waste carried out. Trail restoration contributions built into every booking.' },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
            alt="Annapurna mountain range Nepal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <p className="text-saffron text-sm uppercase tracking-widest font-medium mb-4">
            Nepal Trekking Company
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl text-white leading-tight mb-5">
            Explore the Himalayas
          </h1>
          <p className="text-white/75 text-base md:text-lg mb-10 max-w-md mx-auto">
            Guided treks through Nepal's great mountain regions, led by Sherpa
            and local guides who were born here.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="primary" onClick={() => navigate("/treks")}>
              Browse Treks
            </Button>
            <Button variant="secondary" onClick={() => navigate("/contact")}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-crimson text-white py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "16+", l: "Years in Nepal" },
            { n: "3,200+", l: "Treks Completed" },
            { n: "28", l: "Licensed Guides" },
            { n: "4.9★", l: "Average Rating" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-heading text-3xl text-saffron">{s.n}</p>
              <p className="text-white/70 text-xs uppercase tracking-wider mt-0.5">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 px-4 md:px-8 bg-parchment">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl text-bark-dark">
              Trekking Regions
            </h2>
            <p className="text-bark/60 mt-2 text-sm">
              Choose your adventure by region
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {regions.map((r) => (
              <div
                key={r.name}
                className="group overflow-hidden cursor-pointer"
              >
                <Link to={`/treks?region=${r.name}`} className="block">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bark-dark/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-3">
                      <h3 className="font-heading text-white text-sm leading-tight">
                        {r.name}
                      </h3>
                      <p className="text-white/50 text-xs mt-0.5">
                        {r.count} treks
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Treks */}
      <section className="py-16 px-4 md:px-8 bg-parchment-dark">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-heading text-4xl text-bark-dark">
                Featured Treks
              </h2>
              <p className="text-bark/60 mt-1 text-sm">
                Our most popular routes
              </p>
            </div>
            <div className="flex gap-4 mb-8">
              <Button variant="outline" onClick={() => navigate("/treks")}>
                View All Treks
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((t, i) => (
              <TrekCard key={t.id} trek={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 md:px-8 bg-bark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-white">
              Why Trek With Us
            </h2>
            <p className="text-white/50 mt-2 text-sm">
              What makes Himalaya Trails different
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whys.map((w) => (
              <div key={w.title} className="text-center">
                <div className="text-4xl mb-4">{w.icon}</div>
                <h3 className="font-heading text-lg text-saffron mb-2">
                  {w.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {w.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 bg-parchment">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl text-bark-dark">
              What Trekkers Say
            </h2>
            <p className="text-bark/60 mt-2 text-sm">
              Real experiences from the trail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1920&q=80"
            alt="Mountain teahouse at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-bark-dark/75" />
        </div>
        <div className="relative z-10 text-center max-w-xl mx-auto">
          <h2 className="font-heading text-4xl text-white mb-4">
            Ready to Trek Nepal?
          </h2>
          <p className="text-white/65 text-base mb-8">
            Get in touch with our team and we will plan the perfect trip for
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/treks"
              className="bg-saffron text-bark-dark text-sm font-semibold px-8 py-3.5 hover:bg-saffron-light transition-colors"
            >
              Browse All Treks
            </Link>
            <Link
              to="/contact"
              className="border border-white/50 text-white text-sm px-8 py-3.5 hover:bg-white/10 transition-colors"
            >
              Contact a Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
