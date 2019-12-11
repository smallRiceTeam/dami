<!--
 * @Author: your name
 * @Date: 2019-11-26 10:13:58
 * @LastEditTime: 2019-12-07 17:04:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xmsc\src\components\w_star.vue
 -->
<template>
  <div id="wtop">
      <div class="wbox">
        <i class="iconfont icon-yonghu" @click="wgologin"></i>
        <ul class="wul">
          <li :class="isactive==index?'red':''" v-for="(item,index) in footers" :key="index" @touchstart='clk(index)' @click="wtuijian(index)">
              <span class="wspan">{{item.title}}</span>  
          </li>
        </ul>
      </div>
      <input class="wsearch_star" type="text" placeholder="晒出一亿像素" @click="wserch">
      <i class="iconfont icon-sousuo"></i>
  </div>
</template>

<script>
export default {
  name: 'wtop',
  data(){
    return{
      isActive:true,
      isActivse:false,
      isactive:0,
      footers:[{"title":"推荐"},{"title":"视频"}]
        }
      },
  methods:{
    wtuijian(index){
      if(index==0){
        this.$router.push({path:'/Wstart/wreove'});
      }else if(index==1){
        this.$router.push({path:'/Wstart/wshipin'});
      }
    },
    wgologin(){
      this.$router.push('/Wmine/')
    },
    clk(index){
      this.isactive=index;
    },
    wserch(){
      this.$router.push('/TopicSearch/')
    }
  }
}


</script>

<style lang="scss" scoped="" type="text/css"> 
.wul{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  margin: 0 auto;
}
.red{
  text-decoration: underline;
  color: #ff4a00;
}
.wspan{
  margin-right: 20px;
}
*{
  margin: 0;
  padding: 0;
}
.active{
  color: #ff4a00;
  border-bottom: 2px solid #ff4a00;
}
.wtuijianda{
  margin-right: 30px;
}
#wtop{
  position: relative;
}
.wbox{
    display: flex;
    width: 100%;
    height: 30px;
    align-items: center;
}
.wbox>i{
    margin-left: 10px;
    font-size: 18px;
}
.wRecommend{
    margin-left: 120px;
    font-size: 16px;
    display: flex;
    justify-content: space-around;
}
.wsearch_star{
    width: 95%;
    height: 35px;
    outline: none;
    display: block;
    margin: 0 auto;
    background: white;
    border: none;
    text-indent: 150px;
    border-radius: 50px;
}
.icon-sousuo{
    position: absolute;
    top: 40px;
    left: 130px;
    z-index: 999;
}
i{
  display: block;
}
</style>