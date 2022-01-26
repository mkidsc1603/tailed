module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested')({
      "bubble": [
        "screen"
      ]
    }),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    require('cssnano')({
      "preset": [
        "default",
        {
          "mergeRules": false,
          "normalizeWhitespace": false,
        }
      ]
    }),
  ],
}
