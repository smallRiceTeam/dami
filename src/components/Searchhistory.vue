<!--
 * @Author: osier
 * @Date: 2019-12-04 14:53:33
 * @LastEditors: yx
 * @LastEditTime: 2019-12-05 19:30:55
 * @Description: ..
 -->
<template>
    <div class="box" v-show="this.historys.length!=0?true:false">
        <ul class="uls"> 
            <li class="lia">搜索记录</li>
            <li v-for="(his,index) in historys" :key="index">
                <i class="el-icon-time"></i>
                {{his.name}}
            </li>
            <li class="lib" @touchstart="hisdel()">清除搜索记录</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Searchhistory',
    data(){
      return{
          historys:{}
      } 
    },
    created:function(){
        fetch('http://localhost:3000/historys')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.historys=data;
            console.log(this.historys);
        })
        .catch(err=>{
            console.log(err);
        })
    },
     methods:{
        hisdel(){
            this.historys.forEach(item => {
                // console.log(item.id)
                axios.delete("http://localhost:3000/historys/"+item.id).then(res=>{
                    // console.log("删除成功",res.data);
                    axios.get("http://localhost:3000/historys").then(res=>{
                        this.historys=res.data
                 })
            })
        });
       }  
     }
    
}
</script>

<style lang="scss" scoped="" type="text/css">
    .box{
        margin-top:10px;
        padding-bottom: 1rem;
        background: #fff;
        .uls{
            width: 100%;
            background: rgb(255, 254, 254);
            li{
                width: 90%;
                margin: 0 auto;
                border-bottom: 1px solid #e0e0e0;
                height: .4rem;
                line-height: .4rem;
                i{
                     font-size:18px;
                }
            }
            .lia{
                font-size:18px;
            }
            .lib{
                 font-size:18px;
                 text-align: center;
                
            }
        }
    }

</style>