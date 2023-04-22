<template>
    <footer class="text-center py-4 text-white w-screen">
      <p>© Nicola Corradini | Photographer, {{ currentYear }}</p>
      <font-awesome-icon
        :icon="faRebel"
        style="color: #ffffff; cursor: pointer;"
        @click="redirectToVideo"
      />
    </footer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { faRebel } from "@fortawesome/free-brands-svg-icons";
  
  export default defineComponent({
    name: "Footer",
    components: {
      FontAwesomeIcon,
    },
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
    methods: {
      redirectToVideo() {
        window.open("https://www.youtube.com/watch?v=bWXazVhlyxQ", "_blank");
      },
    },
    computed: {
      faRebel() {
        return faRebel;
      },
    },
  });
  </script>
  
  <style scoped>
  footer {
    background-color: transparent !important;
    position: absolute;
    bottom: 0;
    left: 0;
    font-family: 'Avenir', sans-serif;
  }
  </style>
  