<!--
 * @Description: 
 * @Author: 张涛
 * @Date: 2019-12-03 10:23:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-07 17:28:03
 -->
<template>
    <!--左箭头-->   
    <router-link to="/Wstart/">
        <i class="el-icon-arrow-left"></i>
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
          this.$router.push("/Wstart/");
      }
  }
}
</script>

<style scoped lang="scss">
i{
    font-size: 22px;
    color: #9a9a9a;
    display: block;
}

</style>
