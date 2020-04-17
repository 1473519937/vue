// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//import Framework7 from 'framework7/framework7.esm.bundle.js'
// import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'
// import Framework7Theme from 'framework7/css/framework7.bundle.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Tabbar, TabItem } from 'mint-ui';


Vue.use(MintUI)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);




Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
