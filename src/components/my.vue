<template>
    <div id="">
        <div class="page">
            <div class="bg">
                <div class="top">
                    <div class="top1">
                        <div class="login">
                            <img src="images/my/login.png" alt="">
                            <div class="loginuser">
                                <div>登录账号</div>
                                <div>体验更多功能</div>
                            </div>
                            <router-link to="/login"><button>登录</button></router-link>
                        </div>
                        <div class="money">
                            <div class="ticket">
                                <p>--</p>
                                <p>优惠券</p> 
                            </div>
                            <div class="car">
                                <p>--</p>
                                <p>积分</p>
                            </div>
                        </div>
                    </div>
                    <div class="top2">
                        <div>
                            <div>我的订单</div>
                            <div>全部订单 ></div>
                        </div>
                        <ul class="box">
                            <li>
                                <div><van-icon name="paid" /></div>
                                <p>待付款</p>
                            </li>
                            <li>
                                <div><van-icon name="tosend" /></div>
                                <p>待发货</p>
                            </li>
                            <li>
                                <div><van-icon name="peer-pay" /></div>
                                <p>已发货</p>
                            </li>
                            <li>
                                <div><van-icon name="comment-circle-o" /></div>
                                <p>待评价</p>
                            </li>
                            <li>
                                <div><van-icon name="after-sale" /></div>
                                <p>售后</p>
                            </li>
                        </ul>
                    </div>
                    <div class="top3">
                        <div>常用工具</div>
                        <ul class="box2">
                            <li v-for="(it,index) in list" :key="index">
                                <img :src="it.img" alt="">
                                <p>{{it.name}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <ul class="bottom1">
                    <li>
                        <span><van-icon name="down" /></span>
                        <span> 下载App</span>
                    </li>
                    <li>
                        <span><van-icon name="user-o" /></span>
                        <span> 登录账号</span>
                    </li>
                </ul>
                <ul class="bottom2">
                    <li>营业执照</li>
                    <li>隐私政策</li>
                    <li>用户协议</li>
                </ul>
                <div class="bottom3">©2005 - 2022 OPPO 版权所有 粤ICP备14056724号</div>
            </div>
        </div>

    </div>
</template>
<style scoped>


.page{
    height: 100vh;
    color: #666;
    max-height: 100vh;
    background: #f9f9f9;
}
.bg{
    background: #fff;
}
.top{
    background: url(../assets/images/my/background.png)no-repeat;
    background-size: 100%;
    padding: 4% 3% 2%;
}
/* --------- */
.login{
    display: flex;
    justify-content: space-between;
}
.login>img{ 
    width: 12%;
    flex-grow: 1;
    margin-top: 2%;
}
.loginuser{
    flex-grow: 7;
    margin-left: 3%;
}
.loginuser>div:nth-of-type(1){
    font-size: 18px;
    font-weight: bold;
    margin: 7% 3% 1% 0%;
}
.loginuser>div:nth-of-type(2){
    font-size: 14px;
}
.login a {
    flex-grow: 2;
    padding-top: 5%;
}
.login a button{
    flex-grow: 2;
    background: red;
    border: none;
    color: #ffffff;
    border-radius: 50px;
    height: 50%;
    font-size: 16px;
    font-weight: 200;
    padding: 2% 20%;
    margin: 7% 0% 0% 0%;
    box-sizing: border-box;
}
.money{
    display: flex;
    justify-content: center;
    margin-top: 5%;
    text-align: center;
    font-size: 14px;
    color: #000;
}
.ticket,.car{
    margin: 0% 12%;
}
.ticket>p:nth-of-type(1){
    margin: 3% 0% 20%;
}
.car>p:nth-of-type(1){
    margin: 3% 0% 30%;
}
/* --------- */
.top2{
    margin: 7% 2% 5%; 
}
.top2>div{
    display: flex;
    justify-content: space-between;
}
.top2>div div:nth-of-type(1){
    font-size: 16px;
    font-weight: 500;
    color: #000;
}
.top2>div div:nth-of-type(2){
    font-size: 14px;
    margin-right: 3%;
    color: #666;
}
.box{
    display: flex;
    justify-content: flex-start;
    margin: 5% -5% 0%;
}
.box li{
    width: 20%;
    text-align: center;
    margin: 3%;
}
.box>li>div{
    margin-bottom: 10%;
}
.box>li>div>i{
    font-size: 30px;
    color: #666;
}
.box>li>p{
    font-size: 12px;
}
/* -------- */
.top3{
    padding-bottom: 5%;
}
.top3>div{
    margin-left: 2%;
    font-size: 16px;
    font-weight: 500;
    color: #000;
}
.box2{
    display: flex;
    flex-wrap: wrap;
}
.box2 li{
    width: 25%;
    text-align: center;
    padding: 5% 1% 0%;
    box-sizing: border-box;
}
.box2 li img{
    width: 40%;
}
.box2 li p{
    font-size: 12px;
}
/* ----------- */
.bottom{
    margin-top: 3%;
    background: #fff;
    padding: 3% 5% 4%;
}
.bottom1{
    display: flex;
    justify-content: space-between;
}
.bottom1 li{
    width: 45%;
    text-align: center;
}
.bottom1 li span:nth-of-type(1){
    font-size: 16px;
}
.bottom1 li span:nth-of-type(2){
    color: #000;
    font-size: 14px;
}
.bottom2{
    display: flex;
    justify-content: center;
    font-size: 12px;
    margin-top: 7%;
}
.bottom2 li{
    width: 25%;
    text-align: center;
}
.bottom3{
    font-size: 12px;
    margin-top: 3%;
    text-align: center;
}

</style>
<script>
export default {
    data() {
        return {
            list:[
                {
                   img:'images/my/p1.webp',
                   name:'服务网点', 
                },
                {
                   img:'images/my/p2.webp',
                   name:'保障服务', 
                },
                {
                   img:'images/my/p3.webp',
                   name:'真伪查询', 
                },
                {
                   img:'images/my/p4.webp',
                   name:'维修服务', 
                },
                {
                   img:'images/my/p5.webp',
                   name:'收货地址', 
                },
                {
                   img:'images/my/p6.webp',
                   name:'换新/回收', 
                },
                {
                   img:'images/my/p7.webp',
                   name:'学生优惠', 
                },
            ]
        };
    },
}
</script>