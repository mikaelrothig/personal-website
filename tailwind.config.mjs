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
				'light-primary-darker': '#FDFDFD',
				'light-primary': '#F3F3F3',
				'light-primary-lighter': '#E9E9E9',
				'light-primary-lighter-hover': '#DEDEDE',

				'accent': '#CBFC01',
				'accent-hover': '#98C900',
				'light-accent': '#ACFE00',
				'light-accent-hover': '#9FF100',

				'text-primary': '#DEE4EA',
				'text-secondary':'#8C9BAB',
				'light-text-primary': '#101214',
				'light-text-secondary':'#505254',
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