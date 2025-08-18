<template>
  <div class="flex flex-col items-center justify-center">
    <!-- Heading -->
    <h2 role="heading" class="text-3xl text-white drop-shadow-lg my-6">
      {{ $t("drone") }}
    </h2>

    <!-- Gallery Grid -->
    <div
      ref="gridRef"
      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4"
    >
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="relative cursor-pointer"
        @click="showPhoto(index)"
      >
        <img
          :src="photo"
          class="w-full h-full object-cover shadow-md"
        />
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      @click.self="showModal = false"
    >
      <div class="relative bg-transparent w-11/12 max-w-6xl p-2">
        <!-- Close Button -->
        <button
          @click="showModal = false"
          class="absolute top-2 right-2 text-4xl text-black hover:text-white bg-white hover:bg-black cursor-pointer p-2 z-10"
        >
          &times;
        </button>

        <!-- Image & Navigation -->
        <div class="relative flex items-center justify-center">
          <button
            ref="previousBtn"
            class="absolute left-0 transform -translate-y-1/2 text-2xl text-white bg-black hover:bg-white hover:text-black cursor-pointer p-2"
            @click="showPreviousPhoto"
          >
            &larr;
          </button>

          <img
            :src="photos[selectedPhoto]"
            class="object-contain mx-auto max-h-[80vh]"
            ref="modalImage"
          />

          <button
            ref="nextBtn"
            class="absolute right-0 transform -translate-y-1/2 text-2xl text-white bg-black hover:bg-white hover:text-black cursor-pointer p-2"
            @click="showNextPhoto"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>

    <!-- Drone Button -->
    <DroneButton class="mt-10 mb-16" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import gsap from "gsap";
import DroneButton from "../components/dronebutton.vue";

export default defineComponent({
  name: "DroneGallery",
  components: { DroneButton },
  setup() {
    const showModal = ref(false);
    const selectedPhoto = ref(0);
    const gridRef = ref<HTMLElement | null>(null);
    const modalImage = ref<HTMLElement | null>(null);
    const previousBtn = ref<HTMLElement | null>(null);
    const nextBtn = ref<HTMLElement | null>(null);

    const photos = ref([
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
    ]);

    const showPhoto = async (index: number) => {
      selectedPhoto.value = index;
      showModal.value = true;
      await nextTick();
      animateModalImage();
    };

    const showNextPhoto = async () => {
      selectedPhoto.value = (selectedPhoto.value + 1) % photos.value.length;
      await nextTick();
      animateModalImage("right");
    };

    const showPreviousPhoto = async () => {
      selectedPhoto.value =
        (selectedPhoto.value + photos.value.length - 1) % photos.value.length;
      await nextTick();
      animateModalImage("left");
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") showNextPhoto();
      else if (event.key === "ArrowLeft") showPreviousPhoto();
      else if (event.key === "Escape") showModal.value = false;
    };

    const animateModalImage = (direction: "left" | "right" = "right") => {
      if (!modalImage.value) return;
      const offset = direction === "right" ? 100 : -100;

      gsap.fromTo(
        modalImage.value,
        { opacity: 0, x: offset },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    };

    const applyButtonTransition = () => {
      if (previousBtn.value && nextBtn.value) {
        gsap.from(previousBtn.value, {
          opacity: 0,
          x: -100,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.from(nextBtn.value, {
          opacity: 0,
          x: 100,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    onMounted(() => {
      document.addEventListener("keydown", handleKeyDown);

      // Animate grid
      if (gridRef.value) {
        gsap.from(gridRef.value.children, {
          opacity: 0,
          y: 50,
          duration: 0.6,
          stagger: 0.1,
          ease: "power1.in",
        });
      }

      // Animate heading
      gsap.from("h2", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power1.in",
      });

      applyButtonTransition();
    });

    onBeforeUnmount(() => {
      document.removeEventListener("keydown", handleKeyDown);
    });

    return {
      showModal,
      selectedPhoto,
      photos,
      showPhoto,
      showNextPhoto,
      showPreviousPhoto,
      gridRef,
      modalImage,
      previousBtn,
      nextBtn,
    };
  },
});
</script>

<style>
h2 {
  font-family: "Avenir", sans-serif;
}
.drop-shadow-lg {
  text-shadow:
    0px 0px 10px rgba(255, 255, 255, 0.7),
    0px 0px 10px rgba(255, 255, 255, 0.7);
}
</style>