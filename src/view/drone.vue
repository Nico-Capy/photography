<template>
  <div class="flex flex-col items-center justify-center">
    <h2 role="heading" class="text-3xl text-white drop-shadow-lg m-6">{{ $t('drone') }}</h2>
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mb-16">
      <div v-for="(photo, index) in photos" :key="index" class="relative m-2">
        <img
          :src="photo.src"
          class="mx-auto w-full h-full object-cover shadow-md"
          style="height: 100%"
          @click="showPhoto(index)"
        />
      </div>
    </div>
    <div
      v-if="showModal"
      class="fixed bg-black/50 inset-0 flex items-center justify-center z-50 h-screen max-h-90vh"
      @click.self="showModal = false"
    >
      <div class="bg-transparent p-2 w-11/12">
        <button
          @click="showModal = false"
          class="absolute top-0 right-0 m-4 text-4xl w-fit h-fit text-black hover:text-white bg-white hover:bg-black cursor-pointer p-2 z-10"
        >
          &times;
        </button>
        <div class="relative">
          <button
            ref="previousBtn"
            class="absolute top-1/2 left-0 transform -translate-y-1/2 text-white hover:text-black bg-black hover:bg-white cursor-pointer m-1 p-2 text-2xl"
            @click="showPreviousPhoto()"
          >
            &larr;
          </button>
          <img
            :src="photos[selectedPhoto].src"
            class="object-contain mx-auto"
            style="height: 47rem;"
          />
          <button
            ref="nextBtn"
            class="absolute top-1/2 right-0 transform -translate-y-1/2 text-white hover:text-black bg-black hover:bg-white cursor-pointer m-1 p-2 text-2xl"
            @click="showNextPhoto()"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, onUnmounted } from "vue";
  import { gsap } from "gsap";

  export default defineComponent({
    name: "PhotoGallery",
    data() {
      return {
        showModal: false,
        selectedPhoto: 0,
        photos: [
          
        { src: "/drone01.jpg", loaded: false },
        { src: "/drone02.jpg", loaded: false },
        { src: "/drone03.jpg", loaded: false },
        { src: "/drone04.jpg", loaded: false },
        { src: "/drone05.jpg", loaded: false },
        { src: "/drone06.jpg", loaded: false },
        { src: "/drone07.jpg", loaded: false },
        { src: "/drone08.jpg", loaded: false },
        { src: "/drone09.jpg", loaded: false },
        { src: "/drone10.jpg", loaded: false },
        { src: "/drone11.jpg", loaded: false },
        { src: "/drone12.jpg", loaded: false },
        { src: "/drone15.jpg", loaded: false },
        { src: "/drone16.jpg", loaded: false },
        { src: "/drone17.jpg", loaded: false },
        { src: "/drone13.jpg", loaded: false },
        { src: "/drone14.jpg", loaded: false },
        { src: "/drone18.jpg", loaded: false },
        ],
      };
    },
    methods: {
      showPhoto(index: number) {
        this.selectedPhoto = index;
        this.showModal = true;
      },
      showNextPhoto() {
        this.selectedPhoto =
          (this.selectedPhoto + 1) % this.photos.length;
      },
      showPreviousPhoto() {
        this.selectedPhoto =
          (this.selectedPhoto + this.photos.length - 1) % this.photos.length;
      },
      handleKeyDown(event: { key: string; }) {
        if (event.key === "ArrowRight") {
          this.showNextPhoto();
        } else if (event.key === "ArrowLeft") {
          this.showPreviousPhoto();
        } else if (event.key === "Escape") {
          this.showModal = false;
        }
      },
      applyButtonTransition() {
        gsap.from(this.$refs.previousBtn, {
          opacity: 0,
          x: -100,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.from(this.$refs.nextBtn, {
          opacity: 0,
          x: 100,
          duration: 0.5,
          ease: "power2.out",
        });
      },
      lazyLoadImage(photo: { src: string; loaded: boolean }) {
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              photo.loaded = true;
              observer.unobserve(entry.target);
            }
          });
        }, options);

        this.$nextTick(() => {
          const imageElement = document.querySelector(`img[src="${photo.src}"]`);
          if (imageElement) {
            observer.observe(imageElement);
          }
        });
      },
    },
    mounted() {
      document.addEventListener("keydown", this.handleKeyDown);

      gsap.from(".relative", {
        opacity: 0,
        y: 100,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.6,
        ease: "power1.in",  });

      gsap.from("h2", {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: 0,
        ease: "power1.in",
      });
      
      this.applyButtonTransition();
      
      this.photos.forEach(photo => {
        this.lazyLoadImage(photo);
      });
      },
      beforeUnmount() {
      document.removeEventListener("keydown", this.handleKeyDown);
      },
});
</script>

<style>
  h2 {
    font-family: 'Avenir', sans-serif;
  }

  .drop-shadow-lg {
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7),
                 0px 0px 10px rgba(255, 255, 255, 0.7);
  }
</style>
