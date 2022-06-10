import {App} from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import routes from './routers'

const router = createRouter({
    history: createWebHistory(),
    /* 被封装成一个路由集合了 */
    routes
})
export function setupRouter(app: App) {
    app.use(router)
}
export default router