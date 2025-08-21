import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import plugin from 'tailwindcss/plugin'
import tailwindcssAnimate from 'tailwindcss-animate';



// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}

const config: Config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	// safelist: ['light'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				},
				"color-1": "hsl(var(--color-1))",
				"color-2": "hsl(var(--color-2))",
				"color-3": "hsl(var(--color-3))",
				"color-4": "hsl(var(--color-4))",
				"color-5": "hsl(var(--color-5))",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['DM Sans', 'Archivo', 'Inter var', ...fontFamily.sans]
			},
			animation: {
				aurora: "aurora 60s linear infinite",
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
				'image-glow': 'image-glow 4100ms 600ms ease-out forwards',
				'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
				'fade-up': 'fade-up 1000ms var(--animation-delay, 0ms) ease forwards',
				shimmer: 'shimmer 8s infinite',
				marquee: 'marquee var(--duration) infinite linear',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				gradient: "gradient 8s linear infinite",
				rainbow: "rainbow var(--speed, 2s) infinite linear",
				"spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
				"magicslide": "magicslide var(--speed) ease-in-out infinite alternate",
				spotlight: 'spotlight 2s ease .75s 1 forwards',
				shine: "shine 2s linear infinite"
			},
			keyframes: {
				shine: {
					from: { backgroundPosition: "0 0" },
					to: { backgroundPosition: "-200% 0" },
				},
				"spin-around": {
					"0%": {
						transform: "translateZ(0) rotate(0)",
					},
					"15%, 35%": {
						transform: "translateZ(0) rotate(90deg)",
					},
					"65%, 85%": {
						transform: "translateZ(0) rotate(270deg)",
					},
					"100%": {
						transform: "translateZ(0) rotate(360deg)",
					},
				},
				magicslide: {
					to: {
						transform: "translate(calc(100cqw - 100%), 0)",
					},
				},
				"shine-pulse": {
					"0%": {
						"background-position": "0% 0%",
					},
					"50%": {
						"background-position": "100% 100%",
					},
					to: {
						"background-position": "0% 0%",
					},
				},
				rainbow: {
					"0%": { "background-position": "0%" },
					"100%": { "background-position": "200%" },
				  },
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'border-beam': {
					'100%': {
						'offset-distance': '100%'
					}
				},
				'image-glow': {
					'0%': {
						opacity: '0',
						'animation-timing-function': 'cubic-bezier(0.74, 0.25, 0.76, 1)'
					},
					'10%': {
						opacity: '0.7',
						'animation-timing-function': 'cubic-bezier(0.12, 0.01, 0.08, 0.99)'
					},
					'100%': {
						opacity: '0.4'
					}
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(-10px)' },
					to: { opacity: '1', transform: 'none' }
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'none' }
				},
				shimmer: {
					'0%, 90%, 100%': {
						'background-position': 'calc(-100% - var(--shimmer-width)) 0'
					},
					'30%, 60%': {
						'background-position': 'calc(100% + var(--shimmer-width)) 0'
					}
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				'marquee-vertical': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' }
				},
				gradient: {
					to: { "background-position": "200% center"},
				},
				aurora: {
					from: {
					  backgroundPosition: "50% 50%, 50% 50%",
					},
					to: {
					  backgroundPosition: "350% 50%, 350% 50%",
					},
				},
				"aurora-border": {
				"0%, 100%": { borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%" },
				"25%": { borderRadius: "47% 29% 39% 49% / 61% 19% 66% 26%" },
				"50%": { borderRadius: "57% 23% 47% 72% / 63% 17% 66% 33%" },
				"75%": { borderRadius: "28% 49% 29% 100% / 93% 20% 64% 25%" },
				},
				"aurora-1": {
				"0%, 100%": { top: "0", right: "0" },
				"50%": { top: "50%", right: "25%" },
				"75%": { top: "25%", right: "50%" },
				},
				"aurora-2": {
				"0%, 100%": { top: "0", left: "0" },
				"60%": { top: "75%", left: "25%" },
				"85%": { top: "50%", left: "50%" },
				},
				"aurora-3": {
				"0%, 100%": { bottom: "0", left: "0" },
				"40%": { bottom: "50%", left: "25%" },
				"65%": { bottom: "25%", left: "50%" },
				},
				"aurora-4": {
				"0%, 100%": { bottom: "0", right: "0" },
				"50%": { bottom: "25%", right: "40%" },
				"90%": { bottom: "50%", right: "25%" },
				},
				spotlight: {
					'0%': {
						opacity: '0',
						transform: 'translate(-22%, -82%) scale(0.5)'
					},
					'100%': {
						opacity: '1',
						transform: 'translate(0%,-50%) scale(0.7)'
					}
				}
			}
		}
	},
	plugins:[
		plugin(function({ addVariant }) {
			addVariant('light', '.light &')
		}),
		addVariablesForColors,
		tailwindcssAnimate
	]
};

export default config;
