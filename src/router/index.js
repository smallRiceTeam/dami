/*
<<<<<<< HEAD
 * @Author: yx
 * @Date: 2019-11-19 17:38:03
 * @LastEditors: yx
 * @LastEditTime: 2019-12-05 14:52:04
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import YIndex from '@/pages/YIndex';
import YClassList from '@/pages/YClassList';
import YDetails from '@/pages/YDetails';
import SearchInterface from '../pages/SearchInterface'
=======
 * @Author: your name
 * @Date: 2019-11-26 13:32:06
 * @LastEditTime: 2019-12-07 17:02:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \newxmsc\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Wstart from '../pages/Wstart'
import Wmine from '../pages/Wmine'
import wreove from '../components/Wstar/wreove'
import wshipin from '../components/Wstar/wshipin'
import wlogin from '../components/Wmine/wlogin'
import wregister from '../components/Wmine/wregister'
import wxiugaimima from '../components/Wmine/wxiugaimima'
import TopicSearch from '../pages/TopicSearch'
>>>>>>> wwt

Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
    {
      path: '/YClassList',
      name: 'YClassList',
      component: YClassList
    },
    {
      path: '/',
      name: 'YIndex',
      component: YIndex
    },
    {
      path: '/YIndex',
      name: 'YIndex',
      component: YIndex
    },
    {
      path: '/YDetails/:shopid',
      name: 'YDetails',
      component: YDetails
    },
    {
      path: '/SearchInterface',
      name: 'SearchInterface',
      component: SearchInterface
    }
=======
    // {
    //   path: '/',
    //   name: 'Wstart',
    //   component: Wstart
    // },
    {
      path: '/Wstart',
      name: 'Wstart',
      component: Wstart,
      children:[
        {
          path: '',
          redirect: 'wreove' //重定向
        },
        {
          path:'wreove',
          component:wreove
        },
        {
          path:'wshipin',
          component:wshipin
        },
      ]
    },
    {
      path: '/wlogin',
      component: wlogin
    },
    {
      path: '/wxiugaimima',
      component: wxiugaimima
    },
    {
      path: '/',
      component: Wmine
    },
    {
      path: '/TopicSearch',
      component: TopicSearch
    },
    {
      path: '/Wmine',
      component: Wmine,
      beforeEnter(to,from,next){
        if(!localStorage.getItem('name')){
            next('/wlogin')
        }
        next();
      }
    },
    {
      path: '/wregister',
      component: wregister
    },
>>>>>>> wwt
  ]
})
