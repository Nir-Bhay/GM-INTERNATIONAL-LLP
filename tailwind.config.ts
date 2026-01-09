import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          dark: '#C4A030',
          light: '#E5C349',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          dark: '#111111',
          light: '#333333',
        },
        offwhite: '#F7F7F7',
        success: '#4CAF50',
        danger: '#E53935',
        accent: {
          cyan: '#29B6F6',
          red: '#E53935',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'container': '1320px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
export default config
