import * as webpack from "webpack";
import * as path from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as HtmlWebpackTemplate from "html-webpack-template";

const commonConfig: webpack.Configuration = {
  entry: [
    "./site/index"
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          "awesome-typescript-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ],
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, "..", "_site"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: HtmlWebpackTemplate,
      appMountId: "react-root",
    }),
    // new webpack.optimize.OccurrenceOrderPlugin(false),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin()
  ]
};

export default commonConfig;
