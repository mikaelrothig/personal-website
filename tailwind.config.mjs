import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
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
				'light-accent': '#F00048',
				'light-accent-hover': '#D7002F',

				'text-primary': '#DEE4EA',
				'text-secondary':'#8C9BAB',
				'text-accent':'#CBFC01',
				'light-text-primary': '#101214',
				'light-text-secondary':'#505254',
				'light-text-accent':'#8A0000',
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