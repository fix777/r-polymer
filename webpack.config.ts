import * as webpack from "webpack";
// import * as CleanWebpackPlugin from "clean-webpack-plugin";
// import * as fs from "fs";
import * as path from "path";

const config: webpack.Configuration = {
  entry: [
    "./site/index"
  ],
  module: {
    rules: [
      { test: /\.jsx?$/, use: ["babel-loader"], exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  output: {
    path: path.join(__dirname, "/_site"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devtool: "cheap-eval-source-map",
  devServer: {
    contentBase: "./_site",
    hot: true
  },
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM",
  // },
  plugins: [
    // new CleanWebpackPlugin(["_site"]),
    // new webpack.DefinePlugin({
    //   env: {
    //     BABEL_ENV: JSON.stringify("webpack-dev"),
    //   },
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(false),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

export default config;
