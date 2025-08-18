import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Lazy-loaded views
const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: () => import(/* webpackPrefetch: true */ "@/view/home.vue") },
  { path: "/about", name: "About", component: () => import(/* webpackPrefetch: true */ "@/view/about.vue") },
  { path: "/galleries", name: "Galleries", component: () => import(/* webpackPrefetch: true */ "@/view/galleries.vue") },
  { path: "/street", name: "Street", component: () => import(/* webpackPrefetch: true */ "@/view/street.vue") },
  { path: "/portraits", name: "Portraits", component: () => import(/* webpackPrefetch: true */ "@/view/studio.vue") },
  { path: "/drone", name: "Drone", component: () => import(/* webpackPrefetch: true */ "@/view/drone.vue") },
  { path: "/infrared", name: "Infrared", component: () => import(/* webpackPrefetch: true */ "@/view/infrared.vue") },
  { path: "/pinhole", name: "Pinhole", component: () => import(/* webpackPrefetch: true */ "@/view/pinhole.vue") },
  { path: "/others", name: "Others", component: () => import(/* webpackPrefetch: true */ "@/view/others.vue") },
  { path: "/analog", name: "Analog", component: () => import(/* webpackPrefetch: true */ "@/view/analog.vue") },
  { path: "/nature", name: "Nature", component: () => import(/* webpackPrefetch: true */ "@/view/animals.vue") },
  { path: "/random", name: "Random", component: () => import(/* webpackPrefetch: true */ "@/view/random.vue") },

  // Catch-all 404 route (always last)
  { path: "/:catchAll(.*)", name: "NotFound", component: () => import(/* webpackPrefetch: true */ "@/view/notfound.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;