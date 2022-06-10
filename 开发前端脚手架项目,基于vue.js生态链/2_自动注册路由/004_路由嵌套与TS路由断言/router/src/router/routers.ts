import { RouteRecord, RouteRecordRaw } from 'vue-router'

/* 单独封装的一个多路由集合 */
const routes = [
    {
        path: '/',
        component: () => import('../layouts/admin.vue'),
        children: [{ path: "admin", component: () => import('../views/home.vue') }]
    },
// ....
] as RouteRecordRaw[]

export default routes