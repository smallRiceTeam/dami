<!--
 * @Author: yx
 * @Date: 2019-11-30 16:20:43
 * @LastEditors: yx
 * @LastEditTime: 2019-12-04 21:27:16
 * @Description: 
 -->

<template>
  <div class="box">
    <div  v-for="(item,index) in shopdes" :key='index' ref="element">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"  v-for="(b,index) in item.banner" :key="index"><img :src="b.img" alt=""></div>
            </div>
        </div>
        <div class="shop">
            <div class="shopTop">
                <h3>{{item.name}}</h3>
                <span class="el-icon-share"></span>
            </div>
            <span class="redDes">{{item.redDes}}</span>
            <span>{{item.blackDes}}</span>
            <p><span>￥</span>{{item.price}}</p>
        </div>
        <ul class="shopiconList">
            <li v-for="(icon,index) in item.shopiconList" :key="index">
                <img :src="icon.img" alt="">
                <p>{{icon.iconame}}</p>
                <span>{{icon.icodes}}</span>
            </li>
        </ul>
        <div class="redPackage">
            <img src="../assets/red.png" alt="">
            <span>新人领<i>666元</i>红包</span>
            <span class="el-icon-arrow-right"></span>
        </div>
        <ul class="shopQues">
            <li v-for="(ques,index) in item.shopQues" :key="index">
                <span>{{ques.shopQuesname}}</span>
                <i>{{ques.shopQuesdes}}</i>
                <span class="el-icon-arrow-right"></span>
            </li>
        </ul>
        <ul class="select">
            <!-- <li>
                <span>已选</span>
                <i>小米CC9 Pro</i>
                <span class="el-icon-arrow-right"></span>
            </li> -->
            <li>
                <span>送至</span>
                <i>西安市 雁塔区 <b>有现货</b></i>
                <span class="el-icon-arrow-right"></span>
            </li>
            <li>
                <p>
                    <span class="el-icon-success"></span>
                    <i>小米自营</i>
                </p>
                <p>
                    <span class="el-icon-success"></span>
                    <i>小米自营</i>
                </p>
                <p>
                    <span class="el-icon-success"></span>
                    <i>小米自营</i>
                </p>
                <span class="el-icon-arrow-right"></span>
            </li>
        </ul>
        <img class="photo" :src="item.img" alt="">
        <div class="recommended">
            <h3>为你推荐</h3>
            <ul class="rcdCon">
                <li v-for="(rec,index) in item.recommended" :key="index">
                    <div class="img">
                        <img :src="rec.img" alt="">
                    </div>
                    <span>{{rec.name}}</span>
                    <i>{{rec.price}}</i>
                </li>
            </ul>
        </div>
        <div class="parameter">
            <p :class="navBarFixed == true ? 'navBarWrap' :''" class='scrollM'>
                <span>商品介绍</span>
                <span>规格参数</span>
            </p>
            <img v-for="(image,index) in item.imgdes" :key="index" :src="image.img" alt="">
        </div>
    </div>
    <!-- <div class="choose">
       
    </div> -->
</div>
    
</template>

<script>
import axios from 'axios';
import Swiper from 'swiper';
export default {
    name: 'YDesbanner',
    props:['nowshopid'],
    data () {
        return {
            shopdes:[],
            storeid:'',
            navBarFixed: false,
            scrollHeight:'',
            drawer: false,
            direction: 'rtl',
        }
    },

    created() {
        axios('/api/shopdes?shopid='+this.nowshopid)
            .then(res=>{
                this.shopdes = res.data;
            })
            .catch(err=>{
                console.log(err);
            })
        this.$store.commit('nowid',this.nowshopid);
        this.$store.dispatch('addcar',this.nowshopid);
    },
 
    mounted() {
        window.onload =function(){
            let mySwiper = new Swiper('.swiper-container',{
                speed:350,
                grabCursor:true,
                // loop : true
            });
        }
        window.addEventListener("scroll", this.watchScroll);
    },
    updated() {
        window.addEventListener("scroll", this.watchScroll);
    },
    methods: {
        watchScroll() {
            var  height = document.getElementsByClassName("scrollM").offsetTop;
        //   console.log(height)
            var scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
                // console.log(scrollTop)
            //  当滚动超过 90 时，实现吸顶效果
            if (scrollTop > 1350) {
                this.navBarFixed = true;
            } else {
                this.navBarFixed = false;
            }
        }
    }
}

  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(https://unpkg.com/swiper/css/swiper.css);
.box{
    .swiper-container{
        width: 100%;
        .swiper-slide{
            height: 3rem;
            img{
                display: block;
                width: 100%;
                // height: 100%;
                
            }
        }
    }
    .shop{
        width: 95%;
        margin: 0 auto;
        .shopTop{
            overflow: hidden;
            line-height: 0.4rem;
            h3{
                float: left;
                font-weight: normal;
                font-size: 0.18rem;
            }
            span{
                float: right;
                margin: 0.1rem;
                font-size: 0.16rem;
            }
        }
        p{
            color: red;
            font-size: 0.2rem;
            margin: 0.08rem 0;
            span{
                font-size: 0.12rem;
                vertical-align: top;
                line-height: 0.2rem;
            }
        }
        .redDes{
            color: red;
        }
    }
    .shopiconList{
        width: 98%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        overflow-x: auto;
        li{
            border-right: 1px solid #999;
            text-align: center;
            padding: 0 0.05rem;
            img{
                width: 0.2rem;
                height: 0.2rem;
            }
            p{
                font-size: 0.1rem;
            }
            span{
                display: block;
                width: 0.7rem;
                font-size: 0.08rem;
                color: #666;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        li:last-child{
            border: 0;
        }
    }
    .redPackage{
        width: 95%;
        padding: 0.06rem 0.12rem;
        background: #eee;
        box-sizing: border-box;
        margin: 0.1rem auto 0;
        font-size: 0.12rem;
        border-radius: 0.06rem;
         vertical-align: middle;
        i{
            color: red;
            // vertical-align: middle;
        }
        .el-icon-arrow-right{
            float: right;
            font-size: 0.16rem;
        }
        img{
            width: 0.15rem;
            margin-right: 0.25rem;
            margin-left: 0.08rem;
            vertical-align: middle;
        }
    }
    .shopQues{
        width: 95%;
        font-size: 0.12rem;
        margin: 0 auto;
        li{
            margin: 0.07rem 0;
            padding: 0.08rem 0.12rem;
            background: #eee;
            box-sizing: border-box;
            border-radius: 0.06rem;
            border:1px solid rgb(226, 225, 225);
            i{
                margin-left: 0.2rem;
            }
            .el-icon-arrow-right{
                float: right;
                font-size: 0.16rem;
            }
            span:first-child{
                color: #666;
            }
        }
        
    }
    .select{
        width: 95%;
        font-size: 0.12rem;
        margin: 0 auto;
        background: #eee;
        box-sizing: border-box;
        border-radius: 0.06rem;
        overflow: hidden;
        border:1px solid rgb(226, 225, 225);
        li{
            // margin: 0.07rem 0;
            width: 95%;
            padding: 0.08rem 0.12rem;
            border-bottom:1px solid rgb(226, 225, 225);
            i{
                margin-left: 0.2rem;
                b{
                    font-weight: normal;
                    color: red;
                }
            }
            .el-icon-arrow-right{
                float: right;
                font-size: 0.16rem;
            }
            span:first-child{
                color: #666;
            }
        }
        :last-child{
            line-height: 0.2rem;
            padding-bottom: 0.08rem;
            border: 0;
            p{
                float: left;
                margin: 0;
                span{
                    color: rgb(243, 128, 33);
                    font-size: 0.14rem;
                }
                i{
                    margin-left: 0.02rem;
                    margin-right: 0.2rem;
                }
            }
        }
    }
    .photo{
        display: block;
        width: 95%;
        margin: 0.1rem auto;
        border-radius: 0.08rem;
    }
    .recommended{
        width: 95%;
        margin: 0 auto;
        h3{
            width: 100%;
            text-align: center;
            line-height: 0.45rem;
        }
        .rcdCon{
            display: flex;
            justify-content: space-around;
            overflow-x: auto;
            flex-wrap: wrap;
            li{
                width: 30%;
                margin-bottom: 0.1rem;
                .img{
                    background: #eee;
                    border-radius: 0.1rem;
                    img{
                    width: 100%;
                    }
                }
                span{
                    line-height: 0.3rem;
                    display: block;
                }
                i{
                    font-size: 0.12rem;
                    color: rgb(245, 77, 35);
                    line-height: 0.24rem;
                }
            }
        }
    }
    .parameter{
        p{
            display: flex;
            justify-content: space-around;
            overflow-x: auto;
            line-height: 0.5rem;
            border-top: 0.5px solid #ccc;
        }
        img{
            width: 100%;
        }
        .navBarWrap {
            width: 100%;
            background: #fff;
            position:fixed;
            top:0.5rem;;
            z-index:999;
            display: flex;
            justify-content: space-around;
            overflow-x: auto;
            line-height: 0.5rem;
            border: 0;
        }
    }
}

.navBarWrap {
    position:fixed;
    top:0.5rem;;
    z-index:999;
    display: flex;
    justify-content: space-around;
    overflow-x: auto;
    line-height: 0.5rem;
    border-top: 0.5px solid #ccc;
}
.choose{
    margin-bottom: 0.5rem;
    width: 100%;
    height: 4rem;
    background: pink;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
</style>
