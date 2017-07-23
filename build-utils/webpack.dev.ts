import * as webpack from "webpack";
// import * as path from "path";

const devConfig: webpack.Configuration = {
  devtool: "cheap-eval-source-map",
  // devServer: {
  //   contentBase: "./_site",
  //   // hot: true
  // },
};

export default devConfig;
