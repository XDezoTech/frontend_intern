import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Treks from './pages/Treks';
import Trek from './pages/Trek';
import About from './pages/About';
import { BlogIndex, BlogPost } from './pages/Blog';
import Contact from './pages/Contact';
import ComponentDemo from "./pages/ComponentDemo";

import { Mandala } from './components/UI';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-parchment pt-20">
      <Mandala size={56} className="mx-auto mb-4 opacity-30" />
      <p className="font-heading text-7xl text-saffron/40 select-none leading-none">404</p>
      <h1 className="font-heading text-3xl text-bark-dark mb-3 mt-2">Lost on the Trail</h1>
      <p className="text-bark/55 mb-8 text-sm max-w-xs leading-relaxed">
        The path you're looking for doesn't exist. Head back to the teahouse.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/" className="bg-crimson text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-crimson-light transition-colors min-h-[44px] inline-flex items-center justify-center">
          Back to Base Camp
        </Link>
        <Link to="/treks" className="border border-bark/30 text-bark text-xs tracking-widest uppercase px-6 py-3 hover:border-saffron hover:text-saffron transition-colors min-h-[44px] inline-flex items-center justify-center">
          Browse Treks
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/treks" element={<Treks />} />
          <Route path="/trek/:id" element={<Trek />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="demo" element={<ComponentDemo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
