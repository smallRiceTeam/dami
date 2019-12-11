<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-26 15:22:05
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-12-02 18:51:45
 -->

<template>
    <div class="shopBox">
        <QshoppingContent></QshoppingContent>
    </div>
</template>

<script>
import QshoppingContent from '../components/QshoppingContent';

export default {
    name:"QShoppingCar",
    data(){
        return{
           
        }
    },
    components:{
       QshoppingContent
    },
}
</script>

<style scoped>

.shopBox{
    background: #fafafa;
}
</style>