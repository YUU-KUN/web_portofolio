import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
// import Bootstrap from 'bootstrap';
// import Fancybox from 'fancybox'


//load bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../public/css/style.css'

// load fancybox

// import '../public/assets/css/font-face.css'
// import '../public/assets/images/icon/logo.png' 
// import '../public/assets/css/theme.css'

// load css
// import '../public/assets/css/materialdesignicons.css'
// import '../public/assets/css/style.css'
// import '../public/assets/css/vendor.bundle.addons.css'
// import '../public/assets/css/vendor.bundle.base.css'

Vue.use(BootstrapVue,)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
