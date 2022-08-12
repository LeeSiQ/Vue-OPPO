import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './assets/js/router.js'
//引入Vant2
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//搜索框
import { Icon } from 'vant';
Vue.use(Icon);
//轮播图
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
//复选框
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
//地址选择
import { Cascader } from 'vant';
Vue.use(Cascader);
//日期选择
import { Calendar } from 'vant';
Vue.use(Calendar);
//详情页底部购买
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
//优惠券
import { CouponCell, CouponList } from 'vant';
Vue.use(CouponCell);
Vue.use(CouponList);
//搜索框
import { Search } from 'vant';
Vue.use(Search);
//详情页顶部导航栏
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
//侧边导航栏
import { Sidebar, SidebarItem } from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);
//购物车提交订单
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);
//倒计时
import { CountDown } from 'vant';
Vue.use(CountDown);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
