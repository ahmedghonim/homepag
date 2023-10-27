/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          500: "#a6a6a6",
          900: "#27221f",
          "600_33": "#7f7f7f33",
          "400_4f": "#c4c4c44f",
          "900_8c": "#0e15218c",
          "900_19": "#09143219",
          "500_01": "#959595",
          "900_26": "#08143126",
          "900_01": "#1c1c1e",
        },
        green: { A700_66: "#2ad35266" },
        light_blue: { 300: "#64d2ff" },
        pink: { 900: "#5d0021", A400_66: "#e8005366" },
        red: { A400_02: "#ff2d55", A400: "#fb1351", A400_01: "#ff2424" },
        lime: { A400: "#cfff0f" },
        amber: {
          700: "#ff9c00",
          A400: "#ffcd00",
          A400_66: "#ffc20066",
          "700_01": "#ff9f0a",
        },
        white: {
          A700_99: "#ffffff99",
          A700_ab: "#ffffffab",
          A700_87: "#ffffff87",
          A700_63: "#ffffff63",
          A700: "#ffffff",
        },
        cyan: { A400_66: "#00d4ff66", A400_35: "#00d4ff35" },
        yellow: { 500: "#ffe642", 800: "#e79332" },
        black: { 900: "#000000", "900_19": "#00000019" },
        teal: { "400_9e": "#25ab749e", A400_66: "#00e7a266" },
        blue_gray: { 900: "#2c2c2e" },
      },
      boxShadow: {
        bs1: "0px 24px  40px -11px #00000019",
        bs: "25px 15px  250px 0px #09143219",
        bs2: "150px 50px  250px 0px #08143126",
      },
    },
  },
  plugins: [],
};
