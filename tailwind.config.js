const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['apple-system', 'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue'],
      serif: ['apple-system', 'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue'],
      mono: ['apple-system', 'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue']
    },
    extend: {
      colors: {
        primary: colors.emerald,
        gray: colors.zinc
        // primary: {
        //   900: "",
        //   800: "",
        //   700: "",
        //   600: "",
        //   500: "",
        //   400: "",
        //   300: "",
        //   200: "",
        //   100: "",
        //   50: "",
        // }
      },
      padding: {
        'xs': '8px',
        'sm': '10px',
        'md': '14px',
        'lg': '20px',
        'xl': '24px',
      }
    },
  },
  plugins: [
  ],
}
