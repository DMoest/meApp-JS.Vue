const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  entry: "main.js",
  /* ... */
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: "Lobster" },
        { family: "Bebas Neue" },
        { family: "Nunito" }
      ]
    })
  ]
};
