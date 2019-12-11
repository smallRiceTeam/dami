<!--
 * @Description: 
 * @Author: 张涛
 * @Date: 2019-12-03 10:23:52
<<<<<<< HEAD
 * @LastEditors: 张涛
 * @LastEditTime: 2019-12-03 11:22:56
 -->
<template>
    <!--左箭头-->   
    <router-link to="">
        <i class="el-icon-arrow-left" @touchend="back()"></i>
=======
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-07 17:28:03
 -->
<template>
    <!--左箭头-->   
    <router-link to="/Wstart/">
        <i class="el-icon-arrow-left"></i>
>>>>>>> wwt
    </router-link>
</template>

<script>

export default {
  name: 'Back',
  data () {
    return {
      
    }
  },
  methods:{
      back(){
<<<<<<< HEAD
          this.$router.go(-1);
=======
          this.$router.push("/Wstart/");
>>>>>>> wwt
      }
  }
}
</script>

<style scoped lang="scss">
i{
<<<<<<< HEAD
    // width: .25rem;
    // height: .25rem;
    font-size: 22px;
    margin: 0 5px;
    color: #9a9a9a;
=======
    font-size: 22px;
    color: #9a9a9a;
    display: block;
>>>>>>> wwt
}

</style>
