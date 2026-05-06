<template>
  <GalleryGrid title="portrait" :photos="photos" image-height="47rem" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GalleryGrid from "../components/GalleryGrid.vue";

export default defineComponent({
  name: "PortraitGallery",
  components: { GalleryGrid },
  setup() {
    const photos = [
      "/portrait01.jpg",
      "/portrait02.jpg",
      "/portrait03.jpg",
      "/portrait04.jpg",
      "/portrait05.jpg",
      "/portrait06.jpg",
      "/portrait07.jpg",
      "/portrait08.jpg",
      "/portrait09.jpg",
      "/portrait10.jpg",
      "/portrait11.jpg",
      "/portrait12.jpg",
      "/portrait13.jpg",
      "/portrait14.jpg",
      "/portrait15.jpg",
      "/portrait16.jpg",
      "/portrait17.jpg",
      "/portrait18.jpg",
      "/portrait19.jpg",
      "/portrait20.jpg",
      "/portrait21.jpg",
      "/portrait22.jpg",
      "/portrait23.jpg",
      "/portrait24.jpg",
      "/portrait25.jpg",
      "/portrait26.jpg",
      "/portrait29.jpg",
      "/portrait30.jpg",
      "/portrait31.jpg",
      "/portrait32.jpg",
      "/portrait33.jpg",
      "/portrait34.jpg",
      "/portrait35.jpg",
      "/portrait36.jpg",
      "/portrait37.jpg",
      "/portrait38.jpg",
      "/portrait39.jpg",
      "/portrait40.jpg",
      "/portrait41.jpg",
    ];

    return { photos };
  },
});
</script>
