import { createApp } from 'vue'

// // 全局引入element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/theme-chalk/index.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

app.use(router)
app.use(store)
setupStore()
// app.use(ElementPlus)
app.mount('#app')
