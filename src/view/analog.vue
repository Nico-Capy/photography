<template>
  <GalleryGrid title="analog" :photos="photos" image-height="47rem" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GalleryGrid from "../components/GalleryGrid.vue";

export default defineComponent({
  name: "AnalogGallery",
  components: { GalleryGrid },
  setup() {
    const photos = [
      "/analog01.jpg",
      "/analog02.jpg",
      "/analog03.jpg",
      "/analog04.jpg",
      "/analog05.jpg",
      "/analog06.jpg",
      "/analog07.jpg",
      "/analog08.jpg",
      "/analog09.jpg",
      "/analog10.jpg",
      "/analog11.jpg",
      "/analog12.jpg",
      "/analog13.jpg",
      "/analog14.jpg",
      "/analog15.jpg",
      "/analog16.jpg",
      "/analog17.jpg",
      "/analog18.jpg",
      "/analog19.jpg",
    ];

    return { photos };
  },
});
</script>

