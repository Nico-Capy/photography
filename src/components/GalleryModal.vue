<template>
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    @click.self="close"
  >
    <div class="relative w-11/12 max-w-6xl p-2">
      <button
        @click="close"
        class="absolute top-2 right-2 text-4xl w-fit h-fit text-black hover:text-white bg-white hover:bg-black cursor-pointer p-2 z-10"
      >
        &times;
      </button>

      <div class="relative flex items-center justify-center">
        <button
          ref="previousBtn"
          class="absolute left-0 transform -translate-y-1/2 text-2xl text-white bg-black hover:bg-white hover:text-black cursor-pointer p-2"
          @click.stop="showPrevious"
        >
          &larr;
        </button>

        <img
          :src="photos[selectedIndex]"
          :key="photos[selectedIndex]"
          ref="modalImage"
          class="object-contain mx-auto"
          :style="imageStyle"
        />

        <button
          ref="nextBtn"
          class="absolute right-0 transform -translate-y-1/2 text-2xl text-white bg-black hover:bg-white hover:text-black cursor-pointer p-2"
          @click.stop="showNext"
        >
          &rarr;
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onBeforeUnmount, watch, PropType } from "vue";
import gsap from "gsap";
import type { GalleryModalDirection } from "../composables/useGalleryModal";
import { useGalleryModal } from "../composables/useGalleryModal";

export default defineComponent({
  name: "GalleryModal",
  props: {
    photos: {
      type: Array as PropType<string[]>,
      required: true,
    },
    imageHeight: {
      type: String,
      default: "47rem",
    },
  },
  setup(props) {
    const photosLength = computed(() => props.photos.length);
    const { showModal, selectedIndex, close, showNext, showPrevious, attachKeyListener, detachKeyListener } =
      useGalleryModal(photosLength, 0);

    const modalImage = ref<HTMLImageElement | null>(null);
    const previousBtn = ref<HTMLElement | null>(null);
    const nextBtn = ref<HTMLElement | null>(null);

    const imageStyle = computed(() => ({ height: props.imageHeight }));

    const animateModalImage = (direction: GalleryModalDirection = "right") => {
      const el = modalImage.value;
      if (!el) return;
      const offset = direction === "right" ? 100 : -100;
      gsap.fromTo(
        el,
        { opacity: 0, x: offset },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    };

    const animateButtons = () => {
      if (!previousBtn.value || !nextBtn.value) return;
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
    };

    const openAt = (index: number) => {
      selectedIndex.value = index;
      showModal.value = true;
    };

    watch(
      showModal,
      (open) => {
        if (open) {
          attachKeyListener();
          animateButtons();
        } else {
          detachKeyListener();
        }
      },
      { immediate: true }
    );

    watch(selectedIndex, (newIndex, oldIndex) => {
      if (!showModal.value) return;
      animateModalImage(newIndex >= oldIndex ? "right" : "left");
    });

    onBeforeUnmount(() => {
      detachKeyListener();
    });

    return {
      showModal,
      selectedIndex,
      close,
      showNext,
      showPrevious,
      modalImage,
      previousBtn,
      nextBtn,
      imageStyle,
      openAt,
    };
  },
});
</script>

