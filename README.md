
<p style="text-align: center;">
  <img src="./assets/img/logo_c.svg" width="300">
</p>

---

# 三宮.dev ホームページ

[三宮.dev LP](https://sannomiya.dev/)

「三宮.devとはどんなコミュニティか？」を知ってもらうためのホームページです

## How to start

非常にシンプルな構成なため、簡単に開発を始められます  
HMRは無いので変更時は都度`index.html`を読み込み直してください

1. clone repository
    ```
    $ git clone git@github.com:tessai9/sannomiya.dev-lp.git
    ```
1. install dependencies
    ```
    $ npm install
    ```
1. run scripts
    ```
    $ npm run build
    ```
1. open `index.html` on your browser

## AIO / LLMO について

生成AI（ChatGPT・Claude・Geminiなど）やAI検索から「関西・神戸のエンジニアコミュニティ」として
正しく引用されることを狙って、以下のファイルを置いています。
コミュニティの情報（活動内容・参加方法・実績の数字など）を更新するときは、
**あわせてこれらも更新してください**。内容がズレるとAIが古い情報を答えてしまいます。

| ファイル | 役割 |
| --- | --- |
| `ejs/inc/_html_header.ejs` | meta description / OGP / schema.org 構造化データ（Organization・Person・WebSite・WebPage・EventSeries） |
| `llms.txt` | LLM向けのサイト要約。コミュニティの概要・よくある質問・参加方法・リンクをテキストでまとめたもの |
| `robots.txt` | 検索エンジンおよびAIクローラー（GPTBot / ClaudeBot / Google-Extended など）の許可設定 |
| `sitemap.xml` | サイトマップ。ページを増やしたら追記してください |
| `assets/img/ogp.png` | OGP画像（1200x630） |

なお、FAQは`llms.txt`にのみ記載しています。
ページ上に見えないFAQを`FAQPage`構造化データで主張するのは検索エンジンのガイドライン違反になるため、
将来ページにFAQセクションを作る場合のみ`FAQPage`を追加してください。

数字（活動年数・イベント数・参加人数）は
[connpassのグループページ](https://kobe-sannomiya-dev.connpass.com/)が一次情報です。
`ejs/inc/_what.ejs` の値を定期的に見直してください。
