<!--
 * @Author: your name
 * @Date: 2019-11-26 10:13:58
 * @LastEditTime: 2019-12-06 14:52:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xmsc\src\components\w_star.vue
 -->
<template>
  <div id="wpowerful">
      <div class="wvip">
          <span class="iconfont icon-huiyuan1"></span>
          <span class="wximivip">小米会员</span>
          <span class="iconfont icon-youjiantou"></span>
      </div>
      <div class="wvip">
          <span class="iconfont icon-huiyuan-"></span>
          <span class="wximivip">会员中心</span>
          <span class="iconfont icon-youjiantou"></span>
      </div>
      <div class="wvip">
          <span class="iconfont icon-fuwu1"></span>
          <span class="wximivip">服务中心</span>
          <span class="iconfont icon-youjiantou"></span>
      </div>
      <div class="wvip">
          <span class="iconfont icon-xuanzhongshangcheng"></span>
          <span class="wximivip">小米之家</span>
          <span class="iconfont icon-youjiantou"></span>
      </div>
      <div class="wvip">
          <span class="iconfont icon-edu"></span>
          <span class="wximivip">直供点&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="iconfont icon-youjiantou"></span>
      </div>
      <div class="wvip wspiecil">
          <span class="iconfont icon-gengduogongneng"></span>
          <span class="wximivip">更多功能</span>
          <span class="iconfont icon-youjiantou"></span>
      </div>
      <div class="wvip">
          <span class="iconfont icon-settings"></span>
            <template>
                <el-button type="text" @click="open" class="wtuilogin">退出登录</el-button>
            </template>
          <span class="iconfont icon-youjiantou"></span>
      </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'wpowerful',
  methods:{
      open(){
        this.$confirm('是否退出登录', '提示', {
          confirmButtonText: '确定  ',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          window.localStorage.removeItem('name');
          this.$message({
            type:'success',
            message: '退出成功!'
        });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });
        });
      }
  }
}


</script>

<style lang="scss" scoped="" type="text/css">
.wtuilogin{
    color: black;
    margin-left: 22px;
}
.wvip{
    display: flex;
    font-size: 16px;
    align-items: center;
    height: .4rem;
    border-bottom: 1px solid #d9d9d9;
    .icon-huiyuan1{
        color: #fdbf2e;
    }
    .wximivip{
        margin-left:20px;
    }
    .iconfont{
        margin-left:10px;
    }
    .icon-youjiantou{
        color: #b2b2b2;
        margin-left: 230px;
    }
    .icon-huiyuan-{
        color: #fbbf2d;
    }
    .icon-fuwu1{
        color: #fa6c5e;
    }
    .icon-xuanzhongshangcheng{
        color: #ff8b42;
    }
    .icon-gengduogongneng{
        color: green
    }
    .icon-edu{
        color: blue;
    }
}
.wspiecil{
    border-bottom: 10px solid #f0f0f0;
}
</style>