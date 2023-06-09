<template>
  <div class="flex flex-col items-center drop-shadow-xl mt-6 bg-transparent animate animate-element">
    <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center pb-6 animate-element">
      <h1 class="text-4xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white animate-element" role="heading">Nicola Corradini |</h1>
      <h2 class="text-2xl text-gray-200 indent-6 animate-element">{{ $t('photography') }}</h2>
    </div>
  </div>

  <div class="flex justify-center bg-transparent h-2/3 animate-element">
    <div class="bg-transparent w-3/4 lg:w-screen xl:w-screen 2xl:w-screen p-3 mb-16 flex flex-col justify-center items-center drop-shadow-lg animate-element" style="height: 63vh;">
      <img :key="currentImageIndex" :src="currentImageSrc" alt="Preview image" id="nostretch" class="h-fit sm:h-fit md:h-fit lg:h-full xl:h-full 2xl:h-full my-auto animate-element">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';

export default defineComponent({
  data() {
    return {
      currentImageIndex: 0,
      imageSources: [
        'preview1.png',
        'preview2.png',
        'preview3.png',
        'preview4.png',
        'preview5.png',
        'preview6.png',
        'preview7.png',
        'preview8.png',
        'preview9.png',
        'preview10.png',
        'preview11.png',
        'preview12.png',
        'preview13.png',
        'preview14.png',
        'preview15.png',
        'preview16.png',
      ],
      direction: 'right'
    };
  },
  computed: {
    currentImageSrc(): string {
      return `/preview/${this.imageSources[this.currentImageIndex]}`;
    },
  },
  created() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageSources.length;
    }, 3306);
  },
  mounted() {
    nextTick(() => {
      gsap.from(".animate-element", {
        opacity: 0,
        y: 100,
        duration: 1.6,
        delay: 0.6,
        stagger: 0.3,
        ease: "power1.in",
      });
    });
  },
});
</script>

<style>
  body {
    background-color: black;
  }

  h1, h2, p {
    font-family: 'Avenir', sans-serif;
  }

  .drop-shadow-xl {
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.45), 0px 0px 10px rgba(255, 255, 255, 0.45);
  }

  #nostretch{
    object-fit: cover;
  }
</style>