module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "brand": "#5865f2",
      "greyple": "#99aab5",
      "dark-not-black": "#2c2f33",
      "status-green": "#43b581",
      "text-link": "#00b0f4",
      "off-white": "#f6f6f6",
      "white": "#fff",
      "not-quite-black": "#23272a",
      "ekko-red": "#de2761",
      "hero-bg": "rgb(64, 78, 237)",
    },
    extend: {
      fontFamily: {
        whitney_light: ["Whitney-Light"],
        whitney_regular: ["Whitney-Reg"],
        whitney_semi: ["Whitney-Semi"],
        giton_regular: ["Giton-Reg"],
        giton_bold: ["Giton-Bold"],
        giton_black: ["Giton-Black"]
      },
      
      fontSize: {
        header: "clamp(24px,5vw,44px)",
        headerParagraph: "clamp(16px,2vw,20px)",
        sectionHeader: "clamp(20px, 4vw, 40px)",
        deviceHeader: "clamp(18px, 3vw, 32px)"
      },
    },
  },
  plugins: [],
}
