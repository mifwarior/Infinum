module.exports = options => {
  return {
    entry: './src/index.js',
    output: {
      filename: './bundle.js',
    },
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
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            },
          ],
        },
      ],
    },
  }
}