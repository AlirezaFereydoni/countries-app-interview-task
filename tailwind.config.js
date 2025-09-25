import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,vue,mdx}',
    './components/**/*.{js,ts,vue,mdx}',
    './app/**/*.{js,ts,vue,mdx}',
    './src/**/*.{js,ts,vue,mdx}',
  ],
};
export default config;
