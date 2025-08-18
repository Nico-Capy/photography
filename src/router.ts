import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Lazy-loaded components with prefetch for better performance
const Home = () => import(/* webpackPrefetch: true */ "../src/view/home.vue");
const About = () => import(/* webpackPrefetch: true */ "../src/view/about.vue");
const Gallery = () => import(/* webpackPrefetch: true */ "../src/view/galleries.vue");
const Street = () => import(/* webpackPrefetch: true */ "../src/view/street.vue");
const Portraits = () => import(/* webpackPrefetch: true */ "../src/view/studio.vue");
const Drone = () => import(/* webpackPrefetch: true */ "../src/view/drone.vue");
const Infrared = () => import(/* webpackPrefetch: true */ "../src/view/infrared.vue");
const Pinhole = () => import(/* webpackPrefetch: true */ "../src/view/pinhole.vue");
const Others = () => import(/* webpackPrefetch: true */ "../src/view/others.vue");
const Analog = () => import(/* webpackPrefetch: true */ "../src/view/analog.vue");
const Nature = () => import(/* webpackPrefetch: true */ "../src/view/animals.vue");
const Random = () => import(/* webpackPrefetch: true */ "../src/view/random.vue");
const NotFound = () => import(/* webpackPrefetch: true */ "../src/view/notfound.vue");

// Define the routes configuration
const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/galleries", name: "Galleries", component: Gallery },
  { path: "/street", name: "Street", component: Street },
  { path: "/portraits", name: "Portraits", component: Portraits },
  { path: "/drone", name: "Drone", component: Drone },
  { path: "/infrared", name: "Infrared", component: Infrared },
  { path: "/pinhole", name: "Pinhole", component: Pinhole },
  { path: "/others", name: "Others", component: Others },
  { path: "/analog", name: "Analog", component: Analog },
  { path: "/nature", name: "Nature", component: Nature },
  { path: "/random", name: "Random", component: Random },
  { path: "/:catchAll(.*)", name: "NotFound", component: NotFound },
];

// Create a router instance with history mode
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
