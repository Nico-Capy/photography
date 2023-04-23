<template>
  <footer class="text-center py-4 w-screen" :style="{ backgroundColor: backgroundColor }">
    <p :style="{ color: textColor }">© Nicola Corradini | Photographer, {{ currentYear }}</p>
    <font-awesome-icon
      :icon="faJediOrder"
      style="color: #000000; cursor: pointer; height: 3vh;"
      @click="redirectToVideo"
    />
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faJediOrder } from "@fortawesome/free-brands-svg-icons";

export default defineComponent({
  name: "Footer",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      backgroundColor: "transparent",
    };
  },
  methods: {
    redirectToVideo() {
      window.open("https://www.youtube.com/watch?v=usQTt-y2Idk", "_blank");
    },
  },
  computed: {
    faJediOrder() {
      return faJediOrder;
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
</style>