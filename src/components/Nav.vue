<!--
 * @Description: 首页
 * @Author: 张涛
 * @Date: 2019-11-29 17:20:39
 * @LastEditors: yx
 * @LastEditTime: 2019-12-05 21:01:10
 -->
<template>
<div>
    <div class="box" >
         <!-- style="position:fixed;z-index:10;" -->
       <ul :class="navBarFixed == true ? 'navBarWrap' :''" class='scrollM'>
           <li  v-for="(item,index) in items" :key="index" class="red" :class="{ 'Variety':footerCls[index]}" @touchend="changeCls(item.name,index)">
                <b>
                  {{item.name}}
               </b>
               <div>
                   <p>{{item.description}} </p>
               </div>
           </li>
       </ul>
    </div>
    <div class="put">
        <HomeList :typename="currtype"></HomeList>
    </div>
</div>
</template>
<script>

import HomeList from './HomeList';
import axios from 'axios';

export default {
    name:"Nav",
    props:['scrollTop'],
    data() {
        return {
            items:[],
            currtype:"",
            navBarFixed: false,
            scrollHeight:'',
            drawer: false,
            direction: 'rtl',
        }

    },
    components:{
        HomeList
    },
    created() {
     //从后端获取数据     
     axios.get('http://localhost:3000/items')
     .then(res=>{ 
         this.items = res.data;//内部数据，由于没有渲染在组件里，所以，没有触发组件更新
         this.currtype = this.items[0].name;
     })
     .catch(err=>{
         console.log(err);
     });
     window.addEventListener("scroll", this.watchScroll);
    },
    mounted() {
    },  
    computed: {
        footerCls(){
            return this.$store.state.footerCls;
            }
    },

    methods:{
        changeCls(typename,index){
            // console.log(typename);
            this.currtype = typename;
            this.$store.commit('changeFooterCls',index)
        },
         watchScroll() {
            var  height = document.getElementsByClassName("scrollM").offsetTop;
        //   console.log(height)
            var scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
                // console.log(scrollTop)
            //  当滚动超过 90 时，实现吸顶效果
            if (scrollTop > 1220) {
                this.navBarFixed = true;
            } else {
                this.navBarFixed = false;
            }
        }
    
    }
}
</script>

<style scoped lang="scss" >
.put{
     padding-top:.5rem;
     padding-bottom: 0.6rem;
}
.box{
    width: 100%;
    height: .5rem;
    background: #ffffff;
    margin: 0 auto;
    ul{
        width: 100%;
        // height: 100%;
        display: flex;
        justify-content: space-between;
        .red{
            text-align: center;
            b{
                font-size: 0.16rem;;
                color: #333333;
            }
            p{
                font-size: 12px;
                color: #7b7b7b;
            }
        }
        .Variety{
            text-align: center;
            b{
                font-size: 0.16rem;
                color:#ff5934;
            }
            div{
                width: .7rem;
                height: .18rem;
                background: #ff5934;
                border-radius: 10px;
                p{
                    font-size: 12px;
                    color: #ffffff;
                }
            }
        }
    }
}
.navBarWrap {
    position:fixed;
    top:0.5rem;;
    z-index:999;
    display: flex;
    justify-content: space-around;
    // overflow-x: auto;
    // line-height: 0.5rem;
    // border-top: 0.5px solid #ccc;
    background: #fff;
}

            
</style>
