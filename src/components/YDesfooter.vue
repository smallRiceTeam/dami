<!--
 * @Author: yx
 * @Date: 2019-11-28 21:20:25
 * @LastEditors: yx
 * @LastEditTime: 2019-12-05 20:11:15
 * @Description: 
 -->

 <template>
  <footer id="myMooter">
      <div style="display:none">{{this.shopdes.id}}</div>
      <p  @touchstart="love()" >
          <span class="el-icon-star-off" :class="{'red':changeCls}"></span>
          <i >喜欢</i>
      </p>
      <p>
          <span class="el-icon-shopping-cart-2"></span>
          <b :class="{'show':carStyle}">{{count}}</b>
          <i>购物车</i>
      </p>
      <span class="car" @touchstart="addCar()">加入购物车</span>
  </footer>
</template>

<script>
import axios from 'axios';
export default {
    name: 'YDesfooter',
    // props:['nowshopid'],
    data() {
        return {
           shopdes:[],
           changeCls:false,
           count:0,
           carStyle:false,
           nowshopid:"",
           storeid:'',
           shops:[]
        }
    },
    computed: {
       
    },
    methods: {
       love:function (){
           this.changeCls = !this.changeCls;
       },
       addCar:function(){
           for(let i in this.$store.state.shopDes){
               if(this.$store.state.shopDes[i].shopid = this.nowshopid){
                   this.shopdes = this.$store.state.shopDes[i];
                //    console.log(this.shopdes )
               }
               
           }
            this.carStyle = true;
            this.count++;
            //console.log(this.shopdes)
            var addArr={
                "id":this.shopdes.id,
                "name":this.shopdes.storename,
                "goods":
                    [
                        {       
                            "shopid":this.shopdes.shopid,
                            "img":this.shopdes.img,
                            "desc":this.shopdes.desc,
                            "specs":this.shopdes.specs,
                            "price":this.shopdes.price,
                            "count":this.count,
                            "color":this.shopdes.color,
                            "size":this.shopdes.size,
                            "time":this.shopdes.time
                        }
                    ]
            };
            if(this.shops!=''){
                for(let i in this.shops){
                    if(this.nowshopid == this.shopdes.shopid){
                        // this.shops[i].goods[0].shopid
                        axios.patch('/api/shops/'+this.shopdes.id,{
                           "goods": [
                                {
                                    shopid:this.shopdes.shopid,
                                    img:this.shopdes.img,
                                    desc:this.shopdes.desc,
                                    specs:this.shopdes.specs,
                                    price:this.shopdes.price,
                                    count:this.count,
                                    color:this.shopdes.color,
                                    size:this.shopdes.size,
                                    time:this.shopdes.time
                                }
                            ],
                        })
                        .then(res=>{
                            // this.getData();
                            // console.log('key',res)
                        })
                        .catch(err=>{
                            console.log(err);
                        }) 
                    }
                    else{
                        axios.post('/api/shops/',addArr)
                        .then(res=>{
                            // this.getData();
                            // console.log('key',res)
                        })
                        .catch(err=>{
                            console.log(err);
                        })
                    }
                }
              
           }else{
                 axios.post('/api/shops/',addArr)
                .then(res=>{
                    // this.getData();
                    // console.log('key',res)
                })
                .catch(err=>{
                    console.log(err);
                }) 
            }
        }
    },
    created() {
        this.nowshopid = this.$store.state.nowshopid;
        axios.get('/api/shops/')
            .then(res=>{
                // console.log(res.data)
                this.shops = res.data;
                // console.log(this.shops)
            })
            .catch(err=>{
                console.log(err);
            })
        // var addArr={
        //     "id":this.shopdes.id,
        //     "name":this.shopdes.storename,
        //     "goods":
        //         [
        //             {       
        //                 "shopid":this.shopdes.shopid,
        //                 "img":this.shopdes.img,
        //                 "desc":this.shopdes.desc,
        //                 "specs":this.shopdes.specs,
        //                 "price":this.shopdes.price,
        //                 "count":1,
        //                 "color":this.shopdes.color,
        //                 "size":this.shopdes.size,
        //                 "time":this.shopdes.time
        //             }
        //         ]
        // };
        // var addGood = {
        //     "shopid":this.shopdes.shopid,
        //     "img":this.shopdes.img,
        //     "desc":this.shopdes.desc,
        //     "specs":this.shopdes.specs,
        //     "price":this.shopdes.price,
        //     "count":1,
        //     "color":this.shopdes.color,
        //     "size":this.shopdes.size,
        //     "time":this.shopdes.time
        // }
        //   axios.get('/api/shops/')
        //     .then(res=>{
        //         // console.log(res.data)
        //         this.shops = res.data;
        //         // console.log(this.shops)
        //         // console.log(this.shops)
        //         let goods = [];
        //         let goodid = '';
        //         // if(this.shops.id == ''){
        //             axios.post('/api/shops/',addArr)
        //                 .then(res=>{
        //                     // this.getData();
        //                     // console.log('key',res)
        //                 })
        //                 .catch(err=>{
        //                     console.log(err);
        //                 })
        //         // }
        //         // else{
        //             for(let i in this.shops){
        //                 // console.log(this.shops[i].id);
        //                 if(this.shops[i].id != this.shopdes.id){
        //                     axios.post('/api/shops',addArr)
        //                     .then(res=>{
        //                         // this.getData();
        //                         // console.log('key',res)
        //                     })
        //                     .catch(err=>{
        //                         console.log(err);
        //                     })
        //                 }else{
        //                     let oldgoods = [];
        //                     for(let j in this.shops[i].goods){
        //                         // console.log(this.shops[i].goods[j])
        //                         goodid = this.shops[i].goods[j].id;
        //                         if(goodid == this.shopdes.shopid){
        //                             axios.patch('/api/shops/${goodid}',count)
        //                             .then(res=>{
                                    
        //                             })
        //                             .catch(err=>{
        //                                 console.log(err);
        //                             })
        //                         }
        //                         else{
        //                             oldgoods =  this.shops[i];
        //                             oldgoods.goods.push(addGood);
        //                             axios.get('/api/shops/',{params:{id:this.shopdes.id}})
        //                             .then(res=>{
        //                                 // this.getData();
        //                                 // console.log('key',res)
        //                             })
        //                             .catch(err=>{
        //                                 console.log(err);
        //                             }),
        //                              axios.post('/api/shops',oldgoods)
        //                             .then(res=>{
        //                                 // this.getData();
        //                                 // console.log('key',res)
        //                             })
        //                             .catch(err=>{
        //                                 console.log(err);
        //                             })
        //                         }
        //                     }
        //                 }
        //             }
        //         // }
        //     })
        //     .catch(err=>{
        //         console.log(err);
        //     });  

        
    },
    mounted() {
    },
}
</script>

<style scoped lang="scss">
#myMooter{
    /* margin: 0 auto; */
    width:100%;
    height: .48rem;
    // overflow: hidden;
    background-color:#fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #ccc;
    z-index: 20;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 0.03rem 0;
    .car{
        display: block;
        // height: 100%;
        width: 60%;
        background: rgb(252, 77, 8);
        color: #fff;
        // height: 100%;
        line-height: 0.48rem;
    }
    p{
        width: 12%;
        margin: 0 0.1rem;
        position: relative;
        span{
            display: block;
            font-size: 0.24rem;
        }
        i{
            font-size: 0.12rem;
        }
        .red{
        color: red;
        }
        b{
            width: 0.15rem;
            height: 0.15rem;
            background: red;
            border-radius: 50%;
            z-index: 25;
            position: absolute;
            top: 0;
            right: 0.05rem;
            color: #fff;
            font-size: 0.08rem;
            display: none;
            font-weight: normal;
        }
        .show{
            display: block;
        }
    }
}


</style>
