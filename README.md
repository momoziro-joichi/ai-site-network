# AI Site Network

Astroを用いた5つの独立した無料Webサイトのモノレポ。

| SITE_KEY | サイト |
|---|---|
| weather | 気象予報士の研究室 |
| math | 数学・理工学ツールラボ |
| rail | 鉄道・地理データ研究所 |
| english | 英語学習ラボ |
| tools | 便利ツール集 |

## 起動・テスト

Node.js 22以上を推奨。

```bash
npm install
npm test
SITE_KEY=weather npm run dev
npm run build:all
```

各サイトは `SITE_KEY` に応じて出力先が `dist/<SITE_KEY>` になります。

## 現在の実装状況

基本画面、計算ツール、簡易教材、気象問題、気塊モデル、GitHub Actionsを実装しました。ただしGitHub上のコードはローカルv0.6の**簡略版**であり、すべての機能が一致するわけではありません。実際のAstroビルドとブラウザ動作は未検証です。

## 公開

本番公開前に `src/config/sites.js` の仮URLを実URLへ変更し、広告・解析・プライバシー表示を整備してください。仮URLの間は検索エンジンにnoindexを指定します。Cloudflare PagesやVercelへの公開はまだ行っていません。収益は保証されません。

## 開発上の注意

気象・鉄道の数値モデルは教育用近似であり、気象予報や実際の運行計画には利用できません。
