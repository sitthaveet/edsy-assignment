/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0A4285",
          accent: "#A8BBF0",
          grey: "#E9EEFB",
        },
      },
    ],
  }
}

