module.exports = options => {
  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: './bundle.js',
    },
   devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env', "@babel/preset-react"],
                plugins: ['@babel/plugin-transform-runtime']
              }
            },
          ],
        },
      ],
    },
  }
}