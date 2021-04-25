import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/users/ListUsers.vue'),
  },
  {
    path: '/users',
    component: () => import('../views/users/UserPage.vue'),
    children: [
      {
        path: 'add',
        component: () => import('../views/users/NewUser.vue'),
      },
      {
        path: 'edit/:id',
        component: () => import('../views/users/EditUser.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
