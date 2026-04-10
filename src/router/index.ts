import DndView from '@/views/DndView.vue'
import HomeView from '@/views/HomeView.vue'
import PlanningView from '@/views/PlanningView.vue'
import VideoView from '@/views/VideoView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/videos',
      redirect: '/videos/defis',
    },
    {
      path: '/videos/:type',
      name: 'videos',
      component: VideoView,
    },
    {
      path: '/planning',
      name: 'planning',
      component: PlanningView,
    },
    {
      path: '/resources',
      redirect: '/resources/d&d',
    },
    {
      path: '/resources/d&d',
      name: 'resources_d&d',
      component: DndView,
    },
  ],
})

export default router
