<template>
  <div class="flex flex-col items-center justify-center">
    <h2 role="heading" class="text-3xl text-white drop-shadow-xl m-6">Portraits</h2>
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
  import portrait01 from "../assets/portraits/portrait01.jpg";
  import portrait02 from "../assets/portraits/portrait02.jpg";
  import portrait03 from "../assets/portraits/portrait03.jpg";
  import portrait04 from "../assets/portraits/portrait04.jpg";
  import portrait05 from "../assets/portraits/portrait05.jpg";
  import portrait06 from "../assets/portraits/portrait06.jpg";
  import portrait07 from "../assets/portraits/portrait07.jpg";
  import portrait08 from "../assets/portraits/portrait08.jpg";
  import portrait09 from "../assets/portraits/portrait09.jpg";
  import portrait10 from "../assets/portraits/portrait10.jpg";
  import portrait11 from "../assets/portraits/portrait11.jpg";
  import portrait12 from "../assets/portraits/portrait12.jpg";
  import portrait13 from "../assets/portraits/portrait13.jpg";
  import portrait14 from "../assets/portraits/portrait14.jpg";
  import portrait15 from "../assets/portraits/portrait15.jpg";
  import portrait16 from "../assets/portraits/portrait16.jpg";
  import portrait19 from "../assets/portraits/portrait19.jpg";
  import portrait20 from "../assets/portraits/portrait20.jpg";
  import portrait21 from "../assets/portraits/portrait21.jpg";
  import portrait22 from "../assets/portraits/portrait22.jpg";
  import portrait23 from "../assets/portraits/portrait23.jpg";
  import portrait24 from "../assets/portraits/portrait24.jpg";
  import portrait25 from "../assets/portraits/portrait25.jpg";
  import portrait26 from "../assets/portraits/portrait26.jpg";
  import portrait27 from "../assets/portraits/portrait27.jpg";
  import portrait28 from "../assets/portraits/portrait28.jpg";
  import portrait29 from "../assets/portraits/portrait29.jpg";
  import portrait30 from "../assets/portraits/portrait30.jpg";
  import portrait31 from "../assets/portraits/portrait31.jpg";
  import portrait32 from "../assets/portraits/portrait32.jpg";
  import portrait33 from "../assets/portraits/portrait33.jpg";
  import portrait34 from "../assets/portraits/portrait34.jpg";
  import portrait35 from "../assets/portraits/portrait35.jpg";
  import portrait36 from "../assets/portraits/portrait36.jpg";
  import portrait37 from "../assets/portraits/portrait37.jpg";
  import portrait38 from "../assets/portraits/portrait38.jpg";
  import portrait39 from "../assets/portraits/portrait39.jpg";
  import portrait40 from "../assets/portraits/portrait40.jpg";
  import portrait41 from "../assets/portraits/portrait41.jpg";

  export default defineComponent({
    name: "PhotoGallery",
    data() {
      return {
        showModal: false,
        selectedPhoto: 0,
        photos: [
          { src: portrait01 },
          { src: portrait02 },
          { src: portrait03 },
          { src: portrait04 },
          { src: portrait05 },
          { src: portrait06 },
          { src: portrait07 },
          { src: portrait08 },
          { src: portrait09 },
          { src: portrait10 },
          { src: portrait11 },
          { src: portrait12 },
          { src: portrait13 },
          { src: portrait15 },
          { src: portrait16 },
          { src: portrait19 },
          { src: portrait20 },
          { src: portrait20 },
          { src: portrait21 },
          { src: portrait22 },
          { src: portrait23 },
          { src: portrait24 },
          { src: portrait25 },
          { src: portrait26 },
          { src: portrait27 },
          { src: portrait28 },
          { src: portrait14 },
          { src: portrait29 },
          { src: portrait30 },
          { src: portrait31 },
          { src: portrait32 },
          { src: portrait33 },
          { src: portrait34 },
          { src: portrait35 },
          { src: portrait36 },
          { src: portrait37 },
          { src: portrait38 },
          { src: portrait39 },
          { src: portrait40 },
          { src: portrait41 },
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
  