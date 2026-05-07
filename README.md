TravelCo
React-based travel website for showcasing tour packages and handling bookings.

Stack: 
React + Vite
React Router
Tailwind CSS
Framer Motion


Setup:
bash
git clone https://github.com/your-org/travelco.git
cd travelco
npm install
npm run dev

Pages
/ — Homepage with hero video and featured tours
/destinations — Tour grid with filters
/tours/:id — Single tour with booking widget
/about — Team and story
/blog — Articles and categories
/contact — Form, map, FAQ

Folder Structure
src/
├── components/
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Modal.jsx
│       ├── Accordion.jsx
│       ├── Carousel.jsx
│       └── Navbar.jsx
└── pages/

Filtering:
Users can filter tours by continent, price, duration, and activity type. Handled in FilterSidebar.jsx.

Booking Widget:
Date picker (check-in / check-out)
Guest counter (adults + children)
Design Tokens
Token	Value
Primary	Deep navy
Accent	Terracotta
Neutral	Soft sand
Heading font	Cormorant Garamond
Body font	Inter / Poppins
Accessibility
WCAG 2.1 AA
Contrast ratio > 4.5:1
Min touch target 44×44px
Mobile-first (320px+)

Build & Deploy:
bash
npm run build
# Deploy /dist to any static host
Timeline

Week	Task:
1	Repo setup, routing, Tailwind config
2–3	Component library, homepage
4	Destinations + filters
5	Tour detail + booking
6	Animations, polish, mobile

CineScope
Frontend-only movie discovery app. Data from TMDB API. User data in localStorage. No backend.

Stack:
React + Vite
React Router v6
Axios
Recharts
Tailwind CSS

Setup:
bash
git clone https://github.com/your-org/cinescope.git
cd cinescope
npm install
Create a .env file:


VITE_TMDB_API_KEY=your_key_here
Get a free key at themoviedb.org/settings/api


bash
npm run dev
Routes
Path	Page
/	Home
/movies	Browse with filters
/movie/:id	Movie details
/search?q=	Search results
/watchlist	Saved movies
/ratings	Your ratings
/lists	Custom lists
/stats	Your stats
/admin	Dashboard (demo)

Folder Structure:
src/
├── api/tmdb.js
├── components/
│   ├── layout/
│   ├── movies/
│   ├── ui/
│   └── dashboard/
├── context/
├── hooks/
├── pages/
└── utils/
    ├── storage.js
    ├── helpers.js
    └── constants.js
localStorage Shape

json
{
  "watchlist": [],
  "ratings": [],
  "customLists": [],
  "notes": [],
  "preferences": {}
}
Admin Dashboard
Route: /admin
Access: click logo 5 times
Password: admin123 (hardcoded, demo only)

API Endpoints Used:
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

Deploy:
bash
npm run build
# Upload /dist to Vercel or Netlify

Notes:
Never commit .env
Always use fallback images for missing posters
localStorage limit ~5MB — don't store image blobs
Attribution to TMDB required by their API terms
