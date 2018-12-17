const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");

function css() {
  return gulp
    .src("src/assets/sass/**/**//*.+(scss|sass)")
    .pipe(
      sass({
        outputStyle: "expanded"
      })
        // Sassのコンパイルエラーを表示
        .on("error", sass.logError)
    )
    .pipe(gulp.dest("dist/assets/css"));
}

function html() {
  return gulp
    .src("src/assets/pug/**/**/*.pug")
    .pipe(
      pug({
        pretty: true // @fixme Deprecatedなので基本的には外す
      })
    )
    .pipe(gulp.dest("dist"));
}

function watch() {
  gulp.watch("src/assets/", gulp.parallel(css, html));
}

exports.default = gulp.parallel(css, html);
exports.html = html;
exports.css = css;
exports.watch = watch;
