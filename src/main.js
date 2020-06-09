import Vue from 'vue'
import App from './App.vue'
import './plugins/vue-i18n';
import i18n from './plugins/vue-i18n';
import vuetify from './plugins/vuetify';

import { sync, unsync } from 'vuex-router-sync'
import router from '@/router'
import store from '@/store'
import './plugins/axios'
import './components'

sync(store, router)


// Configure the Router Gaurd
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['userauth/userLoggedIn']) {
      next({name: 'login'})
    } else {
      next()
    }
  } else {
    next()
  }
})


Vue.config.productionTip = false

new Vue({
  i18n,
  vuetify,
  router,
  store,
  destroyed () {
    unsync()
  },
  render: h => h(App)
}).$mount('#app')
