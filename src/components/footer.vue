<template>
  <footer
    class="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row p-0 bg-transparent text-center text-sm w-full drop-shadow-xl mt-3"
    :style="{ backgroundColor: backgroundColor }"
  >
    <a
      href="https://youtu.be/ZrF7MEWojQ0?si=5krp37w1AMIZ255t"
      target="_blank"
      rel="noopener noreferrer"
      class="px-4 py-1 text-white hover:opacity-80 transition-opacity"
    >
      © Nicola Corradini | <span v-html="formattedDate"></span>
    </a>

    <font-awesome-icon
      :icon="faJediOrder"
      class="ml-4 text-white cursor-pointer"
      style="height: 3vh"
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
  components: { FontAwesomeIcon },
  data() {
    return {
      backgroundColor: "transparent",
    };
  },
  computed: {
    faJediOrder() {
      return faJediOrder;
    },
    formattedDate() {
      const date = new Date();
      const day = date.getDate();
      let daySuffix: string;

      if ([1, 21, 31].includes(day)) daySuffix = "st";
      else if ([2, 22].includes(day)) daySuffix = "nd";
      else if ([3, 23].includes(day)) daySuffix = "rd";
      else daySuffix = "th";

      const options: Intl.DateTimeFormatOptions = {
        month: "long",
        day: "numeric",
        year: "numeric",
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      const formattedDate: string = formatter.format(date);
      const formattedDay = `${day}<sup>${daySuffix}</sup>`;

      return formattedDate.replace(/,/g, "").replace(day.toString(), formattedDay);
    },
  },
  methods: {
    redirectToVideo() {
      // Open YouTube video
      window.open("https://www.youtube.com/watch?v=usQTt-y2Idk", "_blank");
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
  text-shadow:
    0px 0px 10px rgba(255, 255, 255, 0.45),
    0px 0px 10px rgba(255, 255, 255, 0.45);
}
</style>
