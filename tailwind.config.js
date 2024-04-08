/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: ['./*.{html,js}'],
	theme: {
		extend: {
			colors: {
				secondary: colors.slate[400],
				op: colors.slate[800],
			}
		},
	},
	plugins: [],
}

