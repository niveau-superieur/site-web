import HomeView from '@/views/HomeView.vue'
import PlanningView from '@/views/PlanningView.vue'
import BooksView from '@/views/resources/BooksView.vue'
import DndView from '@/views/resources/DndView.vue'
import ToolsView from '@/views/resources/ToolsView.vue'
import StatsView from '@/views/StatsView.vue'
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
      path: '/stats',
      name: 'statistics',
      component: StatsView,
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
    {
      path: '/resources/lectures',
      name: 'resources_lectures',
      component: BooksView,
    },
    {
      path: '/resources/tools',
      name: 'resources_tools',
      component: ToolsView,
    },
  ],
})

export default router
