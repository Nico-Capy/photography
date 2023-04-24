<template>
  <div class="flex flex-col items-center drop-shadow-xl" role="banner" aria-label="Header">
    <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center pb-6">
      <h1 class="text-4xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white" role="heading" aria-level="1">Nicola Corradini</h1>
      <h2 class="text-2xl text-gray-200 indent-6" role="heading" aria-level="2">| Photography</h2>
    </div>
    <div class="flex items-center justify-center">
      <explore-button />
    </div>
  </div>
  <div class="h-screen flex justify-center">
    <div class="bg-red-800 w-screen p-3 flex justify-center sm:items-center md:items-center lg:items-center xl:items-center 2xl:items-center drop-shadow-lg" style="height: 63vh;">
      <img src="../assets/preview/preview3.jpg" alt="Pendjari elephant" class="h-fit sm:h-fit md:h-fit lg:h-full xl:h-full 2xl:h-full">
    </div>
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
