/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  screens: {
		  '2xs': { min: '300px' },
		  xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
		  sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
		  md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
		  lg: { min: '1200px' }, // Desktop smallest.
		  xl: { min: '1259px' }, // Desktop wide.
		  '2xl': { min: '1359px' } // Desktop widescreen.
	  },
	  colors: {
		black: "#000000",
		white: "#FFFFFF",
		gray: "#0D0C22",
		stone: "#231F20",
		lime: "#B9FF66",
		brick: "rgb(237,122,122)",
		zinc: {
		  100: "#F3F3F3",
		  200: "#F0F0F0",
		  300: "#D9D9D9",
		  400: "#D8D8D8",
		  500: "#898989",
		  600: "#B0B0B0",
		  700: "#787878",
		  800: "#292A32",
		  900: "#191A23",
		},
	  },
	  boxShadow:{
        'card':'0px 5px 0px 0px #191A23'
      },
	  extend: {
		fontFamily: {
			SpaceGrotesk: ["Space Grotesk", "sans-serif"],
		},
	  },
	},
	plugins: [
		require('@tailwindcss/typography'),
		// ...
	],
  };