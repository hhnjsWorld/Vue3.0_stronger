import {App} from 'vue';     

import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('../views/home.vue') }
    ]
})
export function setupRouter(app:App){
    app.use(router)
}
export default router