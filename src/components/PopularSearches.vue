<!--
 * @Description: 星球热门搜索
 * @Author: 张涛
 * @Date: 2019-12-06 10:49:14
 * @LastEditors: 张涛
 * @LastEditTime: 2019-12-06 15:31:24
 -->
<template>
    <div class="Popul">
        <div class="box">
            <img class="imgs" src="../assets/img/hot.png" alt="" >
            <p>
                热门搜索
            </p>
        </div>    
        <ul class="uls">
            <li>
                <img src="../assets/img/hot-1.png" alt="">
                <p>王一博K30独家花絮解锁，继续Call!</p>
            </li>
            <li>
                <img src="../assets/img/hot-1.png" alt="">
                <p>说出红点全面屏笔记本亮点，赢取双重好礼！</p>
            </li>
        </ul>
    </div>       
</template>
            
<script>
export default {
   data() {
      return {
      }
   },
}
</script>
            
<style scoped lang="scss">
.Popul{
    width: 95%;
    margin: 0 auto;
}
.box{
    display: flex;
    height: .6rem;
    align-items: center;
    .imgs{
        width: .2rem;
        height: .2rem;
        margin-right: .13rem; 
    }
    p{
        font-size: 18px;
    }
}

.uls{
    
    li{
        display: flex;
        height: .33rem; 
        background: #f5f5f5;
        align-items: center;
        border-radius: .2rem;
        margin-bottom: .1rem;
        img{
            width: .2rem;
            height: .2rem;
            margin-right: .13rem; 
            margin-left: .13rem; 
        }
        p{
            font-size: 14px;
        }
    }
}
            
</style>
