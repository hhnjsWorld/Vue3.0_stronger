import { createApp } from 'vue'
import App from './App.vue'


import router from './router'
// createApp(App).mount('#app')
const app = createApp(App)

/* 把路由使用上了 */
app.use(router)
app.mount("#app")


