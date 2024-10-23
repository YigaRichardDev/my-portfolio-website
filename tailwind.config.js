/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
      'white': '#ffffff',
      'primary': '#3315F4',
      'secondary': '#00A3F5',
      'black': '#000000',
      'bg-color': '#EEEBFF',
      'text-light': '#94a3b8',
    },
    spacing: {
      'p0': '8px',
      'p1': '10px',
      'p2': '25px',
      'p3': '30px',
      'p4': '40px',
      'fh': '120px',
    },
    fontSize: {
      sm: '16px',
      link: '18px',
      heading: '25px',
      pheading: '40px',
    },
    },
  },
  plugins: [],
}