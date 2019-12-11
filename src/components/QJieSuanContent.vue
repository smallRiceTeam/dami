<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-12-07 11:14:22
 -->
<template>
    <div class="Abox">
        <router-link to="/QReceiptAddress">
            <div class="addRes">
                <img class="adressImg" src="../assets/img/adress.jpg" alt="">
                <div class="midInfo" v-for="(temp, index) in temps" :key="index">
                    <p>
                        <span class="myName">{{temp.name}}</span>
                        <span class="tel">{{temp.mobile}}</span>
                    </p>
                    <p class="myadress">{{temp.address}}</p>
                    <p class="zancun">{{temp.area}}</p>
                </div>
                <i class="el-icon-arrow-right"></i>
            </div>
        </router-link>
        <div class="main">
            <div class="addContent">
                <div class="top">
                    <img src="../assets/img/Qlogo.jpg" alt="" class="Qlogo">
                    <span>小米官方旗舰店</span>
                </div>
                <div class="conInfo" v-for="(good,i) in $store.state.toBuyGoods" :key="i">
                    <img :src="good.img" alt="" class="shopImg">
                    <div class="infoMid">
                        <p class="desc">{{good.desc}}</p>
                        <p class="guiGe">颜色分类：{{good.color}};尺码:{{good.size}}</p>
                        <p class="time">发货时间：{{good.time}}</p>
                    </div>
                    <div class="conRight">
                        <span>￥{{good.price}}</span>
                        <span class="num">x{{good.count}}</span>
                    </div>
                </div>
                <div class="bot">
                    <ul class="uls">
                        <li class="waya">
                            <div>
                                <span class="way wayc">配送方式</span>
                                <span class="usua">普通配送</span>
                            </div>
                            <div>
                                <span class="way">快递免邮</span>
                                <i class="el-icon-arrow-right"></i>
                            </div>
                            
                        </li>
                        <li>
                            <div class="way wayd">
                                <img src="../assets/img/icon02.jpg" alt="" class="wayb">
                                <span class="aa">运险费</span>
                                <p class="usua huaSuan">聚划算卖家赠送，若确认收货前退货，可获保险赔付</p>
                            </div>
                            <i class="el-icon-arrow-right"></i>
                        </li>
                        <li class="waya">
                            <div>
                                <span class="way wayc">订单备注</span>
                                <!-- <span class="usua">选填，请先和商家协商一致</span> -->
                                <input type="text" class="inputUsua" placeholder="选填，请先和商家协商一致">
                            </div>
                            
                            <i class="el-icon-arrow-right"></i>
                        </li>
                        <div class="xiaoJi">
                            <span class="jianShu">共{{$store.state.count}}件</span>
                            <span class="xiao">小计：</span>
                            <span class="price">￥{{$store.state.money}}</span>
                        </div>
                    </ul>
                </div>
            </div>
            <div class="huaBei">
                <!-- <div class="huaL">
                    <div>
                        <img class="mianXi" src="../assets/img/icon06.jpg" alt="">
                        <span class="mianXi">红包</span>
                    </div>
                    <div>
                        <span>-￥2.00</span>
                        <i class="el-icon-arrow-right"></i>
                    </div>
                </div> -->
                <div class="huaR">
                    <div>
                        <img class="mianXi" src="../assets/img/icon05.jpg" alt="">
                        <span class="mianXi">花呗分期（最高六期免息）</span>
                    </div>
                    <img src="../assets/img/cricle.jpg" alt="">
                </div>
            </div>
            <div class="niMingBox">
                <img src="../assets/img/icon04.jpg" alt="" class="niMing">
                <span>匿名购买</span>
            </div>
        </div>
        <div class="conFooter">
            <div class="heji">
                <p>
                    <span class="allNum">共 {{$store.state.count}} 件，</span>
                    <span class="allMon">合计：</span>
                    <span class="allPri">￥{{$store.state.money}}</span>
                </p>
                <!-- <p class="sheng">已使用红包，节省1.80元</p> -->
            </div>
            <p class="order" @click="pay($store.state.money)">提交订单</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"QAddress",
    data(){
        return {
            temps:[]
        }
    },
    created(){
         axios.get('/addressList')
            .then((response)=> {
                let temp=response.data;
                temp.forEach(item=>{
                    if(item.default==true){
                        this.temps.push(item)
                    }
                })
                console.log(this.temps)
            })
            .catch(err=>{
                console.log(err)
            })
    },
    methods:{
        pay(money){
            this.$router.push({path:'/QDPay',query:{money:money}})
        }
    }
}
</script>

<style lang="scss" scoped>
.addRes{
    width:92%;
    height: 1.18rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    margin:0 auto;
    border-radius: .1rem;
    margin-bottom:.12rem;
    padding-right: .1rem;
    padding-left:.12rem;
    box-sizing: border-box;
        .adressImg{
            width:.35rem;
            height: .35rem;
            margin-right:.12rem;
        }
   
    .midInfo{
        // width:2.47rem;
        .myName{
            font-size: .14rem;
            color:#585858;
            margin-right: .05rem;
        }
        .tel{
            color:#b5b5b5;
        }
        .myadress{
            font-size: .12rem;
            color:#676767;
            margin-top:.13rem;
            margin-bottom:.13rem;
            letter-spacing: .01rem;
        }
        .zancun{
            font-size: .12rem;
            color:#ff8e58;
            letter-spacing: .01rem;
        }
    }
    i{
        font-size:.2rem;
    }
}
.main{
    overflow-x:auto;
    margin-bottom: .53rem;
}
.addContent{
    width:92%;
    background: #fff;
    margin:0 auto;
    padding-left:.1rem;
    padding-right:.1rem;
    box-sizing: border-box;
    border-radius: .1rem;
    padding-bottom: .19rem;
    margin-bottom: .1rem;
    .top{
        height: .52rem;
        display: flex;
        align-items: center;
        .Qlogo{
            width:.25rem;
            height: .25rem;
            margin-right: .1rem;
        }
        span{
            letter-spacing: .01rem;
            font-size: .12rem;
            color:#4e4e4e;
        }
    }
    .conInfo{
        display:flex;
        justify-content: space-around;
        margin-bottom: .15rem;
        .shopImg{
            width:.94rem;
            height: .94rem;
            margin-right: .12rem;
        }
        .infoMid{
            margin-right: .1rem;
            .desc{
                color:#525252;
                font-size: .12rem;
            }
            .guiGe{
                background:#fafafa;
                font-size: .12rem;
                color:#aaaaaa;
                margin-top: .05rem;
                margin-bottom: .05rem;
            }
            .time{
                font-size: .12rem;
                color:coral;
            }
        }
        .conRight{
            span{
                font-size: .12rem;
                color:#525252;
            }
            .num{
                float: right;
            }
        }
    }
    .bot{
        .uls{
            padding-left: .25rem;
            li{
                margin-top: .34rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .way{
                    font-size: .12rem;
                    color:#4c4c4c;
                    margin-right: .14rem;
                    i{
                        font-size: .1rem;
                    }
                }
                .wayd{
                    display: flex;
                    align-items: center;
                    .huaSuan{
                        font-size: .12rem;
                        width:1.85rem;
                        color:#a2a2a2;
                        margin-left: .2rem;
                    }
                }
                .wayb{
                    width:.15rem;
                    height: .15rem;
                    float: left;
                    margin-right: .05rem;
                }
                .wayc{
                    margin-left: .1rem;
                }
                .usua{
                    font-size: .12rem;
                    width:1.85rem;
                    color:#a2a2a2;
                }
                i{
                    color:#cdcdcd;
                    font-size: .2rem;
                }
                .inputUsua{
                    font-size: .12rem;
                    width:1.85rem;
                    color:#a2a2a2;
                    outline: none;
                    border:none;
                }
            }
            .xiaoJi{
                margin-top:.34rem;
                display: flex;
                justify-content: flex-end;
                font-size: .12rem;
                .jianShu{
                    color:#c7c7c7;
                }
                .xiao{
                    color:#5e5e5e;
                    margin-left: .1rem;
                    margin-right: .05rem;
                }
                .price{
                    color:#ed7843;
                    font-size: .14rem;
                }
            }
        }
    }
}
.huaBei{
    width:92%;
    background: #fff;
    margin:0 auto;
    padding-left:.1rem;
    padding-right:.1rem;
    box-sizing: border-box;
    border-radius: .1rem;
    margin-top:.12rem;
    color:#555555;
    font-size: .12rem;
    .huaL{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .44rem;
    }
    .huaR{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .44rem;
    }
    .mianXi{
        float: left;
    }
    img{
        width:.2rem;
        height: .2rem;
    }
}
.niMingBox{
    display: flex;
    justify-content:flex-start;
    padding-left: .24rem;
    margin-top:.12rem;
    margin-bottom: .12rem;
    .niMing{
        width:.2rem;
        height: .2rem;
        margin-right: .1rem;
    }
    span{
        color:#b7b7b7;
        font-size: .12rem;
    }
}

.conFooter{
    width: 100%;
    position: fixed;
    bottom: 0;
    height:.53rem;
    display:flex;
    background: #fff;
    padding-right: .1rem;
    box-sizing:border-box;
    justify-content: flex-end;
    align-items: center;
    .heji{
        p{
            .allNum{
                font-size: .12rem;
                color:#ababab;
            }
            .allMon{
                font-size: .14rem;
                color:#515151;
            }
            .allPri{
                font-size: .14rem;
                color:#fb6c2a;
            }
        }
        .sheng{
            font-size: .12rem;
            color:#6c6c6c;
            margin-top: .05rem;
        }
    }
    .order{
        width:1.04rem;
        height: .41rem;
        line-height: .41rem;
        text-align: center;
        color:#fff5ea;
        display: block;
        background: #ff5500;
        border-radius: .2rem;
        margin-left: .1rem;
    }
}

</style>