<template>
  <div
    class="h-11/12 flex flex-col items-center justify-center bg-black text-white"
  >
    <h2 class="text-3xl drop-shadow-lg m-6">Ooops, 404</h2>
    <p class="text-xl w-3/6 m-2 drop-shadow-lg">{{ $t("error") }}</p>
    <button
      @click="changeGif"
      class="drop-shadow-lg m-2 py-2 px-4 bg-white text-black hover:text-white hover:bg-transparent focus:outline-none focus:shadow-outline text-xl"
    >
      Amuse me, coder boy
    </button>
    <img :src="currentGifSrc" alt="Gif" class="h-96 w-auto" />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      currentGifIndex: 0,
      gifs: [
        "/heydave.gif",
        "/roy.gif",
        "/galafianakis.gif",
        "/michael.gif",
        "/steve.gif",
        "/joey.gif",
        "/jarjar.gif",
        "/moss.gif",
        "/pratt.gif",
        "/house.gif",
        "/ron.gif",
        "/pippin.gif",
        "/sid.gif",
        "/community.gif",
        "/homer.gif",
        "/jack.gif",
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
h2,
p {
  font-family: "Avenir", sans-serif;
}

.drop-shadow-lg {
  text-shadow:
    0px 0px 10px rgba(255, 255, 255, 0.7),
    0px 0px 10px rgba(255, 255, 255, 0.7);
}
</style>
