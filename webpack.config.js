// webpack.config.js

const path = require('path');

module.exports = {
  entry: './index.js', // Adjust the entry point based on your project structure
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './controllers/login.js'), // Adjust the output path as needed
  },
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "util": require.resolve("util/"),
      "stream": require.resolve("stream-browserify"),
    },
  },
  // Other configurations can be added here
};
