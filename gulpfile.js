const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");

// @todo Lint、エラーハンドリングとかする
function css() {
  return gulp
    .src("src/assets/sass/**/**/*.+(scss|sass)")
    .pipe(
      sass({
        outputStyle: "expanded"
      })
        // Sassのコンパイルエラーを表示
        .on("error", sass.logError)
    )
    .pipe(gulp.dest("dist/assets/css"));
}

// @todo Lint、エラーハンドリングとかする
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

// @todo Lint、エラーハンドリングとかする
function javascript() {
  return gulp.src("src/assets/js/**/**/*.js").pipe(gulp.dest("dist/assets/js"));
}

function vendor() {
  return gulp
    .src("src/assets/vendor//**/**/*.+(js|css)")
    .pipe(gulp.dest("dist/assets/vendor"));
}

function watch() {
  gulp.watch("src/assets/", gulp.parallel(css, html, javascript, vendor));
}

exports.default = gulp.parallel(css, html, javascript, vendor);
exports.html = html;
exports.css = css;
exports.js = javascript;
exports.vendor = vendor;
exports.watch = watch;
