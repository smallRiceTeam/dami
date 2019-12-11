<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-26 15:22:05
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-12-06 16:50:38
 -->

<template>
    <div class="shopBox">
            <div class="dizhi" v-for="temp in temps">
                <div class="first"  @click="moRen(item)">
                    <span>默认</span>
                    <p class="addressName">{{temp.address}}</p>
                    <p class="addressNum">{{temp.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{temp.mobile}}</p>
                </div>
                <div @click="edit(temp)">
                    <i class="el-icon-edit-outline"></i>
                </div>
            </div>
            <div class="dizhi" v-for="(item, index) in addressList" :key="index">
                <div class="first" @click="moRen(item)">
                    <p class="addressName">{{item.address}}</p>
                    <p class="addressNum">{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.mobile}}</p>
                </div>
                <div @click="edit(item)">
                    <i class="el-icon-edit-outline"></i>
                </div>
            </div>
        <router-link to="/QShopAddress">
            <button class="add-btn">新增地址</button>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"QShopAddress",
    data(){
        return{
            temps:[],
            addressList:[],
        }
    },
    created(){
        axios.get('/addressList')
            .then((response)=> {
                let temp=response.data;
                temp.forEach(item=>{
                    if(item.default==true){
                        this.temps.push(item)
                    }else{
                        this.addressList.push(item)
                    }
                })
            })
            .catch(err=>{
                console.log(err)
            })
            console.log(this.temps)
            this.$store.commit('allTemp',this.temps);
    },
     methods:{
        edit(item){
            this.$router.push({path:'/QShopAddress',query:{item:item}})
        },
        moRen(item){
            this.$router.push({path:'/QJiesuan',query:{item:item}})
        }
    }
}
</script>

<style scoped>
.shopBox{
    width:100%;
    background: #fff;
}
.dizhi{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    padding: .12rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ebecf2;
}
.el-icon-edit-outline{
    font-size: .22rem;
}
.addressName{
    font-size: .14rem;
    color:#303133;
    margin-bottom: .1rem;
}
.addressNum{
    color:#8e9397;
}
.add-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3.5rem;
		height:.4rem;
		margin:.3rem auto;
		font-size:.14rem;
		color: #fff;
		background-color:#fa436a;
		border-radius: .05rem;
        border:none;
        outline: none;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>