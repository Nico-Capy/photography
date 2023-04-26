<template>
    <div class="flex flex-col items-center justify-center">
      <h2 role="heading" aria-level="2" class="text-3xl text-white drop-shadow-xl m-6">Pinhole Lens</h2>
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
  
    import pinhole01 from "../assets/pinhole/pinhole01.jpg";
    import pinhole02 from "../assets/pinhole/pinhole02.jpg";
    import pinhole03 from "../assets/pinhole/pinhole03.jpg";
    import pinhole04 from "../assets/pinhole/pinhole04.jpg";
    import pinhole05 from "../assets/pinhole/pinhole05.jpg";
    import pinhole06 from "../assets/pinhole/pinhole06.jpg";
    import pinhole07 from "../assets/pinhole/pinhole07.jpg";
    import pinhole08 from "../assets/pinhole/pinhole08.jpg";
    import pinhole09 from "../assets/pinhole/pinhole09.jpg";
    import pinhole10 from "../assets/pinhole/pinhole10.jpg";
    import pinhole11 from "../assets/pinhole/pinhole11.jpg";
    import pinhole12 from "../assets/pinhole/pinhole12.jpg";
    import pinhole13 from "../assets/pinhole/pinhole13.jpg";
    import pinhole14 from "../assets/pinhole/pinhole14.jpg";
    import pinhole15 from "../assets/pinhole/pinhole15.jpg";
  
    export default defineComponent({
      name: "PhotoGallery",
      data() {
        return {
          showModal: false,
          selectedPhoto: 0,
          photos: [
            { src: pinhole01 },
            { src: pinhole02 },
            { src: pinhole03 },
            { src: pinhole04 },
            { src: pinhole05 },
            { src: pinhole06 },
            { src: pinhole07 },
            { src: pinhole08 },
            { src: pinhole09 },
            { src: pinhole10 },
            { src: pinhole11 },
            { src: pinhole12 },
            { src: pinhole13 },
            { src: pinhole14 },
            { src: pinhole15 },
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