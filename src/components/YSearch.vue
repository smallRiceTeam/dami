<!--
 * @Author: yx
 * @Date: 2019-11-26 19:33:46
 * @LastEditors: yx
 * @LastEditTime: 2019-12-05 14:54:06
 * @Description: 
 -->

<template>
    <div class="hello">
       <div class="seaTop"  :style="divstyle">
            <span class="iconfont icon-xiaomi"></span>
            <div class="search"><span class="iconfont icon-sousuo"></span><input :style="inputstyle" type="text" value="小米CC9 Pro" @click="sea"><span class="el-icon-full-screen"></span></div>
            <router-link to="/YClassList"><span class="iconfont icon-xiaoxi-copy" :style="spanstyle"></span></router-link>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide b1"></div>
                <div class="swiper-slide b2"></div>
                <div class="swiper-slide b3"></div>
            </div>
        </div>
        <div style="display:none">{{scroll}}</div>
    </div>
    
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'YSearch',
  props:['scroll'],
  data () {
    return {
        divstyle:{},
        inputstyle:{},
        spanstyle:{color: "#fff"},
        newdivstyle:{background:"rgba(255,255,255,1)",transition:"all 0.5s"},
        newinputstyle:{background:"#eee",transition:"all 0.5s"},
        newspanstyle:{color:"rgba(0,0,0,1)",transition:"all 0.5s"},
        olddivstyle:{background:"rgba(255,255,255,0)",transition:"all 0.5s"},
        oldinputstyle:{background:"rgba(255,255,255,1)",transition:"all 0.5s"},
        oldspanstyle:{color:"rgba(255,255,255,1)",transition:"all 0.5s"},

    }
  },
  mounted() {
      
        window.onload =function(){
        let mySwiper = new Swiper('.swiper-container',{
            autoplay:true,
            speed:300,
            grabCursor:true,
            loop : true
            
        });
    }
  },
  updated() {
    // console.log(this.scroll)
    if(this.scroll<=30){
        this.divstyle=this.olddivstyle;
        this.inputstyle=this.oldinputstyle;
        this.spanstyle=this.oldspanstyle;
    }
     else{
        // console.log(this.scroll)
        this.divstyle=this.newdivstyle;
        this.inputstyle=this.newinputstyle;
        this.spanstyle=this.newspanstyle;
    }
    
  },
  methods: {
      sea:function(){
          this.$router.push({
              path:'./SearchInterface'
          })
      }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
.hello{
    height: 0.5rem;
    width: 100%;
    line-height: 0.5rem;
    /* background: pink; */
   
}
.seaTop{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    /* background: #ddd; */
}
.icon-xiaomi{
    color: orange;
    font-size: 0.28rem;
    margin: 0 0.1rem;
}
span{
    float: left;
}
.search{
    float: left;
    position: relative;
    width: 75%;
}
.search span{
    position: absolute;
    color: rgb(145, 144, 144);
    font-size: 0.16rem;
}
.search .icon-sousuo{
    left: 0.08rem;
    /* top: 0.02rem; */
}
.search .el-icon-full-screen{
    right: 0.1rem;
    top: 0.18rem;
}
input{
    border: none;
    outline: none;
    width: 100%;
    height: 0.3rem;
    border-radius: 0.2rem;
    text-indent: 0.3rem;
    color: rgb(134, 134, 134);
    font-size: 0.14rem;
}
.icon-xiaoxi-copy{
    color: "#fff";
    margin: 0 0.1rem;
    font-size: 0.24rem;
}
.swiper-container{
    width: 100%;
    height: 1.9rem;
    
}
.swiper-slide{
     border-bottom-left-radius: 0.15rem;
    border-bottom-right-radius: 0.15rem;
}
.b1{
    background: rgb(164, 188, 207);
}
.b2{
    background: rgb(175, 195, 202);
}
.b3{
    background: rgb(211, 208, 193);
}
</style>
