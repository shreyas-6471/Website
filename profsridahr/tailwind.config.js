module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'deep-purple':'#5D3B99',
        'sunny-yellow': '#FFC107',
        'soft-gray':'#F5F5F5',
      },
    },
  },
  // theme: {
  //   extend: {
  //     colors: {
  //       'vibrant-blue': '#007bff', // Primary Color
  //       'vibrant-yellow': '#ffc107', // Accent Color
  //       'cool-gray': '#f8f9fa', // Neutral Background
  //     },
  //   },
  // },
  plugins: [],
  // theme: {
  //   extend: {
  //     colors: {
  //       'brand-blue': '#005bbb',
  //       // Add more custom colors here
  //     },
  //     fontFamily: {
  //       sans: ['Inter var', 'sans-serif'],
  //       // Define additional custom fonts if needed
  //     },
  //     // You can also extend other theme values like spacing, fontSize, etc.
  //   },
  // },
  // // Don't forget to include any plugins you're using
  // plugins: [require('@tailwindcss/typography')],
};
