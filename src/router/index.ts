import HomeView from '@/views/HomeView.vue'
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
  ],
})

export default router
