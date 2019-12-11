<!--
 * @Description: 搜索头部
 * @Author: 张涛
 * @Date: 2019-12-03 09:59:40
 * @LastEditors: yx
 * @LastEditTime: 2019-12-05 19:37:01
 -->
<template>
    <div class="box">
        <div class="s" style="position:fixed;z-index:10;" >
            <div class="search">
                <Back></Back>
                <input id="Tinput" type="text" placeholder="小米CC9 Pro" autofocus="autofocus" v-model="inputx">
                <i class="el-icon-error" v-show="isHows"  @click="Clear()"></i>
            </div>
            <p @click="seach()">搜索</p>
        </div>
        <ul  class="uls" v-show="isShow">
            <li v-if="Myuls.length==0?true:false">抱歉，未搜索到内容</li>
            <li v-for="(Myul,index) in Myuls" :key="index" @touchstart="hisname($event);addhistory()">
                <router-link to="" >{{Myul.name}}</router-link>
                <div class="labels">{{Myul.label}}</div>
            </li>
        </ul>
    </div>
    
</template>
            
<script>

import Back from './Back';
import axios from 'axios';

export default {
   data() {
      return {
            inputx:"",
            hname:"",
            Myuls:[],
            isShow:false,
            isHows:false
      }
    },

    components:{
        Back
    },
    created() {
       
       
    },

    methods:{
         seach(){
            if(this.inputx.trim()!=""){
              this.isShow=true
              this.isHows=true
            }else{
              this.isShow=false
              this.isHows=false
            }
             axios.get('http://localhost:3000/Myuls?q='+this.inputx.trim())
                .then(res=>{ 
                this.Myuls = res.data;//内部数据，由于没有渲染在组件里，所以，没有触发组件更新
                })
                .catch(err=>{
                console.log(err);
                });
        },
        Clear(){
            this.inputx="";
            this.isShow=false
            this.isHows=false
        },
         hisname(event){
              console.log(event.target.innerHTML)
              this.hname=event.target.innerHTML
            },
        addhistory(){
            if(this.inputx.trim()==""){
                return false;
            }
            axios.post('http://localhost:3000/historys',{
                name:this.hname.trim()
                })
                .then(res=>{
                    console.log('添加成功',res.data)
                });
          
        }
        
    }
}
</script>
            
<style scoped lang="scss">
.box{
    display: flex;
    height: .5rem;
    width: 100%;
    align-items: center;
    position: relative;
    p{
        font-size: 16px;
    }
}
.s{
    height: .5rem;
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    background: #f6f6f6;
}
.search{
    height: .3rem;
    width: 80%;
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid #e5e5e5;
    background: #ffffff;
   margin: 0 .1rem 0 .2rem;
    input{
        border:0;
        width: 90%;
        height: .3rem;
        font-size: 18px;
        outline: none;
        color: #9a9a9a;
    }
    i{
        color:#e2e2e2;
        position: absolute;
        right:5px;
        font-size: 18px;
    }

}
.uls{
    width: 100%;
    height: 600px;
    background: rgb(255, 254, 254);
    position: absolute;
    top: 50px;
    li{
        width: 90%;
        margin: 0 auto;
        border-bottom: 1px solid #e0e0e0;
        height: .4rem;
        line-height: .4rem;
        a{
            font-size: 16px;
            float: left;
        }
        .labels{
                 float: right;
                display: inline-block;
                background: #f5f5f5;
                height: .25rem;
                line-height: .25rem;
                padding: 0 .1rem;
                color: rgba(0,0,0,.54);
                vertical-align: middle;
                margin-top: .1rem;
                text-align: center;
                font-style: normal;
        }
    }
}
            
</style>