/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        cubano: ['Cubano', 'sans-serif'],
        sofiapro: ['SofiaPro', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  corePlugins: { preflight: false } // for the default docusaurus markdown rendering
};
