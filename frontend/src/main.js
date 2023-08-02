import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlBlZHJvIEx1aXoiLCJlbWFpbCI6InBlZHJvQGVtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2OTA5OTY1MjEsImV4cCI6MTY5MTI1NTcyMX0.8E7iTpXjSTD4PR5BdvQIpUDqTm5aAA7Ay3p4-fjSG-o'

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
