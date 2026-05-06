<template>
  <GalleryGrid title="pinhole" :photos="photos" image-height="47rem" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GalleryGrid from "../components/GalleryGrid.vue";

export default defineComponent({
  name: "PinholeGallery",
  components: { GalleryGrid },
  setup() {
    const photos = Array.from({ length: 15 }, (_, i) =>
      `/pinhole${(i + 1).toString().padStart(2, "0")}.jpg`
    );

    return { photos };
  },
});
</script>

