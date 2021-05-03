module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#6B8CFF',
        colorText: '#09212D'
      }
    },
    fontFamily:{
      'roboto': ['Roboto'],
      'opensans': ['Open Sans'],
      'inter': ['Inter', 'sans-serif']
    },
    
  },
  variants: {
    extend: {
     
    }
  },
  plugins: [],
}
