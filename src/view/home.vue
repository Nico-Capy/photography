<template>
  <div class="flex flex-col items-center drop-shadow-xl" role="banner" aria-label="Header">
    <div class="flex flex-row sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center">
      <h1 class="text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white" role="heading" aria-level="1">Nicola Corradini</h1>
      <h2 class="text-lg text-gray-300" role="heading" aria-level="2">| Photography</h2>
    </div>
    <div class="flex items-center justify-center mt-6">
      <explore-button />
    </div>
  </div>
  <div class="w-11/12 m-4 flex items-center justify-center drop-shadow-lg">
      <img src="../assets/preview/preview3.jpg" alt="Pendjari elephant" class="h-2/3 sm:h-1/3 md:h-1/3">
    </div>
</template>

<script lang="ts">
import ExploreButton from '../components/explore.vue';

export default {
  components: {
    ExploreButton,
  },
};
</script>

<style>
  body {
    background-color: black;
  }

  h1, h2 {
    font-family: 'Avenir', sans-serif;
  }

  .drop-shadow-xl {
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.45), 0px 0px 10px rgba(255, 255, 255, 0.45);
  }
</style>
