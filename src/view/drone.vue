<template>
  <div class="flex flex-col items-center justify-center">
    <GalleryGrid title="drone" :photos="photos" image-height="47rem" />
    <DroneButton class="mt-10 mb-16" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DroneButton from "../components/dronebutton.vue";
import GalleryGrid from "../components/GalleryGrid.vue";

export default defineComponent({
  name: "DroneGallery",
  components: { DroneButton, GalleryGrid },
  setup() {
    const photos = [
      "/drone01.jpg",
      "/drone02.jpg",
      "/drone03.jpg",
      "/drone04.jpg",
      "/drone05.jpg",
      "/drone06.jpg",
      "/drone07.jpg",
      "/drone08.jpg",
      "/drone09.jpg",
      "/drone10.jpg",
      "/drone11.jpg",
      "/drone12.jpg",
      "/drone15.jpg",
      "/drone16.jpg",
      "/drone17.jpg",
      "/drone13.jpg",
      "/drone14.jpg",
      "/drone18.jpg",
      "/DJI_0022.jpg",
    ];

    return { photos };
  },
});
</script>

