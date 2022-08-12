<template>
    <main>
        <!-- <router-view></router-view> -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="images/img1.webp" alt=""></van-swipe-item>
            <van-swipe-item><img src="images/img2.webp" alt=""></van-swipe-item>
            <van-swipe-item><img src="images/img3.webp" alt=""></van-swipe-item>
            <van-swipe-item><img src="images/img4.webp" alt=""></van-swipe-item>
            <van-swipe-item><img src="images/img5.webp" alt=""></van-swipe-item>
            <van-swipe-item><img src="images/img6.webp" alt=""></van-swipe-item>
        </van-swipe>
        <header>
            <div class="search">
                <van-icon name="search searchicon"/>
                <input type="text" placeholder="OPPO Reno8">
            </div>
            <div class="login">
                <router-link to="/login">登录</router-link>
            </div>
        </header>
        <main>
            <ul class="product">
                <li>
                    <router-link to="/list">
                        <img src="images/p1.webp" alt="">
                        <p>手机</p>
                    </router-link>
                </li>
                <li>
                    <img src="images/p2.webp" alt="">
                    <p>平板</p>
                </li>
                <li>
                    <img src="images/p3.webp" alt="">
                    <p>穿戴</p>
                </li>
                <li>
                    <img src="images/p4.webp" alt="">
                    <p>声学</p>
                </li>
                <li>
                    <img src="images/p5.webp" alt="">
                    <p>配件</p>
                </li>
            </ul>
        </main>
        <section>
            <!-- 手机专区 -->
            <div class="phone">
                <p>手机专区</p>
                <router-link to="/detail"><img src="images/phone.webp" alt=""></router-link>
                <ul class="phonelist">
                    <li v-for="(list1,index) in list1" :key="index">
                        <img :src="list1.img" alt="">
                        <div> 
                            <p>{{list1.title}}</p>
                            <p>
                                <span>券后价 ¥</span>
                                <span>{{list1.price}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div class="time">
                    <div class="countdown">
                        <div>今日必抢</div>
                        <div><van-count-down :time="time" /></div>
                        <div>后结束</div>
                    </div>
                    <div class="more">
                        <span>更多 </span>
                        <span> ></span>
                    </div>
                </div>
                <ul class="shop">
                    <li v-for="(list11,index) in list11" :key="index">
                        <div><img :src="list11.img" alt=""></div>
                        <div>{{list11.title}}</div>
                        <div class="pri">
                            <span>¥</span>
                            <span>{{list11.price1}}</span>
                            <span>¥</span>
                            <span>{{list11.price2}}</span>
                        </div>
                    </li>
                    <li>更多<br>产品</li>
                </ul>
                
            </div>
            <!-- 平板电脑 -->
            <div class="phone">
                <p>平板电脑</p>
                <img src="images/ipad.webp" alt="">
                <ul class="phonelist">
                    <li v-for="(list2,index) in list2" :key="index">
                        <img :src="list2.img" alt="">
                        <div>
                            <p>{{list2.title}}</p>
                            <p>
                                <span>券后价 ¥</span>
                                <span>{{list2.price}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 智能声学 -->
            <div class="phone">
                <p>智能声学</p>
                <img src="images/vc.webp" alt="">
                <ul class="phonelist">
                    <li v-for="(list3,index) in list3" :key="index">
                        <img :src="list3.img" alt="">
                        <div>
                            <p>{{list3.title}} </p>
                            <p>
                                <span>券后价 ¥</span>
                                <span>{{list3.price}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
             <!-- 智能穿戴 -->
            <div class="phone">
                <p>智能穿戴</p>
                <img src="images/wh.webp" alt="">
                <ul class="phonelist">
                    <li v-for="(list4,index) in list4" :key="index">
                        <img :src="list4.img" alt="">
                        <div>
                            <p> {{list4.title}} </p>
                            <p>
                                <span>券后价 ¥</span>
                                <span>{{list4.price}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 智能电视 -->
            <div class="phone">
                <p>智能电视</p>
                <img src="images/tv.webp" alt="">
                <ul class="phonelist">
                    <li v-for="(list5,index) in list5" :key="index">
                        <img :src="list5.img" alt="">
                        <div>
                            <p> {{list5.title}} </p>
                            <p>
                                <span>券后价 ¥</span>
                                <span>{{list5.price}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
             <!-- 原装配件 -->
            <div class="phone">
                <p>原装配件</p>
                <img src="images/og.webp" alt="">
                <ul class="phonelist">
                    <li v-for="(list6,index) in list6" :key="index">
                        <img :src="list6.img" alt="">
                        <div>
                            <p> {{list6.title}} </p>
                            <p>
                                <span>券后价 ¥</span>
                                <span>{{list6.price}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 数码周边 -->
            <div class="phone">
                <p>数码周边</p>
                <ul class="phonelist">
                    <li v-for="(list7,index) in list7" :key="index">
                        <img :src="list7.img" alt="">
                        <div>
                            <p> {{list7.title}} </p>
                            <p>
                                <span>券后价 ¥</span>
                                <span>{{list7.price}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 运动健康 -->
            <div class="phone">
                <p>运动健康</p>
                <ul class="phonelist">
                    <li v-for="(list8,index) in list8" :key="index">
                        <img :src="list8.img" alt="">
                        <div>
                            <p> {{list8.title}} </p>
                            <p>
                                <span>券后价 ¥</span>
                                <span>{{list8.price}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 生活日用 -->
            <div class="phone">
                <p>生活日用</p>
                <ul class="phonelist">
                    <li v-for="(list9,index) in list9" :key="index">
                        <img :src="list9.img" alt="">
                        <div>
                            <p> {{list9.title}} </p>
                            <p>
                                <span>券后价 ¥</span>
                                <span>{{list9.price}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 家用电器 -->
            <div class="phone">
                <p>家用电器</p>
                <ul class="phonelist">
                    <li v-for="(list10,index) in list10" :key="index">
                        <img :src="list10.img" alt="">
                        <div>
                            <p> {{list10.title}} </p>
                            <p>
                                <span>券后价 ¥</span>
                                <span>{{list10.price}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <footer>
            <ul class="appicon">
                <li>
                    <van-icon name="down" />
                    <span>下载APP</span>
                </li>
                <li>
                    <van-icon name="setting-o" />
                    <span>登录账号</span>
                </li>
            </ul>
            <ul class="footerlink">
                <li>营业执照</li>
                <li>隐私政策</li>
                <li>用户协议</li>
            </ul>
            <div>©2005 - 2022 OPPO 版权所有 粤ICP备14056724号</div>
        </footer>
        <div>
            <div class="service" id="service"><van-icon name="service-o" /></div>
            <div class="top" id="top"><van-icon name="back-top" /></div>
        </div>
    </main>
</template>
<script>
import $ from  'jquery'
export default {
    data(){
        return{
            list1:[
                {
                    img:'images/po1.webp',
                    title:'OPPO Find N 全新折叠旗舰',
                    price:'8989',
                },
                {
                    img:'images/po2.png',
                    title:'OPPO Reno8 Pro+',
                    price:'3989',
                },
                 {
                    img:'images/po3.png',
                    title:'OPPO Find X5',
                    price:'3289',
                },
                {
                    img:'images/po4.png',
                    title:'OPPO K10',
                    price:'2439',
                },
                {
                    img:'images/po5.webp',
                    title:'OPPO Reno7',
                    price:'1898',
                },
                {
                    img:'images/po6.webp',
                    title:'OPPO K9 Pro',
                    price:'1689',
                },
                 {
                    img:'images/po7.png',
                    title:'一加 10 Pro',
                    price:'4898',
                },
                {
                    img:'images/po8.png',
                    title:'一加 Ace 竞速版',
                    price:'1999',
                },
                {
                    img:'images/po9.png',
                    title:'一加 9RT',
                    price:'2689',
                },
            ],
            list2:[
                {
                    img:'images/ipad1.png',
                    title:'OPPO Pad  6GB+128GB 极光紫 官方标配',
                    price:'2089',
                },
                {
                    img:'images/ipad2.png',
                    title:'OPPO Pad Air 4GB+64GB 雾灰 官方标配',
                    price:'1089',
                },
                {
                    img:'images/ipad3.png',
                    title:'OPPO Pad Air 4GB+128GB 星银 手写笔套餐',
                    price:'1558',
                },
                {
                    img:'images/ipad4.png',
                    title:'OPPO Pad  6GB+128GB 耀夜黑 手写笔套餐',
                    price:'2058',
                },
                {
                    img:'images/ipad5.webp',
                    title:'OPPO Pencil 自研手写笔',
                    price:'499',
                },
                {
                    img:'images/ipad6.png',
                    title:'OPPO 智美生活 智能手写笔',
                    price:'299',
                },
                {
                    img:'images/ipad7.png',
                    title:'OPPO 智美生活 智能磁吸键盘 仅适用 OPPO Pad Air',
                    price:'349',
                },
                {
                    img:'images/ipad8.png',
                    title:'OPPO 智美生活 智能皮套 白色 仅适用 OPPO Pad Air',
                    price:'99',
                },
                {
                    img:'images/ipad9.png',
                    title:'OPPO 智美生活 平板钢化膜 高清 仅适用 OPPO Pad',
                    price:'79',
                },
            ],
            list3:[
                {
                    img:'images/vc1.png',
                    title:'OPPO Enco X2 真无线降噪耳机',
                    price:'889',
                },
                {
                    img:'images/vc2.png',
                    title:'OPPO Enco Air2 Pro 新品真无线降噪耳机 月牙白',
                    price:'219',
                },
                {
                    img:'images/vc3.webp',
                    title:'OPPO Enco X 真无线降噪耳机',
                    price:'549',
                },
                {
                    img:'images/vc4.webp',
                    title:'OPPO Enco Air 灵动版 真无线耳机 纯白',
                    price:'99',
                },
                {
                    img:'images/vc5.png',
                    title:'PPO Enco Air2 Pro 新品真无线降噪耳机 吾皇猫限定礼盒',
                    price:'289',
                },
                {
                    img:'images/vc6.webp',
                    title:'OPPO Enco Air2 新品真无线蓝牙耳机',
                    price:'159',
                },
            ],
            list4:[
                {
                    img:'images/wh1.webp',
                    title:'OPPO Watch 2 42mm 蓝牙版',
                    price:'889',
                },
                {
                    img:'images/wh2.webp',
                    title:'OPPO Watch 2  42mm eSIM版',
                    price:'989',
                },
                {
                    img:'images/wh3.webp',
                    title:'OPPO Watch Free 新品手表',
                    price:'289',
                },
                {
                    img:'images/wh4.webp',
                    title:'OPPO Watch 2 46mm eSIM版',
                    price:'1489',
                },
                {
                    img:'images/wh5.webp',
                    title:'OPPO 手环 活力版 蓝色风暴',
                    price:'159',
                },
                {
                    img:'images/wh6.webp',
                    title:'OPPO手环 时尚版 流沙金',
                    price:'189',
                },
            ],
            list5:[
                {
                    img:'images/tv1.png',
                    title:'OPPO 智能电视 K9x 65英寸',
                    price:'1898',
                },
                {
                    img:'images/tv2.webp',
                    title:'OPPO 智能电视 K9 43英寸',
                    price:'989',
                },
                {
                    img:'images/tv3.webp',
                    title:'OPPO 智能电视 K9 55英寸',
                    price:'1589',
                },
                {
                    img:'images/tv4.webp',
                    title:'OPPO 智能电视 K9 65英寸',
                    price:'2289',
                },
                {
                    img:'images/tv5.webp',
                    title:'OPPO 智能电视 K9 75英寸',
                    price:'3989',
                },
                {
                    img:'images/tv6.webp',
                    title:'OPPO 智能电视 R1 55英寸',
                    price:'4289',
                },
                {
                    img:'images/tv7.webp',
                    title:'OPPO 智能电视 S1 65英寸',
                    price:'6489',
                },
                {
                    img:'images/tv8.webp',
                    title:'OPPO 蓝牙语音遥控器 黑色',
                    price:'89',
                },
                {
                    img:'images/tv9.webp',
                    title:'OPPO 智能电视摄像头',
                    price:'399',
                },
            ],
            list6:[
                {
                    img:'images/og1.webp',
                    title:'OPPO VOOC 闪充充电宝移动电源2 30W 白色',
                    price:'159',
                },
                {
                    img:'images/og2.webp',
                    title:'OPPO GaN 氮化镓电源适配器 SuperVOOC 超级闪充 65W （含数据线',
                    price:'139',
                },
                {
                    img:'images/og3.webp',
                    title:'OPPO 30W VOOC 闪充套装（含USB Type-C数据线',
                    price:'69',
                },
                {
                    img:'images/og4.webp',
                    title:'OPPO 10W电源适配器',
                    price:'29',
                },
                {
                    img:'images/og5.png',
                    title:'OPPO USB Type-C 普通版数据线',
                    price:'19',
                },
                {
                    img:'images/og6.webp',
                    title:'O-Fresh立体声耳机 深邃黑 3.5mm接口',
                    price:'89',
                },
                {
                    img:'images/og7.png',
                    title:'OPPO 原装USB数据线',
                    price:'16',
                },
                {
                    img:'images/og8.webp',
                    title:'OPPO 20W闪充充电头 VOOC USB充电器',
                    price:'39',
                },
                {
                    img:'images/og9.webp',
                    title:'OPPO 半入耳式耳机 藏蓝色/3.5mm 接口',
                    price:'49',
                },
            ],
            list7:[
                {
                    img:'images/nc1.webp',
                    title:'森米USB-A TO USB-C数据线 白色',
                    price:'3.9',
                },
                {
                    img:'images/nc2.png',
                    title:'森米 三合一充电线 120cm 灰色',
                    price:'9',
                },
                {
                    img:'images/nc3.webp',
                    title:'森米 Type-C 虎头数据线120cm  红色',
                    price:'9.9',
                },
                {
                    img:'images/nc4.webp',
                    title:'商城定制】6.5A超级快充弯头游戏数据线',
                    price:'39.9',
                },
                {
                    img:'images/nc5.png',
                    title:'ROCK 多功能收纳支架套装 RCB0820 白色',
                    price:'39',
                },
                {
                    img:'images/nc6.webp',
                    title:'浩瀚卓越 小Q稳拍杆',
                    price:'179',
                },
                {
                    img:'images/nc7.webp',
                    title:'闪极超级移动电源',
                    price:'999',
                },
                {
                    img:'images/nc8.webp',
                    title:'Calk 金属斜入耳式耳机 YE008 黑',
                    price:'35.9',
                },
                {
                    img:'images/nc9.webp',
                    title:'德力西电气 CD98Z-BZ系列转换器  白色',
                    price:'35.9',
                },
            ],
            list8:[
                {
                    img:'images/sp1.webp',
                    title:'飞科便携剃须刀FS889 宝石蓝',
                    price:'55',
                },
                {
                    img:'images/sp2.webp',
                    title:'爆款便携剃须刀',
                    price:'79',
                },
                {
                    img:'images/sp3.webp',
                    title:'每物筋膜枪 extra mini',
                    price:'319',
                },
                {
                    img:'images/sp4.webp',
                    title:'金稻  可视毛孔清洁器 蓝色',
                    price:'149',
                },
                {
                    img:'images/sp5.webp',
                    title:'bebird 智能可视采耳棒 T15 星空黑',
                    price:'129',
                },
                {
                    img:'images/sp6.webp',
                    title:'素诺 智能可视超声波洁牙仪',
                    price:'149',
                },
            ],
            list9:[
                {
                    img:'images/dl1.png',
                    title:'国潮系列抽取式面巾纸 单包装',
                    price:'3.9',
                },
                {
                    img:'images/dl2.webp',
                    title:'柚家超韧纸面巾 1包',
                    price:'3.9',
                },
                {
                    img:'images/dl3.png',
                    title:'采琪采 抽取式面巾纸 10包/提  蓝白色',
                    price:'16.9',
                },
                {
                    img:'images/dl4.webp',
                    title:'【新疆棉】大优蜂窝毛巾  3条装  浅灰/绿/粉  现货',
                    price:'39.9',
                },
                {
                    img:'images/dl5.webp',
                    title:'永骏冠龙升级版三代三阶魔方 黑色',
                    price:'12.9',
                },
                {
                    img:'images/dl6.webp',
                    title:'极蜂随身手电筒 F1深空蓝',
                    price:'17.9',
                },
                {
                    img:'images/dl7.webp',
                    title:'贝恩施三合一儿童保温水杯 斯卡兰红',
                    price:'89',
                },
                {
                    img:'images/dl8.webp',
                    title:'参半多效清新口腔喷雾 劲爽薄荷 绿色',
                    price:'19.9',
                },
                {
                    img:'images/dl9.webp',
                    title:'柚家除湿袋 （1袋）白色',
                    price:'3.9',
                },
            ],
            list10:[
                {
                    img:'images/ha1.png',
                    title:'【商城定制】JLM 迷你手持风扇 白色',
                    price:'39.9',
                },
                {
                    img:'images/ha2.webp',
                    title:'EraClean世净 智能杀菌牙刷架 XD-TB01 白色',
                    price:'149',
                },
                {
                    img:'images/ha3.png',
                    title:'AIREN 除湿净化一体机  AR-D02 白色',
                    price:'299',
                },
                {
                    img:'images/ha4.webp',
                    title:'达伦护眼台灯 T2X 白色',
                    price:'299',
                },
                {
                    img:'images/ha5.webp',
                    title:'UBOT ESPECTRO盲盒聚光小夜灯 白色',
                    price:'99',
                },
                {
                    img:'images/ha6.webp',
                    title:'质感时光 酷暖摇摇热暖手杯 黑色 200ml',
                    price:'79',
                },
                {
                    img:'images/ha7.webp',
                    title:'唯奔 反重力水滴加湿器 飘逸白',
                    price:'159',
                },
                {
                    img:'images/ha8.png',
                    title:'AiLiving 便携式电动洗鼻器 NJ2650 白色',
                    price:'129',
                },
                {
                    img:'images/ha9.webp',
                    title:'生活元素 净水养生壶 白色',
                    price:'399',
                },
            ],
            list11:[
                 {
                    img:'images/t1.png',
                    title:'OPPO 普通 Type-C 数据线',
                    price1:'7.9',
                    price2:'29',
                },
                {
                    img:'images/t2.webp',
                    title:' 科林青香甲醛净化膏 420g 白色 ',
                    price1:'39',
                    price2:'69',
                },
                {
                    img:'images/t3.webp',
                    title:' OPPO 半入耳式耳机 MH135 3.5mm 接口 ',
                    price1:'17.9',
                    price2:'59',
                },
                {
                    img:'images/t4.png',
                    title:' 公牛插排 白色s1220 ',
                    price1:'24.9',
                    price2:'39',
                },
                {
                    img:'images/t5.png',
                    title:' OPPO Type-C 闪充数据线 白色 ',
                    price1:'14.9',
                    price2:'49',
                },
                {
                    img:'images/t6.png',
                    title:' 朗菲 无线桌面风扇 FS1 米色 ',
                    price1:'89',
                    price2:'199',
                },
            ],
            time: 30 * 60 * 60 * 1000,
        }
    },
    mounted() {
        this.$nextTick(function(){
            $(window).scroll(function(){
                if($(window).scrollTop()>650){
                    $('#service').addClass('go')
                    $('#top').addClass('go')
                }else{
                    $('#service').removeClass('go')
                    $('#top').removeClass('go')                
                }
            })
        })
        this.$nextTick(function(){
            $('#top').click(function(){
                $('html,body').animate({'scrollTop':'0'})
            })
        })
    },
}
</script>
<style scoped>
.service{
    position: fixed;
    bottom: 20%;
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
header{
    display: flex;
    justify-content: space-between;
    padding: 2%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
}
.search{
    height: 5vw;
    border-radius: 7px;
    background: #f7f8fa;
    padding: 2%;
    color: #777;
    flex: 1;
    display: flex;
    justify-content: flex-start;
}
.searchicon{
    padding: 1%;
}
.search input{
    background: #f7f8fa;
    border: none;
    font-size: 12px;
}
.login{
    flex: 0.2;
    text-align: center;
    padding: 2%;
    font-weight: bold;
}
.login a{
    color: black;
}
/* ------- */
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #39a9ed;
}
.my-swipe img{
    width: 100%;
    display: block;
}
/* -------- */
.product{
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 6vw;
}
.product li{
    width: 20%;
    font-size: 12px;
}
.product li a p{
    color: #000;
}
.product li img{
    width: 55%;
    margin: 4vw 0vw 3vw 0vw;
}
/* ----------- */
section{
    background: #f7f8fa;
}
.phone{
    padding: 5px;
}
.phone>p{
    font-weight: bold;
    line-height: 10vw;
}
.phone>a>img{
    width: 100%;
    border-radius: 10px;
}
.phone>img{
    width: 100%;
    border-radius: 10px;
}
.phonelist{
    background: #f7f8fa;
    display: flex;
    flex-wrap:wrap;
    margin: 10px 0px;
}
.phonelist li{
    background: #fff;
    margin: 1%;
    width: 31%;
    border-radius: 3px;
}
.phonelist li img{
    width: 100%;
}
.phonelist>li>div>p:nth-of-type(1){
    font-size: 14px;
    padding: 5vw 2vw 0vw;
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2; 
}
.phonelist>li>div>p:nth-of-type(2){
    font-size: 14px;
    padding: 1vw 2vw 4vw;
}
.phonelist>li>div>p:nth-of-type(2) span:nth-of-type(1){
    font-size: 12px;
    
}
.phonelist>li>div>p:nth-of-type(2) span:nth-of-type(2){
    font-size: 14px;
}
.time{
    display: flex;
    justify-content: space-between;
    margin: 0% 5% 0% 3%;
}
.countdown{
    display: flex;
    width: 70%;
}
.countdown>div:nth-of-type(1){
    font-weight: bold;
}
.countdown>div:nth-of-type(2){
    margin: 0% 3%;
}
.van-count-down {
    color: #f63434;
    margin: 0% 3%;
}
.countdown>div:nth-of-type(3){
    font-size: 14px;
    color: rgba(0,0,0,0.3);
}
.more{
    font-size: 14px;
    color: rgba(0,0,0,0.3);
}
.shop{
    margin: 2% 3%;
    display: flex;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    border-radius: 10px;
    background: #fff;
}
.shop li{
    width: 31%;
}
.shop li:last-of-type{
    padding: 10% 5%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 3% 5% 3% 0%;
    font-size: 14px;
    color: rgba(0,0,0,0.3);
}
.shop img{
    width: 100%;
}
.shop li div:nth-of-type(1){
    text-align: center;
}
.shop li div:nth-of-type(2){
    width: 95%;
    font-size: 14px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.pri>span:nth-of-type(1){
    font-size: 12px;
}
.pri>span:nth-of-type(2){
    font-size: 14px;
    margin: 0% 3%;
}
.pri>span:nth-of-type(3){
    font-size: 12px;
    color: rgba(0,0,0,.3);
    margin: 0% 1% 0% 3%;
}
.pri>span:nth-of-type(4){
    font-size: 12px;
    color: rgba(0,0,0,.3);
    text-decoration: line-through;
}
/* --------- */
footer{
    padding-bottom: 65px;
}
.appicon{
    display: flex;
    justify-content: space-around;
}
.appicon li{
    font-size: 14px;
    padding: 3% 0%;
}
.footerlink{
    display: flex;
    justify-content: center;
}
.footerlink li{
    font-size: 12px;
    color: #555;
    margin: 5% 5%;
}
footer>div{
    text-align: center;
    font-size: 12px;
    color: #555;
    margin-top:-3%
}
::-webkit-scrollbar{width:0;}

</style>
