<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-12-04 19:42:22
 -->
<template>
    <div class="QshoppingContent">
        <!-- <div style="display:none">{{scroll}}</div> -->
        <div class="mainTop">
            <div class="top" v-show="!isMsg">
                <div class="topL">
                    <span class="gouwu">购物车</span>
                    <p class="guanli" @click="mydelete()">编辑</p>
                </div>
                <div class="bottom">
                    <span class="baobei">共49件宝贝</span>
                </div>
            </div>
            <div class="oldTop" v-show="isMsg">
                <span class="topa">购物车（46）</span>
                <span class="topb" @click="mydelete()">编辑</span>     
            </div>
        </div>
      
        <div class="content">
            <ul>
                <li class="lis" v-for="(shop,index) in shops" :key="index">
                    <div class="contTop">
                        <el-checkbox v-model="shop.isBeiXuan"  class="check" @change="checkAll(index)"></el-checkbox>
                        <img src="../assets/img/Qlogo.jpg" alt="" class="logo">
                        <span class="shopName">{{shop.name}}</span>
                        <img src="../assets/img/next.jpg" alt="">
                    </div>
                    <div class="contMid" v-for="(good,i) in shop.goods" :key="i">
                        <el-checkbox class="check" v-model="good.isBeiXuan" @change="dianJi(index)"></el-checkbox>
                        <img :src="good.img" alt="" class="shopImg">
                        <div class="contRig">
                            <p>{{good.desc}}</p>
                            <div class="desc">
                                <span>大众版720P（不含内存卡）</span>
                                <img src="../assets/img/next.jpg" alt="">
                            </div>
                            <div class="change">
                                <span >￥{{good.price}}</span>
                                <div class="changeNum">
                                        <p class="count"><el-input-number size="mini" :min="1" v-model="good.count"></el-input-number></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="QSF">
            <div class="QShoppingFooter">
                <div class="footerL">
                    <el-checkbox  v-model="allcheck"  @change="Allcheck">全选</el-checkbox>
                </div>
                <div class="footerR" v-show="isShow">
                    合&nbsp;&nbsp;计：<span>￥{{totalMoney}}</span>
                    <!-- <p v-show="isShow">结算</p> -->
                    <input type="button" value="结算" class="jiesuan" @click="toJieSuan()">
                </div>
                <div class="delete" v-show="!isShow">
                    <p class="qingli">
                        <img src="../assets/img/icon01.jpg" alt="">
                        <span>清理</span>
                    </p>
                    <input type="button" value="移入收藏夹" class="shouC" @click="movejia()">
                    <input type="button" value="删除" @click="myremoved()" class="deleRom">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import axios from 'axios';

export default {
    name:"Back",
    props:['scroll'],
    data(){
        return {
            isShow:true,
            allcheck:false,
            isXuan:false,
            isdelete:false,
            shops:[],
            isMsg:false,
            xuanGoods:[],
            goods:[],
            jieSuan:false
        }
    },
    created(){
        axios.get('/shops')
        .then((response)=> {
            let tempgoods = response.data;
            //给每个店铺增加属性 isBeiXuan
            let isBeiXuan = false;
            for(let i in tempgoods){
                tempgoods[i].isBeiXuan = false;
                for(let a in tempgoods[i].goods){
                    tempgoods[i].goods[a].isBeiXuan = false;
                }
            }
            this.shops = tempgoods;
        })
        .catch(err=>{
            console.log(err)
        })
    },
    computed:{
        totalMoney:function (index) {          
            let money=0;
            let count=0
            for(let i in this.shops){
                for(let a in this.shops[i].goods){
                    if(this.shops[i].goods[a].isBeiXuan == true){
                        money+=this.shops[i].goods[a].count*this.shops[i].goods[a].price;
                        //重新定义一个count ，将count存放到vuex仓库中
                        count+=Number(this.shops[i].goods[a].count)
                    }
                }
            }
            // console.log(count)
            this.$store.commit('AllCount',count)
            this.$store.commit('AllMoney',money)
            return money;
        },
    },
    mounted(){ //给window添加一个滚动滚动监听事件
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed(){ //离开该页面需要移除这个监听的事件
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods:{
        handleScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop >= 30) {
                this.isMsg = true;
            }else{
                this.isMsg = false;
            }
        },
        //点击编辑时，让结算出来
        mydelete(){
            this.isShow = !this.isShow; 
        },
        //点击全选时
        Allcheck(){
            for(let i=0;i<this.shops.length;i++){
                //让所有店铺下的所有商品选中
                this.shops[i].isBeiXuan = this.allcheck;
                // this.checkAll(i);
                this.shops[i].goods.forEach(item=>{
                item.isBeiXuan = this.allcheck;
            })
            } 
        },
        //点击店铺时
        checkAll(index){
            // console.log(id);
            this.shops[index].goods.forEach(item=>{
                item.isBeiXuan=this.shops[index].isBeiXuan;
            })
            this.isAllCheck();
        },
        //点击商品时
        dianJi(index){

            //1、判断商品对应的商店是否要选中
            let all = true;
            this.shops[index].goods.forEach(item=>{
                if(item.isBeiXuan==false){
                    all=false;
                }else{
                    this.goods.push(item);
                }
            });
            this.shops[index].isBeiXuan= all;
            //2.判断全选是否要选中
            this.isAllCheck();
        },
        //判断全选是否要选中
        isAllCheck(){
            let per = true;
             this.shops.forEach(item=>{
                if(item.isBeiXuan==false){
                    per=false;
                }
            });
            this.allcheck= per;
        },
        //点击收藏时
         movejia(){
            for(var i in this.shops){
                for(var a in this.shops[i].goods){
                        if(this.shops[i].goods[a].isBeiXuan == true){
                        this.isXuan = !this.isXuan;
                        return;
                    }
                }
               
            }
            if(!this.isXuan){
                Toast({
                    message: '你还没有收藏宝贝哦！',
                    position: 'bottom',
                    duration: 3000
                    });
            }
        },
        //点击删除时
         myremoved(){
            for(var i in this.shops){
                this.shops=this.shops.filter(item=>{
                    return item.isBeiXuan == false;
                })
                for(var a in this.shops[i].goods){
                    if(this.shops[i].goods[a].isBeiXuan == true){
                        this.isdelete = !this.isdelete;
                    }
                    this.shops[i].goods=this.shops[i].goods.filter(item=>{
                        return item.isBeiXuan == false;
                    })
                }
            }
            if(!this.isdelete){
                Toast({
                    message: '你还没有选择宝贝哦！',
                    position: 'bottom',
                    duration: 3000
                    });
            }
        },
        //点击结算时
        toJieSuan(){
            for(let i in this.goods){
                if(this.goods[i].isBeiXuan == true){
                    this.$router.push({path:'/QJiesuan'})
                    this.jieSuan = !this.jieSuan;
                    this.$store.commit('buyGoods',this.goods[i])                    
                }
            }
            if(!this.jieSuan){
                Toast({
                    message: '你还没有选购宝贝哦！',
                    position: 'bottom',
                    duration: 3000
                    });
            }
        }
           
    },
}
</script>
<style scoped>
.QshoppingContent{
    width: 95%;
    margin:0 auto;
}
.mainTop{
    width:100%;
    background: #fafafa;
    position: sticky;
    top:0;
    z-index:2;
}
.oldTop{
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    /* background:#fafafa; */
    position: relative;
    border:none;
}
.topa{
    font-size: .14rem;
}
.topb{
    /* float: right; */
    position: absolute;
    right:.16rem;
}
.top{
  width: 92%;
  height: .89rem;
  margin:0 auto;
 
}
#searchBar{
 position: sticky;
  top:0;
}
.topL{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:.55rem;
}
.gouwu{
  font-size: .2rem;
  font-weight: 900;
  color:#111111;
}
.guanli{
  font-size: .15rem;
  color:#141414;
}
.baobei{
  color:#838383;
}

.content ul .lis{
    width:100%;
    padding:0 .14rem;
    box-sizing: border-box;
    background: #fff;
    border-radius: .1rem;
    margin-bottom: .12rem;
}
.content img{
    width:.2rem;
    height: .2rem;
}
.contTop{
    height:.49rem;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    margin-bottom:.08rem;
    box-sizing: border-box;
}
.logo{
    margin: 0 .1rem;
}
.content .shopImg{
    width:.9rem;
    height: .9rem;
    margin:0 .13rem;
}
.shopName{
    margin-right: .1rem;
}
.contMid{
    display: flex;
    align-items: center;
    padding-bottom: .25rem;
}
.contRig p{
    font-size: .12rem;
}
.desc{
    background: #f9f9f9;
    /* height: .27rem; */
    border-radius: .05rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:.12rem;
    margin-bottom: .14rem;
    padding-left:.05rem;
}
.desc span{
    font-size: .12rem;
    color:#a7a7a7;
}
.btn{
    width:.25rem;
    height: .22rem;
    border:none;
    background: #fff;
    border:1px solid #e4e4e4;
    outline: none;
}
.val{
    width: .4rem;
    height: .22rem;
    border:none;
    outline: none;
    text-align: center;
    line-height: .22rem;
    border-top:1px solid #e4e4e4;
    border-bottom:1px solid #e4e4e4;
    box-sizing: border-box;
}
.change{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.change span{
    color:#f75a0b;
    font-weight:800;
}
.changeNum{
    display: flex;
    align-items: center;
}
.QSF{
    width:100%;
    background: #fff;
    position:sticky;
    bottom: 0;
    z-index:20;
}
.QShoppingFooter{
    width:95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 auto;
}
.footerL{
    height: .56rem;
    display: flex;
    align-items: center;
}
.footerL span{
    margin-left: .1rem;
}
.footerR{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.footerL img{
    width:.2rem;
    height: .2rem;
}
.footerR .jiesuan{
    width:.87rem;
    height: .42rem;
    border:none;
    outline:none;
    background: #ff7904;
    text-align: center;
    line-height: .42rem;
    border-radius: .5rem;
    color:#fffdf9;
    letter-spacing:.05rem;
    margin-left: .1rem;
}
.footerR span{
    color:#f49575;
}
.delete{
    display: flex;
    align-items: center;
}
.delete p{
    font-size: .12rem;
    margin-right: .1rem;
}
.delete img{
    width:.21rem;
    height: .21rem;
}
.delete .qingli{
    display: flex;
    justify-items: center;
}
.qingli span{
    font-size:.12rem;
    color:#919191;
    margin-left: .07rem;
    margin-right: .1rem;
    vertical-align: middle;
}
.delete .shouC{
    width:.87rem;
    height: .31rem;
    border:none;
    outline:none;
    font-size: .12rem;
    text-align: center;
    line-height: .31rem;
    border-radius: .2rem;
    color:#f79210;
    background: #fff;
    border:1px solid #f79210;
    margin-right: .1rem;
}
.delete .deleRom{
    width:.48rem;
    height: .31rem;
    border:none;
    outline:none;
    font-size: .12rem;
    text-align: center;
    line-height: .31rem;
    border-radius: .2rem;
    color:#f62f36;
    background: #fff;
    border:1px solid #f62f36;
    letter-spacing:.02rem;
}
</style>