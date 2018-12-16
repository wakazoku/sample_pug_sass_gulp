## ▼環境構築
※多分いけると思う
### 1. gulp の cli ツールをインストールする

```
npm install --global gulp-cli
```

### 2. npm インストールする

```node.js
npm i
```

## ▼gulp

バージョン 4 なので基本的には公式ドキュメントを参考にされたし。  
https://gulpjs.com/  
※古いバージョンの書き方だと動かないことが多い。

### SCSSをコンパイルするタスク
```node.js
gulp
```
もしくは
```node.js
gulp css
```
ファイルの変更をウォッチする場合は
```node.js
gulp watch
```
### 使用可能なタスクを確認する
```node.js
gulp --tasks
```
こんな感じで表示される
```
$ gulp --tasks
[19:25:44] Tasks for ~/dev/pug_sass_gulp/gulpfile.js
[19:25:44] ├── default
[19:25:44] ├── css
[19:25:44] └── watch
```