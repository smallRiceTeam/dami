<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-12-04 19:32:24
 -->
<template>
    <div class="b_box">
        <Back></Back>
        <span class="queRen">确认订单</span>
    </div>
</template>

<script>
import Back from '../components/Back';

export default {
    name:"QJieSuanTop",
    data(){
        return {

        }
    },
    components:{
        Back
    }

}
</script>

<style lang="scss" scoped>
.b_box{
    height: .62rem;
    display: flex;
    align-items: center;
    position: sticky;
    top:0;
    background: #f2f2f2;
}
.queRen{
    font-size: .12rem;
    color:#535353;
}
</style>