/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text': 'var(--font)',
        'primary-black': 'var(--primary-black)',
        'primary-green': 'var(--primary-green)',
        'secondary-green': 'var(--secondary-green)',
        'accent': 'var(--accent)',
      },
    },
  },
}

