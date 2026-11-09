# ASCII ROGUE — 小さな迷宮

HTML / CSS / 素のJavaScriptだけで動く、スマホ対応の最小ASCIIローグ風デモ。外部依存・通信・ビルド不要。

- `@` がプレイヤー、`#` が壁、`.` が通路、`>` が出口
- スマホは画面の方向ボタン、PCは矢印キーで移動
- 壁には入れず、出口に着くとクリア。リスタートで最初から遊べます
- 移動回数を表示。クリア後はリスタートまで移動を停止

## ローカル実行

`index.html` をブラウザーで開くだけです。

## GitHub Pages

この4ファイルと `.nojekyll` をリポジトリのルートに配置します。
Settings → Pages → Deploy from a branch → `main` / `(root)` → Save。
公開先は `https://<ユーザー名>.github.io/ascii-rogue-demo/` です。
