<template>
    <div id="type">
        <header><van-search v-model="value" placeholder="OPPO Find X5 Pro" /></header>
        <div class="selcetbox">
            <van-sidebar v-model="activeKey">
                <van-sidebar-item title="热门推荐" />
                <van-sidebar-item title="OPPO" />
                <van-sidebar-item title="一加" />
                <van-sidebar-item title="平板电脑" />
                <van-sidebar-item title="智能耳机" />
                <van-sidebar-item title="智能穿戴" />
                <van-sidebar-item title="智能电视" />
                <van-sidebar-item title="智美生活" />
                <van-sidebar-item title="原装配件" />
                <van-sidebar-item title="数码周边" />
                <van-sidebar-item title="家用电器" />
                <van-sidebar-item title="个护健康" />
                <van-sidebar-item title="运动户外" />
                <!-- <van-sidebar-item title="生活日常" /> -->
            </van-sidebar>

            <ul class="carbox">
                <li style="display:block">
                    <div class="div1"><img src="images/type/h.png" alt=""></div>
                    <div class="div2">热门推荐</div>
                    <ul class="div3">
                        <li v-for="(list1,index) in list1" :key="index">
                            <div><img :src="list1.img" alt=""><span class="new">{{list1.new}}</span></div>
                            <div>
                                <p>{{list1.name}} </p>
                                <p>{{list1.conf}}</p>
                                <p class="pthree">
                                    <span>券后价</span>
                                    <span>¥</span>
                                    <span>{{list1.price}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>      
                </li>
                <li>
                    <div class="div1"><img src="images/type/h.png" alt=""></div>
                    <div class="div2">OPPO</div>
                    <ul class="div3">
                        <li v-for="(list1,index) in list1" :key="index">
                            <div><img :src="list1.img" alt=""><span class="new">{{list1.new}}</span></div>
                            <div>
                                <p>{{list1.name}} </p>
                                <p>{{list1.conf}}</p>
                                <p class="pthree">
                                    <span>券后价</span>
                                    <span>¥</span>
                                    <span>{{list1.price}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>      
                </li>
                <li >
                    <div class="div1"><img src="images/type/h.png" alt=""></div>
                    <div class="div2">一加</div>
                    <ul class="div3">
                        <li v-for="(list1,index) in list1" :key="index">
                            <div><img :src="list1.img" alt=""><span class="new">{{list1.new}}</span></div>
                            <div>
                                <p>{{list1.name}} </p>
                                <p>{{list1.conf}}</p>
                                <p class="pthree">
                                    <span>券后价</span>
                                    <span>¥</span>
                                    <span>{{list1.price}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>      
                </li>
                <li>
                    <div class="div1"><img src="images/type/h.png" alt=""></div>
                    <div class="div2">平板电脑</div>
                    <ul class="div3">
                                                <li v-for="(list1,index) in list1" :key="index">
                            <div><img :src="list1.img" alt=""><span class="new">{{list1.new}}</span></div>
                            <div>
                                <p>{{list1.name}} </p>
                                <p>{{list1.conf}}</p>
                                <p class="pthree">
                                    <span>券后价</span>
                                    <span>¥</span>
                                    <span>{{list1.price}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>      
                </li>
                <li>
                    <div class="div1"><img src="images/type/h.png" alt=""></div>
                    <div class="div2">智能耳机</div>
                    <ul class="div3">
                        <li v-for="(list1,index) in list1" :key="index">
                            <div><img :src="list1.img" alt=""><span class="new">{{list1.new}}</span></div>
                            <div>
                                <p>{{list1.name}} </p>
                                <p>{{list1.conf}}</p>
                                <p class="pthree">
                                    <span>券后价</span>
                                    <span>¥</span>
                                    <span>{{list1.price}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>      
                </li>
                <li>
                    <div class="div1"><img src="images/type/h.png" alt=""></div>
                    <div class="div2">智能穿戴</div>
                    <ul class="div3">
                        <li v-for="(list1,index) in list1" :key="index">
                            <div><img :src="list1.img" alt=""><span class="new">{{list1.new}}</span></div>
                            <div>
                                <p>{{list1.name}} </p>
                                <p>{{list1.conf}}</p>
                                <p class="pthree">
                                    <span>券后价</span>
                                    <span>¥</span>
                                    <span>{{list1.price}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>      
                </li>
                <li>
                    <div class="div1"><img src="images/type/h.png" alt=""></div>
                    <div class="div2">智能电视</div>
                    <ul class="div3">
                        <li v-for="(list1,index) in list1" :key="index">
                            <div><img :src="list1.img" alt=""><span class="new">{{list1.new}}</span></div>
                            <div>
                                <p>{{list1.name}} </p>
                                <p>{{list1.conf}}</p>
                                <p class="pthree">
                                    <span>券后价</span>
                                    <span>¥</span>
                                    <span>{{list1.price}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>      
                </li>
                <li>
                    <div class="div1"><img src="images/type/h.png" alt=""></div>
                    <div class="div2">智美生活</div>
                    <ul class="div3">
                        <li v-for="(list1,index) in list1" :key="index">
                            <div><img :src="list1.img" alt=""><span class="new">{{list1.new}}</span></div>
                            <div>
                                <p>{{list1.name}} </p>
                                <p>{{list1.conf}}</p>
                                <p class="pthree">
                                    <span>券后价</span>
                                    <span>¥</span>
                                    <span>{{list1.price}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>      
                </li>
                <li>
                    <div class="div1"><img src="images/type/h.png" alt=""></div>
                    <div class="div2">原装配件</div>
                    <ul class="div3">
                        <li v-for="(list1,index) in list1" :key="index">
                            <div><img :src="list1.img" alt=""><span class="new">{{list1.new}}</span></div>
                            <div>
                                <p>{{list1.name}} </p>
                                <p>{{list1.conf}}</p>
                                <p class="pthree">
                                    <span>券后价</span>
                                    <span>¥</span>
                                    <span>{{list1.price}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>      
                </li>
                <li>
                    <div class="div1"><img src="images/type/h.png" alt=""></div>
                    <div class="div2">数码周边</div>
                    <ul class="div3">
                        <li v-for="(list1,index) in list1" :key="index">
                            <div><img :src="list1.img" alt=""><span class="new">{{list1.new}}</span></div>
                            <div>
                                <p>{{list1.name}} </p>
                                <p>{{list1.conf}}</p>
                                <p class="pthree">
                                    <span>券后价</span>
                                    <span>¥</span>
                                    <span>{{list1.price}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>      
                </li>
                <li>
                    <div class="div1"><img src="images/type/h.png" alt=""></div>
                    <div class="div2">家用电器</div>
                    <ul class="div3">
                        <li v-for="(list1,index) in list1" :key="index">
                            <div><img :src="list1.img" alt=""><span class="new">{{list1.new}}</span></div>
                            <div>
                                <p>{{list1.name}} </p>
                                <p>{{list1.conf}}</p>
                                <p class="pthree">
                                    <span>券后价</span>
                                    <span>¥</span>
                                    <span>{{list1.price}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>      
                </li>
                <li>
                    <div class="div1"><img src="images/type/h.png" alt=""></div>
                    <div class="div2">个护健康</div>
                    <ul class="div3">
                        <li v-for="(list1,index) in list1" :key="index">
                            <div><img :src="list1.img" alt=""><span class="new">{{list1.new}}</span></div>
                            <div>
                                <p>{{list1.name}} </p>
                                <p>{{list1.conf}}</p>
                                <p class="pthree">
                                    <span>券后价</span>
                                    <span>¥</span>
                                    <span>{{list1.price}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>      
                </li>
                <li>
                    <div class="div1"><img src="images/type/h.png" alt=""></div>
                    <div class="div2">运动户外</div>
                    <ul class="div3">
                        <li v-for="(list1,index) in list1" :key="index">
                            <div><img :src="list1.img" alt=""><span class="new">{{list1.new}}</span></div>
                            <div>
                                <p>{{list1.name}} </p>
                                <p>{{list1.conf}}</p>
                                <p class="pthree">
                                    <span>券后价</span>
                                    <span>¥</span>
                                    <span>{{list1.price}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>      
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.div3 li{
    display: flex;
    justify-content: flex-start;
    background: #f8f8f8;
    border-radius: 10px;
    margin: 3% 0%;
}
.div3 li:nth-of-type(5) div:nth-of-type(1){
     position: relative;
}
.div3 li:nth-of-type(5) div:nth-of-type(1)>span{
    background: #f26d6d;
    padding: 5%;
    width: 35%;
    height: 35%;
    font-size: 12px;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    bottom: -1%;
    right: 0%;
    box-sizing: border-box;
}
.div3 li:nth-of-type(7) div:nth-of-type(1){
     position: relative;
}
.div3 li:nth-of-type(7) div:nth-of-type(1)>span{
    background: #f26d6d;
    padding: 5%;
    width: 35%;
    height: 35%;
    font-size: 12px;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    bottom: -1%;
    right: 0%;
    box-sizing: border-box;
}
.div3 li>div:nth-of-type(1){
    width: 25%;
    margin: 2% 5%;
}
.div3 li>div:nth-of-type(2){
    width: 75%;
    font-size: 13px;
}
.div3 li>div:nth-of-type(1) img{
    width: 100%;
}

.div3 li>div:nth-of-type(2) p:nth-of-type(1){
    padding-top: 5%;
}
.div3 li>div:nth-of-type(2) p:nth-of-type(2){
    padding: 2% 0%;
    color: rgba(0,0,0,0.3);
}
.pthree>span{
    font-weight: 600;
}
.pthree>span:nth-of-type(2){
    margin: 0% 3%;
}


.selcetbox{
    display: flex;
    justify-content: flex-start;
}
.van-sidebar{
    width: 25%;
}
.carbox{
    width: 75%;
    padding: 0% 3%;
}
.carbox>li{
    display: none;
}

.div1>img{
    width: 100%;
}
.div2{
    padding: 5% 3% 3%;
}

</style>
<script>
import $ from  'jquery'
export default {
  data() {
    return {
        value: '',
        activeKey: 0,
        list1:[
            {
            img:'images/type/h1.png',
            name:'OPPO Reno8',
            conf:'长寿版 80W 超级闪充',
            price:2259,
            new:'',
            },
            {
            img:'images/type/h2.png',
            name:'OPPO Pad',
            conf:'OPPO 首款旗舰平板',
            price:2089,
            new:'',
            },
            {
            img:'images/type/h3.png',
            name:'OPPO Find X5 Pro',
            conf:'年度影像旗舰',
            price:5489,
            new:'',
            },
            {
            img:'images/type/h4.png',
            name:'OPPO K10',
            conf:'天玑8000-MAX',
            price:2089,
            new:'',
            },
            {
            img:'images/type/h5.png',
            name:'一加 Ace Pro',
            conf:'性能手机新标杆',
            price:'敬请期待',
            new:'新',
            },
            {
            img:'images/type/h6.png',
            name:'一加 10 Pro',
            conf:'第十代性能旗舰',
            price:4499,
            new:'',
            },
            {
            img:'images/type/h7.png',
            name:'OPPO Enco Air2i  真无线耳机',
            conf:'10mm 超大动圈',
            price:'敬请期待',
            new:'新',
            },
        ],
    };
  },   
  mounted() {

     $('.van-sidebar a').click(function(){
            var num = $(this).index()
            $('.carbox>li').eq(num).css('display','block')
            $('.carbox>li').eq(num).siblings().css('display','none')
        })

  },
  methods: {
    
  },

  
};
</script>