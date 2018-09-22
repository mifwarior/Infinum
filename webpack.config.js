module.exports = {

    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: './bundle.js',
    },
   //devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ],
        }
      ],
    },
};
