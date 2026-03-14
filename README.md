# simple-web-vanilla

素のHTML、CSS、JavaScriptのみでシンプルに作ったWebUIのサンプル。
いろいろな学習のベースとなるサンプルとして機能する（想定）。

## ブランチ

いくつかのブランチがあります。

- main
  - ボタンクリック時、alertに取得した値を表示するだけで、サーバ連携はありません。
- extension/json
  - ボタンクリック時、取得した値を指定されたURLにContent-type: application/jsonでPOSTします。
- estension/form
  - ボタンクリック時、取得した値を指定されたURLにContent-type: application/x-www-form-urlencodedでPOSTします。

## 利用方法

サーバ側機能を含まないので、リポジトリをcloneして、HTMLファイルを開くだけです。

```bash
git clone <ブランチURL>
cd simple-web-vanilla
open index.html
```

>ダブルクリックやLive Server等を利用して開いても何ら問題ありません。

## ライセンス


一応MIT licenseとしておきます。


