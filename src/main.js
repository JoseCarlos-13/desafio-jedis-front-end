import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const api_instance = axios.create({
    baseURL: "http://localhost:3000"
})

export default api_instance

createApp(App)
.use(router)
.use(ElementPlus)
.mount('#app')
