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
            <p>OPPO</p>
            <p>登录欢太帐号可享受更多的服务</p>
        </main>
        <section>
            <div class="sdivone">
                <div @click="code" id="code1">短信验证码登录</div>
                <div @click="psd" id="psd1">密码登录</div>
            </div>
            <div id="change">
                <div class="sdivtwo" id="code">
                    <div class="inputone"><input type="text" placeholder="请输入手机号"></div>
                    <div class="inputtwo">
                        <input type="text" placeholder="请输入验证码">
                        <input type="button" value="获取验证码">
                    </div>
                    <div class="inputthree"><input type="button" value="登录"></div>
                    <div class="inputfour">
                        <router-link to="register">注册账号</router-link>
                    </div>
                </div>
                <div class="sdivtwo" id="psd" style="display:none;">
                    <div class="inputone"><input type="text" placeholder="请输入手机号"></div>
                    <div class="inputpsd"><input type="password" placeholder="请输入密码"></div>
                    <div class="latepsd"><a href="">忘记密码</a></div>
                    <div class="inputthree"><input type="button" value="登录"></div>
                    <div class="inputfour">
                        <router-link to="register">注册账号</router-link>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <p>隐私政策</p>
            <p>
                <span>© 2005 - 2021 广东欢太 版权所有 粤ICP备 14056724 号-2</span>
                <span>联系方式：4001-999-666</span>
            </p>
        </footer>
    </div>
</template>
<script>
export default {
    methods:{
        code(){
            var code = document.getElementById('code')
            var psd = document.getElementById('psd')
            var code1 = document.getElementById('code1')
            var psd1 = document.getElementById('psd1')
            code.style.display="block"
            psd.style.display="none"
            code1.style.color="#000"
             psd1.style.color="#999"
        },
        psd(){
            var code = document.getElementById('code')
            var psd = document.getElementById('psd')
            var code1 = document.getElementById('code1')
            var psd1 = document.getElementById('psd1')
            code.style.display="none"
            psd.style.display="block"
            code1.style.color="#999"
            psd1.style.color="#000"
        },

        open(){
            var language = document.getElementById('language')
            if(language.style.display=="none"){
                language.style.display="block"
            }else{
                language.style.display="none"
            }
        },

    },
}
</script>
<style scoped>
.language{
    position: fixed;
    top: 5%;
    right: 3%;
    background: #fff;
    box-shadow: 0 0 5px #d3d3d3;
    padding: 5% 10%;
}
.language>div{
    text-align: center;
    margin-bottom: 35%; 
    color: #7f7f7f;
}
.language>div:last-of-type{
    margin-bottom: 0%;
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
main p:nth-of-type(1){
    font-size: 28px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
    margin: 10% 0% 3% 0%;
}
main p:nth-of-type(2){
    font-size: 13px;
    font-weight: bold;
}
/* ------- */
section{
    height: 65vh;
}
.sdivone{
    display: flex;
    justify-content: space-around;
    margin: 15% 0% 10% 0%;
}
.sdivone div{
   padding: 0% 10%;
   color: #999;
}
.sdivone div:nth-of-type(1){
    color: #000;
}
.sdivone div:nth-of-type(1){
    border-right: 1px solid #ddd;
}
.sdivtwo{
    display: flex;
    flex-direction: column;
}
.sdivtwo>div{
    /* width: 84%; */
    margin: 0% 8%;
}
.sdivtwo input{
    height: 6vh;
    padding: 2vw;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    outline: none;
}
.inputone input{
    width: 100%;
    background: #eee;
} 
.inputone input::placeholder{
    color: #aaa;
}
.inputtwo{
    margin: 2% 8% 10% !important;
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
.inputpsd>input{
    width: 100%;
    background: #eee;
    margin: 5% 0%;
}
.inputpsd input::placeholder{
    color: #aaa;
}
.latepsd{
    margin-bottom: 10% !important;
}
.latepsd a{
    color: rgba(0,0,0,.6);
    font-size: 12px;
}
.inputthree input{
    width: 100%;
    background: #2ad181;
    color: #fff;
}
.inputfour{
    text-align: center;
    margin: 3% 8% 30% !important;
}
.inputfour a{
    color: #2ad181;
    
}
/* ------ */
footer{
    display: flex;
    flex-direction: column;
    /* width: 84%; */
    margin: 0% 8%; 
    text-align: center;
}
footer p:nth-of-type(1){
    font-size: 15px;
    color: #5a6e97;
    margin-bottom: 2%;
}
footer p:nth-of-type(2){
    font-size: 13px;
    color: #9b9b9b;
}
</style>