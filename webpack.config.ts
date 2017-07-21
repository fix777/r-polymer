import * as webpack from "webpack";
import * as CleanWebpackPlugin from "clean-webpack-plugin";
import * as fs from "fs";
import * as path from "path";

const sourcePath = path.resolve(__dirname, "src/components");
const tsxPaths = fs.readdirSync(sourcePath);

const loopEntries = (curPath, basePath, entries, merged = {}) => {
  entries.forEach(childEntry => {
    const childEntryPath = path.resolve(basePath, childEntry);
    const isFile = fs.statSync(childEntryPath).isFile();
    if (isFile) return merged = { ...merged, ...{ [curPath]: childEntryPath } };
    // directory
    const furtherChildEnties = fs.readdirSync(childEntryPath);
    return loopEntries(`${curPath}/${childEntry}`, path.resolve(basePath, childEntry), furtherChildEnties, merged);
  });
  return merged;
};

const tsxEntries =
  tsxPaths.reduce(
    (entries, curPath) => {
      let compEntries = {};
      const basePath = path.resolve(sourcePath, curPath);

      if (curPath.includes("index")) {
        compEntries = { ...compEntries, ...{ index: basePath } };
      } else {
        // console.log(fs.readdirSync(basePath));
        const childEntries = fs.readdirSync(basePath);
        compEntries = { ...compEntries, ...loopEntries(curPath, basePath, childEntries) };
      }

      return {...entries, ...compEntries};
    },
    {}
  );

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
