# VueBento 

VueBentoはCSSフレームワーク「[Musubii](https://musubii.qranoko.jp/)」ベースに作られたAtomicDesignベースに作られたコンポーネントライブラリです。

## Setup

```
# npm
npm i -D vue-bento
# yarn
yarn add vue-bento
```

## Import

```
import Vue from 'vue';
import App from './App.vue';

import VueBento from 'vue-bento';
import 'vue-bento/dist/vue-bento.css'; // cssいらない場合は外す

Vue.use(VueBento);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
