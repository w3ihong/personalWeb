import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:
      {
        pri : 'rgb(213, 200, 175)',
        sec :'rgb(35, 33, 48)',
        priDark :'rgb(199, 184, 155)',
      }
    },
  },
  plugins: [],
}
export default config
