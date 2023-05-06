<template>
  <div class="h-11/12 flex flex-col items-center justify-center bg-black text-white">
    <h2 class="text-3xl drop-shadow-lg m-6">Ooops, 404</h2>
    <p class="text-xl w-3/6 m-2 drop-shadow-lg">Hey! I'm sorry you ended up here, you weren't supposed to end up here; this is kind of awkward. I promise, I'm working on it. If I were you, I'd click on one of the menu items rather than refreshing or clicking "back".</p>
    <img :src="currentGifSrc" alt="Gif" class="h-96 w-auto" />
    <button @click="changeGif" class="m-2 py-2 px-4 bg-transparent text-white hover:text-black hover:bg-white focus:outline-none focus:shadow-outline">Amuse me, coder boy</button>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      currentGifIndex: 0,
      gifs: [
        "/gifs/heydave.gif",
        "/gifs/galafianakis.gif",
        "/gifs/michael.gif",
        "/gifs/steve.gif",
        "/gifs/joey.gif",
        "/gifs/jarjar.gif",
        "/gifs/pratt.gif",
        "/gifs/house.gif",
        "/gifs/ron.gif",
        "/gifs/pippin.gif",
        "/gifs/sid.gif",
        "/gifs/community.gif",
        "/gifs/homer.gif",
      ],
    };
  },
  computed: {
    currentGifSrc() {
      return this.gifs[this.currentGifIndex];
    },
  },
  methods: {
    changeGif() {
      this.currentGifIndex = (this.currentGifIndex + 1) % this.gifs.length;
    },
  },
};
</script>
<style>
h2 {
  font-family: 'Avenir', sans-serif;
}

.drop-shadow-lg {
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7),
               0px 0px 10px rgba(255, 255, 255, 0.7);
}
</style>