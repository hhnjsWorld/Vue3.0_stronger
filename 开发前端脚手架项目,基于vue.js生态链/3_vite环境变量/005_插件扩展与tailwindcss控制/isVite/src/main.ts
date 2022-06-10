import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'

/* 接到插件 */
import {setupPlugins} from './plugins'

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
    setupRouter(app)//设置路由

    setupPlugins(app)//设置插件

    /* 路由处理完毕,再实际挂载组件 */
    await router.isReady()
    app.mount("#app")
}
bootStrap()

