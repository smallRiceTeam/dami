/*
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

Vue.use(Router)

export default new Router({
  routes: [
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
  ]
})
