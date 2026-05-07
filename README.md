# Portfolio Projects

Two frontend React applications built as part of a frontend development course.

| | Project | Description | Stack |
|---|---|---|---|
| ✈️ | [TravelCo](#️-travelco) | Travel booking & tour showcase | React · Tailwind · Framer Motion |
| 🎬 | [CineScope](#-cinescope) | Movie discovery powered by TMDB | React · Axios · Recharts |

---

# ✈️ TravelCo

A high-performance, visually immersive travel website for showcasing tour packages and driving direct bookings.

## Tech Stack

| Tool | Purpose |
|------|---------|
| `React + Vite` | Framework & bundler |
| `React Router v6` | Client-side routing |
| `Tailwind CSS` | Utility-first styling |
| `Framer Motion` | Page transitions & animations |

## Features

- **Homepage** — Hero video, featured tours, testimonial carousel, animated sections
- **Destinations** — Tour grid with FilterSidebar (continent, price, duration, activity type)
- **Tour Details** — Dynamic routes, photo gallery, itinerary tabs, booking widget
- **Blog** — Article cards, category filters, related posts with Markdown rendering
- **Contact** — Validated contact form (`react-hook-form`), embedded map, FAQ accordion

## Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home.jsx` | Hero video, featured tours, testimonials |
| `/treks` | `Treks.jsx` | Tour grid with filter sidebar |
| `/treks/:id` | `Trek.jsx` | Single tour — dynamic route via `useParams` |
| `/about` | `About.jsx` | Team cards & company story timeline |
| `/blog` | `Blog.jsx` | Articles, categories, related posts |
| `/contact` | `Contact.jsx` | Contact form, embedded map, FAQ |

## Setup

```bash
git clone https://github.com/your-org/travelco.git
cd travelco
npm install
npm run dev        # → http://localhost:5173
npm run build      # → /dist (deploy to any static host)
```

## Folder Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx       # Primary · Secondary · Outline variants
│   │   ├── Card.jsx         # Destination · Blog · Team types (imageUrl, title, description)
│   │   ├── Modal.jsx        # Tour quick-view overlay
│   │   ├── Accordion.jsx    # FAQ expand / collapse
│   │   ├── Carousel.jsx     # Testimonials & gallery (autoPlay)
│   │   └── Navbar.jsx       # Responsive with hamburger menu
│   ├── FilterSidebar.jsx    # Continent · Price · Duration · Activity filters
│   └── Layout.jsx           # Shared wrapper with <Outlet />
├── data/
│   ├── treks.js             # Tour data
│   └── posts.js             # Blog post data
└── pages/
    ├── Home.jsx · Treks.jsx · Trek.jsx
    ├── About.jsx · Blog.jsx · Contact.jsx
    └── ComponentShowcase.jsx
```

## Design System

| Token | Value | Hex |
|-------|-------|-----|
| Primary (trust) | Deep navy | `#0d1b2a` |
| Accent (adventure) | Terracotta | `#c96442` |
| Neutral | Soft sand | `#e8d5b7` |
| Heading font | Cormorant Garamond | serif |
| Body font | Poppins | sans-serif |

## Accessibility

- WCAG 2.1 AA compliant
- Colour contrast ratio > 4.5:1
- Minimum touch targets: `44×44px`
- Semantic HTML — `<main>`, `<section>`, `<article>`
- Mobile-first responsive design from `320px` (iPhone SE)

## Development Timeline

| Week | Tasks | Deliverable |
|------|-------|------------|
| 1 | Repo setup · Tailwind config · routing skeleton | Hello World on localhost |
| 2–3 | Component library · static homepage | Pixel-perfect homepage |
| 4 | Destinations page · FilterSidebar logic | Functional filters |
| 5 | Single tour page · booking widget | Dynamic routes |
| 6 | Framer Motion animations · mobile polish | Smooth UX |

---

# 🎬 CineScope

A frontend-only movie discovery application powered by the TMDB API, with full localStorage persistence and no backend required.

## Tech Stack

| Tool | Purpose |
|------|---------|
| `React + Vite` | Framework & bundler |
| `React Router v6` | Client-side routing |
| `Axios` | HTTP requests to TMDB API |
| `Recharts` | Statistics & dashboard charts |
| `Tailwind CSS` | Utility-first styling |

## Features

- Browse popular, trending, top-rated and upcoming movies
- Full-text movie search
- Personal watchlist with localStorage persistence
- Movie ratings (1–5 stars)
- Custom movie lists
- Statistics dashboard — ratings breakdown, genre distribution
- Demo admin dashboard
- No backend required — fully client-side

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home — trending & popular |
| `/movies` | Browse with filters |
| `/movie/:id` | Movie detail page |
| `/search?q=` | Search results |
| `/watchlist` | Saved movies |
| `/ratings` | Personal ratings |
| `/lists` | Custom movie lists |
| `/stats` | Statistics dashboard |
| `/admin` | Demo dashboard (see below) |

## Setup

```bash
git clone https://github.com/your-org/cinescope.git
cd cinescope
npm install
```

Create a `.env` file in the project root:

```env
VITE_TMDB_API_KEY=your_key_here
```

> Get a free API key at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

```bash
npm run dev        # → http://localhost:5173
npm run build      # → /dist (deploy to any static host)
```

> ⚠️ **Never commit your `.env` file.** Make sure `.env` is listed in `.gitignore` before your first push.

## Folder Structure

```
src/
├── api/
│   └── tmdb.js              # All TMDB API calls
├── components/
│   ├── layout/
│   ├── movies/
│   ├── ui/
│   └── dashboard/
├── context/                 # React Context providers
├── hooks/                   # Custom hooks
├── pages/
└── utils/
    ├── storage.js           # localStorage helpers
    ├── helpers.js
    └── constants.js
```

## TMDB API Endpoints

```
GET /movie/popular
GET /movie/top_rated
GET /movie/now_playing
GET /movie/upcoming
GET /movie/{id}
GET /movie/{id}/credits
GET /movie/{id}/videos
GET /movie/{id}/similar
GET /search/movie
GET /genre/movie/list
GET /discover/movie
```

> TMDB attribution is required by their [API terms of service](https://www.themoviedb.org/documentation/api/terms-of-use).

## LocalStorage Schema

```json
{
  "watchlist":   [],
  "ratings":     [],
  "customLists": [],
  "notes":       [],
  "preferences": {}
}
```

> **Note:** localStorage is limited to ~5 MB. Store only TMDB image *URLs* — never store image blobs directly.

## Admin Dashboard

| Property | Value |
|----------|-------|
| Route | `/admin` |
| Access | Click the logo 5 times on any page |
| Password | `admin123` |
| Purpose | Demo only — not connected to real data |

---

# Deployment

Both projects are frontend-only and output a static `/dist` folder after `npm run build`.

| Provider | Notes |
|----------|-------|
| **Vercel** | Recommended — auto-deploys from GitHub on every push |
| **Netlify** | Drag-and-drop `/dist` or connect GitHub repo |
| **GitHub Pages** | Free for public repos — add `base` to `vite.config.js` |

---

# License

Built for educational and portfolio purposes. Not licensed for commercial use.
