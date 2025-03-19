import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-darker': '#101214',
				'primary': '#161A1D',
				'primary-lighter': '#1D2125',
				'primary-lighter-hover': '#22272B',

				'accent': '#CBFC01',
				'accent-hover': '#98C900',

				'text-primary': '#DEE4EA',
				'text-secondary':'#8C9BAB',
			},
			screens: {
				xs: '24rem',
			}
		},
		fontFamily: {
			inter: ['Inter Variable', ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [],
}