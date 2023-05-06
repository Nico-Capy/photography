import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "Home" */ '../src/view/home.vue'),
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "About" */ '../src/view/about.vue'),
  },
  {
    path: '/galleries',
    component: () => import(/* webpackChunkName: "Gallery" */ '../src/view/galleries.vue'),
  },
  {
    path: '/street',
    component: () => import(/* webpackChunkName: "Street" */ '../src/view/street.vue'),
  },
  {
    path: '/studio',
    component: () => import(/* webpackChunkName: "Studio" */ '../src/view/studio.vue'),
  },
  {
    path: '/drone',
    component: () => import(/* webpackChunkName: "Drone" */ '../src/view/drone.vue'),
  },
  {
    path: '/infrared',
    component: () => import(/* webpackChunkName: "Infrared" */ '../src/view/infrared.vue'),
  },
  {
    path: '/pinhole',
    component: () => import(/* webpackChunkName: "Pinhole" */ '../src/view/pinhole.vue'),
  },
  {
    path: '/others',
    component: () => import(/* webpackChunkName: "Others" */ '../src/view/others.vue'),
  },
  {
    path: '/analog',
    component: () => import(/* webpackChunkName: "Analog" */ '../src/view/analog.vue'),
  },
  {
    path: '/nature',
    component: () => import(/* webpackChunkName: "Nature" */ '../src/view/animals.vue'),
  },
  {
    path: '/random',
    component: () => import(/* webpackChunkName: "Random" */ '../src/view/random.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
