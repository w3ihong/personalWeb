 import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:
      {
        righteous: ['var(--font-righteous)'],
        sc:['var(--font-SC)'],
        barlow:['var(--font-barlow)'],
      },
      colors:
      {
        pri : 'var(--pri)',
        sec :'var(--sec)',
        accent: 'var(--acc)',
        accent2: 'var(--acc2)'
      }
    },
  },
  plugins: [],
}
export default config
