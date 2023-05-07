<template>
  <div class="flex flex-col items-center justify-center">
    <h2 role="heading" class="text-3xl text-white drop-shadow-xl m-6">Street</h2>
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mb-20">
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
            style="height: 47rem;"
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
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "PhotoGallery",
    data() {
      return {
        showModal: false,
        selectedPhoto: 0,
        photos: [
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
        ],
      };
    },
    methods: {
      showPhoto(index: number) {
        this.selectedPhoto = index;
        this.showModal = true;
      },
      showNextPhoto() {
        this.selectedPhoto =
          (this.selectedPhoto + 1) % this.photos.length;
      },
      showPreviousPhoto() {
        this.selectedPhoto =
          (this.selectedPhoto + this.photos.length - 1) %
          this.photos.length;
      },
      handleKeyDown(event: { key: string; }) {
        if (event.key === "ArrowRight") {
          this.showNextPhoto();
        } else if (event.key === "ArrowLeft") {
          this.showPreviousPhoto();
        }
        else if (event.key === "Escape") {
        this.showModal = false;
        }
      },
    },
    mounted() {
      document.addEventListener("keydown", this.handleKeyDown);
    },
    beforeUnmount() {
      document.removeEventListener("keydown", this.handleKeyDown);
    },
  });
</script>

<style>
    h2 {
      font-family: 'Avenir', sans-serif;
    }

    .drop-shadow-lg {
        text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7),
                     0px 0px 10px rgba(255, 255, 255, 0.7);
    }
  </style>
  