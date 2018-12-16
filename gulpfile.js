const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require('gulp-pug');

function css() {
  return (
    gulp.src("src/sass/**/**//*.+(scss|sass)")
    .pipe(
      sass({
        outputStyle: "expanded"
      })
      // Sassのコンパイルエラーを表示
      .on("error", sass.logError)
    )
    .pipe(gulp.dest("dist/css"))
  );
}

function html() {
  return gulp.src("src/pug/**/**/*.pug")
    .pipe(pug({
      pretty: true // @fixme Deprecatedなので基本的には外す
    }))
    .pipe(gulp.dest("dist/html"))
}

function watchHtml() {
  gulp.watch("src/pug/**/**/*.pug", html);
}

function watchCss() {
  gulp.watch("src/sass/**/**//*.+(scss|sass)", css);
}

exports.default = gulp.parallel(css, html);
exports.html = html;
exports.css = css;
exports.watch = gulp.parallel(watchHtml, watchCss);;