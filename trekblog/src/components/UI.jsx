import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

/* Trek Card */
export function TrekCard({ trek, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card-parchment group overflow-hidden"
    >
      <Link to={`/trek/${trek.id}`} className="block">
        {/* Image */}
        <div className="relative overflow-hidden h-52">
          <img
            src={trek.image}
            alt={trek.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/70 via-transparent to-transparent" />
          <div className="absolute top-3 right-3 bg-crimson text-white text-xs px-2 py-1 font-medium">
            {trek.elevation}
          </div>
        </div>

        {/* Body */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-heading text-lg text-bark-dark group-hover:text-crimson transition-colors leading-tight">
              {trek.name}
            </h3>
            <div className="flex items-center gap-0.5 flex-shrink-0">
              <span className="text-saffron text-xs">★</span>
              <span className="text-xs font-medium text-bark">{trek.rating}</span>
            </div>
          </div>

          <p className="text-xs text-bark/70 italic mb-3">{trek.tagline}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            <span className="trek-tag">{trek.region}</span>
            <span className="trek-tag">{trek.difficulty}</span>
            <span className="trek-tag">{trek.duration} days</span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-parchment-deep">
            <div>
              <p className="text-xs text-bark/50 uppercase tracking-wider">From</p>
              <p className="font-heading text-xl text-bark-dark">NRS {trek.price.toLocaleString()}</p>
            </div>
            <span className="text-saffron text-xs font-medium tracking-wider uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
              View Trek →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

/* Blog Card */
export function BlogCard({ post, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group flex gap-4 items-start pb-5 border-b border-parchment-deep last:border-0"
    >
      <Link to={`/blog/${post.id}`} className="flex gap-4 items-start w-full">
        <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs text-crimson uppercase tracking-wider font-medium block mb-1">{post.category}</span>
          <h4 className="font-heading text-sm text-bark-dark group-hover:text-crimson transition-colors leading-snug mb-1 line-clamp-2">
            {post.title}
          </h4>
          <p className="text-xs text-bark/50">{post.readTime} · {post.date}</p>
        </div>
      </Link>
    </motion.article>
  );
}

/* Guide Card */
export function GuideCard({ guide, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center group"
    >
      <div className="relative w-32 h-32 mx-auto mb-4">
        <img
          src={guide.image}
          alt={guide.name}
          loading="lazy"
          className="w-full h-full rounded-full object-cover border-4 border-parchment"
        />
      </div>
      <h3 className="font-heading text-base text-bark-dark">{guide.name}</h3>
      <p className="text-xs text-saffron tracking-wider uppercase font-medium mt-0.5 mb-2">{guide.role}</p>
      <p className="text-xs text-bark/60 leading-relaxed max-w-xs mx-auto">{guide.bio}</p>
      <div className="mt-3 flex flex-wrap justify-center gap-1">
        <span className="trek-tag">{guide.experience}</span>
        <span className="trek-tag">{guide.region}</span>
      </div>
    </motion.article>
  );
}

/* Testimonial Card */
export function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card-parchment p-6"
    >
      <p className="text-saffron font-heading text-3xl leading-none mb-2">"</p>
      <p className="text-bark/80 text-sm leading-relaxed mb-4 italic">{testimonial.text}</p>
      <footer className="flex items-center gap-2">
        <div>
          <p className="font-heading text-sm text-bark-dark">{testimonial.name}</p>
          <p className="text-xs text-bark/50">{testimonial.country} · {testimonial.trek}</p>
        </div>
      </footer>
      <div className="flex gap-0.5 mt-3">
        {Array(testimonial.rating).fill(0).map((_, i) => (
          <span key={i} className="text-saffron text-xs">★</span>
        ))}
      </div>
    </motion.blockquote>
  );
}

/* Accordion */
export function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-1">
      {items.map((item, i) => (
        <div key={i} className="border border-parchment-deep overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-parchment hover:bg-parchment-dark transition-colors min-h-[44px]"
            aria-expanded={open === i}
          >
            <span className="font-heading text-bark-dark text-sm">{item.q}</span>
            <span className={`text-saffron text-lg transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          <motion.div
            initial={false}
            animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 py-4 text-sm text-bark/70 leading-relaxed border-t border-parchment-deep bg-parchment/50">
              {item.a}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

/* Keep Mandala for any pages still using it */
export function Mandala({ size = 48, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="22" stroke="#E8871A" strokeWidth="0.8" strokeDasharray="3 2" />
      <circle cx="24" cy="24" r="14" stroke="#B71C1C" strokeWidth="0.6" strokeDasharray="2 3" />
      <circle cx="24" cy="24" r="7" stroke="#E8871A" strokeWidth="0.8" />
      <circle cx="24" cy="24" r="2.5" fill="#B71C1C" />
    </svg>
  );
}

export function PrayerFlags({ className = '' }) {
  const colors = ['#3B82F6','#FFFFFF','#F97316','#22C55E','#EF4444'];
  return (
    <div className={`flex items-end gap-1 ${className}`} aria-hidden="true">
      {colors.map((c, i) => (
        <div key={i} className="flex flex-col items-center gap-0.5">
          <div className="w-7 h-5 opacity-80" style={{ backgroundColor: c, clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }} />
          <div className="w-px h-6 bg-bark opacity-40" />
        </div>
      ))}
    </div>
  );
}
