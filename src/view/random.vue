<template>
  <div class="flex flex-col items-center justify-center animate-element">
    <h2 class="text-3xl text-center text-white drop-shadow-xl m-6 animate-element">
      {{ $t('randomgen') }}
    </h2>
      <div class="bg-transparent lg:w-1/3 xl:w-2/4 2xl:w-1/3 p-2 flex flex-col justify-center items-center drop-shadow-lg mb-16 animate-element" style="height: 63vh;">
          <img :src="currentImage" class="h-5/6 animate-element" id="nostretch" />
          <button
      class="bg-white hover:bg-transparent text-black hover:text-white drop-shadow-xl text-xl font-light p-4 mt-4 animate-element mb-16"
      @click="showRandomPhoto"
    >
    {{ $t('randbut') }}
    </button>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { gsap } from 'gsap';

const photos = [
  { src: "/nature09.jpg" },
  { src: "/nature10.jpg" },
  { src: "/nature11.jpg" },
  { src: "/nature12.jpg" },
  { src: "/nature13.jpg" },
  { src: "/nature14.jpg" },
  { src: "/nature16.jpg" },
  { src: "/nature15.jpg" },
  { src: "/nature07.jpg" },
  { src: "/nature08.jpg" },
  { src: "/nature01.jpg" },
  { src: "/nature02.jpg" },
  { src: "/nico1.jpg" },
  { src: "/nature03.jpg" },
  { src: "/nature04.jpg" },
  { src: "/nature05.jpg" },
  { src: "/nature06.jpg" },
  { src: "/analog02.jpg" },
  { src: "/analog03.jpg" },
  { src: "/analog04.jpg" },
  { src: "/analog05.jpg" },
  { src: "/analog06.jpg" },
  { src: "/analog07.jpg" },
  { src: "/analog08.jpg" },
  { src: "/analog09.jpg" },
  { src: "/analog10.jpg" },
  { src: "/analog11.jpg" },
  { src: "/analog12.jpg" },
  { src: "/analog13.jpg" },
  { src: "/analog14.jpg" },
  { src: "/analog15.jpg" },
  { src: "/analog16.jpg" },
  { src: "/analog17.jpg" },
  { src: "/analog18.jpg" },
  { src: "/analog19.jpg" },
  { src: "/drone01.jpg" },
  { src: "/drone02.jpg" },
  { src: "/drone03.jpg" },
  { src: "/drone04.jpg" },
  { src: "/drone05.jpg" },
  { src: "/drone06.jpg" },
  { src: "/drone07.jpg" },
  { src: "/drone08.jpg" },
  { src: "/drone09.jpg" },
  { src: "/drone10.jpg" },
  { src: "/drone11.jpg" },
  { src: "/drone12.jpg" },
  { src: "/drone15.jpg" },
  { src: "/nico3.JPG" },
  { src: "/drone16.jpg" },
  { src: "/drone17.jpg" },
  { src: "/drone13.jpg" },
  { src: "/drone14.jpg" },
  { src: "/drone18.jpg" },
  { src: "/infrared01.jpg" },
  { src: "/infrared02.jpg" },
  { src: "/infrared03.jpg" },
  { src: "/other04.jpg" },
  { src: "/other05.jpg" },
  { src: "/other06.jpg" },
  { src: "/other07.jpg" },
  { src: "/other08.jpg" },
  { src: "/other09.jpg" },
  { src: "/other10.jpg" },
  { src: "/other11.jpg" },
  { src: "/other12.jpg" },
  { src: "/other13.jpg" },
  { src: "/nico5.jpeg" },
  { src: "/infrared04.jpg" },
  { src: "/infrared05.jpg" },
  { src: "/other01.jpg" },
  { src: "/other02.jpg" },
  { src: "/other03.jpg" },
  { src: "/other14.jpg" },
  { src: "/other15.jpg" },
  { src: "/other16.jpg" },
  { src: "/street01.jpg" },
  { src: "/street02.jpg" },
  { src: "/street03.jpg" },
  { src: "/street04.jpg" },
  { src: "/street05.jpg" },
  { src: "/street06.jpg" },
  { src: "/street07.jpg" },
  { src: "/street08.jpg" },
  { src: "/street09.jpg" },
  { src: "/street10.jpg" },
  { src: "/nico4.JPG" },
  { src: "/street11.jpg" },
  { src: "/street12.jpg" },
  { src: "/street13.jpg" },
  { src: "/street14.jpg" },
  { src: "/street15.jpg" },
  { src: "/street16.jpg" },
  { src: "/street17.jpg" },
  { src: "/street18.jpg" },
  { src: "/street19.jpg" },
  { src: "/street20.jpg" },
  { src: "/street21.jpg" },
  { src: "/street22.jpg" },
  { src: "/portrait01.jpg" },
  { src: "/portrait02.jpg" },
  { src: "/portrait03.jpg" },
  { src: "/portrait04.jpg" },
  { src: "/portrait05.jpg" },
  { src: "/portrait06.jpg" },
  { src: "/portrait07.jpg" },
  { src: "/portrait08.jpg" },
  { src: "/portrait09.jpg" },
  { src: "/portrait10.jpg" },
  { src: "/portrait11.jpg" },
  { src: "/portrait12.jpg" },
  { src: "/portrait13.jpg" },
  { src: "/nico2.JPG" },
  { src: "/portrait15.jpg" },
  { src: "/portrait16.jpg" },
  { src: "/portrait19.jpg" },
  { src: "/portrait20.jpg" },
  { src: "/portrait20.jpg" },
  { src: "/portrait21.jpg" },
  { src: "/portrait22.jpg" },
  { src: "/portrait23.jpg" },
  { src: "/portrait24.jpg" },
  { src: "/portrait25.jpg" },
  { src: "/portrait26.jpg" },
  { src: "/portrait14.jpg" },
  { src: "/portrait29.jpg" },
  { src: "/portrait30.jpg" },
  { src: "/nico.jpg" },
  { src: "/portrait31.jpg" },
  { src: "/portrait32.jpg" },
  { src: "/portrait33.jpg" },
  { src: "/portrait34.jpg" },
  { src: "/portrait35.jpg" },
  { src: "/portrait36.jpg" },
  { src: "/portrait37.jpg" },
  { src: "/portrait38.jpg" },
  { src: "/portrait39.jpg" },
  { src: "/portrait40.jpg" },
  { src: "/portrait41.jpg" },
];

export default defineComponent({
  name: "App",
  setup() {
    const currentImage = ref(photos[0].src);

    function showRandomPhoto() {
      const randomIndex = Math.floor(Math.random() * photos.length);
      currentImage.value = photos[randomIndex].src;
    }

    onMounted(() => {
      const elements = gsap.utils.toArray('.animate-element');
      elements.forEach((el: Element) => {
        gsap.from(el, {
          opacity: 0,
          y: 100,
          duration: 1.4,
          stagger: 0.3,
          delay: 0.6,
          ease: "power2.in"
        });
      });
    });

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
