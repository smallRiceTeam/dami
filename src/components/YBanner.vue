<!--
 * @Author: yx
 * @Date: 2019-11-08 20:15:07
 * @LastEditors: yx
 * @LastEditTime: 2019-11-29 20:21:59
 * @Description: 轮播图
 -->

<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"  v-for="(item,index) in banner" :key="index"><img :src="item.img" alt=""></div>
       
    </div>
    
</div>
</template>

<script>
import axios from 'axios';
import Swiper from 'swiper';
export default {
  name: 'YBanner',
  data () {
    return {
     banner:[]
    }
  },
  created() {
     axios('/api/banner')
      .then(res=>{
        // console.log(res.data)
          this.banner = res.data;
          // console.log(this.banner)
      })
      .catch(err=>{
          console.log(err);
      })
  },
  methods: {
      
  },
  mounted() {
        window.onload =function(){
        let mySwiper = new Swiper('.swiper-container',{
            autoplay:true,
            speed:350,
            grabCursor:true,
            loop : true
        });
    }
  },
}

  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
.swiper-container{
  width: 100%;
 margin-top: 0.1rem;
}
.swiper-container .swiper-pagination{
    /* width: 0.1rem; */
    height: 0.15rem;
    /* background: red; */
    /* z-index: 10; */
}
img{
  display: block;
  width: 95%;
	height: 100%;
  margin: 0 auto;
  border-radius: 0.1rem;
	
}
</style>
