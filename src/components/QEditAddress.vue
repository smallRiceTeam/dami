<!--
 * @Author: 赵新朋
 * @Date: 2019-11-14 08:50:56
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-12-06 20:11:32
 * @Description: 
 -->
<template>
    <div class="addbarBox">
        <p>
            <span>联系人</span>
            <input type="text" v-model="addressData.name" placeholder="收货人姓名" placeholder-class="placeholder">
        </p>
        <p>
            <span>手机号</span>
            <input type="text" v-model="addressData.mobile" placeholder="收货人手机号码" placeholder-class="placeholder">
        </p>
        <p>
            <span>地址</span>
            <input type="text" v-model="address" @click="tiaoZhuan">
            <i class="el-icon-location-outline"></i>
        </p>
        <p>
            <span>门牌号</span>
            <input type="text" v-model="addressData.area" placeholder="楼号、门牌" placeholder-class="placeholder">
        </p>
        <div class="switch" >
            <span>设为默认</span>
            <mt-switch class="switch" v-model="addressData.default"></mt-switch>
        </div>
        <button class="add-btn" @click="tiJiao()">提交</button>
    </div>
</template>
<script>
import { Checklist } from 'mint-ui';
import axios from 'axios';
import { Toast } from 'mint-ui';

export default {
    name:"QEditAddress",
    data(){
        return{
            addressData: {
                name: "",
                mobile: "",
                area:"",
                default:false
            },
            address:""
        }
    },
    created(){
        this.address=this.$store.state.address
        if(this.$route.query.item){
            this.addressData.name=this.$route.query.item.name,
            this.addressData.mobile=this.$route.query.item.mobile,
            this.addressData.address=this.$route.query.item.address,
            this.addressData.area=this.$route.query.item.area,
            this.addressData.default=this.$route.query.item.default
            this.$store.commit("save",this.addressData)
        }else{
            this.addressData = this.$store.state.addSave
        }
    },
    methods: {
        tiaoZhuan(){
            this.$router.push({path:'/QMap'})
        },
        tiJiao(){
            if(!this.addressData.name){
                Toast({
                    message: '请填写收货人姓名',
                    duration: 5000
                });
                return;
            }
            if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(this.addressData.mobile)){
                Toast({
                    message: '请输入正确的手机号码',
                    duration: 5000
                });
                return;
            }
            if(!this.address){
                Toast({
                    message: '请在地图选择所在位置',
                    duration: 5000
                });
                return;
            }
            if(!this.addressData.area){
                Toast({
                    message: '请填写门牌号信息',
                    duration: 5000
                });
                return;
            }
            //判断当前的地址是否选为默认
            if(this.addressData.default==true){
                let tr =this.$store.state.temps[0]
                tr.default=false
                //改变tr的"默认"属性，然后发送请求，修改数据库中的数据
                axios.patch('/addressList/'+tr.id,tr)
                .then(res => {
                    console.log("修改成功")
                })
            }
            //判断是否为传参过来的地址，如果是就修改
            if(this.$route.query.item){
                axios.patch('/addressList/'+this.$route.query.item.id,this.addressData)
                .then(res => {
                    this.addressData={}
                })
                this.$router.push({path:'/QReceiptAddress'})
            }else{
                //否则就添加到库中
                axios.post('/addressList',this.addressData)
                .then(res => {
                    this.addressData={}
                })
                this.$router.push({path:'/QReceiptAddress'})
            }
        },
    }
}
    
</script>
<style scoped>
.addbarBox{
    width: 100%;
    margin-top: .15rem;
}
p{
    width: 100%;
    height: .5rem;
    background-color: #fff;
    border-bottom:1px solid #e6e7ec;
}
span{
    float: left;
    width: .65rem;
    height: 100%;
    line-height: .5rem;
    font-size: 16px; 
    padding-left: 18px;   
}
.b{
    width: 2rem;
}

input{
    width: 2.4rem;
    border: none;
    outline: none;
    text-indent: 5px;
    font-size: 16px;
    float: left;
    height: 100%;
}
.switch{
    background-color: #fff;
    display: flex;
    padding-right: .1rem;
    justify-content: space-between;
    align-items: center;
    margin-top: .1rem;
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
    .el-icon-location-outline{
        font-size: .25rem;
        line-height: .5rem;
    }
</style>