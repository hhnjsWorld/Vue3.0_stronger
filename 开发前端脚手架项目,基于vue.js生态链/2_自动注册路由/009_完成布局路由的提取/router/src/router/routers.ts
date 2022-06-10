import { RouteRecord, RouteRecordRaw } from 'vue-router'

/* 单独封装的一个多路由集合 */
const routes = [
    {
        path: '/',
        // component: () => import('@/layouts/admin.vue'),
        /* 先定义网站主页 */
        name: 'home',
        // children: [{ path: "admin", component: () => import('@/views/home.vue') }]
        component: () => import('@/views/home.vue')
    },
    
    // ....
] as RouteRecordRaw[]

export default routes