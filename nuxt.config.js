var tailwindcss = require("tailwindcss");
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "themes",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "List of Themes with latest thecnologies"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },

  css: ["@/assets/css/main.scss"],
  /*
  ** Build configuration
  */
  build: {
    postcss: [require("tailwindcss")("tailwind.js")]
  }
};
