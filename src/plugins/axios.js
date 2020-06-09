import Vue from 'vue'

// Lib imports
import axios from 'axios'

import router from '@/router'

const config = axios

config.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
config.defaults.headers.common['Accept'] = 'application/json'

config.defaults.baseURL = 'https://5d43de032c6da100147e3512.mockapi.io/api'

/* Set The Token if Present So We Can Authorize Request */

// const accessToken = localStorage.getItem('access_token_user')
// if (accessToken) {
//   config.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
// }

// Set the CSRF Token
let token = document.head.querySelector('meta[name="csrf-token"]')
if (token) {
  config.defaults.headers.common['X-CSRF-TOKEN'] = token.content
}

// Interceptors to Handle invalid token of user
config.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 401) {
      router.push({ path: '/login' })
    }

    if (error.response.status === 406) {
      router.push({ path: '/404' })
    }

    return Promise.reject(error)
  }
)

Vue.prototype.$http = config
