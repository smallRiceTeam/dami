<!--
 * @Author: yx
 * @Date: 2019-11-26 19:33:46
 * @LastEditors: yx
 * @LastEditTime: 2019-12-02 09:25:36
 * @Description: 
 -->

<template>
    <div class="back" :style="divstyle">
        <div class="backCon">
            <span class="el-icon-arrow-left" @click="back()" :style="spanstyle"></span>
            <div class="seaTop" :style="constyle" >
                <!-- :style="divstyle" -->
                <span>商品</span>
                <span>评价</span>
                <span>详情</span>
            </div>
            <span class="el-icon-more" :style="spanstyle"></span>
            <span class="el-icon-share" :style="spanstyle"></span>
            <div style="display:none">{{scroll}}</div>
        </div>
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
        spanstyle:{},
        constyle:{display:"none"},
        newdivstyle:{background:"rgba(255,255,255,1)",transition:"all 0.5s"},
        newspanstyle:{color:"rgba(0,0,0,1)",background:"rgba(255,255,255,0)",transition:"all 0.5s"},
        newconstyle:{display:"block"},
        olddivstyle:{background:"rgba(255,255,255,0)",transition:"all 0.5s"},
        oldspanstyle:{color:"rgba(255,255,255,1)",transition:"all 0.5s"},
        oldconstyle:{display:"none"}
    }
  },
  mounted() {
  },
  updated() {
    // console.log(this.scroll)
    if(this.scroll<=30){
        this.divstyle=this.olddivstyle;
        this.spanstyle=this.oldspanstyle;
        this.constyle = this.oldconstyle;
    }
     else{
        this.divstyle=this.newdivstyle;
        this.spanstyle=this.newspanstyle;
        this.constyle = this.newconstyle;
    } 
  },
  methods: {
    back(){
        this.$router.go(-1);
       }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(https://unpkg.com/swiper/css/swiper.css);
.back{
    height: 0.5rem;
    width: 100%;
    line-height: 0.5rem;
    // background: pink;
    position: fixed;
    top: 0;
    z-index: 10;
    box-sizing: border-box;
    .backCon{
        width: 92%;
        margin: 0 auto;
        span{
            // display: block;
            font-size: 0.2rem;
            padding: 0.02rem;
            // line-height: 0.5rem;
            margin-top: 0.13rem;
            background: rgba(0,0,0,0.7);
            color: #fff;
            overflow: hidden;
            border-radius: 50%;
        }
        .el-icon-arrow-left{
            float: left;
        }
        .seaTop{
            width: 45%;
            float: left;
            height: 0.5rem;
            line-height: 0.5rem;
            margin-left: 0.5rem;
            span{
                font-size: 0.14rem;
                margin: 0 0.1rem;
                border-radius: 0;
                background: rgba(255,255,255,0);
                color: black;
            }
            span:first-child{
                color:rgb(253, 63, 15);
            }
        }
        .el-icon-more{
            float: right;
        }
        .el-icon-share{
            float: right;
            margin-right: 0.1rem;
        }
    }
}
</style>
