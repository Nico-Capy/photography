<template>
  <div class="flex flex-col items-center justify-center">
    <h2 role="heading" class="text-3xl text-white drop-shadow-xl m-6">Portraits</h2>
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
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
          { src: "/portraits/portrait01.jpg" },
          { src: "/portraits/portrait02.jpg" },
          { src: "/portraits/portrait03.jpg" },
          { src: "/portraits/portrait04.jpg" },
          { src: "/portraits/portrait05.jpg" },
          { src: "/portraits/portrait06.jpg" },
          { src: "/portraits/portrait07.jpg" },
          { src: "/portraits/portrait08.jpg" },
          { src: "/portraits/portrait09.jpg" },
          { src: "/portraits/portrait10.jpg" },
          { src: "/portraits/portrait11.jpg" },
          { src: "/portraits/portrait12.jpg" },
          { src: "/portraits/portrait13.jpg" },
          { src: "/portraits/portrait15.jpg" },
          { src: "/portraits/portrait16.jpg" },
          { src: "/portraits/portrait19.jpg" },
          { src: "/portraits/portrait20.jpg" },
          { src: "/portraits/portrait20.jpg" },
          { src: "/portraits/portrait21.jpg" },
          { src: "/portraits/portrait22.jpg" },
          { src: "/portraits/portrait23.jpg" },
          { src: "/portraits/portrait24.jpg" },
          { src: "/portraits/portrait25.jpg" },
          { src: "/portraits/portrait26.jpg" },
          { src: "/portraits/portrait14.jpg" },
          { src: "/portraits/portrait29.jpg" },
          { src: "/portraits/portrait30.jpg" },
          { src: "/portraits/portrait31.jpg" },
          { src: "/portraits/portrait32.jpg" },
          { src: "/portraits/portrait33.jpg" },
          { src: "/portraits/portrait34.jpg" },
          { src: "/portraits/portrait35.jpg" },
          { src: "/portraits/portrait36.jpg" },
          { src: "/portraits/portrait37.jpg" },
          { src: "/portraits/portrait38.jpg" },
          { src: "/portraits/portrait39.jpg" },
          { src: "/portraits/portrait40.jpg" },
          { src: "/portraits/portrait41.jpg" },
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
  