<!--
 * @Author: your name
 * @Date: 2019-11-26 10:13:58
 * @LastEditTime: 2019-11-27 17:29:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xmsc\src\components\w_star.vue
 -->
<template>
  <div id="Whotlist">
      <div class="TOPhotlist">
            <a href="#">
                <span>TOP热榜</span>
            </a>
            <a href="#">
                <p># 晒小米11.11战绩</p>
            </a>
            <a href="#">
                <p># 我有独特凑单技巧</p>
            </a>
            <a href="#">
                <p># 健身时爱用的小米好物</p>
            </a>
            <a href="#">
                <p># 拿5G手机来测速吧</p>
            </a>
            <a href="#">
                <p># 发布会，你有哪些期待？</p>
            </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Whotlist'
}


</script>

<style lang="scss" scoped="" type="text/css"> 
.TOPhotlist {
    display: flex;
	height: .38rem;
	align-items: center;
	justify-content:space-between;
    overflow-x: auto;
    a{
        font-size: .16rem;
        display: block;
        flex-shrink: 0;
        margin: .05rem;
        color: black;
        text-align: center;
        span{
            font-weight: bold;
        }
        p{
            background: white;
            border-radius: 50px;
            padding-left: 10px;
            padding-right: 10px;
        }
    }
}
</style>