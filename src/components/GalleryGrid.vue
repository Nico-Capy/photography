<template>
  <div class="flex flex-col items-center justify-center">
    <h2 ref="titleRef" :class="titleClass" v-if="title">{{ $t(title) }}</h2>

    <div :class="gridClass" ref="gridRef">
      <div
        v-for="(photo, index) in photos"
        :key="photo"
        class="relative cursor-pointer"
        @click="open(index)"
      >
        <img :src="photo" :alt="`Gallery image ${index + 1}`" class="w-full h-full object-cover shadow-md" loading="lazy" />
      </div>
    </div>

    <GalleryModal
      ref="modalRef"
      :photos="photos"
      :image-height="imageHeight"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from "vue";
import gsap from "gsap";
import GalleryModal from "./GalleryModal.vue";

export default defineComponent({
  name: "GalleryGrid",
  components: { GalleryModal },
  props: {
    title: {
      type: String,
      required: true,
    },
    photos: {
      type: Array as PropType<string[]>,
      required: true,
    },
    gridClass: {
      type: String,
      default:
        "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mb-10",
    },
    titleClass: {
      type: String,
      default: "text-3xl text-white drop-shadow-xl m-6",
    },
    imageHeight: {
      type: String,
      default: "47rem",
    },
  },
  setup(props) {
    const gridRef = ref<HTMLElement | null>(null);
    const modalRef = ref<InstanceType<typeof GalleryModal> | null>(null);
    const titleRef = ref<HTMLElement | null>(null);

    const open = (index: number) => {
      modalRef.value?.openAt(index);
    };

    onMounted(() => {
      if (!gridRef.value) return;
      const gridEl = gridRef.value;

      gsap.from(gridEl.children, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.1,
        ease: "power1.in",
      });

      // Animate title scoped to this component instance
      if (titleRef.value) {
        gsap.from(titleRef.value, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power1.in",
        });
      }
    });

    return { gridRef, modalRef, titleRef, open };
  },
});
</script>

