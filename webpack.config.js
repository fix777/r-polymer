const tsc = require("typescript");

const webpackConfig = require("fs").readFileSync("./webpack.config.ts", "utf8");

const options = {
  compilerOptions: {
    module: "commonjs",
    target: "es5",
    allowJs: false,
    checkJs: false,
    // allowSyntheticDefaultImports: true,
  }
};

eval(tsc.transpileModule(webpackConfig, options).outputText);
