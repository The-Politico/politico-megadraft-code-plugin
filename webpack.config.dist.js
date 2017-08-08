/*
 * Copyright (c) 2017, Jon McClure <jmcclure@politico.com>
 *
 * License: MIT
 */

module.exports = {
  entry: [
    "."
  ],
  output: {
    path: "./dist",
    publicPath: "/dist/",
    filename: "politico-megadraft-code-plugin.js",
    library: "politico-megadraft-code-plugin",
    libraryTarget: "umd"
  },
  externals: {
    "megadraft": "Megadraft",
    "react": "React",
    "react-dom": "ReactDOM"
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
