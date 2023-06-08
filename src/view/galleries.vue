<template>
  <div class="flex items-center p-3">
    <h1 class="text-white text-4xl drop-shadow-xl mx-auto">{{ $t('galleries') }}</h1>
  </div>
  <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row w-11/12 h-11/12 mx-auto my-16 bg-transparent justify-center align-center overflow-scroll">
      <router-link to="/portraits" class="m-2 w-11/12 h-90 text-white hover:text-black hover:bg-white shadow-white gallery-link">
          <h2 class="text-2xl drop-shadow-xl p-3">{{ $t('portrait') }}</h2>
          <img src="/thumbnail6.jpg" alt="Studio Portrait" class="p-4 pt-2" />
      </router-link>

      <router-link to="/pinhole" class="m-2 w-11/12 h-90 text-white hover:text-black hover:bg-white shadow-white gallery-link">
          <h2 class="text-2xl drop-shadow-xl p-3">{{ $t('pinhole') }}</h2>
          <img src="/thumbnail3.jpg" alt='Pinhole Of London' class='p-2'/>
      </router-link>

      <router-link to="/drone" class="m-2 w-11/12 h-90 text-white hover:text-black hover:bg-white shadow-white gallery-link">
          <h2 class="text-2xl drop-shadow-xl p-3">{{ $t('drone') }}</h2>
          <img src="/thumbnail7.jpg" alt='Drone Forest' class='p-2'/>
      </router-link>

      <router-link to="/infrared" class="m-2 w-11/12 h-90 text-white hover:text-black hover:bg-white shadow-white gallery-link">
          <h2 class="text-2xl drop-shadow-xl p-3">{{ $t('infrared') }}</h2>
          <img src="/thumbnail1.jpg" alt='Infrared' class='p-2'/>
      </router-link>
  </div>

  <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row w-11/12 h-11/12 mx-auto my-16 bg-transparent justify-center align-center overflow-scroll">
      <router-link to="/nature" class="m-2 w-11/12 h-90 text-white hover:text-black hover:bg-white shadow-white gallery-link">
          <h2 class="text-2xl drop-shadow-xl p-3">{{ $t('nature') }}</h2>
          <img src="/thumbnail5.jpg" alt="Meerkat" class="p-4 pt-2" />
      </router-link>

      <router-link to="/street" class="m-2 w-11/12 h-90 text-white hover:text-black hover:bg-white shadow-white gallery-link">
          <h2 class="text-2xl drop-shadow-xl p-3">{{ $t('street') }}</h2>
          <img src="/thumbnail4.jpg" alt='Streets Of London' class='p-2'/>
      </router-link>

      <router-link to="/analog" class="m-2 w-11/12 h-90 text-white hover:text-black hover:bg-white shadow-white gallery-link">
          <h2 class="text-2xl drop-shadow-xl p-3">{{ $t('analog') }}</h2>
          <img src="/thumbnail8.jpg" alt='Anal Log' class='p-2'/>
      </router-link>

      <router-link to="/others" class="m-2 w-11/12 h-90 text-white hover:text-black hover:bg-white shadow-white gallery-link">
          <h2 class="text-2xl drop-shadow-xl p-3">{{ $t('other') }}</h2>
          <img src="/thumbnail2.jpg" alt='Other' class='p-2'/>
      </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { gsap } from 'gsap';

export default defineComponent({
  name: "Galleries",
  mounted() {
    gsap.from("h1", {
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 0.3,
      ease: "power1.in",
    });

    gsap.from(".gallery-link", {
      opacity: 0,
      y: 100,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.6,
      ease: "power1.in",
    });
  }
});
</script>

<style>
h1,
h2 {
  font-family: "Avenir", sans-serif;
}

.drop-shadow-xl {
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6),
    0px 0px 10px rgba(255, 255, 255, 0.6);
}

button:hover {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  transition-duration: 1.6s;
}
</style>
