import { createApp } from 'vue'
import './style.css'
import '../node_modules/swiper/swiper.css'
import '../node_modules/swiper/modules/navigation.css'
import '../node_modules/swiper/modules/pagination.css'
import '../node_modules/swiper/modules/autoplay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router/'

const app = createApp(App)
app.use(router)
app.mount('#app')
