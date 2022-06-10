import { createRouter, createWebHistory } from "vue-router";
import {App} from 'vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('../views/home.vue') }
    ]
})
//export function setupRouter(app){}
export default router