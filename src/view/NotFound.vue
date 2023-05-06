<template>
    <div class="flex h-screen">
      <div class="w-1/3 bg-black p-8 flex items-center justify-center">
        <div>
          <h1 class="text-4xl text-white font-bold mb-4">404 Not Found</h1>
          <p class="text-lg text-white mb-4">Hey! Sorry about that, I'm working on it.</p>
          <router-link to="/" class="text-blue-500">Go back to home</router-link>
        </div>
      </div>
      <div class="w-2/3">
        <img class="h-full w-full object-cover" src="/heydave.gif" alt="Hello Dave!">
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'NotFound',
  });
  </script>
  
  <style scoped>
  h2, p {
      font-family: 'Avenir', sans-serif;
    }

    .drop-shadow-lg {
        text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7),
                     0px 0px 10px rgba(255, 255, 255, 0.7);
    }
  </style>
  