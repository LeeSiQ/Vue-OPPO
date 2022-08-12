<template>
    <div id="">
        <div class="bg">
            <header>
                <van-icon name="arrow-left" onclick="history.back()"/>
                <span>OPPO</span>
            </header>
            <div>
                <van-tabs v-model="active">
                <van-tab title="Find 系列">OPPO Find 系列</van-tab>
                <van-tab title="Reno 系列">
                    <div class="price" id="price">
                        <span class="priceinit">综合</span>
                        <span>价格</span>
                    </div>
                    <ul class="box">
                        <li v-for="(it,index) in list1" :key="index">
                            <img :src="it.img" alt="">
                            <div class="divmodel">
                                <p> {{it.name}} </p>
                                <p> {{it.con}} </p>
                                <p class="divp">
                                    <span>{{it.free}}</span>
                                    <span class="spani">
                                        <i>券</i>
                                        <i>{{it.tickt}}</i>
                                        <i></i>
                                    </span>
                                </p>
                                <p>
                                    <span>券后价</span>
                                    <span>¥</span>
                                    <span>{{it.price}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </van-tab>
                <van-tab title="K 系列">OPPO K 系列</van-tab>
                </van-tabs>
            </div>
        </div>
    </div>
</template>
<style scoped>
.priceinit{
    color: #000;
    font-weight: bold;
}
.price{
    margin: 5% 5%;
    font-size: 12px;
    color: #666;
}
.price span{
    margin: 3%;
}
i{
    font-style: normal;
    font-size: 12px;
}
.bg{
    background: #f9f9f9;
}
header{
    padding: 2%;
    background: #fff;
}
.van-icon{
    font-size: 20px;
    margin-top: 2%;
}
header span{
    font-size: 18px;
}
/* ----------- */
.box{
    margin: 2% 5%;
}
.box li{
    display: flex;
    justify-content: flex-start;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 2%;
}
.box>li>img{
    width: 40%;
}
.divmodel{
    margin: 5% 0% 0% 2%;
    width: 60%;
}
.divmodel p:nth-of-type(1){
    font-size: 16px;
    margin: 1% 0% 3%;
    color: #333;
}
.divmodel p:nth-of-type(2){
    font-size: 14px;
    margin: 1% 0% 3%;
    color: rgba(0,0,0,0.55);
}
.divp{
    margin-bottom: 6%;
}
.divp span:nth-of-type(1){
    font-size: 12px;
    color: #0a7ffb;
    padding: 0% 1%;
    border: 1px solid rgba(10,127,251,0.5);
    border-radius: 5px;
    margin-right: 4%;
    
}
.spani i{
    padding: 1%;
    color: #f63434;
}
.spani i:nth-of-type(1){
    background: url(../assets/images/list/x1.png)no-repeat;
    background-size: 100% 100%;
}
.spani i:nth-of-type(2){
    background: url(../assets/images/list/x2.png)repeat;
    background-size: 100% 100%;
}
.spani i:nth-of-type(3){
    
    background: url(../assets/images/list/x3.png)no-repeat;
    background-size: 100% 100%;
}
.divmodel p:nth-of-type(4) {
     font-size: 12px;
    color: rgb(243, 65, 65);
}
.divmodel p:nth-of-type(4) span:nth-of-type(2){
    margin: 0% 2%;
}
.divmodel p:nth-of-type(4) span:nth-of-type(3){
    font-size: 16px;
}
</style>
<script>
import $ from  'jquery'
export default {
  data() {
    return {
      active: 1,
      list1:[
        {
            img:'images/list/p1.png',
            name:'OPPO Reno 8',
            con:'长寿版 80W 超级闪充',
            free:'24期免息',
            tickt:'满700减10',
            price: 2389,
        },
        {
            img:'images/list/p2.png',
            name:'OPPO Reno 8 Pro',
            con:'第一代骁龙®7移动平台',
            free:'24期免息',
            tickt:'满700减10',
            price: 2889,
        },
        {
            img:'images/list/p3.png',
            name:'OPPO Reno 8 Pro+',
            con:'双芯人像摄影系统',
            free:'24期免息',
            tickt:'满700减10',
            price: 3489,
        },
        {
            img:'images/list/p4.webp',
            name:'OPPO Reno7 Pro',
            con:'天玑1200-MAX芯片',
            free:'24期免息',
            tickt:'满700减10',
            price: 3689,
        },
        {
            img:'images/list/p5.png',
            name:'OPPO Reno 7',
            con:'6400万超清主摄',
            free:'12期免息',
            tickt:'满700减10',
            price: 2989,
        },
        {
            img:'images/list/p6.webp',
            name:'OPPO Reno7 SE',
            con:'90Hz 高感屏',
            free:'3期免息',
            tickt:'满700减10',
            price: 1639,
        },
      ],
    };
  },



  mounted: function() {
    //把动态获取ID的操作放到this.$nextTick的回调中执行即可
    this.$nextTick(function(){
        var num;
        $('.price span').click(function(){
            num=$(this).index()
            $('.price span').eq(num).css({'color':'black','font-weight':'bold'})
            $('.price span').eq(num).siblings().css({'color':'#666','font-weight':'400'})
        })
    })
  },

  methods: {

  },
};
</script>