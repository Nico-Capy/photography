<template>
    <div class="flex items-center p-3">
      <h1 class="text-white text-4xl drop-shadow-xl mx-auto">Galleries</h1>
    </div>
    <div class="flex justify-center align-center">
      <drone-button></drone-button>
    </div>
    <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row w-11/12 h-11/12 mx-auto bg-transparent justify-center align-center overflow-visible">
        <router-link to="/studio" class="m-2 w-11/12 h-90 text-white hover:text-black bg-transparent hover:bg-white shadow-white justify-center">
          <h2 class="text-2xl drop-shadow-xl p-3">Portraits</h2>
          <img src="../assets/thumbnails/thumbnail6.jpg" alt="Studio Portrait" class="p-4 h-fit"/>
        </router-link>

        <router-link to="/drone" class="m-2 w-11/12 h-90 text-white hover:text-black bg-transparent hover:bg-white shadow-white">
            <h2 class="text-2xl drop-shadow-xl p-3">Drone</h2>
            <img src="../assets/thumbnails/thumbnail7.jpg" alt="Drone Shot" class="p-4 h-fit"/>
        </router-link>

        <router-link to='/pinhole' class="m-2 w-11/12 h-90 text-white hover:text-black bg-transparent hover:bg-white shadow-white">
            <h2 class="text-2xl drop-shadow-xl p-3">Pinhole</h2>
            <img src="../assets/thumbnails/thumbnail3.jpg" alt="London By Pinhole" class="p-4 h-fit"/>
        </router-link>

        <router-link to="/infrared" class="m-2 w-11/12 h-90 text-white hover:text-black hover:bg-white shadow-white">
            <h2 class="text-2xl drop-shadow-xl p-3">Infrared</h2>
            <img src="../assets/thumbnails/thumbnail1.jpg" alt="Infrared Tree" class="p-4 h-fit"/>
        </router-link>
    </div>

    <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row w-11/12 h-11/12 mx-auto my-16 bg-transparent justify-center align-center overflow-scroll">
        <router-link to="/nature" class="m-2 w-11/12 h-90 text-white hover:text-black hover:bg-white shadow-white">
            <h2 class="text-2xl drop-shadow-xl p-3">Nature</h2>
            <img src="../assets/thumbnails/thumbnail5.jpg" alt="Meerkat" class="p-4 pt-2" />
        </router-link>

        <router-link to="/street" class="m-2 w-11/12 h-90 text-white hover:text-black hover:bg-white shadow-white">
            <h2 class="text-2xl drop-shadow-xl p-3">Street</h2>
            <img src="../assets/thumbnails/thumbnail4.jpg" alt='Streets Of London' class='p-2'/>
        </router-link>

        <router-link to="/analog" class="m-2 w-11/12 h-90 text-white hover:text-black hover:bg-white shadow-white">
            <h2 class="text-2xl drop-shadow-xl p-3">Analog</h2>
            <img src="../assets/thumbnails/thumbnail8.jpg" alt='Studio Flower' class='p-2'/>
        </router-link>

        <router-link to="/others" class="m-2 w-11/12 h-90 text-white hover:text-black hover:bg-white shadow-white">
            <h2 class="text-2xl drop-shadow-xl p-3">Other</h2>
            <img src="../assets/thumbnails/thumbnail2.jpg" alt='Studio Flower' class='p-2'/>
        </router-link>
    </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
import DroneButton from '../components/dronebutton.vue'

export default {
  name: 'Galleries',
  components: {
    RouterLink,
    DroneButton
  },
}
</script>
  
<style>
    h1, h2 {
      font-family: 'Avenir', sans-serif;
    }

    .drop-shadow-xl {
      text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6), 0px 0px 10px rgba(255, 255, 255, 0.6);
    }

    button:hover {
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
      transition-duration: 1.6s;
    }
</style>
