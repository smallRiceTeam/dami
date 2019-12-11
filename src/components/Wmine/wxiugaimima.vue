<!--
 * @Author: your name
 * @Date: 2019-11-26 10:13:58
 * @LastEditTime: 2019-12-06 09:30:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xmsc\src\components\w_star.vue
 -->
<template>
<div>
    <span class="iconfont icon-cuo" @click="gologinindex"></span>
    <p class="wtel">修改密码</p>
    <input class="wtelipnt" type="text" placeholder="请输入手机号" v-model="wtelvalue" @keydown="getinputvalue" />
    <input class="wtelipnt" type="text" v-model="wmimavalue" placeholder="请输入密码" />
    <input class="wtelipnt" type="text" v-model="wnewmima" placeholder="请输入新密码" />
    <input class="wloginde" type="button" value="确认修改" v-bind:class="{wactive:isactive}" @click="panduan">
    <div class="Wgreenb">
        <span class="wgreen">已阅读并同意<span class="wgreen wgreenll">《小米商城用户协议》《小米账号用协议》《小米账号隐私政策》</span></span>
    </div>
</div>
</template>

<script> 
import axios from 'axios';
import { Toast } from 'mint-ui';
export default {
  name: 'wminebanner',
  data(){
      return{
        wtelvalue:'',
        isactive:false,
        wmimavalue:'',
        wnewmima:'',
        wtatol:[]
      }
  },
  created(){
      axios.get('api/car')
      .then((res)=>{
          this.wtatol=res.data;
          console.log(this.wtatol)
            })
            .catch((err)=>{
                console.log(err);
            })
  },
  methods:{
      getinputvalue(){
          if(this.wtelvalue){
              this.isactive=true 
          }else{
              this.isactive=false
          }
      },
      gologinindex(){
          this.$router.push('/Wmine/')
      },
      panduan(){
      var r=/^1(3|4|5|7|8)\d{9}$/;
        if(this.wtelvalue=="" || this.wmimavalue=="" || this.newmima==""){
            Toast('用户名密码不能为空!');
        }else if(r.test(this.wtelvalue)){
            for(let i in this.wtatol){
                if(this.wtatol[i].name == this.wtelvalue && this.wtatol[i].userpass == this.wmimavalue){
                    console.log(this.wtatol[i].id)
                    axios.patch('api/car/'+this.wtatol[i].id,{
                        userpass:this.wnewmima,
                    })
                    .then((res)=>{
                        Toast('修改成功!');
                        setTimeout(()=>{
                        this.$router.push('/wlogin/')
                        },2000);
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                    return
                }else{
                     Toast('您输入的用户名或密码不正确啊!');
                }
            }
        }else{
            Toast('您输入的用户名或密码不正确!');
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