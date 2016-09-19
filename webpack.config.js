module.exports = {
  entry: './src/index',
  output: {
    filename: 'build/js/index.js'
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
