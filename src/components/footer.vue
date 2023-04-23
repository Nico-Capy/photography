<template>
  <footer class="text-center py-4 w-screen drop-shadow-xl" :style="{ backgroundColor: backgroundColor }">
    <p style="color: white">© Nicola Corradini | Photographer, {{ currentYear }}</p>
    <font-awesome-icon
      :icon="faJediOrder"
      style="color: white; cursor: pointer; height: 3vh;"
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
      backgroundColor: "black",
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
  },
});
</script>
<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  font-family: 'Avenir', sans-serif;
}
.drop-shadow-xl {
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.45), 0px 0px 10px rgba(255, 255, 255, 0.45);
}
</style>