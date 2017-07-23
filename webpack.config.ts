import webpack from "webpack";
import * as webpackMerge from "webpack-merge";

import commonConfig from "./build-utils/webpack.common";

const getWebpackConfig = (env: any): webpack.Configuration => {
  // console.log(env);

  const envConfig = require(`./build-utils/webpack.${env.env}.ts`).default;

  const mergedConfig = webpackMerge(commonConfig, envConfig);

  // console.log(mergedConfig);

  return mergedConfig;
};

export default getWebpackConfig;
