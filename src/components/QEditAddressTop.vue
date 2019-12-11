<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-09 11:39:02
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-12-04 20:16:02
 -->
<template>
    <div class="b_box">
        <Back class="aa"></Back>
        <span class="queRen">编辑收货地址</span>
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
    display: flex;
    text-align: center;
    align-items: center;
    background: #fff;
}
.aa{
    margin-left: .1rem;
    margin-right: 1rem;
}
.queRen{
    font-size: .16rem;
    color:#000000;
    float: left;
}
</style>