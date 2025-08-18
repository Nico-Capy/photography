<template>
  <nav>
    <div class="flex flex-row w-screen justify-center mt-6 text-lg">
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="text-white drop-shadow-lg mx-2 p-1 hover:text-black hover:bg-white animated-link"
      >
        {{ $t(link.label) }}
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { gsap } from "gsap";
import { onMounted } from "vue";

export default {
  name: "Navbar",
  setup() {
    const links = [
      { to: "/", label: "home" },
      { to: "/galleries", label: "galleries" },
      { to: "/random", label: "random" },
      { to: "/about", label: "about.title" },
    ];

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

    return { links };
  },
};
</script>

<style scoped>
.drop-shadow-lg {
  text-shadow:
    0px 0px 6px rgba(255, 255, 255, 0.4),
    0px 0px 6px rgba(255, 255, 255, 0.4);
}
</style>