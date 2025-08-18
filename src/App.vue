vue
<template>
  <LanguageSwitcher />
  <Navbar />
  <router-view />
  <Footer />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/navbar.vue";
import Footer from "../src/components/footer.vue";
import LanguageSwitcher from "../src/components/LanguageSwitcher.vue";
import Home from "../src/view/home.vue";
import About from "../src/view/about.vue";
import Drone from "../src/view/drone.vue";
import Portraits from "../src/view/studio.vue";
import Nautre from "../src/view/animals.vue";
import Analog from "../src/view/analog.vue";
import Galleries from "../src/view/galleries.vue";
import Infrared from "../src/view/infrared.vue";
import NotFound from "../src/view/notfound.vue";
import Others from "../src/view/others.vue";
import Street from "../src/view/street.vue";
import Pinhole from "../src/view/pinhole.vue";
import Random from "../src/view/random.vue";
export default defineComponent({
  components: {
    LanguageSwitcher,
    Navbar,
    Footer,
    Home,
    About,
    Drone,
    Portraits,
    Nautre,
    Analog,
    Galleries,
    Infrared,
    NotFound,
    Others,
    Street,
    Pinhole,
    Random,
  },
});
</script>
<style>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>