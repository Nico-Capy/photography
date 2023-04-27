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

  <script lang="js"></script>
  
  <script lang="ts">
    import { defineComponent } from "vue";
  
    import street01 from "../assets/street/street01.jpg";
    import street02 from "../assets/street/street02.jpg";
    import street03 from "../assets/street/street03.jpg";
    import street04 from "../assets/street/street04.jpg";
    import street05 from "../assets/street/street05.jpg";
    import street06 from "../assets/street/street06.jpg";
    import street07 from "../assets/street/street07.jpg";
    import street08 from "../assets/street/street08.jpg";
    import street09 from "../assets/street/street09.jpg";
    import street10 from "../assets/street/street10.jpg";
    import street11 from "../assets/street/street11.jpg";
    import street12 from "../assets/street/street12.jpg";
    import street13 from "../assets/street/street13.jpg";
    import street14 from "../assets/street/street14.jpg";
    import street15 from "../assets/street/street15.jpg";
    import street16 from "../assets/street/street16.jpg";
    import street17 from "../assets/street/street17.jpg";
    import street18 from "../assets/street/street18.jpg";
    import street19 from "../assets/street/street19.jpg";
    import street20 from "../assets/street/street20.jpg";
    import street21 from "../assets/street/street21.jpg";
    import street22 from "../assets/street/street22.jpg";
  
    export default defineComponent({
      name: "PhotoGallery",
      data() {
        return {
          showModal: false,
          selectedPhoto: 0,
          photos: [
            { src: street01 },
            { src: street02 },
            { src: street03 },
            { src: street04 },
            { src: street05 },
            { src: street06 },
            { src: street07 },
            { src: street08 },
            { src: street09 },
            { src: street10 },
            { src: street11 },
            { src: street12 },
            { src: street13 },
            { src: street14 },
            { src: street15 },
            { src: street16 },
            { src: street17 },
            { src: street18 },
            { src: street19 },
            { src: street20 },
            { src: street21 },
            { src: street22 },
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