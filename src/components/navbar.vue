<template>
  <nav>
    <div class="flex flex-row w-screen justify-center mt-6 text-lg">
      <router-link to="/" class="text-white drop-shadow-lg mx-2 p-1 hover:text-black hover:bg-white">Home</router-link>
      <router-link to="/galleries" class="text-white drop-shadow-lg mx-2 p-1 hover:text-black hover:bg-white">Galleries</router-link>
      <router-link to="/random" class="text-white drop-shadow-lg mx-2 p-1 hover:text-black hover:bg-white">Random</router-link>
      <router-link to="/about" class="text-white drop-shadow-lg mx-2 p-1 hover:text-black hover:bg-white">About</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import router from '../router';

export default {
  name: 'Navbar',
  router
}
</script>


<style scoped>
nav {
  font-family: 'Avenir', sans-serif;
}

.drop-shadow-lg {
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7),
               0px 0px 10px rgba(255, 255, 255, 0.7);
}

button:hover {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  transition-duration: 1.6s;
}
</style>