<template>
  <div class="flex flex-col items-center justify-center">
    <h2 role="heading" class="text-3xl text-white drop-shadow-xl m-6">
      {{ $t("analog") }}
    </h2>
    <div
      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mb-10"
    >
      <div v-for="(photo, index) in photos" :key="index" class="relative m-2">
        <img
          :src="photo.src"
          class="mx-auto w-full h-full object-cover shadow-md"
          style="height: 100%"
          @click="showPhoto(index)"
        />
      </div>
    </div>
    <div
      v-if="showModal"
      class="fixed bg-black/50 inset-0 flex items-center justify-center z-50 h-screen max-h-90vh"
      @click.self="showModal = false"
    >
      <div class="bg-transparent p-2 w-11/12">
        <button
          @click="showModal = false"
          class="absolute top-0 right-0 m-4 text-4xl w-fit h-fit text-black hover:text-white bg-white hover:bg-black cursor-pointer p-2 z-10"
        >
          &times;
        </button>
        <div class="relative">
          <button
            class="absolute top-1/2 left-0 transform -translate-y-1/2 text-white hover:text-black bg-black hover:bg-white cursor-pointer m-1 p-2 text-2xl"
            @click="showPreviousPhoto()"
          >
            &larr;
          </button>
          <img
            :src="photos[selectedPhoto].src"
            class="object-contain mx-auto"
            style="height: 47rem"
          />
          <button
            class="absolute top-1/2 right-0 transform -translate-y-1/2 text-white hover:text-black bg-black hover:bg-white cursor-pointer m-1 p-2 text-2xl"
            @click="showNextPhoto()"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";

export default defineComponent({
  name: "PhotoGallery",
  data() {
    return {
      showModal: false,
      selectedPhoto: 0,
      photos: [
        { src: "/analog01.jpg" },
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
      ],
    };
  },
  methods: {
    showPhoto(index: number) {
      this.selectedPhoto = index;
      this.showModal = true;
    },
    showNextPhoto() {
      this.selectedPhoto = (this.selectedPhoto + 1) % this.photos.length;
    },
    showPreviousPhoto() {
      this.selectedPhoto =
        (this.selectedPhoto + this.photos.length - 1) % this.photos.length;
    },
    handleKeyDown(event: { key: string }) {
      if (event.key === "ArrowRight") {
        this.showNextPhoto();
      } else if (event.key === "ArrowLeft") {
        this.showPreviousPhoto();
      } else if (event.key === "Escape") {
        this.showModal = false;
      }
    },
    applyButtonTransition() {
      gsap.from(this.$refs.previousBtn, {
        opacity: 0,
        x: -100,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.from(this.$refs.nextBtn, {
        opacity: 0,
        x: 100,
        duration: 0.5,
        ease: "power2.out",
      });
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeyDown);

    gsap.from(".relative", {
      opacity: 0,
      y: 100,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.6,
      ease: "power1.in",
    });

    gsap.from("h2", {
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 0,
      ease: "power1.in",
    });

    this.applyButtonTransition();
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
  text-shadow:
    0px 0px 10px rgba(255, 255, 255, 0.7),
    0px 0px 10px rgba(255, 255, 255, 0.7);
}
</style>
