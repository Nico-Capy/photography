<template>
  <div class="flex flex-col items-center justify-center">
    <h2 role="heading" class="text-3xl text-white drop-shadow-xl m-6">
      {{ $t("nature") }}
    </h2>

    <!-- Photo Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mb-10">
      <div
        v-for="(photo, index) in photos"
        :key="photo"
        class="relative m-2 cursor-pointer"
        @click="openPhoto(index)"
        ref="photoRefs"
      >
        <img
          :src="photo"
          class="w-full h-full object-cover shadow-md hover:opacity-90 transition-opacity"
        />
      </div>
    </div>

    <!-- Modal for displaying the selected photo -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <div class="relative w-11/12 max-w-6xl p-2">
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-0 right-0 m-4 text-4xl p-2 bg-white text-black hover:bg-black hover:text-white cursor-pointer z-10"
        >
          &times;
        </button>

        <!-- Navigation buttons and Current Photo -->
        <div class="relative flex items-center justify-center">
          <!-- Previous Photo Button -->
          <button
            ref="modalRefs.prev"
            @click="showPreviousPhoto"
            class="absolute left-0 transform -translate-y-1/2 top-1/2 m-1 p-2 text-2xl bg-black text-white hover:bg-white hover:text-black cursor-pointer"
          >
            &larr;
          </button>

          <img
            :src="currentPhoto"
            ref="modalRefs.img"
            class="object-contain mx-auto"
            style="height: 47rem"
          />

          <!-- Next Photo Button -->
          <button
            ref="modalRefs.next"
            @click="showNextPhoto"
            class="absolute right-0 transform -translate-y-1/2 top-1/2 m-1 p-2 text-2xl bg-black text-white hover:bg-white hover:text-black cursor-pointer"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import gsap from "gsap";

export default defineComponent({
  name: "PhotoGallery",
  setup() {
    const photos = ref([
      "/nature10.jpg","/nature11.jpg","/nature12.jpg","/nature13.jpg",
      "/nature14.jpg","/nature16.jpg","/nature15.jpg","/nature07.jpg",
      "/nature08.jpg","/nature01.jpg","/nature02.jpg","/nature03.jpg",
      "/nature04.jpg","/nature05.jpg","/nature06.jpg",
    ]);

    const showModal = ref(false);
    const selectedIndex = ref(0);

    // Refs for modal buttons & image
    const modalRefs = ref<{ prev: HTMLElement | null; next: HTMLElement | null; img: HTMLElement | null }>({
      prev: null,
      next: null,
      img: null,
    });

    // Refs for photo grid items
    const photoRefs = ref<HTMLElement[]>([]);

    const currentPhoto = computed(() => photos.value[selectedIndex.value]);

    const openPhoto = async (index: number) => {
      selectedIndex.value = index;
      showModal.value = true;
      await nextTick();
      animateModal();
    };

    const closeModal = () => {
      showModal.value = false;
    };

    const showNextPhoto = () => {
      selectedIndex.value = (selectedIndex.value + 1) % photos.value.length;
    };

    const showPreviousPhoto = () => {
      selectedIndex.value = (selectedIndex.value + photos.value.length - 1) % photos.value.length;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight": showNextPhoto(); break;
        case "ArrowLeft": showPreviousPhoto(); break;
        case "Escape": closeModal(); break;
      }
    };

    const animateModal = () => {
      if (modalRefs.value.prev && modalRefs.value.next) {
        gsap.fromTo(
          [modalRefs.value.prev, modalRefs.value.next],
          { opacity: 0, x: (i) => (i === 0 ? -100 : 100) },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
        );
      }
      if (modalRefs.value.img) {
        gsap.fromTo(modalRefs.value.img, { scale: 0.8 }, { scale: 1, duration: 0.5, ease: "power2.out" });
      }
    };

    onMounted(() => {
      // Animate heading
      gsap.from("h2", { opacity: 0, y: 100, duration: 1, ease: "power1.in" });

      // Animate grid photos
      gsap.from(photoRefs.value, {
        opacity: 0,
        y: 100,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.6,
        ease: "power1.in",
      });
    });

    // Only attach keyboard listener when modal is open
    watch(showModal, (value) => {
      if (value) document.addEventListener("keydown", handleKeyDown);
      else document.removeEventListener("keydown", handleKeyDown);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("keydown", handleKeyDown);
    });

    return {
      photos,
      showModal,
      selectedIndex,
      currentPhoto,
      openPhoto,
      closeModal,
      showNextPhoto,
      showPreviousPhoto,
      modalRefs,
      photoRefs,
    };
  },
});
</script>

<style scoped>
h2 {
  font-family: "Avenir", sans-serif;
}
.drop-shadow-xl {
  text-shadow: 0px 0px 10px rgba(255,255,255,0.7), 0px 0px 10px rgba(255,255,255,0.7);
}
</style>
