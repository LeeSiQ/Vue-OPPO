<template>
    <div>
        <div id="main">
            <header>
                <div>购物车</div>
                <div class="hdiv">
                    <div>
                        <span>共</span>
                        <span>{{numbers}}</span>
                        <span>件商品</span>
                    </div>
                    <div>
                        <div>优惠券</div>
                        <div id="del" @click="del">删除</div>
                    </div>
                </div>
            </header>
            <section>
                <ul class="box">
                    <li v-for="(it,index) in list" :key="index">
                        <div class="checkbox"><input type="checkbox" :checked="it.che" @click="selectp(index)" class="checkbox1"></div>   
                        <div class="img"><div><img :src="it.img" alt=""></div></div>
                        <div class="content">
                            <div> {{it.pname}} </div>
                            <div>
                                <div class="price">
                                    <div><span>¥</span><span class="p1">{{it.p1}}</span></div>
                                    <div><span>¥</span><span>{{it.p2}}</span></div>
                                </div>
                                <div class="num">
                                    <span @click="sub(index)">-</span>
                                    <span>{{it.num}}</span>
                                    <span @click="add(index)">+</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <div class="ref">
                <span>—————————</span>
                <span>为你推荐</span>
                <span>—————————</span>
            </div>
            <ul class="morep">
                <li v-for="(list2,index) in list2" :key="index">
                    <img :src="list2.img" alt="">
                    <div class="divmodel">
                        <p> {{list2.name}}</p>
                        <p class="divp">
                            <span>{{list2.free}}</span>
                            <span class="spani">
                                <i>券</i>
                                <i>{{list2.tickt}}</i>
                                <i></i>
                            </span>
                        </p>
                        <p>
                            <span>到手价</span>
                            <span>¥</span>
                            <span>{{list2.price}}</span>
                        </p>
                    </div>
                </li>
            </ul>
            <footer>
                <van-submit-bar :price="3050" button-text="去结算">
                    <input type="checkbox" id="allcheck" @click="allcheck">
                    <span class="all">全选</span>
                    <div class="countprice">
                        <span>合计：</span>
                        <span>¥</span>
                        <span>{{countprice}}</span>
                    </div>
                </van-submit-bar>
                <ul class="box1">
                    <li>
                        <router-link to="index">
                            <img src="images/nav1_1.png" alt="">
                            <img src="images/nav1_2.png" alt="">
                            <p>首页</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="type">
                            <img src="images/nav2_1.png" alt="">
                            <img src="images/nav2_2.png" alt="">
                            <p>分类</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="shopping">
                            <img src="images/nav3_1.png" alt="">
                            <img src="images/nav3_2.png" alt="">
                            <p>购物车</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="my">
                            <img src="images/nav4_1.png" alt="">
                            <img src="images/nav4_2.png" alt="">
                            <p>我的</p>
                        </router-link>
                    </li>
                </ul>
            </footer>
        </div>
        <div class="top" id="top"><van-icon name="back-top" /></div>
    </div>
</template>
<style scoped>
.top{
    position: fixed;
    bottom: 15%;
    right: 5%;
    width: 40px;
    height: 40px;
    background: #fff;
    font-size: 24px;
    text-align: center;
    line-height: 40px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px -1px #c8c7cc;
    display: none;
}
.go{
    display: block;
}
.ref {
    padding-bottom: 3%;
}
.ref span{
    color: rgb(229, 230, 231);
    margin: 3%;
}
.ref span:nth-of-type(2){
    color: #000;
    font-weight: 500;
    font-size: 15px;
}
.morep{
    margin: 2% 5%;
    display: flex;
    flex-wrap: wrap; 
    padding-bottom: 20vh;   
}
.morep li{
    background: #fff;
    border-radius: 10px;
    margin-bottom: 2%;
    width: 49%;
}
.morep li:nth-of-type(2n){
    margin-left: 2%;
}
.morep>li>img{
    width: 100%;
}
.divmodel{
    padding-left: 5%;
}
.divmodel p:nth-of-type(1){
    font-size: 16px;
    color: #333;
}
.divp{
    margin-bottom: 6%;
}
.divp span:nth-of-type(2){
    font-size: 12px;
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
.divmodel p:nth-of-type(3) {
     font-size: 12px;
     margin-bottom: 5%;
}
.divmodel p:nth-of-type(3) span:nth-of-type(2){
    margin: 0% 2%;
}
.divmodel p:nth-of-type(3) span:nth-of-type(3){
    font-size: 16px;
}


#main{
    height: 100%;
    background: #f9f9f9;
}
header{
    position: fixed;
    top: 0px;
    width: 100%;
    background: #fff;
}
header>div:nth-of-type(1){
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    margin: 3% 0% 5%;
}
.hdiv{
    display: flex;
    justify-content: space-between;
    margin: 0% 5% 3%;
}
.hdiv>div:nth-of-type(1){
    font-size: 13px;
    color: #666;
    width: 25%;
}
.hdiv>div:nth-of-type(2){
    display: flex;
    justify-content: space-between;
    width: 30%;
}
.hdiv>div:nth-of-type(2)>div:nth-of-type(1){
    background: #ec3e50;
    color: #fff;
    border-radius: 10px;
    font-size: 12px;
    padding: 2% 5%;
    line-height: 16px;
} 
.hdiv>div:nth-of-type(2)>div:nth-of-type(2){
    font-size: 16px;
}
/* ----------- */
section{
    margin-top:25%;
    padding: 4%;
}
.box>li{
    display: flex;
    background: #fff;
    padding: 3%;
    border-radius: 10px;
    margin-bottom: 3%;
}
.checkbox{
    width: 8%;
    padding: 10% 0% 0%;
}
.img{
     width: 27%;
     padding: 2% 3%;
}
.img>div{
    background: #f6f6f6;
    border-radius: 8px;
}
.img>div>img{
    width: 100%;
    display: block;
}
.content{
     width: 65%;
}
.content>div:nth-of-type(1){
    margin: 3% 0% 8% 4%;
    font-size: 16px;
    word-break: break-all;
    white-space: pre-wrap;
}
.content>div:nth-of-type(2){
    display: flex;
    justify-content: space-between;
    margin-left: 4%;
}
.price{
    display: flex;
}
.price>div:nth-of-type(1)>span:nth-of-type(1){
    font-size: 12px;
    color: #F34141;
}
.price>div:nth-of-type(1)>span:nth-of-type(2){
    font-size: 16px;
    color: #F34141;
    margin: 0% 3%;
}
.price>div:nth-of-type(2){
    margin-left: 10%;
}
.price>div:nth-of-type(2)>span:nth-of-type(1){
    font-size: 12px;
    color: rgba(0,0,0,.3);
}
.price>div:nth-of-type(2)>span:nth-of-type(2){
    font-size: 12px;
    color: rgba(0,0,0,.3);
    margin: 0% 3%;
    text-decoration: line-through;
}
.num{
    width: 35%;
}
.num>span:nth-of-type(2){
    padding: 5% 20%;
    margin: 0% 10%;
    background: #f6f6f6;
    border-radius: 5px;
}
/* ------------ */
/* ------------ */
footer{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    border-top: 1px solid #eee;
}
.van-submit-bar{    
    position: relative;
    z-index: 100;
    width: 100%;
    padding: 2% 0%;
}
.box1{
    overflow: hidden;
    width:100%;
    background: #fff;
    border-top: 1px solid #eee;
}
.box1 li{
    width:25%;
    float: left;
    text-align: center;
}
.box1 a{
    color:#666;
    font-size: 12px;
}
.box1  .router-link-active img:nth-of-type(1){
    width: 30%;
    display: none;
}
.box1  .router-link-active img:nth-of-type(2){
    width: 30%;
    display: inline-block;
}
.box1 a img:nth-of-type(1){
    display: inline-block;
    width: 30%;
}
.box1 a img:nth-of-type(2){
    display: none;
    width: 30%;
}
/* ---- */
footer input{
    margin-right: 2%;
}
.all{
    margin-right: 5%;
}
.countprice>span:nth-of-type(2){
    color: #F34141;
    margin-right: 1%;
    font-size: 12px;
}
.countprice>span:nth-of-type(3){
    color: #F34141;
    font-size: 16px;
}
.countprice{
    width: 50%;
}
.van-submit-bar__text{
    display: none;
}
</style>
<script>
import $ from  'jquery'
export default {
    data() {
        return {
            countprice: 0,
            numbers: 0,
            list:[
                {
                    img:'images/shopping/p1.png',
                    pname:'Find X5 Pro 天玑版 12G+256G 白瓷 官方标配',
                    p1: 4469,
                    p2: 4999,
                    num: 1,
                    che: false,
                },
                {
                    img:'images/shopping/p2.png',
                    pname:'OPPO K10 暗夜黑 8G+256G 官方标配',
                    p1: 2049,
                    p2: 2199,
                    num: 1,
                    che: false,
                },
                {
                    img:'images/shopping/p3.png',
                    pname:'OPPO K9 Pro 5G  冰河序曲 12G+256G',
                    p1: 1899,
                    p2: 2699,
                    num: 1,
                    che: false,
                }
            ],
            list2:[
                {
                    img:'images/list/p1.png',
                    name:'OPPO Reno 8',
                    free:'24期免息',
                    tickt:'满700减10',
                    price: 2389,
                },
                {
                    img:'images/list/p1.png',
                    name:'OPPO Reno 8',
                    free:'24期免息',
                    tickt:'满700减10',
                    price: 2389,
                },
                {
                    img:'images/list/p1.png',
                    name:'OPPO Reno 8',
                    free:'24期免息',
                    tickt:'满700减10',
                    price: 2389,
                },
                {
                    img:'images/list/p1.png',
                    name:'OPPO Reno 8',
                    free:'24期免息',
                    tickt:'满700减10',
                    price: 2389,
                },
                {
                    img:'images/list/p1.png',
                    name:'OPPO Reno 8',
                    free:'24期免息',
                    tickt:'满700减10',
                    price: 2389,
                },
                {
                    img:'images/list/p1.png',
                    name:'OPPO Reno 8',
                    free:'24期免息',
                    tickt:'满700减10',
                    price: 2389,
                },
                {
                    img:'images/list/p1.png',
                    name:'OPPO Reno 8',
                    free:'24期免息',
                    tickt:'满700减10',
                    price: 2389,
                },
            ],
        };
    },
    methods: {  
        selectp(index){
            var list = this.list[index]
            if(list.che==true){
                this.list[index].che=false
                this.countprice = parseInt(this.countprice) - list.p1 * list.num;
                this.numbers--
            }else{
                this.list[index].che=true
                this.countprice = parseInt(this.countprice) + list.p1 * list.num;
                this.numbers++
            }            
            var a = $(".checkbox1:checked")
            var b = $('.checkbox1')
            if(a.length==b.length){
                $('#allcheck').prop("checked",true)
            }else{
                $('#allcheck').prop("checked",false)
            }
        },
        add(index){
            if(this.list[index].che == true){
            this.countprice = parseInt(this.countprice) + this.list[index].p1;
            this.numbers++
            this.list[index].num++
            }
        },
        sub(index){
            if(this.list[index].che == true){
                if(this.list[index].num > 0){
                    this.countprice = parseInt(this.countprice) - this.list[index].p1;
                    this.numbers--
                    this.list[index].num--
                }
            }
        },
        allcheck(){
            if(event.target.checked == true){
                for(let i=0; i<this.list.length; i++){
                    if(this.list[i].che == false){
                        this.list[i].che = true
                        this.countprice = parseInt(this.countprice) + this.list[i].p1 * this.list[i].num;
                        this.numbers++;
                    }    
                }
            }else{
                for(let i=0;i<this.list.length;i++){
                    this.list[i].che = false
                    this.countprice = parseInt(this.countprice) - this.list[i].p1 * this.list[i].num;
                    this.numbers--;
                }
            }
        },
        del(){
            var list = this.list
            for(let i=0; i<list.length; i++){
                if(list[i].che == true){
                    this.countprice = parseInt(this.countprice) - this.list[i].p1 * this.list[i].num;
                    this.numbers = parseInt(this.numbers) - this.list[i].num;
                    this.list.splice(i,1)  
                    i--;
                }
            }
        }
        
    },

    mounted() {     
        this.$nextTick(function(){
            $(window).scroll(function(){
                if($(window).scrollTop()>650){
                    $('#top').addClass('go')
                }else{
                    $('#top').removeClass('go')                
                }
            })
        })
        this.$nextTick(function(){
            $('#top').click(function(){
                $('html,body').animate({'scrollTop':'0'})
            })
        })   
        // this.$nextTick(function(){
        // })

        //全选
        // $('#allcheck').click(function(){
        //     //获取全选按钮的值为true或false
        //     var allcheck = $('#allcheck').prop("checked");
        //     if (allcheck == true){
        //         $("input[type='checkbox']").prop("checked",true)
        //     }else{
        //         $("input[type='checkbox']").prop("checked",false)
        //     }
        // })  
        //判断全选，当有一个不选全选按钮取消
        // $("input[type='checkbox']").click(function(){
        //     var a = $("input[type='checkbox']:checked")
        //     var b = $('.checkbox1')
        //     if (a.length-1<b.length){
        //         $('#allcheck').prop("checked",false)
        //     }
        // })
        //删除
        
        // $('#del').click(function(){
        //     var checkbox = document.getElementsByClassName('checkbox1');
        //     for(var i=0;i<checkbox.length;i++){
        //         if(checkbox[i].checked){
        //             checkbox[i].parentNode.parentNode.parentNode.removeChild(checkbox[i].parentNode.parentNode);
        //             i--;
        //             $('#allcheck').prop("checked",false)
        //         }
        //     }
		// })

        // $(".checkbox1").click(function(){
        //     var countprice = 0
        //     var checkbox1 = document.getElementsByClassName('checkbox1');
        //     for(var a=0; a<checkbox1.length; a++){
        //         if(checkbox1[a].checked){
        //             var p = this.parentNode.parentNode.children[2].children[1].children[0].children[0].children[1].innerHTML
                    
        //             countprice = p
        //             console.log(countprice)
        //         }
        //         // return countprice
                
        //     }
        // })

        // var cbox;
        // $("input[type='checkbox']").click(function(){
        //     for(var a=0; a<cbox.length; a++){

        //         if($("input[type='checkbox']")){
        //             var p = $(this).parent().parent().children(".content").children("div:nth-of-type(2)").children("div:nth-of-type(1)").children("div:nth-of-type(1)").children(".p1").text()
        //             console.log(p)
        //             countprice += p
        //         }
        //     }
        // })
    },
    computed: {
        // countprice: function() {
        //     var countprice = 0;
        //     for (var i = 0; i < this.list.length; i++) {
        //         countprice += this.list[i].p1 * this.list[i].num;
        //     }
        //     return countprice;
        // }
    },
};
</script>