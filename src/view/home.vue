<template>
  <div class="flex flex-col items-center drop-shadow-xl mt-6 bg-transparent" role="banner" aria-label="Header">
    <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center pb-6">
      <h1 class="text-4xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white" role="heading" aria-level="1">Nicola Corradini</h1>
      <h2 class="text-2xl text-gray-200 indent-6" role="heading" aria-level="2">| Photography</h2>
    </div>
  </div>
  <div class="flex justify-center bg-transparent h-auto">
    <div class="bg-transparent w-screen p-3 flex justify-center sm:items-center md:items-center lg:items-center xl:items-center 2xl:items-center drop-shadow-lg" style="height: 63vh; display: flex; align-items: center; justify-content: center;">
      <img :src="currentImageSrc" alt="Preview image" class="h-fit sm:h-fit md:h-fit lg:h-full xl:h-full 2xl:h-full">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      currentImageIndex: 0, // start with the first image
      imageSources: [
        'preview1.jpg',
        'preview2.jpg',
        'preview3.jpg',
        'preview4.jpg',
        'preview5.jpg',
        'preview6.jpg',
        'preview7.jpg',
        'preview8.jpg',
        'preview9.jpg',
        'preview10.jpg',
        'preview11.jpg',
        'preview12.jpg',
        'preview13.jpg',
        'preview14.jpg',
        'preview15.jpg',
        'preview16.jpg',
      ],
      direction: 'right'
    };
  },
  computed: {
    currentImageSrc(): string {
      return `src/assets/preview/${this.imageSources[this.currentImageIndex]}`;
    },
  },
  created() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageSources.length;
    }, 5132);
  }
});
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