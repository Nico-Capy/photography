<template>
  <div>
    <div class="hero bg-black h-100">
      <div class="container h-screen mt-0 flex flex-row sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row text-center sm:items-center sm:justify-center">
        <h1 class="text-4xl sm:3xl md:4xl lg:5xl xl:6xl 2xl:7xl font-bold text-white drop-shadow-xl sm:mx-0 pr-3">Nicola Corradini</h1>
        <h2 class="tracking-widest text-2xl sm:2xl md:2xl lg:3xl xl:3xl 2xl:4xl text-gray-300 drop-shadow-xl mt-0 indent-2">| Photographer</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '../components/footer.vue';

export default defineComponent({
  components: {
    Footer,
  },
});
</script>

<style>
h1, h2 {
  font-family: 'Avenir', sans-serif;
}
.drop-shadow-xl {
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3), 0px 0px 10px rgba(255, 255, 255, 0.3);
}
</style>