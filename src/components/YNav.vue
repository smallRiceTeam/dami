<!--
 * @Author: yx
 * @Date: 2019-11-08 20:15:07
 * @LastEditors: yx
 * @LastEditTime: 2019-12-02 10:23:37
 * @Description: 轮播图
 -->

<template>
  <div class="nav">
    <div class="navCon">
        <ul class="navTop">
            <li v-for="(i,index) in list1" :key="index">
                <img :src="i.img" alt="">
                <span>{{i.name}}</span>
            </li>
        </ul>
        <ul class="navBot">
            <li v-for="(j,index) in list2" :key="index">
                <div class="left">
                    <span>{{j.name}}</span>
                    <i>{{j.des}}</i>
                </div>
                <img :src="j.img" alt="">
                
            </li>
        </ul>
    </div>
    <img class="hot" src="../assets/hot01.png" alt="">
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'YNav',
  data () {
    return {
     nav:[],
     list1:[],
     list2:[]
    }
  },
  created() {
     axios('/api/nav')
      .then(res=>{
        // console.log(res.data)
        this.list1 = res.data[0].navlist1;
        this.list2 = res.data[1].navlist2;
        // console.log(this.list1)
        //   this.nav = res.data;
       
      })
      .catch(err=>{
          console.log(err);
      })
  },
}

  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
    width: 100%;
    margin-top: 0.1rem;
}
.navCon{
    width: 95%;
    margin: 0 auto;
    background: #fff;
    padding: 0.1rem 0;
    box-sizing: border-box;
    border-radius: 0.08rem;
}
ul{
     display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
}
.navTop img{
    width: 0.4rem;
    height: 0.4rem;
    display: block;
    margin: 0 auto;
    margin-bottom: 0.05rem;
}
.navTop{
    width: 100%;
}
.navTop li{
    width: 20%;
    /* height: 0.2rem; */
    text-align: center;
    margin-bottom: 0.12rem;
    font-size: 0.12rem;
}
.navBot{
    width: 100%;
    /* height: 0.5rem; */
    margin-top: 0.05rem;
}
.left{
    float: left;
}
.navBot li{
   width: 28%;
  font-size: 0.1rem;
}
i{
    display: block;
    color: #bbb;
}
.navBot img{
    float: right;
    width: 0.35rem;
    height: 0.35rem;
    margin-left: 0.06rem;
}
.hot{
    display: block;
    width: 98%;
    margin: 0.05rem auto;
}
</style>
