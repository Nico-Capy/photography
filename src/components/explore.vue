<template>
    <button class="rounded-none text-2xl m-1 p-3 bg-transparent hover:bg-white text-white hover:text-black flex items-center drop-shadow-xl hover:drop-shadow-none" @click="goToGalleries">
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
  button {
  transition: 1.6s;
  font-family: 'Avenir', sans-serif;
  }
  
  button:hover {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  }
  </style> 