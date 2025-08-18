<template>
  <div class="flex flex-col items-center justify-center">
    <h2 role="heading" class="text-3xl text-white drop-shadow-xl m-6">
      {{ $t("infrared") }}
    </h2>

    <!-- Grid of thumbnails -->
    <div
      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mb-10"
    >
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="relative m-2 cursor-pointer"
        @click="showPhoto(index)"
      >
        <img
          :src="photo"
          class="mx-auto w-full h-full object-cover shadow-md"
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
        <!-- Close button -->
        <button
          @click="closeModal"
          class="absolute top-0 right-0 m-4 text-4xl w-fit h-fit text-black hover:text-white bg-white hover:bg-black cursor-pointer p-2 z-10"
        >
          &times;
        </button>

        <div class="relative">
          <!-- Previous -->
          <button
            ref="previousBtn"
            class="absolute top-1/2 left-0 -translate-y-1/2 text-white hover:text-black bg-black hover:bg-white cursor-pointer m-1 p-2 text-2xl"
            @click.stop="showPreviousPhoto"
          >
            &larr;
          </button>

          <!-- Main image -->
          <img
            :src="photos[selectedPhoto]"
            key="photos[selectedPhoto]"
            class="object-contain mx-auto"
            style="height: 47rem"
          />

          <!-- Next -->
          <button
            ref="nextBtn"
            class="absolute top-1/2 right-0 -translate-y-1/2 text-white hover:text-black bg-black hover:bg-white cursor-pointer m-1 p-2 text-2xl"
            @click.stop="showNextPhoto"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { gsap } from "gsap";

export default defineComponent({
  name: "InfraredGallery",
  data() {
    return {
      showModal: false,
      selectedPhoto: 0,
      photos: [
        "/infrared01.jpg",
        "/infrared02.jpg",
        "/infrared03.jpg",
        "/infrared04.jpg",
        "/infrared05.jpg",
      ],
    };
  },
  methods: {
    showPhoto(index: number) {
      this.selectedPhoto = index;
      this.showModal = true;
      this.animateModal();
    },
    closeModal() {
      this.showModal = false;
    },
    showNextPhoto() {
      this.selectedPhoto = (this.selectedPhoto + 1) % this.photos.length;
    },
    showPreviousPhoto() {
      this.selectedPhoto =
        (this.selectedPhoto + this.photos.length - 1) % this.photos.length;
    },
    handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") this.showNextPhoto();
      if (event.key === "ArrowLeft") this.showPreviousPhoto();
      if (event.key === "Escape") this.closeModal();
    },

    // GSAP Animations
    animateGrid() {
      gsap.from(".relative", {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.08,
        ease: "power1.out",
      });
      gsap.from("h2", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power1.out",
      });
    },
    animateModal() {
      gsap.from([this.$refs.previousBtn, this.$refs.nextBtn], {
        opacity: 0,
        x: (i) => (i === 0 ? -80 : 80),
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
      });
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeyDown);
    this.animateGrid();
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  },
});
</script>

<style>
h2 {
  font-family: "Avenir", sans-serif;
}
.drop-shadow-xl {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7),
               0 0 10px rgba(255, 255, 255, 0.7);
}
</style>