<template>
  <footer class="flex flex-col lg:flex-row xl:flex-row 2xl:flew-row p-1 bg-transparent text-center w-fit drop-shadow-xl sm:fa-align-center" :style="{ backgroundColor: backgroundColor }">
    <a href="https://github.com/Nico-Capy/photography" target="_blank" rel="noopener noreferrer">
      <p class="px-4 py-1" style="color: white">© Nicola Corradini | {{ $t('photography') }}, {{ currentDate }}</p>
    </a>
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
      currentDate: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
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
  },
});
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.drop-shadow-xl {
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.45), 0px 0px 10px rgba(255, 255, 255, 0.45);
}
</style>