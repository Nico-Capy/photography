<template>
    <div class="flex flex-col items-center justify-center">
      <h2 role="heading" aria-level="2" class="text-3xl text-white drop-shadow-xl m-6">Analog</h2>
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        <div v-for="(photo, index) in photos" :key="index" class="relative m-2">
          <img :src="photo.src" class="mx-auto w-full h-full object-cover shadow-md" style="height: 100%; width: auto;" @click="showPhoto(index)" />
        </div>
      </div>
      <div v-if="showModal" class="fixed bg-black/50 inset-0 flex items-center justify-center z-50 h-screen max-h-90vh">
        <div class="bg-transparent p-2 w-11/12">
          <button
              @click="showModal = false"
              class="absolute top-0 right-0 m-4 text-4xl w-fit h-fit text-black hover:text-white bg-white hover:bg-black cursor-pointer p-2 z-10">
              &times;
            </button>
          <div class="relative">
            <button
              class="absolute top-1/2 left-0 transform -translate-y-1/2 text-white hover:text-black bg-black hover:bg-white cursor-pointer m-1 p-2 text-2xl"
              @click="showPreviousPhoto()">
              &larr;
            </button>
            <img :src="photos[selectedPhoto].src" class="object-contain mx-auto" style="height: 47rem;" />
            <button
              class="absolute top-1/2 right-0 transform -translate-y-1/2 text-white hover:text-black bg-black hover:bg-white cursor-pointer m-1 p-2 text-2xl"
              @click="showNextPhoto()">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent } from "vue";
  
    import analog01 from "../assets/analog/analog01.jpg";
    import analog02 from "../assets/analog/analog02.jpg";
    import analog03 from "../assets/analog/analog03.jpg";
    import analog04 from "../assets/analog/analog04.jpg";
    import analog05 from "../assets/analog/analog05.jpg";
    import analog06 from "../assets/analog/analog06.jpg";
    import analog07 from "../assets/analog/analog07.jpg";
    import analog08 from "../assets/analog/analog08.jpg";
    import analog09 from "../assets/analog/analog09.jpg";
    import analog10 from "../assets/analog/analog10.jpg";
    import analog11 from "../assets/analog/analog11.jpg";
    import analog12 from "../assets/analog/analog12.jpg";
    import analog13 from "../assets/analog/analog13.jpg";
    import analog14 from "../assets/analog/analog14.jpg";
    import analog15 from "../assets/analog/analog15.jpg";
    import analog16 from "../assets/analog/analog16.jpg";
    import analog17 from "../assets/analog/analog17.jpg";
    import analog18 from "../assets/analog/analog18.jpg";
    import analog19 from "../assets/analog/analog19.jpg";
  
    export default defineComponent({
      name: "PhotoGallery",
      data() {
        return {
          showModal: false,
          selectedPhoto: 0,
          photos: [
            { src: analog01 },
            { src: analog02 },
            { src: analog03 },
            { src: analog04 },
            { src: analog05 },
            { src: analog06 },
            { src: analog07 },
            { src: analog08 },
            { src: analog09 },
            { src: analog10 },
            { src: analog11 },
            { src: analog12 },
            { src: analog13 },
            { src: analog14 },
            { src: analog15 },
            { src: analog16 },
            { src: analog17 },
            { src: analog18 },
            { src: analog19 },
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