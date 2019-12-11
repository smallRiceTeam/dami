<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-26 15:22:05
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-12-04 20:15:31
 -->

<template>
    <div class="shopBox">
        <QEditAddressTop class="addTop"></QEditAddressTop>
        <QEditAddress></QEditAddress>
    </div>
</template>

<script>
import QEditAddress from '../components/QEditAddress';
import QEditAddressTop from '../components/QEditAddressTop';

export default {
    name:"QShopAddress",
    data(){
        return{
           
        }
    },
    components:{
       QEditAddress,QEditAddressTop
    },
}
</script>

<style scoped>

.shopBox{
    background: #fafafa;
    min-height: 6.4rem;
}
.addTop{
    height: .44rem;;
    position: sticky;
    top:0;
}
</style>