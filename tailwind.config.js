// tailwind.config.js
export default {
  content: [
    "./src/**/*.{html,js,jsx}", // Make sure you include your component files here
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'],
      },
      animation: {
        fall: "fall 5s infinite linear",
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-100px)", opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
