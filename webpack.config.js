const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: "gh-pages/assets/",
    filename: "bundle.js",
    publicPath: "/assets/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("css!postcss!less")
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ],
  devServer: {
    historyApiFallback: true
  }
};
