import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'
import '@/assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'noty/lib/noty.css'
import 'noty/lib/themes/mint.css'

Vue.config.productionTip = false

const theme = localStorage.getItem('theme')
if (theme === 'light') {
  store.dispatch('config/changeTheme', 'light')
} else {
  store.dispatch('config/changeTheme', 'dark')
}

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
