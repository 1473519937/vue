// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Tabbar, TabItem } from 'mint-ui';

import "@/assets/icon/iconfont.css";
import "@/style/main.css";
import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.use(MintUI)
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);


Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

import { Cell } from 'mint-ui';

Vue.component(Cell.name, Cell);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
