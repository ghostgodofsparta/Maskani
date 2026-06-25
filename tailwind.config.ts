import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'maskani-navy': '#1A3A52',
        'maskani-navy-800': '#2A4A62',
        'maskani-navy-700': '#3A5A72',
        'maskani-teal': '#2B7A9B',
        'maskani-teal-500': '#3D8FAE',
        'maskani-teal-light': '#5DADE2',
        'maskani-green': '#4DB8A8',
        'maskani-green-500': '#5ECBB6',
      },
      backgroundImage: {
        'gradient-maskani-primary': 'linear-gradient(135deg, #1A3A52 0%, #2B7A9B 100%)',
        'gradient-maskani-secondary': 'linear-gradient(135deg, #2B7A9B 0%, #4DB8A8 100%)',
        'gradient-maskani-tertiary': 'linear-gradient(135deg, #4DB8A8 0%, #2B7A9B 100%)',
        'gradient-maskani-dark': 'linear-gradient(135deg, #1A3A52 0%, #4DB8A8 100%)',
      }
    },
  },
  plugins: [],
}
export default config
