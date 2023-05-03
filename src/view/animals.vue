<template>
    <div class="flex flex-col items-center justify-center">
      <h2 role="heading" class="text-3xl text-white drop-shadow-xl m-6">Nature</h2>
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
  
  //  import nature01 from "../assets/nature/nature01.jpg";
  //  import nature02 from "../assets/nature/nature02.jpg";
  //  import nature03 from "../assets/nature/nature03.jpg";
  //  import nature04 from "../assets/nature/nature04.jpg";
  //  import nature05 from "../assets/nature/nature05.jpg";
  //  import nature06 from "../assets/nature/nature06.jpg";
  //  import nature07 from "../assets/nature/nature07.jpg";
  //  import nature08 from "../assets/nature/nature08.jpg";
  //  import nature09 from "../assets/nature/nature09.jpg";
  //  import nature10 from "../assets/nature/nature10.jpg";
  //  import nature11 from "../assets/nature/nature11.jpg";
  //  import nature12 from "../assets/nature/nature12.jpg";
  //  import nature13 from "../assets/nature/nature13.jpg";
  //  import nature14 from "../assets/nature/nature14.jpg";
  //  import nature15 from "../assets/nature/nature15.jpg";
  //  import nature16 from "../assets/nature/nature16.jpg";
  
    export default defineComponent({
      name: "PhotoGallery",
      data() {
        return {
          showModal: false,
          selectedPhoto: 0,
        //  photos: [
        //    { src: nature09 },
        //    { src: nature10 },
        //    { src: nature11 },
        //    { src: nature12 },
        //    { src: nature13 },
        //    { src: nature14 },
        //    { src: nature16 },
        //    { src: nature15 },
        //    { src: nature07 },
        //    { src: nature08 },
        //    { src: nature01 },
        //    { src: nature02 },
        //    { src: nature03 },
        //    { src: nature04 },
        //    { src: nature05 },
        //    { src: nature06 },
        //  ],
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
    