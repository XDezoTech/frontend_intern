import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/',        label: 'Home' },
  { to: '/treks',   label: 'Treks' },
  { to: '/about',   label: 'About' },
  { to: '/blog',    label: 'Journal' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); 
  const isHome = location.pathname === '/';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const bg = isHome
    ? scrolled ? 'bg-bark/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    : 'bg-bark';

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${bg}`}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          aria-label="Himalaya Trails Home"
        >
          <span className="text-saffron text-2xl">⛰</span>
          <span className="font-heading text-white text-base leading-none">
            Himalaya Trails
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7" role="list">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-xs tracking-widest uppercase font-medium transition-colors ${
                    isActive ? "text-saffron" : "text-white/70 hover:text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button variant="primary" onClick={() => navigate("/contact")}>
            Book a Trek
          </Button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={
                i === 0
                  ? open
                    ? { rotate: 45, y: 7 }
                    : { rotate: 0, y: 0 }
                  : i === 1
                    ? open
                      ? { opacity: 0 }
                      : { opacity: 1 }
                    : open
                      ? { rotate: -45, y: -7 }
                      : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
              className="block w-5 h-0.5 bg-white origin-center"
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-bark border-t border-white/10"
          >
            <div className="px-6 py-5 space-y-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center py-3 border-b border-white/10 last:border-0 text-sm font-medium ${isActive ? "text-saffron" : "text-white/80"}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="block mt-4 text-center bg-crimson text-white text-xs tracking-widest uppercase py-3 font-medium min-h-[44px] flex items-center justify-center"
              >
                Book a Trek
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
