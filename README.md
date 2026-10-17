# Xprocess-Info blog

Hexo のブログリポジトリです。依存管理は Yarn 4.9.1 に固定しています。
`.yarnrc.yml` で `node_modules` 方式を使用します。

```sh
corepack yarn install --immutable
corepack yarn build
```

Cloudflare Pages でも同じ Yarn 4.9.1 とコミット済みの `yarn.lock` を使用します。
ロックファイルを変更する依存更新時は、ローカルで `corepack yarn install` を実行し、変更をコミットしてください。

スライドの作成環境は `slides/theme/` の submodule にあります。
公開ビルドはコミット済み画像を使い、テーマの取得はスキップします。
画像の再生成手順は [slides/README.md](slides/README.md) を参照してください。
