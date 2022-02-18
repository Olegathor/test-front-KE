lmodule.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },

      {
        test: /\.styl$/,
        loader: 'stylus-loader', // compiles Styl to CSS
      },
    ],
  },
};
