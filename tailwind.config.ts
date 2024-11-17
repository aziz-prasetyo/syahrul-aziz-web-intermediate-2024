import type { Config } from 'tailwindcss';

import tailwindcssAnimate from 'tailwindcss-animate';

export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					100: 'hsl(var(--primary-100) / <alpha-values>',
					200: 'hsl(var(--primary-200) / <alpha-values>',
					300: 'hsl(var(--primary-300) / <alpha-values>',
					400: 'hsl(var(--primary-400) / <alpha-values>',
					DEFAULT: 'hsl(var(--primary-500) / <alpha-values>',
					600: 'hsl(var(--primary-600) / <alpha-values>',
					700: 'hsl(var(--primary-700) / <alpha-values>',
					800: 'hsl(var(--primary-800) / <alpha-values>',
					900: 'hsl(var(--primary-900) / <alpha-values>',
					foreground:
						'hsl(var(--primary-foreground) / <alpha-values>',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
