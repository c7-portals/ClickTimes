/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // All HTML files in root
    "./**/*.html",        // All HTML files in subfolders
    "./*.js",             // Any vanilla JS files
    "./**/*.js"           // JS in subfolders too
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#ecfdf5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          900: '#064e3b'
        }
      }
    },
  },
  plugins: [],
};
