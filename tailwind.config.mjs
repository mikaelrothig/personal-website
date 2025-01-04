/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#1a1a1a',
				'primary-lighter': '#272727',
				'primary-darker': '#171717',
				'text-primary': '#FAFAFA',
				'text-secondary': '#ABABAB',
			},
		},
	},
	plugins: [],
}
