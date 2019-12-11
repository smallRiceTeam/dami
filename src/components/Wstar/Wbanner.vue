<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-12-05 21:18:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  >
                <a v-bind:href="img.href"><img :src="img.src"></a>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: 'Wbanner',
  data () {
    return {
      imgs:[
        ]
    }
  },
  created(){
    fetch('api/bannerimgs')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.imgs = data;
         this.$nextTick(function () {
              let mySwiper = new Swiper('.swiper-container',{
                   autoplay:true,
                    speed:300,
                    grabCursor:true
              });
         });
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<style>
@import "https://unpkg.com/swiper/css/swiper.min.css";

.swiper-slide{
  width: 95%;
  text-align: center;
}
.swiper-container img{
  width: 95%;
  height: 1rem;
}
</style>
