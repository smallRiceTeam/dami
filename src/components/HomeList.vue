<!--
 * @Description: 首页
 * @Author: 张涛
 * @Date: 2019-12-02 09:22:32
 * @LastEditors: yx
 * @LastEditTime: 2019-12-05 19:30:27
 -->
<template>
    <div class="box1">
        <div style="display:none" >{{typename}}</div>
        <ul>
            <li  v-for="(list,index) in lists" :key="index">
                <div class="li-box">
                    <img :src="list.src" alt="">
                </div>
                <div class="z">
                    <b>{{list.description}}</b>
                    <div class="li-mon">
                        <div class="mon-money">
                            <span>￥</span><span>{{list.money}}</span>
                            <div>
                                <span>{{list.span}}</span>
                            </div>
                        </div>
                        <div class="mon-similar">
                            <span>看相似</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>  
    </div>     
</template>

<script>

import axios from 'axios';

export default {
    props:['typename'],
    data() {
      return {
            all:[],
          lists:[]
     
      }
   },
   created() {
     //从后端获取数据     
     axios.get('http://localhost:3000/lists')
     .then(res=>{ 
         this.all = res.data;//内部数据，由于没有渲染在组件里，所以，没有触发组件更新
         this.lists = this.getListsByType(this.all);
     })
     .catch(err=>{
         console.log(err);
     });
    },
    beforeUpdate(){
        this.lists = this.getListsByType(this.all);
    },
    methods:{
     getListsByType(data){//根据类型获取数据
         let arr=[];
         for(let i in data){
             if(data[i].type==this.typename){
                 arr.push(data[i]);
             }
         }
         return arr;
     }
  }
}
</script>

<style scoped lang="scss">
    .box1{   
        ul{
            display: flex;
            flex-wrap: wrap;
        }
        li{
            width: 1.7rem;
            height: 2.6rem;
            background: #fff;
            border-radius: 10px;
            margin-bottom:15px;
            margin-left: 10px;
            .li-box{
                width: 100%;
                height: 1.8rem;
                border-radius: 10px;
                margin-bottom: 5px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 10px 10px 0 0;
                }
            }
            .z{
                margin-left:10px;
                margin-right:5px;
                b{
                    font-size: 15px;
                }
            }
            .li-mon{
                margin-top:5px;
                .mon-money{
                    display: flex;
                    float: left;
                    span{
                        color: #ff5934;
                        font-weight: 600;
                    }
                    div{
                        margin-left: 10px;
                        border:1px solid #f44a33;
                        border-radius: 5px;
                        width: .28rem;
                        height: .15rem;
                        text-align: center;
                        line-height: .15rem;
                        span{
                            color: #f44a33;
                            font-weight: 100;
                            font-size: 12px;
                            
                        }
                    }
                }
                .mon-similar{
                    border:1px solid #b3b3b3;
                    border-radius: 10px;
                    float:right;
                    width: .45rem;
                    height: .18rem;
                    text-align: center;
                    line-height: .15rem;
                    span{
                        color: #b3b3b3;
                        font-size: 12px;
                    }
                }
            }
        }
    }
        
</style>
