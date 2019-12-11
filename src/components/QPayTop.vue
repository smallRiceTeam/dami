<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-12-07 18:13:15
 -->
<template>
    <div class="b_box">
         <Back class="aa"></Back>
         <span class="queRen">支付</span> 
    </div>
</template>

<script>
import Back from '../components/Back';
export default {
    name:"QPayTop",
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
    text-align: center;
    align-items: center;
    background: #fff;
}
.aa{
    margin-right: 1.34rem;
    float: left;
}
.queRen{
    font-size: .16rem;
    color:#000000;
    float: left;
}
</style>