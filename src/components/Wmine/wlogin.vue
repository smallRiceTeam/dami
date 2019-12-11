<!--
 * @Author: your name
 * @Date: 2019-11-26 10:13:58
 * @LastEditTime: 2019-12-05 21:16:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xmsc\src\components\w_star.vue
 -->
<template>
<div>
    <span class="iconfont icon-cuo" @click="gologinindex"></span>
    <p class="wtel">手机号登陆</p>
    <input class="wtelipnt" type="text" placeholder="请输入手机号" v-model="wtelvalue" @keydown="getinputvalue" />
    <input class="wtelipnt" type="text" v-model="wmimavalue" placeholder="请输入密码" />
    <div class="logincount">
        <span class="account" @click="wgoregister">注册</span>
        <span class="iconfont icon-youjiantou"></span>
        <span class="wgaimima" @click="gaimima">修改密码</span>
    </div>
    <input class="wloginde" type="button" value="登陆" v-bind:class="{wactive:isactive}" @click="panduan">
    <div class="Wgreenb">
        <span class="wgreen">已阅读并同意<span class="wgreen wgreenll">《小米商城用户协议》《小米账号用协议》《小米账号隐私政策》</span></span>
    </div>
</div>
</template>

<script> 
import { Toast } from 'mint-ui';
export default {
  name: 'wminebanner',
  data(){
      return{
        wtelvalue:'',
        isactive:false,
        wmimavalue:'',
      }
  },
  methods:{
      getinputvalue(){
          if(this.wtelvalue){
              this.isactive=true 
          }else{
              this.isactive=false
          }
      },
      gaimima(){
          this.$router.push('/wxiugaimima/')
      },
      gologinindex(){
          this.$router.push('/Wmine/')
      },
      wgoregister(){
          this.$router.push('/wregister/')
      },
    panduan(){
      var r=/^1(3|4|5|7|8)\d{9}$/;
        if(this.wtelvalue.length==0 || this.wmimavalue.length==0){
            Toast('用户名密码不能为空!');
        }else if(r.test(this.wtelvalue)){
      fetch('api/car?name='+this.wtelvalue)
      .then(res=>{
        return res.json();
      })
      .then(data=>{
          console.log(data)
          let pass=data[0].userpass
          let name=data[0].name
          console.log(pass)
          if(this.wmimavalue==pass && this.wtelvalue==name){
              Toast('欢迎您!');
              window.localStorage.setItem('name',this.wtelvalue);
              console.log(name)
              setTimeout(()=>{
                  this.$router.push('/Wmine/')
			    },2000);
          }
          else{
                Toast('用户名或密码错误!');
          }
            })
            .catch(err=>{
            console.log(err);
            })
        }
    },
  }
}
</script>

<style lang="scss" scoped="" type="text/css">

.icon-cuo{
    font-size: 24px;
    display: block;
    color: rgb(192, 189, 189);
    margin-top: 10px;
    margin-left: 10px;
}
.wtel{
    font-size: 22px;
    font-weight: 700;
    margin-top: 40px;
    margin-left: 20px;
}
.wtelipnt{
    width: 90%;
    outline: none;
    height: 30px;
    border: none;
    border-bottom: 1px solid rgb(214, 213, 213);
    letter-spacing: 2px;
    margin: 0 auto;
    display: block;
    margin-top: 30px;
}
.account{
    font-size: 13px;
    color: rgb(129, 127, 127);
}
.logincount{
    display: flex;
    margin-left: 20px;
    margin-top: 40px;
    align-items: center;
    font-size: 12px;
    color:rgb(129, 127, 127);
}
.icon-youjiantou{
    color:rgb(129, 127, 127);
    font-size: 10px;
    margin-left: 10px;
}
.wloginde{
    width: 80%;
    height: 40px;
    background: rgb(189, 111, 111);
    opacity: .5;
    outline: none;
    border: none;
    color: white;
    display: block;
    margin: 0 auto;
    margin-top: 60px;
    border-radius: 7px;
}
.wactive{
    background: rgb(185, 63, 63);
    opacity: 1;
}
.wgaimima{
    margin-left: 235px;
    text-decoration: underline;
}
.wgreenll{
    text-decoration: underline;
}
.Wgreenb{
    width: 80%;
    margin: 20px auto;
    display: flex;
    font-size: 12px;
    color: rgb(167, 166, 166);
}
</style>