<template>
    <div class="flex flex-col items-center justify-center">
      <h2 role="heading" class="text-3xl text-white drop-shadow-xl m-6">Street</h2>
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
  
    import other01 from "../assets/other/other01.jpg";
    import other02 from "../assets/other/other02.jpg";
    import other03 from "../assets/other/other03.jpg";
    import other04 from "../assets/other/other04.jpg";
    import other05 from "../assets/other/other05.jpg";
    import other06 from "../assets/other/other06.jpg";
    import other07 from "../assets/other/other07.jpg";
    import other08 from "../assets/other/other08.jpg";
    import other09 from "../assets/other/other09.jpg";
    import other10 from "../assets/other/other10.jpg";
    import other11 from "../assets/other/other11.jpg";
    import other12 from "../assets/other/other12.jpg";
    import other13 from "../assets/other/other13.jpg";
    import other14 from "../assets/other/other14.jpg";
    import other15 from "../assets/other/other15.jpg";
    import other16 from "../assets/other/other16.jpg";
  
    export default defineComponent({
      name: "PhotoGallery",
      data() {
        return {
          showModal: false,
          selectedPhoto: 0,
          photos: [
            { src: other01 },
            { src: other02 },
            { src: other03 },
            { src: other04 },
            { src: other05 },
            { src: other06 },
            { src: other07 },
            { src: other08 },
            { src: other09 },
            { src: other10 },
            { src: other11 },
            { src: other12 },
            { src: other13 },
            { src: other14 },
            { src: other15 },
            { src: other16 },
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