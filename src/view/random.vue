<template>
  <div class="flex flex-col items-center justify-center">
    <h2 ref="title" class="text-3xl text-center text-white drop-shadow-xl m-6 p-6">
      {{ $t("randomgen") }}
    </h2>

    <div
      ref="container"
      class="bg-transparent lg:w-1/3 xl:w-2/4 2xl:w-1/3 p-6 flex flex-col justify-center items-center drop-shadow-lg mb-16"
      style="height: 63vh"
    >
      <img
        :src="currentImage"
        ref="image"
        id="image-no-stretch"
        class="h-5/6"
        alt="Random photo"
      />
      <button
        ref="button"
        class="bg-white hover:bg-transparent text-black hover:text-white drop-shadow-xl text-xl font-light p-6 mt-4 mb-16"
        @click="showRandomPhoto"
      >
        {{ $t("randbut") }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { gsap } from "gsap";

const photoSources = [
  // Nature
  "/nature01.jpg","/nature02.jpg","/nature03.jpg","/nature04.jpg",
  "/nature05.jpg","/nature06.jpg","/nature07.jpg","/nature08.jpg",
  "/nature09.jpg","/nature10.jpg","/nature11.jpg","/nature12.jpg",
  "/nature13.jpg","/nature14.jpg","/nature15.jpg","/nature16.jpg",

  // Analog
  "/analog02.jpg","/analog03.jpg","/analog04.jpg","/analog05.jpg",
  "/analog06.jpg","/analog07.jpg","/analog08.jpg","/analog09.jpg",
  "/analog10.jpg","/analog11.jpg","/analog12.jpg","/analog13.jpg",
  "/analog14.jpg","/analog15.jpg","/analog16.jpg","/analog17.jpg",
  "/analog18.jpg","/analog19.jpg",

  // Drone
  "/drone01.jpg","/drone02.jpg","/drone03.jpg","/drone04.jpg",
  "/drone05.jpg","/drone06.jpg","/drone07.jpg","/drone08.jpg",
  "/drone09.jpg","/drone10.jpg","/drone11.jpg","/drone12.jpg",
  "/drone13.jpg","/drone14.jpg","/drone15.jpg","/drone16.jpg",
  "/drone17.jpg","/drone18.jpg",

  // Infrared
  "/infrared01.jpg","/infrared02.jpg","/infrared03.jpg",
  "/infrared04.jpg","/infrared05.jpg",

  // Street
  "/street01.jpg","/street02.jpg","/street03.jpg","/street04.jpg",
  "/street05.jpg","/street06.jpg","/street07.jpg","/street08.jpg",
  "/street09.jpg","/street10.jpg","/street11.jpg","/street12.jpg",
  "/street13.jpg","/street14.jpg","/street15.jpg","/street16.jpg",
  "/street17.jpg","/street18.jpg","/street19.jpg","/street20.jpg",
  "/street21.jpg","/street22.jpg",

  // Portrait
  "/portrait01.jpg","/portrait02.jpg","/portrait03.jpg","/portrait04.jpg",
  "/portrait05.jpg","/portrait06.jpg","/portrait07.jpg","/portrait08.jpg",
  "/portrait09.jpg","/portrait10.jpg","/portrait11.jpg","/portrait12.jpg",
  "/portrait13.jpg","/portrait14.jpg","/portrait15.jpg","/portrait16.jpg",
  "/portrait19.jpg","/portrait20.jpg","/portrait21.jpg","/portrait22.jpg",
  "/portrait23.jpg","/portrait24.jpg","/portrait25.jpg","/portrait26.jpg",
  "/portrait29.jpg","/portrait30.jpg","/portrait31.jpg","/portrait32.jpg",
  "/portrait33.jpg","/portrait34.jpg","/portrait35.jpg","/portrait36.jpg",
  "/portrait37.jpg","/portrait38.jpg","/portrait39.jpg","/portrait40.jpg",
  "/portrait41.jpg",

  // Nico images (commented out)
  // "/nico.jpg",
  // "/nico1.jpg",
  // "/nico2.JPG",
  // "/nico3.JPG",
  // "/nico4.JPG",
  // "/nico5.jpeg"
];

export default defineComponent({
  name: "RandomPhoto",
  setup() {
    const titleRef = ref<HTMLElement | null>(null);
    const containerRef = ref<HTMLElement | null>(null);
    const imageRef = ref<HTMLImageElement | null>(null);
    const buttonRef = ref<HTMLButtonElement | null>(null);

    const getRandomIndex = (excludeIndex?: number) => {
      let index;
      do {
        index = Math.floor(Math.random() * photoSources.length);
      } while (excludeIndex !== undefined && index === excludeIndex);
      return index;
    };

    // Pick a random first image
    let lastIndex = getRandomIndex();
    const currentImage = ref(photoSources[lastIndex]);

    const preloadImages = () => {
      photoSources.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    const showRandomPhoto = () => {
      const randomIndex = getRandomIndex(lastIndex);
      lastIndex = randomIndex;

      if (imageRef.value) {
        gsap.to(imageRef.value, {
          opacity: 0,
          duration: 0.06,
          onComplete: () => {
            currentImage.value = photoSources[randomIndex];
            gsap.to(imageRef.value, { opacity: 1, duration: 0.06 });
          },
        });
      } else {
        currentImage.value = photoSources[randomIndex];
      }
    };

    onMounted(() => {
      preloadImages();

      // Animation on mount
      gsap.from([titleRef.value, containerRef.value, buttonRef.value], {
        opacity: 0,
        y: 100,
        duration: 1.4,
        stagger: 0.3,
        ease: "power2.in",
      });
    });

    return {
      currentImage,
      showRandomPhoto,
      title: titleRef,
      container: containerRef,
      image: imageRef,
      button: buttonRef,
    };
  },
});
</script>

<style scoped>
h2 {
  font-family: "Avenir", sans-serif;
}

.drop-shadow-xl {
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7),
               0px 0px 10px rgba(255, 255, 255, 0.7);
}

#image-no-stretch {
  object-fit: cover;
}
</style>
