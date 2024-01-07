import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			// colors: {
			// 	'bgBlue': '#000A3F',
			// 	'primary': '#485a4e',
			// 	'primaryl0': '#66786C',
			// 	'primaryl10': '#66786C',
			// 	'primaryl20': '#66786C',
			// 	'primaryl30': '#66786C',
			// 	'primaryl40': '#66786C',
			// 	'primaryl50': 'rgb(6 182 212);',
			// 	'primaryd30': 'color: rgb(8 51 68);',
			// 	'primaryd50': '#16281C',
			// 	'primaryd70': '#0F1B12',
			// 	'primaryl100': 'color: rgb(236 254 255);'
			// },
			gradientColorStopPositions: {
				1: '1%',
			},
			spacing: {
				'negative': '-32px',
				'33': '8.25rem'
			},
			fontSize: {
				'2xs': '0.5rem'
			},
			width: {
				'1/24': '4.166667%',
			}
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'rocket',
						enhancements: true,
					},
				],
			},
		}),
	],
} satisfies Config;
