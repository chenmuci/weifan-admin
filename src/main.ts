import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import Antd from 'ant-design-vue'
import * as antIcons from '@ant-design/icons-vue';
import 'ant-design-vue/dist/reset.css'
import '@/assets/styles/index.css'
import 'uno.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(Antd)

// 循环注册所有图标
Object.keys(antIcons).forEach((key: string) => {
    app.component(key, antIcons[key])
})
app.mount('#app')