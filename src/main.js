/*
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-26 14:30:39
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-12-03 11:47:28
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import Axios from 'axios';
import store from './store';


Vue.use(MintUI);
Vue.use(ElementUI);



Axios.defaults.baseURL = '/api/';
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
