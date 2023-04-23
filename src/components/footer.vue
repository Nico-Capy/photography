<template>
  <footer class="text-center py-4 w-screen" :style="{ backgroundColor: backgroundColor }">
    <p :style="{ color: textColor }">© Nicola Corradini | Photographer, {{ currentYear }}</p>
    <font-awesome-icon
      :icon="faRebel"
      :style="{ color: iconColor, cursor: 'pointer' }"
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
      backgroundColor: "transparent", // change this to the background color of your footer
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
    textColor() {
      if (this.backgroundColor === "black") {
        return "white";
      } else {
        return "black";
      }
    },
    iconColor() {
      if (this.backgroundColor === "black") {
        return "white";
      } else {
        return "black";
      }
    },
  },
});
</script>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: 'Avenir', sans-serif;
}

/* add your footer background color here */
</style>
