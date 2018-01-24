module.exports = {
  devtool: 'source-map',
  stats: 'minimal',
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-1', 'flow'],
        },
      },
      // {
      //   test: /\.css$/,
      //   loaders: ['style-loader', 'css-loader'],
      // },
    ],
  },
};
