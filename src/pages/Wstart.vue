<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-12-02 18:08:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
  <div>
      <Wtop></Wtop>
      <router-view class="hah"></router-view>
  </div>
</template>

<script>

import Wtop from "../components/Wstar/Wtop"

export default {
  name: 'WStar',
  components: {
    Wtop
  }
}
</script>

<style>
</style>
