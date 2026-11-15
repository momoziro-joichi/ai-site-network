# AI Site Network

5つの独立した無料WebサイトをAstroで開発するモノレポです。

- 気象予報士の研究室
- 数学・理工学ツールラボ
- 鉄道・地理データ研究所
- 英語学習ラボ
- 便利ツール集

## 現状

開発済みソースコードはローカル成果物 `ai-site-network-v0.6.zip` にあります。GitHub上にはまだ全ファイルが登録されていません。ビルド・公開・広告・解析は未完了です。

## ソースコードを登録する

ZIPを展開したフォルダ内で、以下を実行してください。

```bash
git init
git branch -M main
git remote add origin https://github.com/momoziro-joichi/ai-site-network.git
git add .
git commit -m "Import AI Site Network v0.6"
git pull --rebase origin main
git push -u origin main
```

Node.js 22以上を使用し、`npm install`、`npm test`、`npm run build:all` で検証します。

**注意:** `SITE_KEY` は `weather`, `math`, `rail`, `english`, `tools` のいずれかです。広告収益・月収目標は保証されません。
