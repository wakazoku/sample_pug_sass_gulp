## ▼環境構築
※多分いけると思う
### 1. gulp の cli ツールをインストールする

```
npm install --global gulp-cli
```

### 2. npmインストールする

```node.js
npm i
```

## ▼gulp
バージョン4なので基本的には公式ドキュメントを参考にされたし。  
https://gulpjs.com/  
※古いバージョンの書き方だと動かないことが多い。

### コンパイルするタスク
```node.js
gulp
```
もしくは
```node.js
gulp html
```
```node.js
gulp css
```
ファイルの変更をウォッチする場合は
```node.js
gulp watch
```
### 使用可能なタスクを確認する
```node.js
gulp --tasks
```
こんな感じで表示される
```
$ gulp --tasks
[20:59:58] Tasks for ~/dev/pug_sass_gulp/gulpfile.js
[20:59:58] ├─┬ default
[20:59:58] │ └─┬ <parallel>
[20:59:58] │   ├── css
[20:59:58] │   └── html
[20:59:58] ├── html
[20:59:58] ├── css
[20:59:58] └─┬ watch
[20:59:58]   └─┬ <parallel>
[20:59:58]     ├── watchHtml
[20:59:58]     └── watchCss
```