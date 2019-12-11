<!--
 * @Author: your name
 * @Date: 2019-11-26 10:13:58
 * @LastEditTime: 2019-12-02 18:06:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xmsc\src\components\w_star.vue
 -->
<template>
    <div>
      <Wbanner></Wbanner>
      <Whotlist></Whotlist>
      <wjingpubu class="wpubu"></wjingpubu>
    </div>
</template>

<script>

import Wbanner from "../Wstar/Wbanner"
import Whotlist from "../Wstar/Whotlist"
import wjingpubu from "../Wstar/wjingpubu"
export default {
  name: 'wremove',
  components: {
    Wbanner,Whotlist,wjingpubu
  }
}


</script>

<style lang="scss" scoped="" type="text/css">

*{
    margin: 0;
    padding: 0;
}
html,body{
    width: 100%;
    height: 100%;
}
.wpubu{
  background: rgb(129, 128, 128);
}
</style>