<template>
  <div class="flex justify-center items-center w-3/12 mb-10 p-6">
    <a
      ref="droneButton"
      href="https://www.youtube.com/watch?v=ZrF7MEWojQ0"
      target="_blank"
      rel="noopener"
      class="text-2xl bg-black text-white py-2 px-4 transition duration-600 ease-in-out hover:text-black hover:bg-white drop-shadow-lg"
    >
      {{ $t('dronevideo') }}
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: "DroneButton",
};
</script>

<style>
body {
  font-family: 'Avenir', sans-serif;
}

a {
  text-decoration: none;
}

.drop-shadow-lg {
  text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.4),
    0px 0px 6px rgba(255, 255, 255, 0.4);
}
</style>
