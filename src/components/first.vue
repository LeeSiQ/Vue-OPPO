<template>
    <main>
        <router-view></router-view>
        <ul class="box">
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
    </main>
</template>
<style>
    *{
    margin: 0px;
    padding: 0px;
    list-style: none;
    }
    a{
        text-decoration: none;
    }
    i{
        font-style: normal;
    }
</style>
<style scoped>
.box{
    position: fixed;
    bottom:0px;
    left: 0px;
    width:100%;
    background: #fff;
    border-top: 1px solid #eee;
}
.box li{
    width:25%;
    float: left;
    text-align: center;
}
.box a{
    color:#666;
    font-size: 12px;
}
.box  .router-link-active img:nth-of-type(1){
    width: 30%;
    display: none;
}
.box  .router-link-active img:nth-of-type(2){
    width: 30%;
    display: inline-block;
}
.box a img:nth-of-type(1){
    display: inline-block;
    width: 30%;
}
.box a img:nth-of-type(2){
    display: none;
    width: 30%;
}
</style>