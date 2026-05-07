import { Outlet, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './ui/Navbar';
import { Mandala, PrayerFlags } from '../components/UI';

function Footer() {
  return (
    <footer className="bg-bark-dark text-white" role="contentinfo">
      <div className="prayer-flags" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Mandala size={36} />
              <div>
                <p className="font-heading text-white text-base leading-none">Himalaya Trails</p>
                <p className="font-accent text-saffron text-xs mt-0.5">हिमालय ट्रेल्स</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Authentic trekking experiences in Nepal, led by mountain-born Sherpa and local guides since 2008.
            </p>
            <PrayerFlags />
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-saffron mb-4 text-sm uppercase tracking-wider">Explore</h3>
            <ul className="space-y-2">
              {[
                { to: '/treks', label: 'All Treks' },
                { to: '/trek/everest-base-camp', label: 'Everest Base Camp' },
                { to: '/trek/annapurna-circuit', label: 'Annapurna Circuit' },
                { to: '/trek/upper-mustang', label: 'Upper Mustang' },
                { to: '/about', label: 'Meet the Guides' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1">
                    <span className="text-saffron/50 text-xs">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + certifications */}
          <div>
            <h3 className="font-heading text-saffron mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <address className="not-italic space-y-2 text-sm text-white/60">
              <p>Thamel, Kathmandu, Nepal</p>
              <p><a href="tel:+977-1-4701234" className="hover:text-white transition-colors">+977-1-470-1234</a></p>
              <p><a href="mailto:namaste@himalayatrails.np" className="hover:text-white transition-colors">namaste@himalayatrails.np</a></p>
            </address>
            <div className="mt-5 space-y-1.5">
              {['Nepal Tourism Board Licensed', 'TAAN Member Agency', 'IPPG Porter Standards Certified'].map(cert => (
                <p key={cert} className="text-xs text-white/40 flex items-center gap-1.5">
                  <span className="text-saffron">✓</span> {cert}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Himalaya Trails Pvt. Ltd. · Reg. No. 078/079-123</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-1" role="main">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
