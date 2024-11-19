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
					100: 'hsl(var(--primary-100) / <alpha-value>)',
					200: 'hsl(var(--primary-200) / <alpha-value>)',
					300: 'hsl(var(--primary-300) / <alpha-value>)',
					400: 'hsl(var(--primary-400) / <alpha-value>)',
					DEFAULT: 'hsl(var(--primary-500) / <alpha-value>)',
					600: 'hsl(var(--primary-600) / <alpha-value>)',
					700: 'hsl(var(--primary-700) / <alpha-value>)',
					800: 'hsl(var(--primary-800) / <alpha-value>)',
					900: 'hsl(var(--primary-900) / <alpha-value>)',
					foreground:
						'hsl(var(--primary-foreground) / <alpha-value>)',
				},
				secondary: {
					100: 'hsl(var(--secondary-100) / <aplha-value>)',
					200: 'hsl(var(--secondary-200) / <aplha-value>)',
					300: 'hsl(var(--secondary-300) / <aplha-value>)',
					400: 'hsl(var(--secondary-400) / <aplha-value>)',
					DEFAULT: 'hsl(var(--secondary-500) / <aplha-value>)',
					600: 'hsl(var(--secondary-600) / <aplha-value>)',
					700: 'hsl(var(--secondary-700) / <aplha-value>)',
					800: 'hsl(var(--secondary-800) / <aplha-value>)',
					900: 'hsl(var(--secondary-900) / <aplha-value>)',
					foreground:
						'hsl(var(--secondary-foreground) / <aplha-value>)',
				},
				black: {
					100: 'hsl(var(--black-100) / <aplha-value>)',
					200: 'hsl(var(--black-200) / <aplha-value>)',
					300: 'hsl(var(--black-300) / <aplha-value>)',
					400: 'hsl(var(--black-400) / <aplha-value>)',
					DEFAULT: 'hsl(var(--black-500) / <aplha-value>)',
					600: 'hsl(var(--black-600) / <aplha-value>)',
					700: 'hsl(var(--black-700) / <aplha-value>)',
					800: 'hsl(var(--black-800) / <aplha-value>)',
					900: 'hsl(var(--black-900) / <aplha-value>)',
				},
				white: {
					100: 'hsl(var(--white-100) / <aplha-value>)',
					200: 'hsl(var(--white-200) / <aplha-value>)',
					300: 'hsl(var(--white-300) / <aplha-value>)',
					400: 'hsl(var(--white-400) / <aplha-value>)',
					500: 'hsl(var(--white-500) / <aplha-value>)',
					600: 'hsl(var(--white-600) / <aplha-value>)',
					700: 'hsl(var(--white-700) / <aplha-value>)',
					800: 'hsl(var(--white-800) / <aplha-value>)',
					900: 'hsl(var(--white-900) / <aplha-value>)',
					DEFAULT: 'hsl(var(--white-0) / <alpha-value>)',
				},
				orange: {
					100: 'hsl(var(--orange-100) / <aplha-value>)',
					200: 'hsl(var(--orange-200) / <aplha-value>)',
					300: 'hsl(var(--orange-300) / <aplha-value>)',
					400: 'hsl(var(--orange-400) / <aplha-value>)',
					DEFAULT: 'hsl(var(--orange-500) / <aplha-value>)',
					600: 'hsl(var(--orange-600) / <aplha-value>)',
					700: 'hsl(var(--orange-700) / <aplha-value>)',
					800: 'hsl(var(--orange-800) / <aplha-value>)',
					900: 'hsl(var(--orange-900) / <aplha-value>)',
					foreground: 'hsl(var(--orange-foreground) / <aplha-value>)',
				},
				purple: {
					100: 'hsl(var(--purple-100) / <aplha-value>)',
					200: 'hsl(var(--purple-200) / <aplha-value>)',
					300: 'hsl(var(--purple-300) / <aplha-value>)',
					400: 'hsl(var(--purple-400) / <aplha-value>)',
					DEFAULT: 'hsl(var(--purple-500) / <aplha-value>)',
					600: 'hsl(var(--purple-600) / <aplha-value>)',
					700: 'hsl(var(--purple-700) / <aplha-value>)',
					800: 'hsl(var(--purple-800) / <aplha-value>)',
					900: 'hsl(var(--purple-900) / <aplha-value>)',
					foreground: 'hsl(var(--purple-foreground) / <aplha-value>)',
				},
				warning: {
					100: 'hsl(var(--warning-100) / <aplha-value>)',
					200: 'hsl(var(--warning-200) / <aplha-value>)',
					300: 'hsl(var(--warning-300) / <aplha-value>)',
					400: 'hsl(var(--warning-400) / <aplha-value>)',
					DEFAULT: 'hsl(var(--warning-500) / <aplha-value>)',
					600: 'hsl(var(--warning-600) / <aplha-value>)',
					700: 'hsl(var(--warning-700) / <aplha-value>)',
					800: 'hsl(var(--warning-800) / <aplha-value>)',
					900: 'hsl(var(--warning-900) / <aplha-value>)',
					foreground:
						'hsl(var(--warning-foreground) / <aplha-value>)',
				},
				danger: {
					100: 'hsl(var(--danger-100) / <aplha-value>)',
					200: 'hsl(var(--danger-200) / <aplha-value>)',
					300: 'hsl(var(--danger-300) / <aplha-value>)',
					400: 'hsl(var(--danger-400) / <aplha-value>)',
					DEFAULT: 'hsl(var(--danger-500) / <aplha-value>)',
					600: 'hsl(var(--danger-600) / <aplha-value>)',
					700: 'hsl(var(--danger-700) / <aplha-value>)',
					800: 'hsl(var(--danger-800) / <aplha-value>)',
					900: 'hsl(var(--danger-900) / <aplha-value>)',
					foreground: 'hsl(var(--danger-foreground) / <aplha-value>)',
				},
				success: {
					100: 'hsl(var(--success-100) / <aplha-value>)',
					200: 'hsl(var(--success-200) / <aplha-value>)',
					300: 'hsl(var(--success-300) / <aplha-value>)',
					400: 'hsl(var(--success-400) / <aplha-value>)',
					DEFAULT: 'hsl(var(--success-500) / <aplha-value>)',
					600: 'hsl(var(--success-600) / <aplha-value>)',
					700: 'hsl(var(--success-700) / <aplha-value>)',
					800: 'hsl(var(--success-800) / <aplha-value>)',
					900: 'hsl(var(--success-900) / <aplha-value>)',
					foreground:
						'hsl(var(--success-foreground) / <aplha-value>)',
				},
				info: {
					100: 'hsl(var(--info-100) / <aplha-value>)',
					200: 'hsl(var(--info-200) / <aplha-value>)',
					300: 'hsl(var(--info-300) / <aplha-value>)',
					400: 'hsl(var(--info-400) / <aplha-value>)',
					DEFAULT: 'hsl(var(--info-500) / <aplha-value>)',
					600: 'hsl(var(--info-600) / <aplha-value>)',
					700: 'hsl(var(--info-700) / <aplha-value>)',
					800: 'hsl(var(--info-800) / <aplha-value>)',
					900: 'hsl(var(--info-900) / <aplha-value>)',
					foreground: 'hsl(var(--info-foreground) / <aplha-value>)',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
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
