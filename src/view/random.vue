<template>
  <div class="flex flex-col items-center justify-center">
    <!-- Title -->
    <h2
      ref="title"
      class="text-3xl text-center text-white drop-shadow-xl m-2 p-2 mb-2"
    >
      {{ $t("randomgen") }}
    </h2>

    <!-- Container -->
    <div
      ref="container"
      class="bg-transparent w-full max-w-2/3 p-1 flex flex-col justify-center items-center drop-shadow-lg mb-3"
      style="height: auto;"
    >
      <!-- Image -->
      <img
        :src="currentImage"
        ref="image"
        id="image-no-stretch"
        class="w-full h-auto max-h-[63vh] rounded-lg shadow-lg"
        alt="Random photo"
        loading="lazy"
      />

      <!-- Button -->
      <button
        ref="button"
        class="bg-white hover:bg-transparent text-black hover:text-white drop-shadow-xl text-xl font-light p-2 mt-2 mb-2"
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

// --- PHOTO SOURCES ---
const photoSources = [
  "/nature01.jpg", "/nature02.jpg", "/nature03.jpg", "/nature04.jpg",
  "/nature05.jpg", "/nature06.jpg", "/nature07.jpg", "/nature08.jpg",
  "/analog02.jpg", "/analog03.jpg", "/analog04.jpg", "/analog05.jpg",
  "/drone01.jpg", "/drone02.jpg", "/drone03.jpg", "/drone04.jpg",
  "/nico.jpg", "/nico1.jpg", "/nico2.JPG", "/nico3.JPG", "/nico4.JPG", "/nico5.jpeg",
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

    let lastIndex = getRandomIndex();
    const currentImage = ref(photoSources[lastIndex]);

    const showRandomPhoto = () => {
      const randomIndex = getRandomIndex(lastIndex);
      lastIndex = randomIndex;

      if (imageRef.value) {
        gsap.to(imageRef.value, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            currentImage.value = photoSources[randomIndex];
            gsap.to(imageRef.value!, {
              opacity: 1,
              duration: 0.8,
              ease: "power2.inOut",
            });
          },
        });
      } else {
        currentImage.value = photoSources[randomIndex];
      }
    };

    onMounted(() => {
      gsap.from([titleRef.value, containerRef.value, buttonRef.value], {
        opacity: 0,
        y: 100,
        duration: 1.18,
        stagger: 1.18,
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
  object-fit: contain; /* preserves proportions */
}
</style>
