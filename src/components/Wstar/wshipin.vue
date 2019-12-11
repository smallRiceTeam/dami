<!--
 * @Author: your name
 * @Date: 2019-11-26 10:13:58
 * @LastEditTime: 2019-12-02 18:06:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xmsc\src\components\w_star.vue
 -->
<template>
    <div>
      <wmovepb class="wmovepb"></wmovepb>
    </div>
</template>

<script>

import wmovepb from "../Wstar/wmovepb"
export default {
  name: 'wremove',
  components: {
    wmovepb
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
.wmovepb{
  background: rgb(114, 113, 113);
}
</style>