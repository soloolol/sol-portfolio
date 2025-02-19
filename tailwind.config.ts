import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': {
            transform: 'rotate(3deg)',
          },
          '3%': {
            transform: 'rotate(-3deg)',
          },
          '6%': {
            transform: 'rotate(3deg)',
          },
          '9%': {
            transform: 'rotate(-3deg)',
          },
          '12%': {
            transform: 'rotate(3deg)',
          },
          '100%': {
            transform: 'rotate(3deg)',
          },
        },
      },
    },
    animation: {
      wiggle: 'wiggle 3s infinite',
    },
  },
  darkMode: 'selector',
  plugins: [],
} satisfies Config;
