import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14213d',
        roof: '#2f4f4f',
        leaf: '#5b7f35',
        sand: '#f7f3ea',
        clay: '#b65f36'
      },
      boxShadow: {
        soft: '0 18px 45px rgba(20, 33, 61, 0.12)'
      }
    },
  },
  plugins: [],
};
export default config;
