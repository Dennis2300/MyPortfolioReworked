import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/home-page.vue'
import GalleryPage from './pages/gallery-page.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/gallery', component: GalleryPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
