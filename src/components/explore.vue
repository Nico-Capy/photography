<template>
    <button class="rounded-none m-1 p-1 bg-transparent hover:bg-white text-white hover:text-black flex items-center drop-shadow-xl" @click="goToGalleries">
      <span>Explore Galleries</span>
      <span class="ml-2">&#10132;</span>
    </button>
  </template>
  <script>
  export default {
    name: 'ExploreButton',
    methods: {
      goToGalleries() {
        this.$router.push('/galleries');
      }
    }
  }
  </script>
  <style>
  .drop-shadow-xl {
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.45), 0px 0px 10px rgba(255, 255, 255, 0.45);
  }
  </style> 