export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				text: 'var(--font)',
				'primary-black': 'var(--primary-black)',
				'primary-green': 'var(--primary-green)',
				'secondary-green': 'var(--secondary-green)',
				accent: 'var(--accent)',
			},
			textShadow: {
				'primary-green': '0 0 5px var(--primary-green)',
			},
		},
	},
	plugins: [require('tailwindcss-textshadow'), require('tailwind-scrollbar-hide')],
};
