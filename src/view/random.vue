<template>
  <div class="flex flex-col items-center justify-center">
    <!-- Title -->
    <h2 class="text-3xl text-center text-white drop-shadow-xl m-2 p-2 mb-2 animate-on-mount">
      {{ $t("randomgen") }}
    </h2>

    <!-- Container -->
    <div class="bg-transparent w-full max-w-2/3 p-1 flex flex-col justify-center items-center drop-shadow-lg mb-3 animate-on-mount">
      <!-- Image -->
      <img
        :src="currentImage"
        ref="imageRef"
        id="image-no-stretch"
        class="w-full h-auto max-h-[63vh] rounded-lg shadow-lg"
        alt="Random photo"
        loading="lazy"
      />

      <!-- Button -->
      <button
        class="bg-white hover:bg-transparent text-black hover:text-white drop-shadow-xl text-xl font-light p-2 mt-2 mb-2 animate-on-mount"
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

// --- Helper to generate sequential photo names ---
const generatePhotos = (prefix: string, count: number, ext = ".jpg") =>
  Array.from({ length: count }, (_, i) => `/${prefix}${String(i + 1).padStart(2, "0")}${ext}`);

// --- PHOTO SOURCES ---
const photoSources = [
  ...generatePhotos("analog", 19),
  ...generatePhotos("infrared", 5),
  "/DJI_0022.jpg",
  "/DJI_0970.jpg",
  ...generatePhotos("drone", 18),
  ...generatePhotos("nature", 16),
  ...generatePhotos("other", 16),
  ...generatePhotos("pinhole", 15),
  ...generatePhotos("portrait", 41),
  ...generatePhotos("street", 22),
  "/nico.jpg",
  "/nico1.jpg",
  "/nico2.JPG",
  "/nico3.JPG",
  "/nico4.JPG",
  "/nico5.jpeg",
];

export default defineComponent({
  name: "RandomPhoto",
  setup() {
    const imageRef = ref<HTMLImageElement | null>(null);

    const getRandomIndex = (excludeIndex?: number) => {
      const max = photoSources.length;
      let index = Math.floor(Math.random() * max);
      return excludeIndex !== undefined && index === excludeIndex
        ? (index + 1) % max
        : index;
    };

    let lastIndex = getRandomIndex();
    const currentImage = ref(photoSources[lastIndex]);

    const showRandomPhoto = () => {
      const nextIndex = getRandomIndex(lastIndex);
      lastIndex = nextIndex;

      if (!imageRef.value) return;

      gsap.timeline()
        .to(imageRef.value, { opacity: 0, duration: 0.8, ease: "power2.inOut" })
        .add(() => (currentImage.value = photoSources[nextIndex]))
        .to(imageRef.value, { opacity: 1, duration: 0.8, ease: "power2.inOut" });
    };

    onMounted(() => {
      gsap.from(".animate-on-mount", {
        opacity: 0,
        y: 100,
        duration: 1.18,
        stagger: 1.18,
        ease: "power2.in",
      });
    });

    return { currentImage, showRandomPhoto, imageRef };
  },
});
</script>

<style scoped>
h2 {
  font-family: "Avenir", sans-serif;
}

.drop-shadow-xl {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}

#image-no-stretch {
  object-fit: contain; /* preserves proportions */
}
</style>
