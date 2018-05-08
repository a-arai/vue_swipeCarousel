## vue.jsでtouchイベントを使い、スワイプ処理を作成

### DEMO
動きはこちらのページから確認できます
https://a-arai.github.io/DEMO/vue_swipeCarousel/

ロジックが記載されたファイル
https://github.com/a-arai/vue_swipeCarousel/blob/master/js/swipeCarousel.js

・javascriptと同じでeventが座標を持っているので、それを取得する。
・dataでタッチ前の座標を0で登録しておき、タッチイベント時に取得した座標を入れる
・タッチスタート時点の座標と、タッチエンド時の座標を比較して50px以上スワイプされていたらコンテンツを切り替える