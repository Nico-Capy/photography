import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '../src/view/home.vue';
import About from '../src/view/about.vue';
import Gallery from '../src/view/galleries.vue';
import Street from '../src/view/street.vue';
import Studio from '../src/view/studio.vue';
import Drone from '../src/view/drone.vue';
import Infrared from '../src/view/infrared.vue';
import Pinhole from '../src/view/pinhole.vue';
import Others from '../src/view/others.vue';
import Analog from '../src/view/analog.vue';
import Nature from '../src/view/animals.vue';
import { Script } from 'vm';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/galleries',
    component: Gallery,
  },
  {
    path: '/street',
    component: Street,
  },
  {
    path: '/studio',
    component: Studio,
  },
  {
    path: '/drone',
    component: Drone,
  },
  {
    path: '/infrared',
    component: Infrared,
  },
  {
    path: '/pinhole',
    component: Pinhole,
  },
  {
    path: '/others',
    component: Others,
  },
  {
    path: '/analog',
    component: Analog,
  },
  {
    path: '/nature',
    component: Nature,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
