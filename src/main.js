import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//toast为自己封装的插件
// import toast from 'components/common/toast/index.js'



// createApp(App).use(store).use(router).use(toast).mount('#app')
createApp(App).use(store).use(router).mount('#app')

