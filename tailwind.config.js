/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F3ED',
        sand: '#E8DDD0',
        'sand-light': '#F2EAE1',
        taupe: '#A58E7A',
        'taupe-light': '#C5B4A4',
        'taupe-dark': '#7F6956',
        cocoa: '#352B27',
        'cocoa-light': '#4D3F3A',
        'cocoa-dark': '#231B18',
        olive: '#7B8068',
        'olive-light': '#9BA088',
        gold: '#B69A67',
        'gold-light': '#CDB78C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '4/5': '4 / 5',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(53, 43, 39, 0.04)',
        'elevated': '0 8px 30px rgba(53, 43, 39, 0.08)',
        'drawer': '-4px 0 25px rgba(53, 43, 39, 0.12)',
      },
      borderRadius: {
        'luxury': '2px',
      }
    },
  },
  plugins: [],
}
