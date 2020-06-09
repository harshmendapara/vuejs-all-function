export default [
  {
    path: '/',
    name: 'UserList',
    view: 'UserList',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    view: 'Login',
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/blog/:id',
    name: 'blog',
    view: 'BlogList',
    meta: {
      requiresAuth: true
    }
  }
]
