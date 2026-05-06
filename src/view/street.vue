<template>
  <GalleryGrid title="street" :photos="photos" image-height="47rem" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GalleryGrid from "../components/GalleryGrid.vue";

export default defineComponent({
  name: "StreetGallery",
  components: { GalleryGrid },
  setup() {
    const totalPhotos = 22;
    const photos = Array.from({ length: totalPhotos }, (_, i) =>
      `/street${(i + 1).toString().padStart(2, "0")}.jpg`
    );

    return { photos };
  },
});
</script>

