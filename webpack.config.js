const path = require('path');

const config = {
  entry: './src/index.tsx', // Entry point is correct for TypeScript

  output: {
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  devtool: 'inline-source-map', // Helpful for debugging

  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: 'public',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // Resolve TypeScript and JavaScript files
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Handle .ts and .tsx files
        exclude: /node_modules/,
        use: 'ts-loader', // Use ts-loader for TypeScript
      },
      {
        test: /\.js$/, // Handle regular .js files with Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  mode: 'development', // Development mode for easier debugging
};

module.exports = config;
