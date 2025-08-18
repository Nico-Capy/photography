<template>
  <LanguageSwitcher />
  <Navbar />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";

export default defineComponent({
  components: {
    LanguageSwitcher,
    Navbar,
    Footer,
  },
});
</script>

<style>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
