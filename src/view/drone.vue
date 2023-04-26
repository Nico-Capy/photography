<template>
    <div class="flex flex-col items-center justify-center">
      <h2 role="heading" aria-level="2" class="text-3xl text-white drop-shadow-xl m-6">Drone</h2>
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        <div v-for="(photo, index) in photos" :key="index" class="relative m-2">
          <img :src="photo.src" class="mx-auto w-full h-full object-cover shadow-md" style="height: 100%; width: auto;" @click="showPhoto(index)" aria-label="Open photo {{ index + 1 }}" />
        </div>
      </div>
      <div v-if="showModal" class="fixed bg-black/50 inset-0 flex items-center justify-center z-50 h-screen max-h-90vh">
        <div class="bg-transparent p-2 w-11/12">
          <button
              @click="showModal = false"
              class="absolute top-0 right-0 m-4 text-4xl w-fit h-fit text-black hover:text-white bg-white hover:bg-black cursor-pointer p-2 z-10"
              aria-label="Close">
              &times;
            </button>
          <div class="relative">
            <button
              class="absolute top-1/2 left-0 transform -translate-y-1/2 text-white hover:text-black bg-black hover:bg-white cursor-pointer m-1 p-2 text-2xl"
              @click="showPreviousPhoto()"
              aria-label="Previous photo">
              &larr;
            </button>
            <img :src="photos[selectedPhoto].src" class="object-contain mx-auto" aria-label="Selected photo" style="height: 47rem;" />
            <button
              class="absolute top-1/2 right-0 transform -translate-y-1/2 text-white hover:text-black bg-black hover:bg-white cursor-pointer m-1 p-2 text-2xl"
              @click="showNextPhoto()"
              aria-label="Next photo">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent } from "vue";
  
    import drone01 from "../assets/drone/drone01.jpg";
    import drone02 from "../assets/drone/drone02.jpg";
    import drone03 from "../assets/drone/drone03.jpg";
    import drone04 from "../assets/drone/drone04.jpg";
    import drone05 from "../assets/drone/drone05.jpg";
    import drone06 from "../assets/drone/drone06.jpg";
    import drone07 from "../assets/drone/drone07.jpg";
    import drone08 from "../assets/drone/drone08.jpg";
    import drone09 from "../assets/drone/drone09.jpg";
    import drone10 from "../assets/drone/drone10.jpg";
    import drone11 from "../assets/drone/drone11.jpg";
    import drone12 from "../assets/drone/drone12.jpg";
    import drone13 from "../assets/drone/drone13.jpg";
    import drone14 from "../assets/drone/drone14.jpg";
    import drone15 from "../assets/drone/drone15.jpg";
    import drone16 from "../assets/drone/drone16.jpg";
    import drone17 from "../assets/drone/drone17.jpg";
    import drone18 from "../assets/drone/drone18.jpg";
  
    export default defineComponent({
      name: "PhotoGallery",
      data() {
        return {
          showModal: false,
          selectedPhoto: 0,
          photos: [
            { src: drone01 },
            { src: drone02 },
            { src: drone03 },
            { src: drone04 },
            { src: drone05 },
            { src: drone06 },
            { src: drone07 },
            { src: drone08 },
            { src: drone09 },
            { src: drone10 },
            { src: drone11 },
            { src: drone12 },
            { src: drone15 },
            { src: drone16 },
            { src: drone17 },
            { src: drone13 },
            { src: drone14 },
            { src: drone18 },
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