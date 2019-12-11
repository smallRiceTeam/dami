<!--
 * @Author: yx
 * @Date: 2019-11-19 22:49:57
 * @LastEditors: yx
 * @LastEditTime: 2019-11-28 22:53:32
 * @Description: 
 -->
<template>
  <div class="box">
    <YClassLeft></YClassLeft>
    <YFooter></YFooter>
  </div>
</template>

<script>
import YClassLeft from '../components/YClassLeft';
import YFooter from '../components/YFooter';
export default {
  props:['classLeftId'],
  name: 'YClassList',
  data () {
    return {
     
    }
  },
  components:{
      YClassLeft,YFooter
  },
  mounted() {
    // console.log(this.classLeftId)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
