<!--
 * @Author: yx
 * @Date: 2019-11-08 20:15:07
 * @LastEditors: yx
 * @LastEditTime: 2019-11-29 20:33:26
 * @Description: 轮播图
 -->

<template>
  <div class="box">
    <div class="boxCon">
        <div class="chaBox" v-for="(item,index) in channel" :key="index">
            <h4>{{item.name}}</h4>
            <p>{{item.des}}</p>
            <img :src="item.img1" alt="">
            <img :src="item.img2" alt="">
        </div>
        
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'YChannel',
  data () {
    return {
        channel:[]
    }
  },
  created() {
     axios('/api/channel')
      .then(res=>{
        // console.log(res.data)
        this.channel = res.data;
      })
      .catch(err=>{
          console.log(err);
      })
  },
}

  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    width: 100%;
    margin-top: 0.07rem;
}
.boxCon{
    width: 95%;
    overflow: hidden;
    margin: 0 auto;
    background: #fff;
    padding: 0.1rem 0 0;
    box-sizing: border-box;
    border-radius: 0.08rem;
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
}
p{
    color: rgb(236, 100, 100);
}
.boxCon .chaBox:first-child{
    border-bottom: 1px solid #eee;
}
.boxCon .chaBox:nth-child(2){
    border-bottom: 1px solid #eee;
}
.boxCon :nth-child(2) p{
    color: rgb(248, 197, 103);
     
}
.boxCon :nth-child(3) p{
    color: rgb(248, 197, 103);
}
.chaBox{
  width: 47%;
  text-indent: 0.12rem;
}

img{
    width: 0.7rem;
    height: 0.6rem;
    margin: 0.05rem 0.03rem;
}
h4{
    line-height: 0.22rem;
}
p{
    font-size: 0.12rem;
    line-height: 0.16rem;
    /* margin-right: 0.05rem; */
}
</style>
