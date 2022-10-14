import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import modal from './plugins/modal'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(modal);

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
