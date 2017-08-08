/*
 * Copyright (c) 2017, Jon McClure <jmcclure@politico.com>
 *
 * License: MIT
 */

module.exports = {
  entry: [
    "./demo/main.js"
  ],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "demo/bundle.js"
  },
  devtool: "source-map",
  devServer: {
    inline: true,
    contentBase: "./"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
