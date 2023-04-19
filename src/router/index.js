import Vue from "vue";
import VueRouter from "vue-router"; // 引入 VueRouter
import axios from "axios"
Vue.prototype.$axios=axios
Vue.use(VueRouter); // 安装 VueRouter 插件
const routes=[
    {
        path:'/',
        name:'index',
        component:()=>import("@/views/indexPage.vue"),
        children:[
            {path:'home',name:'home',component:()=>import("@/components/homePage")},
            { path:'alllist',name:'alllist',component:()=>import("@/views/productList")}
        ]
    },
    {
        path:'/detail',
        name:'detail',
        component:()=>import("@/components/detailPage.vue")
    }
    
]
const router = new VueRouter({ // 创建 VueRouter 实例
    routes
})
export default router; // 导出 VueRouter 实例