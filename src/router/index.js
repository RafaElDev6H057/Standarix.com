import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ingenieria-software',
      name: 'Ingenieria de Software',
      component: () => import('../views/SoftwareEngineeringView.vue'),
    },
  ],
})

export default router
