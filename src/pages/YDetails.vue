<!--
 * @Author: yx
 * @Date: 2019-11-19 22:49:57
 * @LastEditors: yx
 * @LastEditTime: 2019-12-03 09:56:24
 * @Description: 
 -->
<template>
  <div class="box">
      <YBack :scroll="scrollTop"></YBack>
      <!-- <YDesbanner  ></YDesbanner>
      <YDesfooter ></YDesfooter> -->
      <YDesbanner :nowshopid="this.$route.params.shopid" ></YDesbanner>
      <YDesfooter></YDesfooter>
  </div>
</template>

<script>
import YBack from '../components/YBack';
import YDesbanner from '../components/YDesbanner';
import YDesfooter from '../components/YDesfooter';
export default {
//   props:['classLeftId','scroll'],
  name: 'YDetails',
  data () {
    return {
      scrollTop:""
    }
  },
  components:{
     YBack,YDesbanner,YDesfooter
  },
    mounted() {
         window.addEventListener("scroll", this.handleScroll,true);
        //  console.log(this.$route.params.shopid)
    },
    methods: {
         handleScroll(){
            // console.log(this.scrollTop)
            let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.scrollTop=scroll;
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
/* .box{ */
  /* height: 10rem; */
  /* background: pink; */
/* } */
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  /* margin: 0 10px; */
}
a {
  color: #42b983;
}
b{
  font-weight: normal;
}
</style>
