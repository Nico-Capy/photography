<template>
  <footer class="flex flex-col lg:flex-row xl:flex-row 2xl:flew-row p-1 bg-transparent text-center w-fit drop-shadow-xl sm:fa-align-center" :style="{ backgroundColor: backgroundColor }">
    <a href="https://github.com/Nico-Capy/photography" target="_blank" rel="noopener noreferrer">
      <p class="px-4 py-1" style="color: white">© Nicola Corradini | <span v-html="formattedDate"></span></p>
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
      currentDate: this.getCurrentDate(),
      backgroundColor: "transparent",
    };
  },
  methods: {
    redirectToVideo() {
      window.open("https://www.youtube.com/watch?v=usQTt-y2Idk", "_blank");
    },
    getCurrentDate() {
      const date = new Date();
      const day = date.getDate();
      let daySuffix: string;

      if (day === 1 || day === 21 || day === 31) {
        daySuffix = "st";
      } else if (day === 2 || day === 22) {
        daySuffix = "nd";
      } else if (day === 3 || day === 23) {
        daySuffix = "rd";
      } else {
        daySuffix = "th";
      }

      const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      const formattedDate: string = formatter.format(date);
      const formattedDay = `${day}<sup>${daySuffix}</sup>`;

      const photographyText = this.$t('photography');

      return `${photographyText}. ${formattedDate.replace(day.toString(), formattedDay)}`;
    },
  },
  computed: {
    faJediOrder() {
      return faJediOrder;
    },
    formattedDate() {
      return this.getCurrentDate();
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
