import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';
import { Mandala, BlogCard } from '../components/UI';

const categories = ['All', ...new Set(posts.map(p => p.category))];

/* ── Blog Index ─────────────────────────────────────────── */
export function BlogIndex() {
  const [cat, setCat] = useState('All');
  const filtered = cat === 'All' ? posts : posts.filter(p => p.category === cat);
  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <section className="relative pt-28 pb-14 bg-bark overflow-hidden texture-overlay" aria-label="Blog header">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80" alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative z-10 text-center px-4">
          <Mandala size={44} className="mx-auto mb-4 opacity-80" />
          <h1 className="font-heading text-5xl text-white">The Himalaya Journal</h1>
          <p className="text-white/50 mt-2 text-sm">Field notes, guides, and stories from the trail</p>
        </div>
        <div className="prayer-flags absolute bottom-0 left-0 right-0" aria-hidden="true" />
      </section>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-8" role="tablist">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              role="tab"
              aria-selected={cat === c}
              className={`px-4 py-2 text-xs tracking-wider uppercase font-medium transition-all min-h-[44px] ${
                cat === c ? 'bg-crimson text-white' : 'bg-parchment-dark border border-parchment-deep text-bark hover:border-saffron'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <Mandala size={44} className="mx-auto mb-4 opacity-30" />
            <p className="font-heading text-2xl text-bark/40">No posts in this category</p>
          </div>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group mb-10"
              >
                <Link to={`/blog/${featured.id}`} className="grid md:grid-cols-2 gap-0 card-parchment overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-crimson text-white text-xs px-2 py-0.5 font-medium uppercase tracking-wider">
                      {featured.category}
                    </div>
                  </div>
                  <div className="p-7 flex flex-col justify-center">
                    <h2 className="font-heading text-2xl text-bark-dark mb-3 group-hover:text-crimson transition-colors leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-sm text-bark/60 leading-relaxed mb-5">{featured.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-bark/50">
                      <span className="font-medium text-bark">{featured.author}</span>
                      <span>·</span>
                      <span>{featured.date}</span>
                      <span>·</span>
                      <span>{featured.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )}

            {/* Rest grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rest.map((p, i) => (
                  <motion.article
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group card-parchment overflow-hidden"
                  >
                    <Link to={`/blog/${p.id}`} className="block">
                      <div className="relative overflow-hidden h-44">
                        <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
                        <div className="absolute top-2 left-2 bg-crimson text-white text-xs px-2 py-0.5 uppercase tracking-wider">{p.category}</div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-heading text-lg text-bark-dark group-hover:text-crimson transition-colors leading-tight mb-2">{p.title}</h3>
                        <p className="text-xs text-bark/50">{p.author} · {p.readTime}</p>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ── Single Post ─────────────────────────────────────────── */
export function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-24 text-center px-4">
      <Mandala size={44} className="mb-4 opacity-30" />
      <p className="font-heading text-3xl text-bark/40 mb-4">Post not found</p>
      <Link to="/blog" className="text-crimson hover:underline text-sm">Back to Journal</Link>
    </div>
  );

  const related = posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <article>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden" aria-label="Post hero">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bark-dark/85 via-bark/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-crimson text-white text-xs px-2 py-0.5 uppercase tracking-wider inline-block mb-3">{post.category}</span>
            <h1 className="font-heading text-4xl text-white leading-tight">{post.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-bark text-white/50 px-4 py-3 text-xs" aria-label="Breadcrumb">
        <div className="max-w-3xl mx-auto flex gap-2">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>›</span>
          <Link to="/blog" className="hover:text-white">Journal</Link>
          <span>›</span>
          <span className="text-saffron truncate">{post.title}</span>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        {/* Author */}
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-parchment-deep">
          <div className="w-10 h-10 bg-saffron flex items-center justify-center text-white font-heading text-lg">
            {post.author[0]}
          </div>
          <div>
            <p className="font-heading text-sm text-bark-dark">{post.author}</p>
            <p className="text-xs text-bark/50">{post.date} · {post.readTime}</p>
          </div>
        </div>

        {/* Markdown */}
        <div className="prose-nepal">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="font-heading text-2xl text-bark-dark mt-8 mb-3 pb-2 border-b border-saffron/20">{children}</h2>
              ),
              p: ({ children }) => (
                <p className="text-bark/75 leading-[1.9] mb-5 text-[15px]">{children}</p>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-saffron pl-5 my-6 font-heading text-xl text-bark-dark italic">{children}</blockquote>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-bark-dark">{children}</strong>
              ),
              ul: ({ children }) => <ul className="mb-5 ml-2 space-y-2">{children}</ul>,
              li: ({ children }) => (
                <li className="flex items-start gap-2 text-bark/70 text-[15px]">
                  <span className="text-saffron mt-1 text-xs">✦</span>
                  <span>{children}</span>
                </li>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-12 pt-8 border-t border-parchment-deep">
            <div className="flex items-center gap-3 mb-6">
              <Mandala size={20} className="opacity-50" />
              <h3 className="font-heading text-xl text-bark-dark">More from the Journal</h3>
            </div>
            <div className="space-y-5">
              {related.map((p, i) => <BlogCard key={p.id} post={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default BlogIndex;
