/*
 * @Author: yx
 * @Date: 2019-11-26 19:13:22
 * @LastEditors: yx
 * @LastEditTime: 2019-12-03 11:20:20
 * @Description: 
 */

import Vue from 'vue'
import VueX from 'vueX'
import axios from 'axios';

Vue.use(VueX)

export default new VueX.Store({
    state: {//存储数据
        footerCls: [
            true,
            false,
            false,
            false,
            false
        ],
        // classLeft:[],
        // typeid:[],
        shopDes:[],
        nowshopid:'',
        storeid:''
    },
    mutations: {//跟踪状态
        changeFooterCls(state,index){
            // 合法性判断
            if(index<0 || index>state.footerCls.length-1){
                return;
            }
            state.footerCls.forEach((item,index,arr)=>{
                arr[index] = false;
            });
            state.footerCls[index] = true;
        },
        nowid(state,id){
            state.nowshopid=id;
            // console.log(state.nowshopid)
        },

        addcar(state,con){
            state.shopDes = con[0];
            state.storeid = con[1]
            // console.log(state.shopDes);
        }
    },
    actions: {//有异步请求，异步请求完成后，提交mutations
        addcar(context,nowshopid){
            // console.log(nowshopid)
            // console.log("1111111111111111111111111111111111")
            axios('/api/shopdes')
            .then(res=>{
                // console.log(res.data)
              let shopcontent = res.data;
              let shopDes =[];
              let storeid = '';
              for(let i in shopcontent){
                  if(shopcontent[i].shopid == nowshopid){
                    shopDes.push(shopcontent[i]);
                    storeid = shopcontent[i].id;
                  }
              }
            //   console.log(storeid)
              context.commit('addcar',[shopDes,storeid]);
            //   console.log([shopDes,storeid])
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
})
