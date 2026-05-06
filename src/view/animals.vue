<template>
  <GalleryGrid title="nature" :photos="photos" image-height="47rem" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GalleryGrid from "../components/GalleryGrid.vue";

export default defineComponent({
  name: "AnimalsGallery",
  components: { GalleryGrid },
  setup() {
    const photos = [
      "/nature10.jpg",
      "/nature11.jpg",
      "/nature12.jpg",
      "/nature13.jpg",
      "/nature14.jpg",
      "/nature16.jpg",
      "/nature15.jpg",
      "/nature07.jpg",
      "/nature08.jpg",
      "/nature01.jpg",
      "/nature02.jpg",
      "/nature03.jpg",
      "/nature04.jpg",
      "/nature05.jpg",
      "/nature06.jpg",
    ];

    return { photos };
  },
});
</script>

