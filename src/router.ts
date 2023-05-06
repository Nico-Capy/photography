import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Home = () => import('../src/view/home.vue');
const About = () => import('../src/view/about.vue');
const Gallery = () => import('../src/view/galleries.vue');
const Street = () => import('../src/view/street.vue');
const Studio = () => import('../src/view/studio.vue');
const Drone = () => import('../src/view/drone.vue');
const Infrared = () => import('../src/view/infrared.vue');
const Pinhole = () => import('../src/view/pinhole.vue');
const Others = () => import('../src/view/others.vue');
const Analog = () => import('../src/view/analog.vue');
const Nature = () => import('../src/view/animals.vue');
const Random = () => import('../src/view/random.vue');
const NotFound = () => import('./view/notfound.vue');

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
  {
    path: '/random',
    component: Random,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
