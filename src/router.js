import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/home-page.vue'
import DenmarkPage from './pages/denmark-page.vue'
import ChinaPage from './pages/china-page.vue'
import GermnayPage from './pages/germnay-page.vue'
import GreecePage from './pages/greece-page.vue'
import NetherlandsPage from './pages/netherlands-page.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/denmark', component: DenmarkPage },
  { path: '/china', component: ChinaPage },
  { path: '/germany', component: GermnayPage },
  { path: '/greece', component: GreecePage },
  { path: '/netherlands', component: NetherlandsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
