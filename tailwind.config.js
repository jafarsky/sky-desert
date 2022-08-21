/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'iphone-x'    : '375px',
      'min-browser' : '444px',
      'min-tablet'  : '612px',
      'tablet'      : '900px',
      'laptop'      : '1297px',
    },
    fontFamily: {
      Ropoto: ["Roboto, sans-serif"]
    },
    extend: {
      colors: {
        brown: {
          1: '#edc4b3',
          2: '#e6b8a2',
          3: '#deab90',
          4: '#d69f7e',
          5: '#cd9777',
          6: '#c38e70',
          7: '#b07d62',
          8: '#9d6b53',
          9: '#8a5a44',
          10: '#774936',
        },
        milk: {
          1: '#f4f1de',
          2: '#f1faee',
        }
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}
