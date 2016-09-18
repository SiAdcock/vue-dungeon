const path = require('path');

module.exports = {
  entry: './src/js/main',
  output: {
    filename: 'build/js/main.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules|vue\/dist\/|vue-router\/|vue-loader\/|vue-hot-reload-api\//
      }
    ]
  }
};
