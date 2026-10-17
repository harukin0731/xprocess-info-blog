---
info: |
  7.3 Update Note
  併結列車のタブ表示・発車標の1行化・走行位置設定。
canvasWidth: 1920
fonts:
  sans: "BIZ UDPGothic"
  webfonts: []
layout: cover
title: JR四国非公式アプリ
version: Ver7.3 Update Note
sub: 〜しおかぜといしづち、やっと手をつなぐ〜
menu:
  - 併結列車をタブで切り替え！
  - 併結列車の発車標を1行に
  - 発車標の並びを見直し
  - 走行位置の表示設定を追加
  - 区間ごとの編成表示
  - その他の改善・修正
---

---
layout: image-right
title: 併結列車をタブで切り替え！
sub: しおかぜ・いしづちの分割・併合に対応
badge: New!!
split: even
---

<ul class="xp-list">
  <li>途中で<Mark>分割・併合する列車</Mark>の詳細画面に、行き先ごとのタブが付きました</li>
  <li>一緒に走る区間はまとめて表示し、<Mark>分かれた先の停車駅だけ</Mark>をタブで切り替え</li>
  <li>タブには列車名（しおかぜ15号など）、合流側は「高松発」と表示</li>
  <li>グリーン車などのマークも列車ごとに表示</li>
</ul>

<div class="xp-small" style="margin-top: 32px">運用投稿がある日は、タブに編成の車両も表示されます。</div>

<template #media>
  <div class="screenshot-pair"><figure><img src="/screenshots/IMG_1295.PNG" alt="しおかぜ15号の停車駅タブ" /><figcaption>しおかぜ15号</figcaption></figure><figure><img src="/screenshots/IMG_1296.PNG" alt="いしづち15号に切り替えた停車駅タブ" /><figcaption>いしづち15号</figcaption></figure></div>
</template>

---
layout: image-right
title: 発車標・時刻表で併結列車を1行に
sub: 一緒に発車する列車はひとまとめ
badge: New!!
split: even
---

<ul class="xp-list">
  <li>同じ駅を<Mark>一緒に発車する併結列車</Mark>を、発車標（LED）と駅時刻表で1行に</li>
  <li>「<Mark>しおかぜ・いしづち15号</Mark>」のように名前をつなげて表示</li>
  <li>行き先はそれぞれの色で並べます</li>
  <li>タップすると<Mark>その駅を出る編成</Mark>として列車詳細が開きます</li>
</ul>

<template #media>
  <figure class="screenshot-wide"><div class="led-crop"><img src="/screenshots/IMG_1298.PNG" alt="しおかぜ・いしづちが1行にまとまった発車標" /></div><figcaption>川之江駅：併結列車を1行に表示</figcaption></figure>
</template>

---
layout: image-right
title: 発車標の並びを見直しました
sub: 時刻の位置が動かないレイアウトに
badge: 改良
split: even
---

<ul class="xp-list">
  <li>並びを<Mark>列車名・時刻・行き先・のりば</Mark>に変更</li>
  <li>遅れているときは、行き先・のりばと<Mark>遅延状況を交互に</Mark>表示</li>
  <li>「乗り場」の表記を「のりば」に統一</li>
  <li>臨時などで手動設定された行き先は強調表示</li>
</ul>

<template #media>
  <div class="screenshot-stack"><figure><div class="led-row-crop"><img src="/screenshots/IMG_1298.PNG" alt="発車標の行き先・のりば表示" /></div><figcaption>行き先・のりば</figcaption></figure><div class="switch-arrow">↕</div><figure><div class="led-row-crop"><img src="/screenshots/IMG_1299.PNG" alt="発車標の遅延状況表示" /></div><figcaption>遅延状況</figcaption></figure></div>
</template>

---
layout: image-right
title: 走行位置の表示設定を追加
sub: 設定 ＞ レイアウト に2項目
badge: New!!
split: even
---

<ul class="xp-list">
  <li><Mark>運用投稿のある列車に両数を表示</Mark>（初期設定はオフ）</li>
  <li><Mark>2編成以上のとき車両アイコンを並べて表示</Mark>（オリジナル・運用Hubアイコン使用時）</li>
  <li>駅名の英語表記が端末によって見切れる問題を修正</li>
  <li>種別の帯の色を調整</li>
</ul>

<template #media>
  <div class="screenshot-pair"><figure><img src="/screenshots/IMG_1300.PNG" alt="レイアウト設定に追加された2項目" /><figcaption>レイアウト設定</figcaption></figure><figure><div class="car-count-crop"><img src="/screenshots/IMG_1301.PNG" alt="5546Mの列車カードを拡大。2両の表示と車両アイコン" /></div><figcaption>「2両」表示を拡大</figcaption></figure></div>
</template>

---
layout: image-right
title: 区間ごとの編成を表示
sub: 分割・併合に合わせて列車カードが切り替わります
badge: New!!
split: even
---

<ul class="xp-list">
  <li>走行位置の列車カードに、<Mark>今その区間で連結されている車両だけ</Mark>を表示</li>
  <li>併結中のカードには両方の列車名・行き先を並べて表示</li>
  <li>分割・併合の前後でアイコンが切り替わります</li>
</ul>

<template #media>
  <figure class="screenshot-wide"><div class="formation-crop"><img src="/screenshots/IMG_1302.PNG" alt="宇多津付近の併結中と分割後の列車カード" /></div><figcaption>併結中と分割後の列車カード</figcaption></figure>
</template>

---
layout: default
title: その他の改善・修正
---

<ul class="xp-list xp-list--compact">
  <li>設定に<Mark>オープンソースライセンス</Mark>の一覧を追加</li>
  <li>直通・併結の組み合わせを<Mark>ダイヤデータで管理</Mark>し、ダイヤの変更に追従しやすく</li>
  <li>Androidの運行情報・遅延ウィジェットで、取得失敗時に「通常運行」と誤表示する問題を修正</li>
  <li>サーバーのエラー時に運用Hub・乗り継ぎデータが上書きされる問題を修正</li>
  <li>外部リンクが開けなかったときにお知らせするように</li>
  <li>走行位置の更新のたびに一覧が少しずつ下にずれる問題を修正</li>
</ul>
