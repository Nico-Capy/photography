<template>
  <LanguageSwitcher />
  <Navbar />
  <router-view />
  <Footer />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import axios from 'axios';
  import Navbar from './components/navbar.vue'
  import DroneButton from "../src/components/dronebutton.vue"
  import Footer from '../src/components/footer.vue'
  import Home from "../src/view/home.vue"
  import About from "../src/view/about.vue"
  import Drone from '../src/view/drone.vue'
  import Portraits from "../src/view/studio.vue"
  import Nautre from "../src/view/animals.vue"
  import Analog from '../src/view/analog.vue'
  import Galleries from "../src/view/galleries.vue"
  import Infrared from '../src/view/infrared.vue'
  import NotFound from "../src/view/notfound.vue"
  import Others from "../src/view/others.vue"
  import Street from '../src/view/street.vue'
  import Pinhole from "../src/view/pinhole.vue"
  import Random from "../src/view/random.vue"
  import LanguageSwitcher from '../src/components/LanguageSwitcher.vue'

  export default defineComponent({
    components: {
      LanguageSwitcher,
      Navbar,
      Footer,
      Home,
      About,
      Drone,
      Portraits,
      Nautre,
      Analog,
      Galleries,
      Infrared,
      NotFound,
      Others,
      Street,
      Pinhole,
      Random,
      DroneButton
    },
    methods: {
    async uploadPhoto(gallery, photo, metadata) {
      const formData = new FormData();
      formData.append('photo', photo);
      for (let key in metadata) {
        formData.append(key, metadata[key]);
      }

      const response = await axios.post(`/api/photos/${gallery}`, formData);
      return response.data;
    },
    async updatePhotoMetadata(gallery, id, metadata) {
      const response = await axios.put(`/api/photos/${gallery}/${id}`, metadata);
      return response.data;
    },
    async login(username, password) {
      const response = await axios.post('/login', { username, password });
      const token = response.data;

      // Save the token in local storage or in a Vuex store
      localStorage.setItem('jwt', token);

      // Set the default Authorization header
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }
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
