<!--
 * @Description: 星球搜索
 * @Author: 张涛
 * @Date: 2019-12-05 17:52:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-07 17:08:05
 -->
<template>
   <div class="s" >
      <div class="search">
            <Back></Back>
            <input id="Tinput" type="text" placeholder="搜索" autofocus="autofocus">
            <i class="el-icon-error" ></i> 
      </div>
   </div>
</template>
            
<script>

import Back from './Back';
import axios from 'axios';

export default {
   data() {
      return {
      }
   },
   components:{
        Back
    },
}
</script>
            
<style scoped lang="scss">
.s{
   height: .6rem;
   width: 100%;
   display: flex;
   position: relative;
   align-items: center;
   background: #f6f6f6;
}
.search{
   height: .4rem;
   width: 100%;
   display: flex;
   position: relative;
   align-items: center;
   border: 1px solid #e5e5e5;
   border-radius: 5px;
   background: #f0f0f0;
   margin: 0 .1rem 0 .2rem;
    input{
      border:0;
      width: 90%;
      height: .4rem;
      font-size: 18px;
      outline: none;
      color: #9a9a9a;
      background: #f0f0f0;
    }
    i{
      color:#c0c0c0;
      position: absolute;
      right:5px;
      font-size: 20px;
    }

}
</style>
