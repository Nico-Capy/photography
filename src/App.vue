<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../src/components/navbar.vue'
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