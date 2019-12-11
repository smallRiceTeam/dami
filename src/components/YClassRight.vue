<!--
 * @Author: yx
 * @Date: 2019-11-19 22:52:03
 * @LastEditors: yx
 * @LastEditTime: 2019-12-05 19:51:59
 * @Description: 分类侧边栏
 -->

<template>
    <div class="box">
        <div style="display:none" >{{typeid}}</div>
        <div v-for="(item,index) in classRight" :key="index"> 
            <div >
                <div class="bigImg">
                    <img :src="item.bannerimg" alt="">
                </div>
            </div>
            <div>
                <h3>{{item.name1}}</h3>
                <ul>
                    <li v-for="(shop,index) in item.shopList1" :key="index">
                       <router-link :to="'/YDetails/'+shop.shopid">
                            <img :src="shop.img" alt="">
                            <span>{{shop.name}}</span>
                       </router-link>
                    </li>
                </ul>
                <h3>{{item.name2}}</h3>
                <ul>
                    <li v-for="(shop,index) in item.shopList2" :key="index">
                        <router-link to="/YDetails">
                            <img :src="shop.img" alt="">
                            <span>{{shop.name}}</span>
                       </router-link>
                    </li>
                </ul>
                <h3>{{item.name3}}</h3>
                <ul>
                    <li v-for="(shop,index) in item.shopList3" :key="index">
                        <router-link to="/YDetails">
                            <img :src="shop.img" alt="">
                            <span>{{shop.name}}</span>
                       </router-link>
                    </li>
                </ul>
                 <h3>{{item.name4}}</h3>
                <ul>
                    <li v-for="(shop,index) in item.shopList4" :key="index">
                        <router-link to="/YDetails">
                            <img :src="shop.img" alt="">
                            <span>{{shop.name}}</span>
                      </router-link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'YClassRight',
    props:['typeid'],
    data () {
        return {
        list:[],
        classRight:[]
        }
    },
    created() {
        axios('/api/classRight')
        .then(res=>{
            this.list = res.data;
            let listArr = [];
            for(let i in this.list){
                if(this.list[i].classLeftId==this.typeid){
                    listArr.push(this.list[i]);
                }
            }
            this.classRight = listArr;
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods: {
        getlist(data){
            let listArr = [];
            for(let i in this.list){
                if(this.list[i].classLeftId==this.typeid){
                    listArr.push(this.list[i]);
                    // console.log(listArr);
                }
            }
            return listArr
            
        }
    },
    beforeUpdate() {
        this.classRight = this.getlist(this.list)
        //  console.log(this.typeid)
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.box{
    /* width: 23%; */
    overflow: hidden;
    margin-left: 23%;
    margin-bottom: 0.5rem;
    /* background: yellow; */
}
ul{
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* display: flex;
    justify-content: space-around;
    flex-wrap: wrap; */
}
li{
    width: 33%;
    height: 1rem;
    text-align: center;
    float: left;
    margin-top: 0.18rem;
}
li img{
    width: 0.7rem;
}
li span{
    display: inline-block;
    width: 100%;
    font-size: 0.12rem;
    color: #999;
}
h3{
    font-weight: normal;
    width:100%;
    text-align: center;
    position: relative;
    margin-top: 0.3rem;
    color: #666;
    font-size: 0.16rem;
}
.bigImg{
    width: 100%;
    overflow: hidden;
}
.bigImg img{
    display: block;
    width: 90%;
    height: 1rem;
    margin: 0 auto;
    padding-top: 0.09rem;
}

</style>
