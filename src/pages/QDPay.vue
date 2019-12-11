<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-26 15:22:05
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-12-06 21:14:02
 -->

<template>
    <div class="Jiesuan">
        <QPayTop></QPayTop>
        <QPayContent></QPayContent>
    </div>
</template>

<script>
import QPayTop from '../components/QPayTop';
import QPayContent from '../components/QPayContent';

export default {
    name:"QJiesuan",
    data(){
        return{
           
        }
    },
    components:{
       QPayTop,QPayContent
    }
 
}
</script>

<style scoped>

.Jiesuan{
    width:100%;
    height: 100%;
    padding:.1rem;
    box-sizing: border-box;
}
</style>