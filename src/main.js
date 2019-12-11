/*
 * @Author: yx
 * @Date: 2019-11-19 17:38:03
 * @LastEditors: yx
 * @LastEditTime: 2019-12-02 17:56:03
 * @Description: 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css'; 
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
// import axios from 'axios';
import './font/iconfont.css';


Vue.use(MintUI);
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
