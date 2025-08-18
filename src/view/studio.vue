<template>
  <div class="flex flex-col items-center justify-center">
    <h2 role="heading" class="text-3xl text-white drop-shadow-lg m-6">
      {{ $t("portrait") }}
    </h2>

    <!-- Photo Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mb-20">
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="relative m-2 cursor-pointer"
        @click="showPhoto(index)"
        ref="photoRefs"
      >
        <img
          :src="photo.src"
          class="mx-auto w-full h-full object-cover shadow-md"
          style="height: 100%"
        />
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed bg-black/50 inset-0 flex items-center justify-center z-50 h-screen max-h-90vh"
      @click.self="closeModal"
    >
      <div class="bg-transparent p-2 w-11/12 relative">
        <button
          @click="closeModal"
          class="absolute top-0 right-0 m-4 text-4xl w-fit h-fit text-black hover:text-white bg-white hover:bg-black cursor-pointer p-2 z-10"
        >
          &times;
        </button>

        <div class="relative flex items-center justify-center">
          <button
            ref="modalRefs.prev"
            @click="showPreviousPhoto"
            class="absolute top-1/2 left-0 transform -translate-y-1/2 text-white hover:text-black bg-black hover:bg-white cursor-pointer m-1 p-2 text-2xl"
          >
            &larr;
          </button>

          <img
            :src="currentPhoto.src"
            ref="modalRefs.img"
            class="object-contain mx-auto"
            style="height: 47rem"
          />

          <button
            ref="modalRefs.next"
            @click="showNextPhoto"
            class="absolute top-1/2 right-0 transform -translate-y-1/2 text-white hover:text-black bg-black hover:bg-white cursor-pointer m-1 p-2 text-2xl"
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
import { gsap } from "gsap";

export default defineComponent({
  name: "PortraitGallery",
  setup() {
    const photos = ref([
      { src: "/portrait01.jpg" }, { src: "/portrait02.jpg" }, { src: "/portrait03.jpg" },
      { src: "/portrait04.jpg" }, { src: "/portrait05.jpg" }, { src: "/portrait06.jpg" },
      { src: "/portrait07.jpg" }, { src: "/portrait08.jpg" }, { src: "/portrait09.jpg" },
      { src: "/portrait10.jpg" }, { src: "/portrait11.jpg" }, { src: "/portrait12.jpg" },
      { src: "/portrait13.jpg" }, { src: "/portrait14.jpg" }, { src: "/portrait15.jpg" },
      { src: "/portrait16.jpg" }, { src: "/portrait17.jpg" }, { src: "/portrait18.jpg" },
      { src: "/portrait19.jpg" }, { src: "/portrait20.jpg" }, { src: "/portrait21.jpg" },
      { src: "/portrait22.jpg" }, { src: "/portrait23.jpg" }, { src: "/portrait24.jpg" },
      { src: "/portrait25.jpg" }, { src: "/portrait26.jpg" }, { src: "/portrait29.jpg" },
      { src: "/portrait30.jpg" }, { src: "/portrait31.jpg" }, { src: "/portrait32.jpg" },
      { src: "/portrait33.jpg" }, { src: "/portrait34.jpg" }, { src: "/portrait35.jpg" },
      { src: "/portrait36.jpg" }, { src: "/portrait37.jpg" }, { src: "/portrait38.jpg" },
      { src: "/portrait39.jpg" }, { src: "/portrait40.jpg" }, { src: "/portrait41.jpg" },
    ]);

    const showModal = ref(false);
    const selectedPhotoIndex = ref(0);

    const photoRefs = ref<HTMLElement[]>([]);
    const modalRefs = ref<{ prev: HTMLElement | null; next: HTMLElement | null; img: HTMLElement | null }>({
      prev: null,
      next: null,
      img: null,
    });

    const currentPhoto = computed(() => photos.value[selectedPhotoIndex.value]);

    const showPhoto = async (index: number) => {
      selectedPhotoIndex.value = index;
      showModal.value = true;
      await nextTick();
      animateModal();
    };

    const closeModal = () => {
      showModal.value = false;
    };

    const showNextPhoto = () => {
      selectedPhotoIndex.value = (selectedPhotoIndex.value + 1) % photos.value.length;
    };

    const showPreviousPhoto = () => {
      selectedPhotoIndex.value = (selectedPhotoIndex.value + photos.value.length - 1) % photos.value.length;
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

      // Animate grid images
      gsap.from(photoRefs.value, {
        opacity: 0,
        y: 100,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.6,
        ease: "power1.in",
      });
    });

    watch(showModal, (open) => {
      if (open) document.addEventListener("keydown", handleKeyDown);
      else document.removeEventListener("keydown", handleKeyDown);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("keydown", handleKeyDown);
    });

    return {
      photos,
      showModal,
      selectedPhotoIndex,
      currentPhoto,
      showPhoto,
      closeModal,
      showNextPhoto,
      showPreviousPhoto,
      photoRefs,
      modalRefs,
    };
  },
});
</script>

<style scoped>
h2 {
  font-family: "Avenir", sans-serif;
}

.drop-shadow-lg {
  text-shadow:
    0px 0px 10px rgba(255, 255, 255, 0.7),
    0px 0px 10px rgba(255, 255, 255, 0.7);
}
</style>