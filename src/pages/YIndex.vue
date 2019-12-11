<!--
 * @Author: yx
 * @Date: 2019-11-19 22:49:57
 * @LastEditors: yx
 * @LastEditTime: 2019-12-05 20:40:55
 * @Description: 
 -->
<template>
  <div class="box">
      <YSearch :scroll="scrollTop"></YSearch>
      <YBanner></YBanner>
      <YNav></YNav>
      <YChannel></YChannel>
      <YSeconds></YSeconds>
      <Nav :scroll="scrollTop"></Nav>
      <YFooter></YFooter>
  </div>
</template>

<script>
import YSearch from '../components/YSearch';
import YBanner from '../components/YBanner';
import YNav from '../components/YNav';
import YChannel from '../components/YChannel';
import YSeconds from '../components/YSeconds';
import Nav from '../components/Nav';
import YFooter from '../components/YFooter';

export default {
  props:['classLeftId','scroll'],
  name: 'YIndex',
  data () {
    return {
      scrollTop:""
    }
  },
  components:{
     YSearch,YBanner,YNav,YChannel,YSeconds,YFooter,Nav
  },
  methods: {
     handleScroll(){
        let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.scrollTop=scroll;
        console.log(this.scrollTop)
        }
  },
  mounted() {
     window.addEventListener("scroll", this.handleScroll,true);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
.box{
  /* height: 10rem; */
  background: #f6f6f6;
}
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

</style>
