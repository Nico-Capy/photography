<template>
  <footer
    class="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row p-0 bg-transparent text-center text-sm w-full drop-shadow-xl mt-3"
    :style="{ backgroundColor }"
  >
    <a
      href="https://youtu.be/ZrF7MEWojQ0?si=fgYxN05eCXV8_f5S"
      target="_blank"
      rel="noopener noreferrer"
      class="px-4 py-1 text-white no-underline hover:opacity-80 transition-opacity"
    >
      © Nicola Corradini | <span v-html="formattedDate"></span>
    </a>
    <font-awesome-icon
      :icon="faJediOrder"
      class="text-white cursor-pointer h-[3vh]"
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
    return { backgroundColor: "transparent" };
  },
  computed: {
    formattedDate(): string {
      const date = new Date();
      const day = date.getDate();
      const suffix =
        day === 1 || day === 21 || day === 31
          ? "st"
          : day === 2 || day === 22
          ? "nd"
          : day === 3 || day === 23
          ? "rd"
          : "th";

      const options: Intl.DateTimeFormatOptions = { month: "long", year: "numeric" };
      const monthYear = date.toLocaleDateString("en-US", options);
      return `${day}<sup>${suffix}</sup> ${monthYear}`;
    },
    faJediOrder() {
      return faJediOrder;
    },
  },
  methods: {
    redirectToVideo() {
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
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.45), 0 0 10px rgba(255, 255, 255, 0.45);
}
</style>