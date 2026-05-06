import { motion } from 'framer-motion';
import { GuideCard, Mandala, PrayerFlags } from '../components/UI';
import { guides } from '../data/treks';
import { Link } from 'react-router-dom';

const values = [
  { ne: 'सत्यनिष्ठा', en: 'Integrity', text: 'We never overstate difficulty, weather, or what is included. Our descriptions come from the people who walked the route last month.' },
  { ne: 'समुदाय', en: 'Community', text: '30% of every booking fee supports mountain community infrastructure—schools, trails, and porter welfare.' },
  { ne: 'ज्ञान', en: 'Knowledge', text: 'Our guides hold formal degrees in tourism or ecology alongside decades of practical mountain knowledge.' },
];

const timeline = [
  { year: '2008', en: 'Founded', ne: 'स्थापना', text: 'Dawa Sherpa leads his first commercial group up the Khumbu. "I wanted them to see it as I see it."' },
  { year: '2011', en: 'Government Licensed', ne: 'सरकारी इजाजत', text: 'Registered with Nepal Tourism Board. TAAN membership secured.' },
  { year: '2015', en: 'Earthquake Response', ne: 'भूकम्प सहायता', text: 'After April 2015, all guides shift to relief operations. $18,000 in bookings refunded. Village rebuilding begun.' },
  { year: '2018', en: 'Porter Ethics Pledge', ne: 'भरिया अधिकार', text: 'Became early signatories of IPPG standards. Minimum wage, insurance, and cold-weather gear mandated.' },
  { year: '2024', en: 'Today', ne: 'आज', text: '28 guides, 6 regions, 3,200+ completed treks. The mountains haven\'t changed. Our love for them hasn\'t either.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-bark overflow-hidden" aria-label="About hero">
        <div className="absolute inset-0 opacity-25">
          <img src="https://images.unsplash.com/photo-1569573078026-7b87c1e1de4c?w=1920&q=80" alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-bark/60 to-bark" />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <Mandala size={52} className="mx-auto mb-5" />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-5xl text-white mb-5">
            Born in the Mountains
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/60 text-sm leading-relaxed">
            Himalaya Trails was not built in an office. It was built on the trail—by Sherpa who grew up at altitude, Tamang guides who know every monastery by name, and a shared belief that the mountains deserve visitors who respect them.
          </motion.p>
        </div>
        <div className="prayer-flags absolute bottom-0 left-0 right-0" aria-hidden="true" />
      </section>

      {/* Values */}
      <section className="py-14 px-4 md:px-8" aria-labelledby="values-h">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="values-h" className="font-heading text-4xl text-bark-dark">What We Stand For</h2>
            <div className="divider max-w-xs mx-auto mt-3"><Mandala size={18} className="opacity-50" /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-parchment p-6 stamp-corner text-center"
              >
                <h3 className="font-heading text-xl text-bark-dark mb-3">{v.en}</h3>
                <p className="text-sm text-bark/65 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 px-4 md:px-8 bg-parchment-dark texture-overlay" aria-labelledby="story-h">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 id="story-h" className="font-heading text-4xl text-bark-dark">Our Story</h2>
            <div className="divider max-w-xs mx-auto mt-3"><Mandala size={18} className="opacity-50" /></div>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-saffron/30 -translate-x-1/2 hidden md:block" aria-hidden="true" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`relative flex gap-4 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Center dot */}
                  <div className="absolute left-0 md:left-1/2 top-4 w-3 h-3 bg-crimson -translate-x-0 md:-translate-x-1/2 flex-shrink-0 z-10" />
                  <div className={`pl-6 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                    <p className="text-xs text-bark/60 uppercase tracking-wider font-medium mb-0.5">{t.year}</p>
                    <h3 className="font-heading text-lg text-bark-dark">{t.en}</h3>
                    <p className="text-sm text-bark/60 leading-relaxed mt-1">{t.text}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section id="guides" className="py-14 px-4 md:px-8 bg-parchment" aria-labelledby="guides-h">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="guides-h" className="font-heading text-4xl text-bark-dark">Meet the Guides</h2>
            <div className="divider max-w-xs mx-auto mt-3"><Mandala size={18} className="opacity-50" /></div>
            <p className="text-bark/60 text-sm mt-4 max-w-lg mx-auto">
              Every trek is led by someone born within walking distance of the route. No outsourcing, no surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {guides.map((g, i) => <GuideCard key={g.id} guide={g} index={i} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-crimson text-white text-center px-4" aria-label="CTA">
        <Mandala size={44} className="mx-auto mb-5 opacity-80" />
        <h2 className="font-heading text-4xl mb-3">Ready to Trek?</h2>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/treks" className="bg-white text-crimson text-xs tracking-widest uppercase font-semibold px-7 py-3.5 hover:bg-saffron hover:text-white transition-colors min-h-[44px] flex items-center justify-center">
            Browse Treks
          </Link>
          <Link to="/contact" className="border border-white/60 text-white text-xs tracking-widest uppercase px-7 py-3.5 hover:bg-white/10 transition-colors min-h-[44px] flex items-center justify-center">
            Ask a Guide
          </Link>
        </div>
      </section>
    </div>
  );
}
