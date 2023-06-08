<template>
  <div class="flex flex-col items-center justify-center">
    <h2 class="text-3xl text-white drop-shadow-xl m-6 mb-0">{{$t('about.title')}}</h2>
    <div class="mx-auto flex flex-row m-2 mt-6 w-10/12 items-center text-center dwight">
      <h3 class="text-3xl text-white indent-14 drop-shadow-xl">{{$t('about.subtitle.start')}}<a href="https://www.youtube.com/watch?v=5rr0zAtdEvw" target="_blank" rel="noopener noreferrer"><span class="text-3xl text-black bg-white px-3 ml-1 shadow cursor-pointer">Nico</span></a></h3>
    </div>
    <div class="mx-auto flex flex-row w-4/5 justify-center align-center">
      <div class="flex flex-col text-white drop-shadow-xl m-2">
        <p class="text-xl p-4 dwight">{{$t('about.paragraph1')}}</p>
        <br />
        <br />
        <p class="text-xl p-4 dwight">{{$t('about.paragraph2')}}</p>
      </div>
    </div>
    <div class="flex justify-center align-center">
      <video src="/nico.mp4" alt="Admiral Nico, flying his drone" class="w-4/5 justify-center align-center m-2 mb-16" preload='auto' autoplay loop playsinline muted></video>
    </div>
  </div>
</template>

<script lang="ts">
import { gsap } from 'gsap';

export default {
  name: 'About',
  mounted() {
    this.animateElements();
  },
  methods: {
    animateElements() {
      gsap.from("h2", {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: 0,
        ease: "power1.in",
      });

      gsap.from(".dwight", {
        opacity: 0,
        y: 100,
        duration: 0.6,
        stagger: 0.6,
        delay: 0.3,
        ease: "power1.in",  
      });
    }
  }
}
</script>


<style>
  h2, p {
    font-family: 'Avenir', sans-serif;
  }
  
  .drop-shadow-lg {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.4), 0px 0px 6px rgba(255, 255, 255, 0.4);
  }
  
  .shadow {
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  }
  
  video::-webkit-media-controls {
    display:none !important;
  }
  video::-webkit-media-controls-enclosure {
    display:none !important;
  }
  video::-webkit-media-controls-overlay-play-button {
    display:none !important;
  }
  video::-webkit-media-controls-play-button {
    display:none !important;
  }
  video::-webkit-media-controls-start-playback-button {
    display:none !important;
  }
  video::-webkit-media-controls-current-time-display {
    display:none !important;
  }
  video::-webkit-media-controls-time-remaining-display {
    display:none !important;
  }
  video::-webkit-media-controls-mute-button {
    display:none !important;
  }
  video::-webkit-media-controls-volume-slider-container {
    display:none !important;
  }
  video::-webkit-media-controls-fullscreen-button {
    display:none !important;
  }
</style>
