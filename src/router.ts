import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// Lazy-loaded components for better performance
const Home = () => import("../src/view/home.vue");
const About = () => import("../src/view/about.vue");
const Gallery = () => import("../src/view/galleries.vue");
const Street = () => import("../src/view/street.vue");
const Portraits = () => import("../src/view/studio.vue");
const Drone = () => import("../src/view/drone.vue");
const Infrared = () => import("../src/view/infrared.vue");
const Pinhole = () => import("../src/view/pinhole.vue");
const Others = () => import("../src/view/others.vue");
const Analog = () => import("../src/view/analog.vue");
const Nature = () => import("../src/view/animals.vue");
const Random = () => import("../src/view/random.vue");
const NotFound = () => import("../src/view/notfound.vue");
// Define the routes configuration
const routes: Array<RouteRecordRaw> = [
  // Home page route
  { path: "/", name: "Home", component: Home },
  
  // About page route
  { path: "/about", name: "About", component: About },
  
  // Galleries page route
  { path: "/galleries", name: "Galleries", component: Gallery },
  
  // Street photography page route
  { path: "/street", name: "Street", component: Street },
  
  // Portraits page route
  { path: "/portraits", name: "Portraits", component: Portraits },
  
  // Drone photography page route
  { path: "/drone", name: "Drone", component: Drone },
  
  // Infrared photography page route
  { path: "/infrared", name: "Infrared", component: Infrared },
  
  // Pinhole photography page route
  { path: "/pinhole", name: "Pinhole", component: Pinhole },
  
  // Other photography styles page route
  { path: "/others", name: "Others", component: Others },
  
  // Analog photography page route
  { path: "/analog", name: "Analog", component: Analog },
  
  // Nature photography page route
  { path: "/nature", name: "Nature", component: Nature },
  
  // Random photography page route
  { path: "/random", name: "Random", component: Random },
  
  // Catch-all route for undefined paths
  { path: "/:catchAll(.*)", name: "NotFound", component: NotFound },
];
// Create a router instance with history mode
const router = createRouter({
  history: createWebHistory(),
  routes, // Assign the defined routes
});
// Export the router instance for use in the application
export default router;