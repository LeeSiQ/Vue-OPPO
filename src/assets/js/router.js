import VueRouter from 'vue-router'

import first from '../../components/first.vue'
import index from '../../components/index.vue'
import type from '../../components/type.vue'
import shopping from '../../components/shopping.vue'
import my from '../../components/my.vue'
import login from '../../components/login.vue'
import register from '../../components/register.vue'
import detail from "../../components/detail.vue"
import list from "../../components/list.vue"

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:first,
            children:[
                {
                    path:'/index',
                    component:index
                },
                {
                    path:'/type',
                    component:type
                },
                {
                    path:'/my',
                    component:my
                },
            ],
            redirect:'/index',
        },
        {
            path:'/shopping',
            component:shopping
        },
        {
            path:"/login",
            component:login,
        },
        {
            path:"/register",
            component:register,
        },
        {
            path:"/detail",
            component:detail,
        },
        {
            path:"/list",
            component:list,
        },
        {
            path:"/*",
            redirect:'/index'
        },
    ]
})