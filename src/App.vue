<template>
  <Navbar aria-label="Navigation" />
  <router-view aria-label="Page content" />
  <Footer aria-label="Footer" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/navbar.vue'
import Footer from '../src/components/footer.vue'
import Home from "../src/view/home.vue"

export default defineComponent({
  components: {
    Navbar,
    Footer,
    Home,
  },
})
</script>
<style>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>