<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-26 15:22:05
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-12-04 21:04:54
 -->

<template>
    <div class="shopBox">
        <QEditAddressTop class="addTop"></QEditAddressTop>
        <QRecAddressContent></QRecAddressContent>
    </div>
</template>

<script>
import QRecAddressContent from '../components/QRecAddressContent';
import QEditAddressTop from '../components/QEditAddressTop';

export default {
    name:"QShopAddress",
    data(){
        return{
           
        }
    },
    components:{
       QRecAddressContent,QEditAddressTop
    },
}
</script>

<style scoped>
.addTop{
    height: .44rem;;
    position: sticky;
    top:0;
    border-bottom: 1px solid #ebecf2;
}
</style>