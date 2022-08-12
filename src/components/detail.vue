<template>
    <div>
        <van-tabs v-model="activeName">
            <van-icon name="revoke" onclick="history.back()" id="back"/>
            <van-tab title="商品详情" name="a"  id="van-tabs__nav" class="pro">  
                <main class="img">
                    <van-swipe @change="onChange" :autoplay="3000">
                        <van-swipe-item><img src="../assets/images/detail1.jpeg" alt=""></van-swipe-item>
                        <van-swipe-item><img src="../assets/images/detail2.jpeg" alt=""></van-swipe-item>
                        <van-swipe-item><img src="../assets/images/detail3.jpeg" alt=""></van-swipe-item>
                        <van-swipe-item><img src="../assets/images/detail4.jpeg" alt=""></van-swipe-item>
                        <van-swipe-item><img src="../assets/images/detail5.png" alt=""></van-swipe-item>
                        <van-swipe-item><img src="../assets/images/detail6.png" alt=""></van-swipe-item>
                        <van-swipe-item><img src="../assets/images/detail7.jpeg" alt=""></van-swipe-item>
                        <van-swipe-item><img src="../assets/images/detail8.png" alt=""></van-swipe-item>
                        <van-swipe-item><img src="../assets/images/detail9.png" alt=""></van-swipe-item>
                        <van-swipe-item><img src="../assets/images/detail10.png" alt=""></van-swipe-item>
                        <van-swipe-item><img src="../assets/images/detail11.png" alt=""></van-swipe-item>
                        <van-swipe-item><img src="../assets/images/detail12.png" alt=""></van-swipe-item>
                        <van-swipe-item><img src="../assets/images/detail13.png" alt=""></van-swipe-item>
                        <template #indicator>
                            <div class="custom-indicator">{{ current + 1 }}/13</div>
                        </template>
                    </van-swipe>
                    <div class="hidden360">
                        <div class="go360">
                            <img src="../assets/images/360.png" alt="">
                            <p>360°探索 </p>
                        </div>
                    </div>
                    
                </main>

                <div>
                    <div class="price">
                        <div>
                            <span>¥</span>
                            <span>5499</span>
                        </div>
                        <div>
                            <span>券后价</span>
                            <span>¥</span>
                            <span>5499</span>
                        </div>
                    </div>
                </div>

                <section>
                    <div class="div1">
                        <!-- 优惠券单元格 -->
                        <van-coupon-cell
                            :coupons="coupons"
                            :chosen-coupon="chosenCoupon"
                            @click="showList = true"
                            />
                            <!-- 优惠券列表 -->
                            <van-popup
                                v-model="showList"
                                round
                                position="bottom"
                                style="height: 70%; padding-top: 4px;"
                            >
                            <van-coupon-list
                                :coupons="coupons"
                                :chosen-coupon="chosenCoupon"
                                :disabled-coupons="disabledCoupons"
                                @change="onChange1"
                                @exchange="onExchange"
                            />
                        </van-popup>
                    </div>

                    <div class="div2">
                        <div><p>OPPO Find X5 Pro 12G+256G 白瓷 官方标配</p></div>
                        <div><p>【OPPO官方商城】</p></div>
                        <div><p>一帧影像，动用两块芯片。</p></div>
                        <div><p>① 加99元享329元45W无线闪充充电器；</p></div>
                        <div><p>②OPPO会员享免费贴膜等多项服务权益。</p></div>
                        <div><a href="">以旧换新至高补贴1380元>>></a></div>
                        <div><a href="">政府消费补贴，认证享95折，点击认证>></a></div>
                        <div>
                            <img src="../assets/images/detail14.png" alt="">
                            <span>商品对比</span>
                        </div>
                    </div>

                    <div class="div3">
                        <ul>
                            <li v-for="(list5,index) in list5" :key="index">
                                <div><img :src="list5.img" alt=""></div>
                                <p>{{list5.name}}</p>
                                <span>{{list5.conf}}</span>
                            </li>
                        </ul>
                        
                    </div>

                    <div class="div4">
                        <div>
                            <div>颜色</div>
                            <ul class="box1" id="box1">
                                <li v-for="(list9,index) in list9" :key="index" v-bind:class="{'bc1':index==selectcolor}" v-on:click="changecolor(index)">{{list9.name}}</li>
                                
                            </ul>
                        </div>
                        <div>
                            <div>配置</div>
                            <ul class="box2" id="box2">
                                <li v-for="(list10,index) in list10" :key="index" v-bind:class="{'bc1':index==selectmemory}" v-on:click="changememory(index)">{{list10.memory}}</li>
                            </ul>
                        </div>
                        <div >
                            <div>选择套餐</div>
                            <ul class="box3" id="box3">
                                <li v-for="(list11,index) in list11" :key="index" v-bind:class="{'bc1':index==selectconfig}" v-on:click="changeconfig(index)">{{list11.config}}</li>
                            </ul>
                        </div>
                        <div>
                            <div>数量</div>
                            <div @click="detailnum--">-</div>
                            <div>{{detailnum}}</div>
                            <div @click="detailnum++">+</div>
                        </div>            
                    </div>

                    <div class="div5">
                        <!-- 优惠券单元格 -->
                        <van-coupon-cell
                            :coupons1="coupons1"
                            :chosen-coupon="chosenCoupon1"
                            @click="showList1 = true"
                            />
                            <!-- 优惠券列表 -->
                            <van-popup
                                v-model="showList1"
                                round
                                position="bottom"
                                style="height: 70%; padding-top: 4px;"
                            >
                            <van-coupon-list
                                :coupons1="coupons1"
                                :chosen-coupon="chosenCoupon1"
                                :disabled-coupons1="disabledCoupons1"
                                @change="onChange2"
                                @exchange="onExchange1"
                            />
                        </van-popup>
                    </div>
                    
                    <div class="div6">
                        <div>
                            <p>超值搭配</p>
                            <p>搭配购买最高省￥1550</p>
                        </div>
                        <ul>
                            <li v-for="(list6,index) in list6" :key="index">
                                <img :src="list6.img" alt="">
                                <p> {{list6.name}}</p>
                                <div>
                                    <span>{{list6.p1}}</span>
                                    <span>{{list6.p2}}</span>
                                </div>
                                <input type="checkbox">
                            </li>
                        </ul>
                    </div>

                    <div class="div7">
                        <div class="div7-1">
                            <div>
                                <span>用户评价</span>
                                <span>（5048）</span>
                            </div>
                            <div>
                                <span>好评率</span>
                                <span>97.6%</span>
                                <span class="more"> ></span>
                            </div>
                        </div>
                        <div class="div7-2">
                            <ul>
                                <li v-for="(it,index) in list1" :key="index" v-bind:class="{'bc':index==num4}" v-on:click="change4(index)">
                                    <span>{{it.pname}} </span>
                                    <span> {{it.pnum}}</span>    
                                </li>
                            </ul>
                        </div>
                        <div class="div7-3">
                            <ul>
                                <li v-for="(list7,index) in list7" :key="index"> 
                                    <div class="div7-3-1">
                                        <img :src="list7.logo" alt="">
                                        <div>
                                            <div class="div7-3-1center">
                                                <p> {{list7.name}} </p>
                                                <img :src="list7.vip" alt="">
                                                <div>
                                                    <img :src="list7.start" alt="">
                                                    <img :src="list7.start" alt="">
                                                    <img :src="list7.start" alt="">
                                                    <img :src="list7.start" alt="">
                                                    <img :src="list7.start" alt="">
                                                </div>
                                            </div>
                                            <div class="div7-3-1center2">
                                                <p>{{list7.time}}</p>
                                                <i>｜</i>
                                                <p>{{list7.con}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="div7-3-2"><div>{{list7.sec}}</div></div>
                                    <div class="div7-3-3">
                                        <img :src="list7.img1" alt="">
                                        <img :src="list7.img2" alt="">
                                    </div>
                                </li>
                                <li>更多评价</li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                <div class="imgbox">
                    <img :src="list8.img" alt="" v-for="(list8,index) in list8" :key="index">
                </div>
                <van-icon name="back-top" id="gotop" />
            </van-tab>

            <van-tab title="用户评价" name="b">
                <main>
                    <div>
                        <ul class="comment">
                            <li v-for="(item,index) in list1" :key="index" v-bind:class="{'bc':index==num1}" v-on:click="change1(index)">
                                <span>{{item.pname}}</span>
                                <span>{{item.pnum}}</span>
                            </li>
                        </ul>
                        <ul class="scomment">
                            <li v-for="(item,index) in list2" :key="index" v-bind:class="{'bc':index==num2}" v-on:click="change2(index)">
                                <span>{{item.pname}}</span>
                                <span>{{item.pnum}}</span>
                            </li>
                        </ul>
                    </div>
                </main>
                <div class="split"></div>
                <section class="sec">
                    <div class="select">
                        <div class="now">
                            <van-checkbox v-model="checked" checked-color="#ee0a24"></van-checkbox>
                            <span>只看当前产品</span>
                        </div>
                        <div>
                            <span v-for="(item,index) in list4" :key="index" v-bind:class="{'sort':index==num3}" v-on:click="change3(index)">{{item.name}}</span>
                        </div>
                    </div>
                    <ul class="conbox">
                        <li v-for="(list3,index) in list3" :key="index">
                            <div class="model">
                                <img :src="list3.logo" alt="">
                                <div>
                                    <div class="mtop">
                                        <p> {{list3.name}} </p>
                                        <img :src="list3.vip" alt="">
                                        <img :src="list3.car" alt="">
                                        <div>
                                            <img :src="list3.start" alt="">
                                            <img :src="list3.start" alt="">
                                            <img :src="list3.start" alt="">
                                            <img :src="list3.start" alt="">
                                            <img :src="list3.start" alt="">
                                        </div>
                                    </div>
                                    <div class="mbottom">
                                        <p>{{list3.time}}</p>
                                        <i>｜</i>
                                        <p>{{list3.con}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="conp"> 
                                {{list3.sec}} 
                            </div>
                            <div class="conimg">
                                <div><img :src="list3.img1" alt=""></div>
                               <div> <img :src="list3.img2" alt=""></div>
                            </div>
                            <div></div>
                        </li>
                    </ul>
                </section>
            </van-tab>

            <van-tab title="参数及包装" name="c" class="insimg">
                <img src="images/ins1.png" alt="">
                <img src="images/ins2.png" alt="">
                <img src="images/ins3.png" alt="">
                <img src="images/ins4.png" alt="">
                <img src="images/ins5.png" alt="">
                <img src="images/ins6.png" alt="">
                <img src="images/ins7.png" alt="">
            </van-tab>

            <footer>
                <van-goods-action>
                    <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
                    <van-goods-action-icon icon="cart-o" text="购物车" />
                    <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
                    <van-goods-action-button type="warning" text="加入购物车" />
                    <van-goods-action-button type="danger" text="立即购买" />
                </van-goods-action>
            </footer>
        </van-tabs>
    </div>
</template>
<style scoped>
.sort{
    color: #000 !important;
}
.van-icon-revoke{
    position: absolute;
    top: 4vw;
    left: 2vw;
    color: rgb(246, 52, 52);
    font-size: 18px;
    font-weight: bold;
    z-index: 999;
}
.van-tabs__content{
    position: relative;
}
.name{
    display: block;
    position: fixed;
    bottom: 10%;
    right: 7%;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid rgba(0,0,0,0.1);
    text-align: center;
    padding-top: 15px;
    box-sizing: border-box;
    z-index: 100;
    cursor: pointer;
}
/* -------- */
.custom-indicator {
    position: absolute;
    bottom: 10%;
    right: 5%;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: #000;
    opacity: 0.3;
}
.van-swipe__track img{
    width: 100%;
}
main{
    position: relative;
}
.hidden360{
    position: absolute;
    bottom: 18%;
    right: 0%; 
    width: 30%;
    height: 10%;
    overflow: hidden;
}
.go360{
    position: absolute;
    bottom: 18%;
    right: -16%;
    display: flex;
    background: #fff;
    border: 1px solid rgba(229,229,229,0.5);
    border-radius: 10px;
    border-right: none;
    overflow: hidden;
}
.go360 img{
    width: 17%;
    margin: 1% 3%;
}
.go360 p{
    padding: 2%;
    font-size: 12px;
    margin-right: -5%;
}
/* ---------- */
.price{
    display: flex;
    justify-content: flex-start;
    padding: 4%;
    border-top: 1px solid #ddd;
}
.price div:nth-of-type(1){
    display: flex;
    justify-content: space-between;
    color: red;
    padding-top: 1%;
}
.price div:nth-of-type(1) span:nth-of-type(1){
    font-size: 12px;
    padding: 11% 0% 0% ;
}
.price div:nth-of-type(1) span:nth-of-type(2){
    font-size: 18px;
}
.price div:nth-of-type(2){
    display: flex;
    justify-content: space-between;
    color: #fff;
    background: red;
    padding: 1% 3%;
    border-radius: 30px;
    margin-left: 2%;
}
.price div:nth-of-type(2) span:nth-of-type(1){
    font-size: 12px;
    padding-top: 4%;
}
.price div:nth-of-type(2) span:nth-of-type(2){
    font-size: 12px;
    margin-top: 6%;
}
.price div:nth-of-type(2) span:nth-of-type(3){
    font-size: 18px;
}
/* ------------- */
section{
    background: #f7f8fa;
    padding: 4%;
}
section>div{
    background: #fff;
    border-radius: 5px;
}

.van-cell {
    padding: 5% 3% 5%;
    border-radius: 10px;
}
/* ------- */
.div2{
    display: flex;
    flex-direction: column;
    margin-top: 2%;
    padding: 4%;
    
}
.div2 div:nth-of-type(1) p{
    font-size: 17px;
    padding: 1vh;
}
.div2 div:nth-of-type(2) p{
    font-size: 14px;
    color: #F79A47;
}
.div2 div:nth-of-type(3) p,.div2 div:nth-of-type(4) p,.div2 div:nth-of-type(5) p{
    font-size: 14px;
    color: #666;
    line-height: 150%;
}
.div2 div:nth-of-type(6) a,.div2 div:nth-of-type(7) a{
    font-size: 14px;
    color: #F79A47;
    padding: 1%
}
.div2 div:nth-of-type(8) {
    display: flex;
    justify-content: flex-start;
    margin-top: 3%;
}
.div2 div:nth-of-type(8) img{
    width: 7%;
    margin-right: 2%;
}
.div2 div:nth-of-type(8) span{
    font-size: 12px;
    padding: 1%;
}
/* -- */
.div3{
    margin-top: 1px;
}
.div3 ul {
    display: flex;
    white-space: nowrap;
    /* overflow-x: auto; */
    overflow-y: hidden;
}
/* 取消下划线 */
::-webkit-scrollbar{display:none}
.div3 ul li{
    display: flex;
    flex-direction: column; 
    text-align: center;
    margin: 2%;
}
.div3 ul li div{
    height: 33%;
}
.div3 ul li img{
    width: 30%;
}
.div3 ul li p{
    font-size: 13px;
    color: #333;
    margin: 5% 0%;
}
.div3 ul li span{
    font-size: 12px;
    color: #666;
}
/* -- */
.div4{
    display: flex;
    flex-direction: column;
    padding: 5% 3%;
    margin-top: 2%;
}
.div4>div{
    display: flex;
    justify-content: flex-start;
} 
.div4>div div{
    color: #666;
    font-size: 14px;
    /* flex-grow: 1;   */
    padding: 2% 3% 2% 2%;
}
.div4>div ul {
    display: flex;
    flex-wrap: wrap;
    flex-grow:9;     
}
.div4>div ul li {
    font-size: 14px;
    padding: 2%;
    background: #f7f8fa;
    margin: 0% 2% 3% 0%;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #fff;
}
.div4>div:nth-of-type(4) div:nth-of-type(2){
    background: #f7f8fa;
    padding: 2% 4%;
    border-radius: 5px;
    margin: 0% 2%;
}
.div4>div:nth-of-type(4) div:nth-of-type(4){
    background: #f7f8fa;
    padding: 2% 4%;
    border-radius: 5px;
    margin: 0% 2%;
}
/* ------------- */
.div5{
    margin-top: 1%;
}
/* ------------- */
.div6{
    margin-top: 1%;
    padding: 3% 2%;
}
.div6 div{
    display: flex;
    flex-direction: row;
}
.div6 div p:nth-of-type(1){
    font-size: 15px;
    color: #333;
    padding: 1%;
}
.div6 div p:nth-of-type(2){
    font-size: 13px;
    color: #0000008C;
    padding: 2%;
}
.div6 ul {
    display: flex;
    white-space: nowrap;
    /* overflow-x: auto; */
    overflow-y: hidden;
}
/* 取消下划线 */
::-webkit-scrollbar{display:none}
.div6 ul li{
    display: flex;
    flex-direction: column; 
    text-align: center;
    margin: 2%;
    border: 1px solid rgba(0,0,0,0.06);
    border-radius: 5px;
    padding: 5%;
    position: relative;
}
.div6 ul li:nth-of-type(2){
    padding: 5% 1%;
}
.div6 ul li:nth-of-type(2) img{
    flex-grow:9;
}
.div6 ul li img{
    width: 100%;
    flex-grow:8;
}
.div6 ul li p{
    font-size: 14px;
    color: #333;
    margin: 15% 0% 5%;
    flex-grow:1;
}
.div6 ul li span:nth-of-type(1){
    font-size: 12px;
    color: #f63434;
} 
.div6 ul li span:nth-of-type(2){
    margin-left: 3%;
    font-size: 12px;
    text-decoration: line-through;
    color: #b2b2b2;
} 
.div6 ul li input{
    border-radius: 10px;
    position: absolute;
    bottom: 0px;
    right: 0px;
}
/* ------------- */
.div7{margin-top: 5%;}
.div7-1{
    display: flex;
    justify-content: space-between;
    color: #000;
    padding: 3% 3% 3% 5%;
}
.div7-1 span{
    font-size: 16%;
}
.more{
    color: #ddd;
}
.div7-2 ul{
     display: flex;
    white-space: nowrap;
    /* overflow-x: auto; */
    overflow-y: hidden;
}
.div7-2 ul li{
    padding: 1% 2%;
    background: #fde3e3;
    border: 1px solid #fde3e3;
    border-radius: 20px;
    margin: 0% 3% 2%;
}
.div7-2 ul li span{
    font-size: 13px;
}
/* ------------- */
.div7-3-1{
    display: flex;
}
.div7-3-1>img{
    width: 15%;
    border-radius: 50%;
}
.div7-3-1>div{
    width: 95%;
    margin-left: 5%;
}
.div7-3-1center{
    display: flex;
}
.div7-3-1center>img{
    width: 20%;
    height: 10%;
    margin: 1% 3% 0% 1%;
}
.div7-3-1center>div>img{
    width: 9%;
    margin: 1%;
}
.div7-3-1center2{
    display: flex;
    justify-content: flex-start;
    color: #B3B3B3;
    font-size: 13px;
}
.div7-3-1center2>p:nth-of-type(2){
    width: 55%;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
}
.div7-3-1center2>i{
    font-style: normal;
}
.div7-3{
    padding: 3%;
}
.div7-3>ul{
    display: flex;
    white-space: nowrap;
    overflow-y: hidden;
}
.div7-3>ul>li{
    border: 1px solid #aaa;
    border-radius: 20px;
    margin: 0% 3% 2% 0%;
    padding: 5% 3%;
    width: 85%;
    
}
.div7-3>ul>li:last-of-type{
    padding: 20% 10%;
    white-space:pre-wrap;
    box-sizing: border-box;
}
.div7-3-2{
    width: 100%;
    font-size: 14px;
    margin: 4% 0% 0%;
}
.div7-3-2>div{
    width: 100%;
    flex-wrap: wrap;
    white-space:pre-wrap;
    padding-right: 5%;
    box-sizing: border-box;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 这里是超出几行省略 */
    overflow: hidden;
}
.div7-3-3{
    display: flex;
    margin-top: 3%;
}
.div7-3-3 img{
    border-radius: 10px;
    margin-right: 3%;
    width: 5rem;
    height: 5rem;
}
/* ------------- */
.imgbox{
    margin-bottom: 15vh;
}
.imgbox>img{
    width: 100%;
    display: block;
}
/* ------------- */
.comment{
    display: flex;
    flex-wrap: wrap;
    margin: 3% 5% 1%;

}
.comment li{
    font-size: 14px;
    color: rgba(0,0,0,0.6);
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 30px;
    padding: 2% 6%;
    margin: 1% 2%;
}
.scomment{
    display: flex;
    white-space: nowrap;
    overflow-y: hidden;
    margin: 1% 5% 2%;

}
.scomment li{
    font-size: 14px;
    color: rgba(0,0,0,0.6);
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 30px;
    padding: 2% 4%;
    margin: 1%;
    background: #f6f6f6;
}
.bc{
    color: #f34141 !important;
    background-color: #fde3e3 !important;
    border-color: #f34141 !important;
}
.bc1{
    color: #f34141 !important;
    border: 1px solid #f34141 !important;
}
.split{
    height: 1vw;
    background: #f6f6f6;
}
.sec{
    margin: 5%;
    background: #fff;
    padding: 2%;
}
.select{
    display: flex;
    justify-content: space-between;
}
.now{
    display: flex;
    justify-content: flex-start;
    width: 50%;
}
.select>div:nth-of-type(2){
    width: 50%;
    display: flex;
    justify-content: flex-end;
}
.select>div:nth-of-type(2) span{
    margin: 0% 2%;
}
.now>span{
    font-size: 14px;
    color: #aaa;
    margin: 0% 3%;
}
.select span{
    color: #aaa;
}
.conbox li{
   padding: 8% 0%;
   
}
.model{
    display: flex;
    
}
.model>img{
    width: 12%;
    height: 12%;
    border-radius: 50%;
}
.model>div{
    margin-left: 3%;
}
.mtop{
    display: flex;
}
.mtop>p{
    width: 20%;
}
.mtop>img:nth-of-type(1){
    width: 20%;
    margin: 1%;
}
.mtop>img:nth-of-type(2){
    width: 15%;
}
.mtop>div{
    width: 40%;
    display: flex;
    justify-content: flex-end;
}
.mtop>div>img{
    width: 12%;
    height: 60%;
    margin: 2%;
}
.mbottom{
    display: flex;
    font-size: 12px;
    color: #b3b3b3;
}
.mbottom p:nth-of-type(1){
    width: 13%;
}
.mbottom i{
    font-style: normal;
    width: 7%;
}
.mbottom p:nth-of-type(2){
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.conp{
    margin: 5% 1% 3%;
    color: rgba(0,0,0,0.85);
    font-size: 15px;
}
.conimg{
    display: flex;
    height: 20vh;
}
.conimg div{
    width: 50%;
}
.conimg div:nth-of-type(1){
    margin-right: 2%;
}
.conimg div img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.insimg img{
    width: 100%;
}
</style>
<script>
//购物车引入
import { Toast } from 'vant';
import $ from  'jquery'

const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};
const coupon1 = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};
export default {
    data() {
        return {
            list1:[
                {
                    pname:'手感一流',
                    pnum:'932'
                },
                {
                    pname:'流畅至极',
                    pnum:'236'
                },
                {
                    pname:'外观漂亮',
                    pnum:'725'
                },
                {
                    pname:'物流快',
                    pnum:'579'
                },
                {
                    pname:'像素一流',
                    pnum:'631'
                },
            ],
            list2:[
                {
                    pname:'全部',
                    pnum:'',
                },
                {
                    pname:'视频/图片',
                    pnum:'1973',
                },
                {
                    pname:'追评',
                    pnum:'389',
                },
                {
                    pname:'好评',
                    pnum:'5013',
                },
                {
                    pname:'中/差评',
                    pnum:'129',
                },
            ],
            list3:[
                {
                    logo:'images/pl1.jpg',
                    name:'月***间',
                    vip:'images/pl4.png',
                    car:'images/pl7.png',
                    start:'images/pl5.png',
                    time:'3月前',
                    con:'水蓝，12G+256G，加99元享329元45W无线充',
                    sec:' 像素好的没法说包装也很不错，素皮的手感超级好背后的环形山套上外壳太绝。',
                    img1:'images/pl3.jpeg',
                    img2:'images/pl2.jpeg',
                },
                {
                    logo:'images/pl2-1.jpg',
                    name:' 杨***9 ',
                    vip:'images/pl4.png',
                    car:'images/pl10.png',
                    start:'images/pl5.png',
                    time:'3月前',
                    con:'黑釉，12G+512G，官方标配',
                    sec:'  手机外观精美，黑颜色到店自提，直接爱了，运行  yyds,  多说无益喜欢下单就好，OPPO也是我这几  年一直安利的品牌了，今天刚刚拿的，别问我现在的心情，问就是激动。 ',
                    img1:'images/pl2-2.jpeg',
                    img2:'images/pl2-3.jpeg',
                },
                {
                    logo:'images/pl1.jpg',
                    name:'月***间',
                    vip:'images/pl4.png',
                    car:'images/pl7.png',
                    start:'images/pl5.png',
                    time:'三月前',
                    con:'水蓝，12G+256G，加99元享329元45W无线充',
                    sec:' 像素好的没法说包装也很不错，素皮的手感超级好背后的环形山套上外壳太绝。',
                    img1:'images/pl3.jpeg',
                    img2:'images/pl2.jpeg',
                },
            ],
            list4:[
                {name:'最新排序 |'},
                {name:'默认排序'},
            ],
            list5:[
                {
                    img:'images/detailp1.png',
                    name:'摄影',
                    conf:'自研映像芯片',
                },
                {
                    img:'images/detailp2.png',
                    name:'影像',
                    conf:'哈苏专业模式',
                },
                {
                    img:'images/detailp3.png',
                    name:'防抖系统',
                    conf:'悬浮防抖',
                },
                {
                    img:'images/detailp4.png',
                    name:'闪充',
                    conf:'80W超级闪充',
                },
                {
                    img:'images/detailp5.png',
                    name:'处理器',
                    conf:'全新骁龙8',
                },
            ],
            list6:[
                {
                    img:'images/l1.png',
                    name:'80W 车充',
                    p1:'169',
                    p2:'199',
                },
                {
                    img:'images/l2.png',
                    name:'18W散热背夹',
                    p1:'169',
                    p2:'199',
                },
                {
                    img:'images/l3.png',
                    name:'Enco X',
                    p1:'599',
                    p2:'999',
                },
                {
                    img:'images/l4.png',
                    name:'手表eSIM版',
                    p1:'999',
                    p2:'1499',
                },
                {
                    img:'images/l5.png',
                    name:'Air2',
                    p1:'159',
                    p2:'199',
                },
                {
                    img:'images/l6.png',
                    name:'Air2 Pro',
                    p1:'249',
                    p2:'299',
                },
                {
                    img:'images/l7.png',
                    name:'X2 有线充版',
                    p1:'799',
                    p2:'899',
                },
                {
                    img:'images/l8.png',
                    name:'手表蓝牙版',
                    p1:'899',
                    p2:'1299',
                },
            ],
            list7:[
                {
                    logo:'images/pl1.jpg',
                    name:'月***间',
                    vip:'images/pl4.png',
                    start:'images/pl5.png',
                    time:'3月前',
                    con:'水蓝，12G+256G，加99元享329元45W无线充',
                    sec:' 像素好的没法说包装也很不错，素皮的手感超级好背后的环形山套上外壳太绝。',
                    img1:'images/pl3.jpeg',
                    img2:'images/pl2.jpeg',
                },
                {
                    logo:'images/pl2-1.jpg',
                    name:' 杨***9 ',
                    vip:'images/pl4.png',
                    start:'images/pl5.png',
                    time:'3月前',
                    con:'黑釉，12G+512G，官方标配',
                    sec:'  手机外观精美，黑颜色到店自提，直接爱了，运行yyds,多说无益喜欢下单就好，OPPO也是我这几年一直安利的品牌了，今天刚刚拿的，别问我现在的心情，问就是激动。 ',
                    img1:'images/pl2-2.jpeg',
                    img2:'images/pl2-3.jpeg',
                },
                {
                    logo:'images/pl1.jpg',
                    name:'月***间',
                    vip:'images/pl4.png',
                    start:'images/pl5.png',
                    time:'三月前',
                    con:'水蓝，12G+256G，加99元享329元45W无线充',
                    sec:' 像素好的没法说包装也很不错，素皮的手感超级好背后的环形山套上外壳太绝。',
                    img1:'images/pl3.jpeg',
                    img2:'images/pl2.jpeg',
                },
            ],
            list8:[
                {
                    img:'images/f1.webp'
                },
                {
                    img:'images/f2.jpeg'
                },
                {
                    img:'images/f3.jpeg'
                },
                {
                    img:'images/f4.jpeg'
                },
                {
                    img:'images/f5.jpeg'
                },
                {
                    img:'images/f6.png'
                },
                {
                    img:'images/f7.jpeg'
                },
                {
                    img:'images/f8.jpeg'
                },
                {
                    img:'images/f9.jpeg'
                },
                {
                    img:'images/f10.jpeg'
                },
                {
                    img:'images/f12.jpeg'
                },
                {
                    img:'images/f13.jpeg'
                },
                {
                    img:'images/f14.jpeg'
                },
                {
                    img:'images/f15.jpeg'
                },
                {
                    img:'images/f16.jpeg'
                },
                {
                    img:'images/f17.jpeg'
                },
                {
                    img:'images/f18.jpeg'
                },
                {
                    img:'images/f19.jpeg'
                },
                {
                    img:'images/f20.jpeg'
                },
                {
                    img:'images/f21.jpeg'
                },
                {
                    img:'images/f22.jpeg'
                },
                {
                    img:'images/f23.jpeg'
                },
                {
                    img:'images/f24.jpeg'
                },
                {
                    img:'images/f25.webp'
                },
            ],
            list9:[{name: '黑轴',},{name: '白瓷',},{name: '水蓝',},],
            list10:[{memory:'12G+256G'},{memory:'12G+512G'},{memory:'8G+256G'}],
            list11:[{config:'官方配套',},{config:'加99元享329元45W无线充',},],
            current: 2,   
            activeName: 'a',
            // 优惠券
            chosenCoupon: -1,
            coupons: [coupon],
            disabledCoupons: [coupon],
            showList: false,

            chosenCoupon1: -1,
            coupons1: [coupon1],
            disabledCoupons1: [coupon1],
            showList1: false,

            num1: null,
            num2: 0,
            num3: 1,
            num4: null,
            selectcolor: 1,
            selectmemory: 0,
            selectconfig: 0,
            detailnum: 1,
            checked: false,
        };
    },

    mounted() {
        $(window).scroll(function(){
            if($(window).scrollTop()>47){                            
                $('.van-tabs__wrap').css({'position':'fixed','top':'0px','width':'100%','z-index':'100'}) 
            }else{
                $('.van-tabs__wrap').css({'position':'relative','top':'0px','width':'100%','z-index':'100'})
            }
            if($(window).scrollTop()>650){
                $('#gotop').addClass('name')
            }else{
                $('#gotop').removeClass('name')
            }
            if($(window).scrollTop()>47){   
                $('#back').css({'position':'fixed','top':'4vw','z-index':'100'})
            }else{
                $('#back').css({'position':'absolute','top':'4vw','z-index':'100'})
            }
        })
        
        this.$nextTick(function(){
            $('#gotop').click(function(){
                $('html,body').animate({'scrollTop':'0'})
            })
        })

        $('#sort').click(function(){

        })       
    },
    methods: {
        onChange(index) {
            this.current = index;
        },

        //底部购买按钮
        onClickIcon() {
            Toast('点击图标');
        },
        onClickButton() {
            Toast('点击按钮');
        },

        //优惠券
        onChange1(index) {
            this.showList = false;
            this.chosenCoupon = index;
        },
        onExchange(code) {
            this.coupons.push(coupon);
        },
        //保障服务
        onChange2(index) {
            this.showList1 = false;
            this.chosenCoupon1 = index;
        },
        onExchange1(code) {
            this.coupons1.push(coupon1);
        },

        change1(a){
            this.num1=a;
        },
        change2(a){
            this.num2=a;
        },
        change3(a){
            this.num3=a;
        },
        change4(a){
            this.num4=a;
        },
        changecolor(a){
            this.selectcolor=a;
        },
        changememory(a){
            this.selectmemory=a;
        },
        changeconfig(a){
            this.selectconfig=a;
        },
    },

};
</script>
