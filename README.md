## ▼環境構築

### 1. gulp の cli ツールをインストールする

```bash
npm install --global gulp-cli
```

### 2. npmインストールする

```bash
npm i
```

## ▼gulpタスク

バージョン4なので基本的には公式ドキュメントを参考にされたし。  
https://gulpjs.com/  
※古いバージョンの書き方だと動かないことが多い。

### ・タスクについて

基本はこれ。  
その場でコンパイルされる。

```bash
gulp
```

個別にコンパイルしたい場合は以下。

```bash
gulp html
```

```bash
gulp css
```

ファイルの変更をウォッチする場合はこれ。

```bash
gulp watch
```

### ・使用可能なタスクを確認する

```bash
gulp --tasks
```

こんな感じで表示される

```bash
$ gulp --tasks
[12:09:05] Tasks for ~/workspace/sample_pug_sass_gulp/gulpfile.js
[12:09:05] ├─┬ default
[12:09:05] │ └─┬ <parallel>
[12:09:05] │   ├── css
[12:09:05] │   └── html
[12:09:05] ├── html
[12:09:05] ├── css
[12:09:05] └── watch
```

## ▼ローカル環境で確認

Browsersyncを使う。  
https://www.browsersync.io/

### 1. インストール

```bash
npm install -g browser-sync
```

### 2. 起動

`dist`をルートディレクトリにし、配下のファイルをwatchするオプションをつけてBrowsersyncを起動する。

```bash
browser-sync start --server "./dist/" --files "./dist/*"
```

こんな感じでサーバーが起動する。

```bash
$  browser-sync start --server "./dist/" --files "./dist/*"
[Browsersync] Access URLs:
 -------------------------------------
       Local: http://localhost:3000
    External: http://192.168.2.51:3000
 -------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 -------------------------------------
```

`gulp watch`タスクを並行して起動させておくと変更が随時反映されるはず。  
起動コマンドやオプションは下記を参考にされたし。  
https://www.browsersync.io/docs/command-line


## おまけ
Netlifyで公開してみた。  
簡単にできるのでおすすめ  
https://sample-pug-sass-gulp.netlify.com/
