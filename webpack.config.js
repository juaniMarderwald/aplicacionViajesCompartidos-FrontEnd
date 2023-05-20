const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: ['babel-loader']
      },
      {
        test: /\.css?/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['svg-url-loader'],
      }
    ]
  },
  plugins: [htmlPlugin],
  output: {
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    hot: true
  },
}