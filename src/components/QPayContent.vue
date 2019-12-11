<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-12-07 11:26:36
 -->
<template>
    <div class="b_box">
        <div class="main">
            <p class="money">支付金额</p>
            <P class="price">￥{{money}}</P>
            <ul>
                <li>
                    <img class="left" src="../assets/img/pic002.jpg" alt="">
                    <div class="mid">
                        <p class="first">微信支付</p>
                        <p class="second">推荐使用微信支付</p>
                    </div>
                    <!-- <img class="right" src="../assets/img/pic005.jpg" alt=""> -->
                   <mt-checklist class="check"
                    v-model="value"
                    :options="[' ']">
                    </mt-checklist>
                </li>
                <li>
                    <img class="left" src="../assets/img/pic002.jpg" alt="">
                    <div class="mid">
                        <p class="third">支付宝支付</p>
                    </div>
                    <!-- <img class="right" src="../assets/img/pic005.jpg" alt=""> -->
                    <mt-checklist class="check"
                    v-model="value"
                    :options="['  ']">
                    </mt-checklist>
                </li>
                <li>
                    <img class="left" src="../assets/img/pic002.jpg" alt="">
                    <div class="mid">
                        <p class="first">预存款支付</p>
                        <p class="second">可用余额￥198.5</p>
                    </div>
                    <!-- <img class="right" src="../assets/img/pic005.jpg" alt=""> -->
                    <mt-checklist class="check"
                    v-model="value"
                    :options="['']">
                    </mt-checklist>
                </li>
            </ul>
            <input type="button" class="add-btn" value="确认支付">
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Checklist } from 'mint-ui';
Vue.component(Checklist.name, Checklist);
export default {
    name:"QPayContent",
    data(){
        return {
            value:[false,true],
            money:0
        }
    },
    created(){
        this.money = this.$route.query.money
    }
}
</script>

<style lang="scss" scoped>
.b_box{
    width: 100%;
    height: 100%;

}
.main{
    
    // line-height: 3.2rem;
    .money{
        color:#a2a5ab;
        font-size: .16rem;
        margin-top: .88rem;
        margin-bottom: .18rem;
        text-align: center;
    }
    .price{
        color:#1b1c1e;
        font-size: .18rem;
        font-weight: 600;
        margin-bottom: .53rem;
        text-align: center;

    }
    ul{
        li{
            height: .55rem;
            margin-bottom:1px solid #ebecf2; 
            .left{
                float: left;
            }
            .check{
                border: none;
            }
            .first{
                margin-bottom: .1rem;
            }
            .mid{
                text-indent: .2rem;
                width:2rem;
                float: left;
                .third{
                    line-height: .55rem;
                    height:.55rem;
                }
            }
            .second{
                color:#a7a7ad;
            }
            .right{
                float: right;
            }
        }
       
    }
    img{
        width: .3rem;
        height: .3rem;
        margin-top:.125rem;
    }
}
.add-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3.5rem;
		height:.4rem;
		margin:0 auto;
        margin-top: .8rem;
		font-size:.14rem;
		color: #fff;
		background-color:#fa436a;
		border-radius: .05rem;
        border:none;
        outline: none;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
    .check{
        float: right;
        height: 10px;
        width: 42px;
        border-top: 2px solid #fff !important;
        background-image: none;
    }
</style>