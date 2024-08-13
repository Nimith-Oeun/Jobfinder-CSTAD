/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {},
    color:{
      'primary': '#00214A',
      'secondary': '#F68446',
      'danger': '#e3342f',
    }
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}

