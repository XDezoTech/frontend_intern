Project Portfolio

This repository contains two frontend React applications:

TravelCo — A travel booking and tour showcase platform
CineScope — A movie discovery and tracking app powered by TMDB
✈️ TravelCo

React-based travel website for showcasing tour packages and handling bookings.

Tech Stack
React + Vite
React Router
Tailwind CSS
Framer Motion
Features
Homepage
Hero video section
Featured tours
Animated sections
Destinations
Tour grid layout
Advanced filtering system
Tour Details
Individual tour pages
Booking widget
Tour information and pricing
Blog
Article listing
Categories
Contact
Contact form
FAQ section
Embedded map
Routes
Route	Description
/	Homepage with hero video and featured tours
/destinations	Tour grid with filters
/tours/:id	Single tour page with booking widget
/about	Team and company story
/blog	Articles and categories
/contact	Contact form, map, FAQ
Project Setup
git clone https://github.com/your-org/travelco.git
cd travelco
npm install
npm run dev
Build for Production
npm run build

Deploy the generated /dist folder to any static hosting provider.

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
Filtering System

Handled in FilterSidebar.jsx.

Users can filter tours by:

Continent
Price
Duration
Activity type
Booking Widget

Features include:

Check-in / check-out date picker
Guest counter
Adults
Children
Design System
Token	Value
Primary	Deep navy
Accent	Terracotta
Neutral	Soft sand
Heading Font	Cormorant Garamond
Body Font	Inter / Poppins
Accessibility
WCAG 2.1 AA compliant
Contrast ratio greater than 4.5:1
Minimum touch target size: 44×44px
Mobile-first responsive design (320px+)
Development Timeline
Week	Task
1	Repository setup, routing, Tailwind configuration
2–3	Component library and homepage
4	Destinations page and filtering
5	Tour detail page and booking widget
6	Animations, polish, mobile optimization
🎬 CineScope

Frontend-only movie discovery application powered by the TMDB API.

Tech Stack
React + Vite
React Router v6
Axios
Recharts
Tailwind CSS
Features
Browse popular and trending movies
Search movies
Watchlist functionality
Personal ratings
Custom movie lists
Movie statistics dashboard
Demo admin dashboard
LocalStorage persistence
Routes
Route	Description
/	Home
/movies	Browse movies with filters
/movie/:id	Movie details
/search?q=	Search results
/watchlist	Saved movies
/ratings	User ratings
/lists	Custom movie lists
/stats	Personal statistics
/admin	Demo dashboard
Project Setup
git clone https://github.com/your-org/cinescope.git
cd cinescope
npm install

Create a .env file:

VITE_TMDB_API_KEY=your_key_here

Get a free API key from TMDB:

https://www.themoviedb.org/settings/api

Run the development server:

npm run dev
Build for Production
npm run build

Deploy the generated /dist folder to:

Vercel
Netlify
Any static hosting provider
Folder Structure
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
TMDB API Endpoints Used
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
LocalStorage Structure
{
  "watchlist": [],
  "ratings": [],
  "customLists": [],
  "notes": [],
  "preferences": {}
}
Admin Dashboard
Feature	Details
Route	/admin
Access	Click logo 5 times
Password	admin123
Purpose	Demo only
Important Notes
Never commit .env files
Always use fallback images for missing posters
localStorage limit is approximately 5MB
Do not store image blobs in localStorage
TMDB attribution is required by their API terms
Deployment

Both projects are frontend-only applications and can be deployed easily to:

Vercel
Netlify
GitHub Pages
Any static hosting provider
License

This project is for educational and portfolio purposes.
