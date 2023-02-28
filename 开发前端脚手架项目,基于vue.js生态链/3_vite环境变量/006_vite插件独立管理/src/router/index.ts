import { App } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
/* 主路由 */
import routes from './routers'//随文件夹的创建 而 变更路径
/* 子路由 */
import layoutRoutes from './autoload';

const router = createRouter({
    history: createWebHistory(),
    /* 被封装成一个路由集合了 */
    routes:[...routes,...layoutRoutes]
})
export function setupRouter(app: App) {
    app.use(router)
}
export default router