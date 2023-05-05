<template>
    <div class="flex flex-col items-center justify-center">
      <h2 class="text-3xl text-center text-white drop-shadow-xl m-6">
        Random Photo Generator
      </h2>
        <div class="bg-transparent lg:w-1/3 xl:w-2/4 2xl:w-1/3 p-2 flex flex-col justify-center items-center drop-shadow-lg" style="height: 63vh;">
            <img :src="currentImage" class="h-5/6" id="nostretch" />
            <button
        class="bg-white hover:bg-transparent text-black hover:text-white drop-shadow-xl text-xl font-light p-4 mt-4"
        @click="showRandomPhoto"
      >
        Click here for random photo
      </button>
        </div>
    </div>
  </template>  
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  const photos = [
    { src: "/nature/nature09.jpg" },
    { src: "/nature/nature10.jpg" },
    { src: "/nature/nature11.jpg" },
    { src: "/nature/nature12.jpg" },
    { src: "/nature/nature13.jpg" },
    { src: "/nature/nature14.jpg" },
    { src: "/nature/nature16.jpg" },
    { src: "/nature/nature15.jpg" },
    { src: "/nature/nature07.jpg" },
    { src: "/nature/nature08.jpg" },
    { src: "/nature/nature01.jpg" },
    { src: "/nature/nature02.jpg" },
    { src: "/nature/nature03.jpg" },
    { src: "/nature/nature04.jpg" },
    { src: "/nature/nature05.jpg" },
    { src: "/nature/nature06.jpg" },
    { src: "/analog/analog02.jpg" },
    { src: "/analog/analog03.jpg" },
    { src: "/analog/analog04.jpg" },
    { src: "/analog/analog05.jpg" },
    { src: "/analog/analog06.jpg" },
    { src: "/analog/analog07.jpg" },
    { src: "/analog/analog08.jpg" },
    { src: "/analog/analog09.jpg" },
    { src: "/analog/analog10.jpg" },
    { src: "/analog/analog11.jpg" },
    { src: "/analog/analog12.jpg" },
    { src: "/analog/analog13.jpg" },
    { src: "/analog/analog14.jpg" },
    { src: "/analog/analog15.jpg" },
    { src: "/analog/analog16.jpg" },
    { src: "/analog/analog17.jpg" },
    { src: "/analog/analog18.jpg" },
    { src: "/analog/analog19.jpg" },
    { src: "/drone/drone01.jpg" },
    { src: "/drone/drone02.jpg" },
    { src: "/drone/drone03.jpg" },
    { src: "/drone/drone04.jpg" },
    { src: "/drone/drone05.jpg" },
    { src: "/drone/drone06.jpg" },
    { src: "/drone/drone07.jpg" },
    { src: "/drone/drone08.jpg" },
    { src: "/drone/drone09.jpg" },
    { src: "/drone/drone10.jpg" },
    { src: "/drone/drone11.jpg" },
    { src: "/drone/drone12.jpg" },
    { src: "/drone/drone15.jpg" },
    { src: "/drone/drone16.jpg" },
    { src: "/drone/drone17.jpg" },
    { src: "/drone/drone13.jpg" },
    { src: "/drone/drone14.jpg" },
    { src: "/drone/drone18.jpg" },
    { src: "/infrared/infrared01.jpg" },
    { src: "/infrared/infrared02.jpg" },
    { src: "/infrared/infrared03.jpg" },
    { src: "/infrared/infrared04.jpg" },
    { src: "/infrared/infrared05.jpg" },
    { src: "/other/other01.jpg" },
    { src: "/other/other02.jpg" },
    { src: "/other/other03.jpg" },
    { src: "/other/other04.jpg" },
    { src: "/other/other05.jpg" },
    { src: "/other/other06.jpg" },
    { src: "/other/other07.jpg" },
    { src: "/other/other08.jpg" },
    { src: "/other/other09.jpg" },
    { src: "/other/other10.jpg" },
    { src: "/other/other11.jpg" },
    { src: "/other/other12.jpg" },
    { src: "/other/other13.jpg" },
    { src: "/other/other14.jpg" },
    { src: "/other/other15.jpg" },
    { src: "/other/other16.jpg" },
    { src: "/street/street01.jpg" },
    { src: "/street/street02.jpg" },
    { src: "/street/street03.jpg" },
    { src: "/street/street04.jpg" },
    { src: "/street/street05.jpg" },
    { src: "/street/street06.jpg" },
    { src: "/street/street07.jpg" },
    { src: "/street/street08.jpg" },
    { src: "/street/street09.jpg" },
    { src: "/street/street10.jpg" },
    { src: "/street/street11.jpg" },
    { src: "/street/street12.jpg" },
    { src: "/street/street13.jpg" },
    { src: "/street/street14.jpg" },
    { src: "/street/street15.jpg" },
    { src: "/street/street16.jpg" },
    { src: "/street/street17.jpg" },
    { src: "/street/street18.jpg" },
    { src: "/street/street19.jpg" },
    { src: "/street/street20.jpg" },
    { src: "/street/street21.jpg" },
    { src: "/street/street22.jpg" },
    { src: "/portraits/portrait01.jpg" },
    { src: "/portraits/portrait02.jpg" },
    { src: "/portraits/portrait03.jpg" },
    { src: "/portraits/portrait04.jpg" },
    { src: "/portraits/portrait05.jpg" },
    { src: "/portraits/portrait06.jpg" },
    { src: "/portraits/portrait07.jpg" },
    { src: "/portraits/portrait08.jpg" },
    { src: "/portraits/portrait09.jpg" },
    { src: "/portraits/portrait10.jpg" },
    { src: "/portraits/portrait11.jpg" },
    { src: "/portraits/portrait12.jpg" },
    { src: "/portraits/portrait13.jpg" },
    { src: "/portraits/portrait15.jpg" },
    { src: "/portraits/portrait16.jpg" },
    { src: "/portraits/portrait17.jpg" },
    { src: "/portraits/portrait18.jpg" },
    { src: "/portraits/portrait19.jpg" },
    { src: "/portraits/portrait20.jpg" },
    { src: "/portraits/portrait20.jpg" },
    { src: "/portraits/portrait21.jpg" },
    { src: "/portraits/portrait22.jpg" },
    { src: "/portraits/portrait23.jpg" },
    { src: "/portraits/portrait24.jpg" },
    { src: "/portraits/portrait25.jpg" },
    { src: "/portraits/portrait26.jpg" },
    { src: "/portraits/portrait14.jpg" },
    { src: "/portraits/portrait29.jpg" },
    { src: "/portraits/portrait30.jpg" },
    { src: "/portraits/portrait31.jpg" },
    { src: "/portraits/portrait32.jpg" },
    { src: "/portraits/portrait33.jpg" },
    { src: "/portraits/portrait34.jpg" },
    { src: "/portraits/portrait35.jpg" },
    { src: "/portraits/portrait36.jpg" },
    { src: "/portraits/portrait37.jpg" },
    { src: "/portraits/portrait38.jpg" },
    { src: "/portraits/portrait39.jpg" },
    { src: "/portraits/portrait40.jpg" },
    { src: "/portraits/portrait41.jpg" },
  ];
  
  export default defineComponent({
    name: "App",
    setup() {
      const currentImage = ref(photos[0].src);
  
      function showRandomPhoto() {
        const randomIndex = Math.floor(Math.random() * photos.length);
        currentImage.value = photos[randomIndex].src;
      }
  
      return {
        photos,
        currentImage,
        showRandomPhoto,
      };
    },
  });
  </script>
  
  <style>
  h2 {
    font-family: "Avenir", sans-serif;
  }
  
  .drop-shadow-xl {
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7),
      0px 0px 10px rgba(255, 255, 255, 0.7);
  }

  #nostretch{
    object-fit: cover;
  }
  </style>
  