/*
<<<<<<< HEAD
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
=======
 * @Author: your name
 * @Date: 2019-11-26 13:32:06
 * @LastEditTime: 2019-12-06 10:08:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xmscd:\newxmsc\newxmsc\src\main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import './font/iconfont.css'
import MintUI from 'mint-ui' 
import 'mint-ui/lib/style.css'
import store from './store'
Vue.use(MintUI)
import axios from 'axios'
Vue.prototype.$http = axios
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
>>>>>>> wwt
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
<<<<<<< HEAD
  components: { App },
  template: '<App/>'
=======
  render: h => h(App)
>>>>>>> wwt
})
