<!--
 * @Author: yx
 * @Date: 2019-11-08 20:15:07
 * @LastEditors: yx
 * @LastEditTime: 2019-11-30 14:55:07
 * @Description: 轮播图
 -->

<template>
  <div class="box">
    <div class="boxCon">
       <div class="sec">
            <div class="chaBox" v-for="(item,index) in seconds" :key="index">
                <h4>{{item.name}}</h4>
                <p>{{item.des}}</p>
                <img :src="item.img" alt="">
            </div>
            <div class="data">
                <span>倒计时</span>
                <span><YCountdown :msg="this.aim_time"></YCountdown></span>
            </div>
       </div>
        <div class="secBox">
            <div class="secL">
                <h4>精选频道</h4>
                <span>左滑发现更多</span>
            </div>
            <div class="secLt">
                <ul>
                    <li v-for="(item,index) in secList" :key="index">
                    <img :src="item.img" alt="">
                    <span>{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="mon">
                <h3>早报</h3>
                <span>热门</span>
                <YHot class="monCon"></YHot>
            </div>
        </div>
    </div>
    <router-link class="show" to="/">小米商城合规公示</router-link>
     <img class="hot" src="../assets/hot01.png" alt="">
     <!-- <YCountdown></YCountdown> -->
</div>
</template>

<script>
import axios from 'axios';
import YCountdown from './YCountdown';
import YHot from '../components/YHot';
export default {
  name: 'YSeconds',
//   props:['msg'],
  data () {
    return {
        seconds:[],
        secList:[],
        aim_time: "2019-12-10 00:00:00"
    }
  },
  
  created() {
     axios('/api/seconds')
      .then(res=>{
        // console.log(res.data)
        this.seconds = res.data;
      })
      .catch(err=>{
          console.log(err);
      })
      axios('/api/secList')
      .then(res=>{
        // console.log(res.data)
        this.secList = res.data;
      })
      .catch(err=>{
          console.log(err);
      })
  },
  components:{
      YCountdown,YHot
  }
}

  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped="" type="text/css">
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
   
}
.sec{
     display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
    position: relative;
}
.chaBox{
  width: 24%;
  text-indent: 0.1rem;
}

.chaBox img{
    width: 0.7rem;
    height: 0.6rem;
    margin: 0.05rem 0.03rem;
}
.chaBox h4{
    line-height: 0.22rem;
    height: 0.22rem;
}
.chaBox p{
    font-size: 0.12rem;
    line-height: 0.16rem;
    /* margin-right: 0.05rem; */
}
.show{
    display: block;
    width: 95%;
    height: 0.25rem;
    background: #fbfbfb;
    color: #666;
    line-height: 0.25rem;
    text-indent: 0.10rem;
    font-size: 0.1rem;
    margin: 0.08rem auto;
    border-radius: 0.08rem;
}
.hot{
    display: block;
    width: 98%;
    margin: 0.05rem auto;
}
.secBox{
    width:100%;
    
}
.secL{
    width: 27%;
    float: left;
    text-indent: 0.16rem;
}
.secL h4{
    line-height: 0.25rem;
}
.secL span{
    display: block;
    font-size: 0.12rem;
     /* text-indent: 0.16rem; */
}
.secLt{
     width: 70%;
    float: left;
    overflow: hidden;
}
ul{
    display: flex;
	/* flex-direction: column; */
	flex-wrap:nowrap;
	overflow-x: auto;
    font-size: 0.1rem;
}
ul li{
    width: 0.5rem;
    /* margin: 0 0.08rem; */
    text-align: center;
}
ul li span{
    /* width: 100%; */
    display: block;
    width: 0.5rem;
    /* text-align: center; */
}
ul img{
    width: 0.3rem;
    height: 0.3rem;
    
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
.data{
    width: 1.3rem;
    // height: 0.15rem;
    font-size: 0.08rem;
    position: absolute;
    left: 22%;
    border: 1px solid red;
    border-radius: 0.1rem;
    padding: 0 0.05rem;
    // margin-top: 0.04rem;
    span{
        color:red;
        display: block;
        float: left;
    }
    span:first-child{
        border-radius: 0.1rem;
        color: #fff;
        background: red;
        position: relative;
        padding: 0 0.04rem;
        left: -0.045rem;
    }
    span:last-child{
        background: #fff;
        color: red;
        // border-top: 1px solid red;
        // border-bottom: 1px solid red;
    }

}
.mon{
    width: 100%;
    height: 0.35rem;
    // background: pink;
    overflow: hidden;
    line-height: 0.35rem;
    h3{
        float: left;
        margin: 0 0.1rem;
    }
    span{
        float: left;
        padding: 0 0.05rem;
        background: rgb(248, 209, 216);
        color: rgb(248, 101, 101);
        height: 0.2rem;
        line-height: 0.2rem;
        margin-top: 0.07rem;
        font-size: 0.1rem;
    }
    .monCon{
        float: left;
        height: 0.2rem;
        margin-left: 0.05rem;
        font-size: 0.14rem;
    }
}
</style>
