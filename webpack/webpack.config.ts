import * as HTMLPlugin from 'html-webpack-plugin'
import * as path from 'path'
import * as webpack from 'webpack'

const root = path.resolve(__dirname, '..')

const config: webpack.Configuration = {
  entry: path.resolve(root, 'src/main'),
  output: {
    path: path.resolve(root, 'build'),
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  devServer: {
    noInfo: true,
  },
  performance: {
    hints: false,
  },
  plugins: [new HTMLPlugin({ template: path.resolve(root, 'src/index.html') })],
  devtool: '#source-map',
}

if (process.env.NODE_ENV === 'production') {
  // production
  config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
} else {
  // development
  config.plugins.push(new webpack.NamedModulesPlugin())
}

export default config
