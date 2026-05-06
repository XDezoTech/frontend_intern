/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        saffron:  { DEFAULT: '#E8871A', light: '#F5A73B', dark: '#C06A0A' },
        crimson:  { DEFAULT: '#B71C1C', light: '#E53935', dark: '#7B1111' },
        parchment:{ DEFAULT: '#F5EDD8', dark: '#E8D9B8', deep: '#D4BF94' },
        bark:     { DEFAULT: '#5C3D1E', light: '#7A5230', dark: '#3A2310' },
        slate:    { DEFAULT: '#4A5568', light: '#718096' },
        moss:     { DEFAULT: '#3D5A3E', light: '#5A7D5C' },
        snow:     { DEFAULT: '#F0F4F8' },
      },
      fontFamily: {
        display: ['"Tiro Devanagari Sanskrit"', '"Yatra One"', 'Georgia', 'serif'],
        heading: ['"Philosopher"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        accent:  ['"Tiro Devanagari Sanskrit"', 'serif'],
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      borderRadius: { none: '0' },
    },
  },
  plugins: [],
}
