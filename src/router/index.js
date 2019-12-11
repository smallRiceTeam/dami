/*
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-26 14:30:39
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-12-06 20:29:32
 */
import Vue from 'vue'
import Router from 'vue-router'
import QShoppingCar from '@/pages/QShoppingCar'
import QJiesuan from '@/pages/QJiesuan'
import QReceiptAddress from '@/pages/QReceiptAddress'
import QShopAddress from '@/pages/QShopAddress'
import QDPay from '@/pages/QDPay'
import QMap from '@/pages/QMap'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QShoppingCar',
      component: QShoppingCar
    },
    {
      path: '/QShoppingCar',
      name: 'QShoppingCar',
      component: QShoppingCar
    },
    {
      path: '/QJiesuan',
      name: 'QJiesuan',
      component: QJiesuan
    },
    {
      path: '/QReceiptAddress',
      name: 'QReceiptAddress',
      component: QReceiptAddress
    },
    {
      path: '/QShopAddress',
      name: 'QShopAddress',
      component: QShopAddress
    },
    {
      path: '/QDPay',
      name: 'QDPay',
      component: QDPay
    },
    {
      path: '/QMap',
      name: 'QMap',
      component: QMap
    }
  ]
})
