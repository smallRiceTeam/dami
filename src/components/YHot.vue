<!--
 * @Author: yx
 * @Date: 2019-11-30 14:18:06
 * @LastEditors: yx
 * @LastEditTime: 2019-11-30 14:58:48
 * @Description: 
 -->
<template>
  <div :style="{height:height*lineNum + 'px'}" class="rollScreen_container" id ="rollScreen_container">
    <ul class="rollScreen_list" :style = {transform:transform} :class="{rollScreen_list_unanim:num===0}">
      <li class="rollScreen_once" v-for="(item,index) in contentArr" :key="index" :style="{height:height+'px'}">
        <span>{{item}}</span>
      </li>
      <li class="rollScreen_once" v-for="(item,index) in contentArr" :key="index+contentArr.length" :style="{height:height+'px'}">
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
name:'YHot',
  props: {
    height: {
      default: 40,
      type: Number
    },
    lineNum: {
      default: 1,
      type: Number
    }
  },
  data: function () {
    return {
      contentArr: ['本周新鲜大事，我绝不允许你再错过了', '小米米家翻译机，你的随身“同声传译”', '打造小清新的家？一步，小米之家搬回家', 'Redmi K30 5G先锋即将发布！','星球周报上线，一周趣闻就看这里！'],
      num: 0
    }
  },
  computed: {
    transform: function () {
      return 'translateY(-' + this.num * this.height + 'px)'
    }
  },
  created: function () {
    let _this = this
    setInterval(function () {
      if (_this.num !== _this.contentArr.length) {
        _this.num++
      } else {
        _this.num = 0
      }
    }, 3000)
  }
}
</script>
 
<style scoped>
  .rollScreen_container{
    display: inline-block;
    position:relative;
    overflow: hidden;
    /* margin-top: 0.2rem; */
  }
  .rollScreen_list{
    transition: 1s linear;
  }
  .rollScreen_list_unanim{
    transition: none;
  }
</style>