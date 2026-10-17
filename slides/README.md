# 更新告知スライド

共通の作成環境は [xprocess-slide-theme-base](https://github.com/harukin0731/xprocess-slide-theme-base) を `slides/theme/` の Git submodule として管理します。
Slidev の依存、共通レイアウト、ロゴ、見出し処理、画像出力コマンドはすべてテーマ側にあります。
ブログ側の各バージョンには本文・スクショ・固有CSSだけを置きます。

## 初回セットアップ

ブログリポジトリのルートで実行します。テーマは非公開のため GitHub のアクセス権と SSH 認証が必要です。

```sh
git submodule update --init --recursive slides/theme
npm --prefix slides/theme ci
npm --prefix slides/theme exec -- playwright install chromium
```

## 掲載画像の生成

```sh
npm run slides:7.3
```

`slides/7.3/slides.md`・`style.css`・`public/` を使い、
`source/assets/JRShikokuAppsArchive/7.3/スライド1.PNG` 〜 `スライド7.PNG` を直接生成します。
一時出力はテーマ側で自動削除します。ブログ側の `npm install` はスライド作成には不要です。
既存のブラウザーを使う場合は `-- --executable-path /path/to/chromium` を付けます。
通常のブログビルドは書き出し済み画像を使うため、テーマの初期化は不要です。

別バージョンを生成する場合も同じテーマ側のコマンドを使います（パスはテーマリポジトリからの相対パス）。

```sh
npm --prefix slides/theme run render -- --entry ../VERSION/slides.md --output ../../source/assets/JRShikokuAppsArchive/VERSION
```

## テーマ更新

テーマリポジトリで修正をコミット・pushしてから、ブログ側の参照を更新します。

```sh
git -C slides/theme fetch origin
git -C slides/theme checkout <確認済みのコミットSHA>
git add slides/theme
```

更新後は掲載画像を再生成して確認してください。
