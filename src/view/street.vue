<template>
  <div class="flex flex-col items-center justify-center">
    <h2 role="heading" class="text-3xl text-white drop-shadow-xl my-6">
      {{ $t("street") }}
    </h2>

    <!-- Gallery Grid -->
    <div ref="gridRef" class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mb-10">
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="relative cursor-pointer"
        @click="showPhoto(index)"
      >
        <img
          :src="photo.src"
          class="w-full h-full object-cover shadow-md"
        />
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      @click.self="showModal = false"
    >
      <div class="relative bg-transparent w-11/12 max-w-6xl p-2">
        <button
          @click="showModal = false"
          class="absolute top-2 right-2 text-4xl text-black hover:text-white bg-white hover:bg-black cursor-pointer p-2 z-10"
        >
          &times;
        </button>

        <!-- Modal Image + Navigation -->
        <div class="relative flex items-center justify-center">
          <button
            class="absolute left-0 transform -translate-y-1/2 text-2xl text-white bg-black hover:bg-white hover:text-black cursor-pointer p-2"
            @click="showPreviousPhoto"
          >
            &larr;
          </button>

          <img
            :src="photos[selectedPhoto].src"
            class="object-contain mx-auto max-h-[80vh]"
          />

          <button
            class="absolute right-0 transform -translate-y-1/2 text-2xl text-white bg-black hover:bg-white hover:text-black cursor-pointer p-2"
            @click="showNextPhoto"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";

export default defineComponent({
  name: "StreetGallery",
  setup() {
    const showModal = ref(false);
    const selectedPhoto = ref(0);
    const gridRef = ref<HTMLElement | null>(null);

    // Dynamically generate the photo array
    const totalPhotos = 22;
    const photos = ref(
      Array.from({ length: totalPhotos }, (_, i) => ({
        src: `/street${(i + 1).toString().padStart(2, "0")}.jpg`,
      }))
    );

    const showPhoto = (index: number) => {
      selectedPhoto.value = index;
      showModal.value = true;
    };

    const showNextPhoto = () => {
      selectedPhoto.value = (selectedPhoto.value + 1) % photos.value.length;
    };

    const showPreviousPhoto = () => {
      selectedPhoto.value =
        (selectedPhoto.value + photos.value.length - 1) % photos.value.length;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") showNextPhoto();
      else if (event.key === "ArrowLeft") showPreviousPhoto();
      else if (event.key === "Escape") showModal.value = false;
    };

    onMounted(() => {
      document.addEventListener("keydown", handleKeyDown);

      // Animate gallery items
      if (gridRef.value) {
        gsap.from(gridRef.value.children, {
          opacity: 0,
          y: 50,
          duration: 0.6,
          stagger: 0.1,
          ease: "power1.in",
        });
      }

      // Animate heading
      gsap.from("h2", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power1.in",
      });
    });

    onBeforeUnmount(() => {
      document.removeEventListener("keydown", handleKeyDown);
    });

    return {
      showModal,
      selectedPhoto,
      photos,
      showPhoto,
      showNextPhoto,
      showPreviousPhoto,
      gridRef,
    };
  },
});
</script>

<style>
h2 {
  font-family: "Avenir", sans-serif;
}
</style>