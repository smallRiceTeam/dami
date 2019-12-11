<!--
 * @Description: 
 * @Author: 祁冬梅
 * @Date: 2019-11-26 15:22:05
 * @LastEditors: 祁冬梅
 * @LastEditTime: 2019-12-04 19:28:39
 -->

<template>
    <div class="Jiesuan">
        <QJieSuanTop></QJieSuanTop>
        <QJieSuanContent></QJieSuanContent>
    </div>
</template>

<script>
import QJieSuanTop from '../components/QJieSuanTop';
import QJieSuanContent from '../components/QJieSuanContent';

export default {
    name:"QJiesuan",
    data(){
        return{
           
        }
    },
    components:{
       QJieSuanTop,QJieSuanContent
    }
 
}
</script>

<style scoped>

.Jiesuan{
    background: #f2f2f2;
    min-height: 6.5rem;
}
</style>