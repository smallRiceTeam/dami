<!--
 * @Description: 
 * @Author: 张涛
 * @Date: 2019-12-06 15:30:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-07 17:07:33
 -->
<template>
    <div class="Popul">
        <div class="box">
            <img class="imgs" src="../assets/img/loat.png" alt="" >
            <p>
                热门话题
            </p>
        </div>    
        <ul class="uls">
            <li v-for="(hotTopic,index) in hotTopics" :key="index">
                <p>
                  {{hotTopic.Topic}}
                </p> 
            </li>
        </ul>
    </div>       
</template>
            
<script>

import axios from 'axios';

export default {
   data() {
      return {
          hotTopics:[]
      }
   },
   created() {
     //从后端获取数据     
     axios.get('api/hotTopics')
     .then(res=>{ 
         this.hotTopics = res.data;//内部数据，由于没有渲染在组件里，所以，没有触发组件更新
        
     })
     .catch(err=>{
         console.log(err);
     });
    },
}
</script>
            
<style scoped lang="scss">
.Popul{
    width: 95%;
    margin: 0 auto;
}
.box{
    display: flex;
    height: .6rem;
    align-items: center;
    .imgs{
        width: .2rem;
        height: .2rem;
        margin-right: .13rem; 
    }
    p{
        font-size: 18px;
    }
}
.uls{
    display: flex;
     flex-wrap: wrap;
    li{
        display: flex;
        width: 1rem;
        height: .8rem; 
        background: #213b16;
        align-items: center;
        border-radius: .1rem;
        margin-bottom: .1rem;
        margin-right: .15rem;
       p{
           color: #fff;
           font-size: 18px;
           margin-left: 5px;
           display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
       }
    }
}
            
</style>
