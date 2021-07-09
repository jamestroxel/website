import { createRouter, createWebHashHistory } from 'vue-router'
// import playGame from '../views/playGame.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import DecadeOfLoudMusic from '../views/DecadeOfLoudMusic.vue'
import NearEarthObjects from '../views/NearEarthObjects.vue'
import KarpovKorchnoi from '../views/KarpovKorchnoi.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/decade-of-loud-music',
    name: 'Decade Of Loud Music',
    component: DecadeOfLoudMusic,
    // props: route => ({ speciesFilter: route.query.species })
  },
  {
    path: '/near-earth-objects',
    name: 'Near Earth Objects',
    component: NearEarthObjects,
    // props: route => ({ speciesFilter: route.query.species })
  },
  {
    path: '/karpov-korchnoi',
    name: 'Karpov vs. Korchnoi',
    component: KarpovKorchnoi,
    // props: route => ({ speciesFilter: route.query.species })
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/home',
    name: '--',
    component: Home
  },
  {
    path: '/:pathMatch(.*)*', // https://next.router.vuejs.org/guide/migration/#moved-the-base-option
    name: 'Not Found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
