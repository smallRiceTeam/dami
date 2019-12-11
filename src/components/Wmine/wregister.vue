<!--
 * @Author: your name
 * @Date: 2019-11-26 10:13:58
 * @LastEditTime: 2019-12-05 21:16:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xmsc\src\components\w_star.vue
 -->
<template>
<div>
    <span class="iconfont icon-cuo" @click="gologinindex"></span>
    <p class="wtel">用户注册</p>
    <input class="wtelipnt" type="text" placeholder="请输入手机号" v-model="wtelvalue" @keydown="getinputvalue" />
    <input class="wtelipnt" type="text" v-model="wmimavalue" placeholder="验证码" />
    <div class="logincount">
        <span class="account" @click="wlogin">登录</span>
        <span class="iconfont icon-youjiantou"></span>
    </div>
    <input class="wloginde" type="button" value="注册" v-bind:class="{wactive:isactive}" @click="panduan">
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
        wtatol:[],
        wnumber:0
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
      gologinindex(){
          this.$router.push('/Wmine/')
      },
      wlogin(){
          this.$router.push('/wlogin/')
      },
       panduan(){
                this.wnumber++
	     		var r=/^1(3|4|5|7|8)\d{9}$/;
	     		if(this.wtelvalue.length==0 || this.wmimavalue.length==0){
	     			Toast('用户名密码不能为空!');
                }
                else if(r.test(this.wtelvalue)){
                if(this.wtatol==""){
                    axios({
                        method:"post",
                        url:"http://localhost:3000/car",
                        data:{
                            id:this.wnumber, 
                            name:this.wtelvalue,
                            userpass:this.wmimavalue
                            }
                        })
                    .then((res)=>{
                        // console.log(res.data)
                    if(res.request.status==201){
                        Toast('注册成功!');
                        window.localStorage.setItem('name',this.wtelvalue);
                        setTimeout(()=>{
                        this.$router.push('/Wmine/')
                            },2000);
                    }else{
                        Toast('注册失败!');
                    }
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }else{
                    for(let i in this.wtatol){
                    if(this.wtatol[i].name == this.wtelvalue){
                        Toast('该用户名已被注册请重新输入!');
                        return;
                    }else{
                    axios({
                        method:"post",
                        url:"api/car",
                        data:{
                            id:this.wnumber, 
                            name:this.wtelvalue,
                            userpass:this.wmimavalue
                            }
                        })
                    .then((res)=>{
                        // console.log(res.data)
                    if(res.request.status==201){
                        Toast('注册成功!');
                        window.localStorage.setItem('name',this.wtelvalue);
                        setTimeout(()=>{
                        this.$router.push('/Wmine/')
                            },2000);
                    }else{
                        Toast('注册失败!');
                    }
                    })
                    .catch((err)=>{
                        console.log(err);
                        })
                    }
                } 
                }
                }else{
                    Toast('请输入正确的手机号!');
                }
	}
},
created(){
      axios.get('api/car')
      .then((res)=>{
          this.wtatol=res.data;
        //   console.log(this.wtatol)
            })
            .catch((err)=>{
                console.log(err);
            })
        }

}
</script>

<style lang="scss" scoped="" type="text/css">
.account{
    font-size: 13px;
    color: rgb(129, 127, 127);
}
.logincount{
    display: flex;
    margin-left: 20px;
    margin-top: 40px;
    align-items: center;
}
.icon-youjiantou{
    color:rgb(129, 127, 127);
    font-size: 10px;
    margin-left: 10px;
}
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
.logincount{
    display: flex;
    margin-left: 20px;
    margin-top: 40px;
    align-items: center;
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
    cursor: pointer;
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