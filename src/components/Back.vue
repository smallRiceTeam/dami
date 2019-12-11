<!--
 * @Description: 
 * @Author: 张涛
 * @Date: 2019-12-03 10:23:52
 * @LastEditors: 张涛
 * @LastEditTime: 2019-12-03 11:22:56
 -->
<template>
    <!--左箭头-->   
    <router-link to="">
        <i class="el-icon-arrow-left" @touchend="back()"></i>
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
          this.$router.go(-1);
      }
  }
}
</script>

<style scoped lang="scss">
i{
    // width: .25rem;
    // height: .25rem;
    font-size: 22px;
    margin: 0 5px;
    color: #9a9a9a;
}

</style>
