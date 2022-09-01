import { createApp } from 'vue'
import App from './App.vue'

// 导入bootstrap和css
import './assets/css/bootstrap.css'
import './index.css'

// 导入axios
import axios from 'axios'

const app = createApp(App)

//配置请求的根路径
axios.defaults.baseURL = 'https://www.escook.cn'
    //将axios挂载为全局的$http自定义属性
app.config.globalProperties.$http = axios

app.mount('#app')