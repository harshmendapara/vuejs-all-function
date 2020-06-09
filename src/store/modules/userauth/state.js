export default {
  userLoggedIn: !!localStorage.getItem('access_token_user'),
  loginInfo: {username: 'admin', password: 'admin'}
}
