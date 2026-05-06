<template>
  <GalleryGrid title="other" :photos="photos" image-height="47rem" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GalleryGrid from "../components/GalleryGrid.vue";

export default defineComponent({
  name: "PhotoGallery",
  components: { GalleryGrid },
  setup() {
    const photos = Array.from({ length: 16 }, (_, i) =>
      `/other${(i + 1).toString().padStart(2, "0")}.jpg`
    );

    return { photos };
  },
});
</script>

