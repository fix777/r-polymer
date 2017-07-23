// const tsc = require("typescript");

// const webpackConfig = require("fs").readFileSync("./webpack.config.ts", "utf8");

// const options = {
//   compilerOptions: {
//     module: "commonjs",
//     target: "es5",
//     allowJs: false,
//     checkJs: false,
//     // allowSyntheticDefaultImports: true,
//   }
// };

// eval(tsc.transpileModule(webpackConfig, options).outputText);

// const path = require("path");

// module.exports = (env) => {
//   console.log(env);

//   return {
//     entry: [
//       path.resolve(__dirname, "site", "index"),
//     ],
//     resolve: {
//       extensions: [".js", ".jsx", ".css"]
//     },
//     module: {
//       rules: [
//         { test: /\.jsx?$/, use: ["babel-loader"], exclude: /node_modules/ },
//         { test: /\.css$/, use: ["style-loader", "css-loader"] },
//       ]
//     },
//     output: {
//       path: path.join(__dirname, "/_site"),
//       publicPath: "/",
//       filename: "bundle.js"
//     },
//   };
// }
