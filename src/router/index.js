import { createRouter, createWebHistory } from 'vue-router'
import Knjige from '../views/Knjige.vue'
import Autori from '../views/Autori.vue'
import Korisnici from '../views/Korisnici.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'prikaz-knjiga',
      component: Knjige
    },
    {
      path: '/autori',
      name: 'autori',
      component: Autori
    },
    {
      path: '/korisnici',
      name: 'korisnici',
      component: Korisnici
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound,
    },
  ]
})

export default router
