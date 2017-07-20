const gulp = require("gulp");
const gts = require("gulp-typescript");
const gless = require("gulp-less");
const fs = require("fs");
const path = require("path");
const tscOptions = require("./tsconfig.gulp.json").compilerOptions;

const sourcePath = path.resolve(__dirname, "src/components");
const tsxPaths = fs.readdirSync(sourcePath);

const loopEntries = (curPath, basePath, entries, merged = []) => {
  entries.forEach(childEntry => {
    const childEntryPath = path.resolve(basePath, childEntry);
    const isFile = fs.statSync(childEntryPath).isFile();
    if (isFile) return merged.push([ curPath, childEntryPath ]);
    // directory
    furtherChildEnties = fs.readdirSync(childEntryPath);
    return loopEntries(`${curPath}/${childEntry}`, path.resolve(basePath, childEntry), furtherChildEnties, merged);
  });
  return merged;
};

const tsxEntries =
  tsxPaths.reduce(
    (entries, curPath) => {
      let compEntries = [];
      const basePath = path.resolve(sourcePath, curPath);

      if (curPath.includes("index")) {
        compEntries.push([ "index", basePath ]);
      }
      else {
        // console.log(fs.readdirSync(basePath));
        const childEntries = fs.readdirSync(basePath);
        compEntries = loopEntries(curPath, basePath, childEntries);
      }

      return [...entries, ...compEntries];
    },
    []
  );

gulp.task("default", () => {
  // console.log(tsxEntries);
  tsxEntries.forEach(([ entryName, entryPath ], tsxEntryIndex) => {
    if (entryName === "index") {
      tscOptions.outDir = path.resolve(__dirname, "components_temp");
    } else {
      tscOptions.outDir = path.resolve(__dirname, "components_temp", entryName);
    }

    if (/\.ts?x$/.test(entryPath)) {
      gulp
        .src(entryPath)
        .pipe(gts(tscOptions))
        .pipe(gulp.dest(tscOptions.outDir));
    } else if (/\.less$/.test(entryPath)) {
      gulp
        .src(entryPath)
        .pipe(gless())
        .pipe(gulp.dest(path.resolve(__dirname, "lib", entryName)));
      // Build both css & less
      gulp
        .src(entryPath)
        .pipe(gulp.dest(path.resolve(__dirname, "lib", entryName)));
    }
  });
});
