# simple-web-vanilla

素のHTML、CSS、JavaScriptのみでシンプルに作ったWebUIのサンプル。
いろいろな学習のベースとなるサンプルとして利用する想定のものです。

>動くものを[Github Pagesで公開](https://eizaburo.github.io/simple-web-vanilla/)しています。

## ブランチ

いくつかのブランチがあります。

- main
  - ボタンクリック時、alertに取得した値を表示するだけで、サーバ連携はありません。
- extension/json
  - ボタンクリック時、取得した値を指定されたURLにContent-type: application/jsonでPOSTします。
- estension/form
  - ボタンクリック時、取得した値を指定されたURLにContent-type: application/x-www-form-urlencodedでPOSTします。

## 想定動作環境

- ひとまずmacOS環境での利用を想定
  - 但し、ただのWebなので、ブラウザがあればどこでも動作します。
  - ブラウザはChrome（最新）を推奨。その他の環境でテストしていません。

## 利用方法

サーバ側機能を含まないので、リポジトリをcloneして、HTMLファイルを開くだけです。

```bash
git clone https://github.com/eizaburo/simple-web-vanilla.git
cd simple-web-vanilla
open index.html
```

>ダブルクリックやLive Server等を利用して開いても何ら問題ありません。

## サンプルとしての意味

タイトル通りシンプルなサンプルですが、以下のことを考慮して仕様を決めているつもりです。

- 素のHTML/CSS/JSのみで記述していること
  - React等の利用との差は何かの理解に利用
- formがあること
  - ビジネスWebのコア機能であるformの理解に利用
- 複数ページがあること
  - SPAとMPAの差の理解に利用
  - React等におけるルーティングの理解に利用
  - 目的に応じてページが簡単に追加できこと
- その他
  - 実務に応用できる最低限の機能を持つこと

## その他

- AIレビューでいくつか指摘されていますが、あえて直してない個所があります。
  - JSの変数をerrorMessageEmail等、キャメルで書け！と言われてるのをあえてスネークで書いてたり。
  - ボタンの表示を変えるタイミングがおかしいとか。

## ライセンス


一応MIT licenseとしておきます。


