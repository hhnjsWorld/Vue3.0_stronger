import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
// // createApp(App).mount('#app')
// const app = createApp(App)

// /* setupRouter(app) 取代了app.use */
// /* 把路由使用上了 */
// setupRouter(app)
// // app.use(router)

// app.mount("#app")


/* 方法的形式释放出去 */
async function bootStrap(){ 
    const app = createApp(App)
    setupRouter(app)

    /* 路由处理完毕,再实际挂载组件 */
    await router.isReady()
    app.mount("#app")
}
bootStrap()

