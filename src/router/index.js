import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import moviePreview from '../views/MoviePreview.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/moviePreview/:id',
    name: 'moviePreview',
    component: moviePreview,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
