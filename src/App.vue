<!--
<<<<<<< HEAD
 * @Author: yx
 * @Date: 2019-11-19 17:38:03
 * @LastEditors: yx
 * @LastEditTime: 2019-12-05 20:55:56
 * @Description: 
 -->
<template>
  <div id="app">
      
    <router-view/>
=======
 * @Author: your name
 * @Date: 2019-11-26 13:32:06
 * @LastEditTime: 2019-12-04 16:02:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \newxmsc\src\App.vue
 -->
<template>
  <div>
    <transition name="component-fade" mode="out-in">
      <router-view/>
    </transition>
>>>>>>> wwt
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
<<<<<<< HEAD
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
=======
a,
input,
button {
  /*清除点击阴影*/
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
input,
button {
  /*清除圆角*/
  -webkit-appearance: none;
  border-radius: 0;
}
body {
  margin: 0;
  /*禁止选中文字*/
  -webkit-user-select: none;
}
body * {
  -webkit-user-select: none;
  /*默认字体*/
  font-family: helvetica;
}
body {
  /*用户横竖屏切换的时候，禁止字体缩放*/
  -webkit-text-size-adjust: 100%;
}
h1 {
  margin: 0;
}
a {
  text-decoration: none;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
img,i{
  vertical-align: top;
}
i{
  vertical-align: top;
}
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
}
.component-fade-enter-active, .component-fade-leave-active {
    /* transition: opacity .5s ease; */
    transition: all .5s ease; 
}
.component-fade-enter, .component-fade-leave-to {
    /* opacity: 0; */
    transform:translateX(-100%);
>>>>>>> wwt
}
</style>
