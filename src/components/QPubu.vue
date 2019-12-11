<template>
    <div class="v-waterfall-content" id="v-waterfall">
        <ul>
            <li v-for="(img,index) in waterfallList"
                class="v-waterfall-item"
                :style="{top:img.top+'px',left:img.left+'px',width:waterfallImgWidth+'px',height:img.height} " 
                :key="index">
                <img :src="img.src" alt="">
                <p>这是内容</p >
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "v-waterfall",
        data(){
            return {
                waterfallList:[],
                imgArr:[
                    
                ],
                // waterfallImgWidth:100,
                waterfallImgCol:2,
                waterfallImgRight:10,
                waterfallImgBottom:40,
                waterfallDeviationHeight:[],
                imgList:[]
            }
        },
        created() {
            fetch("http://localhost:3000/imgs")
            .then(res=>{
                return res.json()
            })
            .then(data=>{
                let imgs=data
                for(let i=0;i<imgs.length;i++){
                    this.imgArr.push(imgs[i].imgsrc)
                }
                this.$nextTick(()=>{
                    for (let i = 0;i < this.imgArr.length;i++){
                    this.imgList.push(this.imgArr[i]);
                     }
                    this.calculationWidth(); 
                })
            })
        },
        mounted(){
            this.calculationWidth();
        },
        methods:{
            //计算每个图片的宽度或者是列数
            calculationWidth(){
                let domWidth = document.getElementById("v-waterfall").offsetWidth;
                console.log(domWidth)//375
                if (!this.waterfallImgWidth && this.waterfallImgCol){
                    this.waterfallImgWidth = (domWidth-this.waterfallImgRight*this.waterfallImgCol)/this.waterfallImgCol;
                }else if(this.waterfallImgWidth && !this.waterfallImgCol){
                    this.waterfallImgCol = Math.floor(domWidth/(this.waterfallImgWidth+this.waterfallImgRight))
                }
                //初始化偏移高度数组
                this.waterfallDeviationHeight = new Array(this.waterfallImgCol);
                for (let i = 0;i < this.waterfallDeviationHeight.length;i++){
                    this.waterfallDeviationHeight[i] = 0;
                }
                this.imgPreloading()
            },
            //图片预加载
            imgPreloading(){
                for (let i = 0;i < this.imgList.length;i++){
                    let aImg = new Image();
                    aImg.src = this.imgList[i];
                    aImg.onload = aImg.onerror = (e)=>{
                        let imgData = {};
                        imgData.height = this.waterfallImgWidth/aImg.width*aImg.height;
                        imgData.src = this.imgList[i];
                        this.waterfallList.push(imgData);
                        this.rankImg(imgData);
                    }
                }
            },
            //瀑布流布局
            rankImg(imgData){
                let {waterfallImgWidth,waterfallImgRight,waterfallImgBottom,waterfallDeviationHeight,waterfallImgCol} = this;
                //for (let i = 0;i < this.waterfallList.length;i++){
                let minIndex = this.filterMin();
                imgData.top = waterfallDeviationHeight[minIndex];
                imgData.left = minIndex*(waterfallImgRight+waterfallImgWidth);
                waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom;
                //}
                // console.log(imgData);
            },
            /**
             * 找到最短的列并返回下标
             *@returns {number} 下标
             */
            filterMin(){
                const min = Math.min.apply(null, this.waterfallDeviationHeight);
                return this.waterfallDeviationHeight.indexOf(min);
            }
        }
    }
</script>

<style scoped>
.v-waterfall-content{
    width: 100%;
    height: 100%;
    position: relative;
}
.v-waterfall-item{
    width: 100%;
    float: left;
    position: absolute;
}
ul{
    overflow-x: hidden;
}
.v-waterfall-item img{
    display: block;
    width: 100%;
    height: auto;
}
p{
    font-size: 14px;
    text-align: center;
}
</style>