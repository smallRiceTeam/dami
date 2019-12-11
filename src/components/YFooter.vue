<!--
 * @Author: yx
 * @Date: 2019-11-28 21:20:25
 * @LastEditors: yx
 * @LastEditTime: 2019-11-29 15:10:44
 * @Description: 
 -->

 <template>
  <footer id="myMooter">
       <ul>
           <li v-for="(item,index) in lis" :key="index"  @touchstart="changeCls(index)"  >
               <router-link  :class="{'orange':footerCls[index]}" :to="item.rot" >
                    <span :class="item.cls"></span>
                    <p>{{item.navName}}</p>
                </router-link>
           </li>
        </ul>
  </footer>
</template>

<script>

export default {
    name: 'YFooter',
    data() {
        return {
           lis:[
               {
                   "rot":"/YIndex",
                   "cls":"iconfont icon-shouye2",
                   "navName":"首页",
               },
               {
                   "rot":"/YClassList",
                   "cls":"iconfont icon-sousuo",
                   "navName":"分类"
               },
               {
                   "rot":"/YIndex1",
                   "cls":"iconfont icon-xingqiuka",
                   "navName":"星球"
               },
               {
                   "rot":"/YIndex2",
                   "cls":"el-icon-shopping-cart-2",
                   "navName":"购物车"
               },
               {
                   "rot":"/YIndex3",
                   "cls":"iconfont icon-wode",
                   "navName":"我的"
               }
           ],
        }
    },
    computed: {
        footerCls(){
            return this.$store.state.footerCls;
        }
    },
    methods: {
       changeCls(Index){
            this.$store.commit('changeFooterCls',Index)
        }
    },
    created() {
        
    },
}
</script>

<style scoped>
#myMooter{
  margin: 0 auto;
  width:100%;
  height: .55rem;
  background-color:#fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ccc;
  z-index: 20;
  box-sizing: border-box;
}
.blue{
    color:rgb(47, 123, 221);
}
/* .black{
    color: black;
} */
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}
ul li{
    width: 25%;
    height: 100%;
    text-align: center;
}
ul li a{
    color: black;
}

ul li span{
   font-size: 0.2rem;
   line-height: 0.24rem;
   display: block;
   margin-top: 0.05rem;
}
/* ul li a span:nth-child(3){
    font-size: 0.3rem;
} */
ul li span .icon-xingqiu{
    font-size: 0.2rem;
}
.orange{
    color: orange;
}
</style>
