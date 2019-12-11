<!--
 * @Author: yx
 * @Date: 2019-11-19 17:38:03
 * @LastEditors: yx
 * @LastEditTime: 2019-12-05 20:55:56
 * @Description: 
 -->
<template>
  <div id="app">
      
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
  height:100%;
}
body{
  font-size: 14px;
  height: 100%;
  /* font-family: helvetica; */
}

ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
i{
  font-style: normal;
}
</style>
