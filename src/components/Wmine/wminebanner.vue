<!--
 * @Author: your name
 * @Date: 2019-11-26 10:13:58
 * @LastEditTime: 2019-11-27 20:52:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xmsc\src\components\w_star.vue
 -->
<template>
  <div id="wminebanner">
    <mt-swipe :auto="4000">
        <mt-swipe-item>
            <img src="../../assets/img/wminebanner.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../assets/img/wminebanner2.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../assets/img/wmingbanner3.jpg" alt="">
        </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script> 
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name: 'wminebanner',
}
</script>

<style lang="scss" scoped="" type="text/css">
#wminebanner{
    width: 100%;
    height: 1rem;
    border-bottom: 10px solid #f5f5f5;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>