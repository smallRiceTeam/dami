<!--
 * @Description: 
 * @Author: 张涛
 * @Date: 2019-12-03 11:49:39
 * @LastEditors: yx
 * @LastEditTime: 2019-12-05 19:29:07
 -->
<template>
    <div class="box">
        <div class="title">
            <p>热门搜索</p>
        </div>
        <img src="../assets/img/12d025189901e793f0a39ce8bb9b7548.jpg" alt="">
        <div class="sat">
            <router-link to="" v-for="(Coneny,index) in Conenys" :key="index" :style="Coneny.style">
               {{Coneny.product}}
            </router-link>
        </div>
        <div class="title">
            <p>常用分类</p>
        </div>
        <div class="hotClassify-list">
            <router-link to="" v-for="(Typ,index) in Typs" :key="index">
               {{Typ.typesof}}
            </router-link>
        </div>

    </div>
            
</template>
            
<script>

import axios from 'axios';

export default {
   data() {
      return {
          Conenys:[],
          Typs:[
            {
            "typesof":"手机"
            },
            {
            "typesof":"电视"
            },
            {
            "typesof":"笔记本"
            },
            {
            "typesof":"路由器"
            },
            {
            "typesof":"平板"
            },
            {
            "typesof":"盒子"
            },
            {
            "typesof":"手表"
            },
            {
            "typesof":"空气净化器"
            }
        ]

      }
   },
   created() {
     //从后端获取数据     
     axios.get('http://localhost:3000/Content')
     .then(res=>{ 
         this.Conenys = res.data;//内部数据，由于没有渲染在组件里，所以，没有触发组件更新
        
     })
     .catch(err=>{
         console.log(err);
     });
    },
  
}
</script>
            
<style scoped lang="scss">
.box{
    width: 100%;
    height: 100%;
    background: #fff;
    img{
        width: 100%;
        height: 100%;
    }

}

.title{
    width: 95%;
    height: .4rem;
    margin: 0 auto;
    margin-bottom: 3px;
    p{
        line-height: 0.4rem;
        font-size: 18px;
    }
}   

.sat{
    margin: .1rem .2rem;
    text-align: left;
    a{
        display: inline-block;
        padding: .1rem .1rem;
        margin: .05rem;
        border: 1px solid #e4e4e4;
        font-size: 16px;
    }
}
.hotClassify-list{
    text-align: left;
    max-height: 1.2rem;
    overflow: hidden;
    padding-left: .32rem;
    padding-bottom: .3rem;
    a{
        display: inline-block;
        background: #f5f5f5;
        height: .35rem;
        line-height: .35rem;
        padding: 0 .1rem;
        margin-right: .05rem;
        margin-bottom: .05rem;
        color: rgba(0,0,0,.54);
    }
}
</style>
