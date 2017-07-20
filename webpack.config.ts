import * as webpack from "webpack";
import * as CleanWebpackPlugin from "clean-webpack-plugin";
import * as path from "path";

const config: webpack.Configuration = {
  context: path.resolve(__dirname),
  entry: {
    // index: "./src/index.ts",
    button: "./src/elements/button/index.ts",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/index.js",
    library: "component-lib", // TODO fix library
    // library: {
    //   root: "ComponentLib",
    //   amd: "component-lib",
    //   commonjs: "componnet-lib"
    // },
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.ts?x$/,
        exclude: /node_modules/,
        use: [
          // {
          //   loader: "babel-loader",
          // },
          {
            loader: "awesome-typescript-loader",
          }
        ],
      }
    ],
  },
  externals: [
    "react",
    "react-dom",
  ],
  plugins: [
    new CleanWebpackPlugin(["dist"]),
  ],
};

export default config;
