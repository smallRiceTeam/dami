<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-27 20:55:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
  <div>
      <wminetop></wminetop>
      <wminebanner></wminebanner>
      <wpowerful></wpowerful>
  </div>
</template>

<script>

import wminetop from "../components/Wmine/Wminetop"
import wminebanner from "../components/Wmine/wminebanner"
import wpowerful from "../components/Wmine/wPowerful"
export default {
  name: 'Wminetop',
  components: {
    wminetop,wminebanner,wpowerful
  }
}
</script>

<style>

</style>