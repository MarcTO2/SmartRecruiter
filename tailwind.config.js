/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        limegreen: {
          "100": "#1ae452",
          "200": "rgba(26, 228, 82, 0.5)",
        },
        gray: "rgba(0, 0, 0, 0.5)",
        lightgoldenrodyellow: "#f3f0ca",
        white: "#fff",
        deepskyblue: "#04c3ff",
        darkslategray: "rgba(36, 80, 105, 0.46)",
        dodgerblue: "#068fff",
        tan: "#b9b79a",
        cornflowerblue: "#3876bf",
        mediumslateblue: "#4e4feb",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "josefin-sans": "'Josefin Sans'",
        quicksand: "Quicksand",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      xl: "20px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
