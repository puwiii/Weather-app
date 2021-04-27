module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily:{
      'roboto': ['Roboto'],
      'opensans': ['Open Sans'],
      'inter': ['Inter', 'sans-serif']
    },
  },
  variants: {
    extend: {
      backgroundImage: theme => ({
      'main-background': "url('/imgs/campo.jpg')"
     })
    },
  },
  plugins: [],
}
