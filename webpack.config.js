const path = require('path');

module.exports = {
  entry: './src/js/main',
  output: {
    path: path.join(__dirname, 'build/js/'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  }
};
