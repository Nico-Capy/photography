<template>
    <div class="flex items-center p-3">
      <h1 class="text-white text-4xl drop-shadow-xl mx-auto">Galleries</h1>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="(photo, index) in photos" :key="index">
        <img
          v-lazy="require(`@/assets/portraits/portrait${index + 1 < 10 ? `0${index + 1}` : index + 1}.jpg`)"
          alt="photo"
          @click="showPhoto(index)"
          class="cursor-pointer hover:opacity-75 transition duration-300 ease-in-out"
          v-lazy:scroll="1"
        />
      </div>
      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center">
  <div
    class="absolute inset-0 bg-black opacity-50"
    @click="closeModal"
  ></div>
  <div class="bg-white w-full max-w-lg p-3 rounded-lg shadow-lg">
    <img
      v-swipe:left="nextPhoto"
      v-swipe:right="previousPhoto"
      :src="require(`@/assets/portraits/portrait${currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}.jpg`)"
      alt="photo"
      class="max-h-96 mx-auto"
    />

    <div class="flex justify-between mt-2">
      <button
        @click="previousPhoto"
        :disabled="currentIndex === 0"
        class="bg-gray-900 hover:bg-gray-800 text-white px-2 py-1 rounded focus:outline-none"
      >
        Previous
      </button>
      <button
        @click="closeModal"
        class="bg-gray-900 hover:bg-gray-800 text-white px-2 py-1 rounded focus:outline-none"
      >
        Close
      </button>
      <button
        @click="nextPhoto"
        :disabled="currentIndex === photos.length - 1"
        class="bg-gray-900 hover:bg-gray-800 text-white px-2 py-1 rounded focus:outline-none"
      >
        Next
      </button>
    </div>
  </div>
</div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import VueLazyload from 'vue-lazyload';
import VueTouch from 'vue-touch';

export default defineComponent({
  name: 'Gallery',
  setup() {
    const state = reactive({
      photos: [...Array(41)].map((_, i) => i),
      showModal: false,
      currentIndex: 0,
    });

    const showPhoto = (index: number) => {
      state.currentIndex = index;
      state.showModal = true;
    };

    const closeModal = () => {
      state.showModal = false;
    };

    const previousPhoto = () => {
      state.currentIndex--;
    };

    const nextPhoto = () => {
      state.currentIndex++;
    };

    return {
      ...state,
      showPhoto,
      closeModal,
      previousPhoto,
      nextPhoto,
    };
  },
  directives: {
    touch: VueTouch.directive,
  },
  components: {
    lazyload: VueLazyload,
  },
});
</script>

<style>
@import "~vue-touch/dist/vue-touch.css";

</style>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.75);
  }

  .modal-content {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    width: 800px;
    height: 600px;
    background-color: #fff;
    border-radius: 0;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.75);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .modal-controls {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .modal-button {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    outline: none;
  }

  .modal-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
</style> 