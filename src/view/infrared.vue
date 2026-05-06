<template>
  <GalleryGrid title="infrared" :photos="photos" image-height="47rem" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GalleryGrid from "../components/GalleryGrid.vue";

export default defineComponent({
  name: "InfraredGallery",
  components: { GalleryGrid },
  setup() {
    const photos = [
      "/infrared01.jpg",
      "/infrared02.jpg",
      "/infrared03.jpg",
      "/infrared04.jpg",
      "/infrared05.jpg",
    ];

    return { photos };
  },
});
</script>

