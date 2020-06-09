export default {
  setUser (context, payload) {
    localStorage.setItem('access_token_user', payload.access_token)
    context.commit('loginStatus', true)
  },
  
  resetUser (context) {
    localStorage.removeItem('access_token_user')
    context.commit('loginStatus', false)
  },

}
