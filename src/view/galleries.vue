<template>
  <div class="flex items-center p-3">
    <h1 class="text-white text-4xl drop-shadow-xl mx-auto">
      {{ $t("galleries") }}
    </h1>
  </div>

  <!-- Top Row -->
  <div class="gallery-row">
    <router-link
      v-for="(gallery, index) in topGalleries"
      :key="gallery.to"
      :to="gallery.to"
      class="m-2 w-11/12 h-90 text-white hover:text-black hover:bg-white shadow-white gallery-link"
    >
      <h2 class="text-2xl drop-shadow-xl p-3">{{ $t(gallery.label) }}</h2>
      <img :src="gallery.thumb" :alt="gallery.alt" class="p-2" />
    </router-link>
  </div>

  <!-- Bottom Row -->
  <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row w-11/12 h-11/12 mx-auto my-16 bg-transparent justify-center align-center overflow-scroll">
    <router-link
      v-for="(gallery, index) in bottomGalleries"
      :key="gallery.to"
      :to="gallery.to"
      class="m-2 w-11/12 h-90 text-white hover:text-black hover:bg-white shadow-white gallery-link"
    >
      <h2 class="text-2xl drop-shadow-xl p-3">{{ $t(gallery.label) }}</h2>
      <img :src="gallery.thumb" :alt="gallery.alt" class="p-2" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { gsap } from "gsap";

export default defineComponent({
  name: "Galleries",
  setup() {
    const topGalleries = [
      { to: "/portraits", label: "portrait", thumb: "/thumbnail6.jpg", alt: "Studio Portrait" },
      { to: "/pinhole", label: "pinhole", thumb: "/thumbnail3.jpg", alt: "Pinhole Of London" },
      { to: "/drone", label: "drone", thumb: "/thumbnail7.jpg", alt: "Drone Forest" },
      { to: "/infrared", label: "infrared", thumb: "/thumbnail1.jpg", alt: "Infrared" },
    ];

    const bottomGalleries = [
      { to: "/nature", label: "nature", thumb: "/thumbnail5.jpg", alt: "Meerkat" },
      { to: "/street", label: "street", thumb: "/thumbnail4.jpg", alt: "Streets Of London" },
      { to: "/analog", label: "analog", thumb: "/thumbnail8.jpg", alt: "Analog" },
      { to: "/others", label: "other", thumb: "/thumbnail2.jpg", alt: "Other" },
    ];

    onMounted(() => {
      // Animate heading
      gsap.from("h1", { opacity: 0, y: 50, duration: 1, ease: "power2.out" });

      // Animate all gallery links
      gsap.from(".gallery-link", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    });

    return { topGalleries, bottomGalleries };
  },
});
</script>

<style scoped>
.gallery-row {
  display: flex;
  flex-direction: column;
  width: 91.666667%;
  height: 91.666667%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
  background: transparent;
  justify-content: center;
  align-items: center;
  overflow: scroll;
}
@media (min-width: 1024px) {
  .gallery-row {
    flex-direction: row;
  }
}
h1,
h2 {
  font-family: "Avenir", sans-serif;
}
.drop-shadow-xl {
  text-shadow:
    0px 0px 10px rgba(255, 255, 255, 0.6),
    0px 0px 10px rgba(255, 255, 255, 0.6);
}
.gallery-link:hover {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  transition-duration: 1.6s;
}
</style>