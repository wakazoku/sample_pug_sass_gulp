// const gulp = require("gulp");
const { src, dest, watch } = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

function css() {
  return (
    src("src/sass/*.+(scss|sass)")
      // Sassのコンパイルを実行
      .pipe(
        sass({
          outputStyle: "expanded"
        })
          // Sassのコンパイルエラーを表示
          // (これがないと自動的に止まってしまう)
          .on("error", sass.logError)
      )
      // cssフォルダー以下に保存
      .pipe(dest("dist/css"))
  );
}

function watchCss() {
  watch("src/sass/*.+(scss|sass)", css);
}

exports.default = css;
exports.css = css;
exports.watch = watchCss;