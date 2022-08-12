<template>
    <div>
        <header>
            <span>帮助中心</span>
            <span @click="open">
                <p>简体中文</p>
                <p>▼</p>
            </span>
            <div class="language" id="language" style="display:none;">
                <div>简体中文</div>
                <div>繁體中文</div>
                <div>English</div>
            </div>
        </header>
        <main>
            <p>注册账号</p>
        </main>
        <section>
            <div class="sdivone">
                <!-- <input type="text" value="地区"> -->
                <van-field class="address"
                    v-model="fieldValue"
                    is-link
                    readonly
                    label="省份/城市"
                    placeholder="请选择所在地区"
                    @click="show = true"
                    />
                    <van-popup v-model="show" round position="bottom">
                    <van-cascader
                        v-model="cascaderValue"
                        title="请选择所在地区"
                        :options="options"
                        active-color="#2ad181"
                        @close="show = false"
                        @finish="onFinish"
                    />
                </van-popup>
                <p>成功注册帐号后，国家/地区将不可更改</p>
            </div>
            <div class="sdivtwo">
                <div class="inputdays">
                    <!-- <input type="text" placeholder="日期"> -->
                    <van-cell title="出生日期" :value="date" @click="show1 = true" class="days"/>
                    <van-calendar v-model="show1" @confirm="onConfirm" color="#2ad181"/>
                </div>
                <div class="inputone"><input type="text" placeholder="请输入手机号或邮箱"></div>
                <div class="inputtwo">
                    <input type="text" placeholder="请输入验证码">
                    <input type="button" value="获取验证码">
                </div>
                <div class="inputpsd">
                    <input type="text" placeholder="请输入密码">
                    <p>密码由 6-16 位数字、字母或符号组成、至少包含两种字符</p>
                </div>
                <div class="inputche">
                    <van-checkbox v-model="checked" shape="square" checked-color="#2ad181" class="checked"></van-checkbox>
                    <div>
                        已阅读并同意
                        <span>《账号使用协议》</span>
                        &
                        <span>《隐私政策》</span>
                    </div>
                </div>
                <div class="inputthree"><input type="button" value="注册"></div>
            </div>
        </section>
        <footer>
            <p>
                <span>© 2005 - 2021 广东欢太 版权所有 粤ICP备 14056724 号-2</span>
                <span>联系方式：4001-999-666</span>
            </p>
        </footer>
    </div>
</template>
<style scoped>
.language{
    position: fixed;
    top: 5%;
    right: 3%;
    background: #fff;
    box-shadow: 0 0 5px #d3d3d3;
    padding: 5% 10%;
    z-index: 1000;
}
.language>div{
    text-align: center;
    margin-bottom: 35%; 
    color: #7f7f7f;
}
.language>div:last-of-type{
    margin-bottom: 0%;
}
.days{
    /* width: 100%; */
    /* height: 5vw; */
    background: #eee;
    margin-bottom: 2%;
    padding: 4% !important;
    border-radius: 5px;

}
.address{
    background: #eee;
    border-radius: 5px;
    padding: 4% !important;
}
header{
    padding: 3% 6% 0% 0%;
    display: flex;
    justify-content: flex-end;
}
header span{
    margin: 1% 3%;
}
header span:nth-of-type(1){
    color: #7f7f7f;
}
header span:nth-of-type(2){
    color: rgba(0,0,0,.3);
    display: flex;
    justify-content: space-around;
    font-size: 14px;
}
header span:nth-of-type(2) p{
    margin: 0vw 1vw;
}
/* ---- */
main{
    text-align: center;
    display: flex;
    flex-direction:column
}
main p{
    font-size: 28px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    margin: 10% 0% 3% 0%;
}

/* ------- */
section{
    height: 70vh;
}
.sdivone{
    display: flex;
    flex-direction: column;
    margin: 8% 8% 5% 8%;
}
.sdivone p{
    font-size: 12px;
    color: #aaa;
    padding: 3% 0% 0%;
}

.sdivtwo{
    display: flex;
    flex-direction: column;
}
.sdivtwo>div{
    margin: 0% 8%;
}
.sdivtwo input{
    height: 6vh;
    padding: 2vw;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
    outline: none;
}
.inputdays input{
     width: 100%;
    background: #eee;
    margin-bottom: 2%;
}
.inputone input{
    width: 100%;
    background: #eee;
} 
.inputone input::placeholder{
    color: #aaa;
}
.inputtwo{
    margin: 2% 8% !important;
    display: flex;
    justify-content: space-between;
}
.inputtwo input:nth-of-type(1){
    width: 62%;
    background: #eee;
}
.inputtwo input:nth-of-type(1)::placeholder{
    color: #bbb;
}
.inputtwo input:nth-of-type(2){
    width: 34%;
    background: #ddd;
    font-size: 14px;
    color: #fff;
}
.inputpsd{
    display: flex;
    flex-direction: column;
}
.inputpsd input{
    width: 100%;
    height: 6vh;
    padding: 2vw;
    box-sizing: border-box;
    border-radius: 5px;
    background: #eee;
    border: none;
    outline: none;
}
.inputpsd p{
    font-size: 12px;
    color: #aaa;
    padding: 4% 0% 6%;
}
.inputche{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    padding: 0% 3% 10%;
}
.inputche span{
    color: #2ad181;
}

.inputthree input{
    width: 100%;
    background: #2ad181;
    color: #fff;
}
/* ------ */
footer{
    display: flex;
    flex-direction: column;
    width: 84%;
    margin: 0% 8%; 
    text-align: center;
}

footer p{
    font-size: 13px;
    color: #9b9b9b;
}
</style>
<script>
export default {
    data() {
        return {
            //复选框
            checked: false,

            //地址选择
            show: false,
            fieldValue: '',
            cascaderValue: '',
            // 选项列表，children 代表子选项，支持多级嵌套
            options: [
                {
                text: '广东省',
                value: '330000',
                children: [
                    { text: '广州市', value: '330101'},
                    { text: '深圳市', value: '330102'},
                    { text: '佛山市', value: '330103'},
                    { text: '东莞市', value: '330104'},
                    { text: '珠海市', value: '330105'}
                ],
                },
                {
                text: '广西省',
                value: '320000',
                children: [
                    { text: '南宁市', value: '320101'},
                    { text: '柳州市', value: '320102'},
                    { text: '桂林市', value: '320103'},
                ],
                },
                {
                text: '浙江省',
                value: '310000',
                children: [
                    { text: '杭州市', value: '310101'},
                    { text: '温州市', value: '310102'},
                    { text: '金华市', value: '310103'},
                ],
                },
                {
                    text: '上海市',
                    value: '340000',
                },
                {
                    text: '北京市',
                    value: '350000',
                },
            ],

            //日期选择
            date: '',
            show1: false,
        };
    },
    methods: {
        open(){
            var language = document.getElementById('language')
            if(language.style.display=="none"){
                language.style.display="block"
            }else{
                language.style.display="none"
            }
        },

        // 地址选择
        // 全部选项选择完毕后，会触发 finish 事件
        onFinish({ selectedOptions }) {
            this.show = false;
            this.fieldValue = selectedOptions.map((option) => option.text).join('/');
        },

        //日期选择
        formatDate(date) {
            return `${date.getMonth() + 1}/${date.getDate()}`;
        },
        onConfirm(date) {
            this.show1 = false;
            this.date = this.formatDate(date);
        },
    },
}
</script>