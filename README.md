
<p style="text-align: center;">
  <img src="./assets/img/logo_c.svg" width="300">
</p>

---

# 三宮.dev ホームページ

[三宮.dev LP](https://sannomiya.dev/)

「三宮.devとはどんなコミュニティか？」を知ってもらうためのホームページです

## How to start

非常にシンプルな構成なため、簡単に開発を始められます  
gulp taskによってファイル変更は監視されますが、HMRは無いので変更時は都度`index.html`を読み込み直してください

1. clone repository
    ```
    $ git clone git@github.com:tessai9/sannomiya.dev-lp.git
    ```
1. install dependencies
    ```
    $ npm install
    ```
1. run gulp task
    ```
    $ npx gulp
    ```
1. open `index.html` on your browser
