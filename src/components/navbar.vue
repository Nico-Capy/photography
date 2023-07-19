<template>
  <nav>
    <div class="flex flex-row w-screen justify-center mt-6 text-lg">
      <router-link
        to="/"
        class="text-white drop-shadow-lg mx-2 p-1 hover:text-black hover:bg-white animated-link"
        >{{ $t("home") }}</router-link
      >
      <router-link
        to="/galleries"
        class="text-white drop-shadow-lg mx-2 p-1 hover:text-black hover:bg-white animated-link"
        >{{ $t("galleries") }}</router-link
      >
      <router-link
        to="/random"
        class="text-white drop-shadow-lg mx-2 p-1 hover:text-black hover:bg-white animated-link"
        >{{ $t("random") }}</router-link
      >
      <router-link
        to="/about"
        class="text-white drop-shadow-lg mx-2 p-1 hover:text-black hover:bg-white animated-link"
        >{{ $t("about.title") }}</router-link
      >
    </div>
  </nav>
</template>

<script lang="ts">
import { gsap } from "gsap";
import { onMounted } from "vue";
import router from "../router";

export default {
  name: "Navbar",
  router,
  setup() {
    onMounted(() => {
      gsap.from(".animated-link", {
        opacity: 0,
        y: 100,
        duration: 0.6,
        stagger: 0.3,
        delay: 0.6,
        ease: "power2.in",
      });
    });
  },
};
</script>
