/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-gray-100': '#E1E1E1',
        'dark-gray-200': '#9C9C9C',
        'dark-black-100': '#1E1E1E',
        'dark-black-200': '#1B1B1B',
        'dark-black-300': '#121212',
        'dark-purple': '#BB86FC',
        'dark-purple-500': '#5C5470',
        'dark-purple-600': '#534961',
        'dark-whine': '#783449',
        'dark-green': '#03DAC6',
        'light-brown-100': '#EFEAD8',
        'light-black': '#2B2B2B',
        'light-purple': '#6101EE',
        'light-green-100': '#09D8C5',
        'light-green-200': '#028786',
        'light-gray-100': '#E5E5E5',
        'light-gray-200': '#C9C9C9',
        'light-white': '#FFFFFF',
      },
      boxShadow: {
        'light-line': '0 0 0 4px #2B2B2B',
        'dark-line': '0 0 0 4px #9C9C9C',
        'light-card-content': '0 5px 0 #2B2B2B',
        'dark-card-content': '0 5px 0 #9C9C9C',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
