<template>
    <div>
      <Navbar />
      <div class=" hero bg-black py-20">
        <div class="container h-screen mx-auto">
          <h1 class="text-6xl font-bold text-left text-white m-6">Nicola Corradini</h1>
          <h2 class="text-5xl text-gray-300 text-left m-10 mt-6">| Photographer</h2>
        </div>
      </div>
      <Footer />
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

  </style>
  