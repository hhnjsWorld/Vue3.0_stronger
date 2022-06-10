import {App} from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import routes from './module/routers'//随文件夹的创建 而 变更路径

const router = createRouter({
    history: createWebHistory(),
    /* 被封装成一个路由集合了 */
    routes
})
export function setupRouter(app: App) {
    app.use(router)
}
export default router