/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				bounce: {
					'0%, 100%' : {transform: 'translateY(-1%)'}
				}
			}
		},
	},
	plugins: [],
};
