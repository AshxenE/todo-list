import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/task',
    name: 'Task',
    component: () => import('../views/Task.vue'),
  },
  {
    path: '/task/:id',
    name: 'TaskItem',
    component: () => import('../views/Task.vue'),
    props: (route) => ({
      id: route.params.id ?? '',
    }),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
