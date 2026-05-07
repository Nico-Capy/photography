import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Lazy-loaded views
const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: () => import("@/view/home.vue") },
  { path: "/about", name: "About", component: () => import("@/view/about.vue") },
  { path: "/galleries", name: "Galleries", component: () => import("@/view/galleries.vue") },
  { path: "/street", name: "Street", component: () => import("@/view/street.vue") },
  { path: "/portraits", name: "Portraits", component: () => import("@/view/studio.vue") },
  { path: "/drone", name: "Drone", component: () => import("@/view/drone.vue") },
  { path: "/infrared", name: "Infrared", component: () => import("@/view/infrared.vue") },
  { path: "/pinhole", name: "Pinhole", component: () => import("@/view/pinhole.vue") },
  { path: "/others", name: "Others", component: () => import("@/view/others.vue") },
  { path: "/analog", name: "Analog", component: () => import("@/view/analog.vue") },
  { path: "/nature", name: "Nature", component: () => import("@/view/animals.vue") },
  { path: "/random", name: "Random", component: () => import("@/view/random.vue") },

  // Catch-all 404 route (always last)
  { path: "/:catchAll(.*)", name: "NotFound", component: () => import("@/view/notfound.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
