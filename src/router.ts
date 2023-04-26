import { createRouter, createWebHistory } from 'vue-router'
import Home from './view/home.vue';
import About from './view/about.vue';
import Gallery from './view/galleries.vue';
import Street from './view/street.vue';
import Studio from './view/studio.vue';
import Drone from './view/drone.vue';
import Infrared from './view/infrared.vue';
import Pinhole from './view/pinhole.vue';
import Others from '../src/view/others.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/galleries', component: Gallery },
  { path: '/street', component: Street },
  { path: '/studio', component: Studio },
  { path: '/drone', component: Drone },
  { path: '/infrared', component: Infrared },
  { path: '/pinhole', component: Pinhole },
  { path: '/others', component: Others },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router