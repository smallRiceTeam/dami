<!--
 * @Author: yx
 * @Date: 2019-11-19 22:52:03
 * @LastEditors: yx
 * @LastEditTime: 2019-12-02 23:36:25
 * @Description: 分类侧边栏
 -->


<template>
    <div class="box">
        <ul>
            <li  v-for="(item,index) in classLeft" :key="index" @touchstart="clk(index,item.classLeftId)" 
            v-bind:class="isactive==index?'orange':''">{{item.name}}</li>
            
        </ul>
        <YClassRight :typeid="classLeftId"></YClassRight>
    </div>
</template>

<script>
import axios from 'axios';
import YClassRight from './YClassRight'
export default {
  name: 'YClassLeft',
  data () {
    return {
        classLeft:[],
        isactive:0,
        classLeftId:'0101'
    }
  },
  created() {
    //   console.log(this.classLeftId)
      axios('/api/classleft')
      .then(res=>{

          this.classLeft = res.data;
      })
      .catch(err=>{
          console.log(err);
      })
    // this.$store.dispatch('classid',this.classLeftId);
    // this.classLeft = this.$store.state.classLeft;
  },
  methods: {
      clk(index,classLeftId){
            this.isactive = index;

            this.classLeftId = classLeftId;
            // console.log(this.classLeftId)
            // console.log(index)
        }
        
  },
  components:{
      YClassRight
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    /* width: 20%; */
    height: 100%;
    float: left;
    /* background: pink; */
   
    box-sizing: border-box;
}
ul{
    width: 26%;
    height: 100%;
   
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    position: fixed;
    top: 0;
    left: 0;
}
li{
    height: 0.14rem;
    line-height: 0.14rem;
    /* border-bottom: 1px solid #000; */
    text-align: center;
    font-size: 0.14rem;
    margin:0.15rem 0;
    padding: 0.02rem;
}
.orange{
    color: orange;
    border-left: 3px solid orange;
}
</style>
