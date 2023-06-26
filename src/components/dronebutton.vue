<template>
  <div class="flex justify-center items-center w-3/12">
    <a ref="droneButton" href="https://www.youtube.com/watch?v=ZrF7MEWojQ0" target="_blank" rel="noopener" class="text-2xl bg-black text-white py-2 px-4 transition duration-320 ease-in-out hover:text-black hover:bg-white m-4 drop-shadow-lg">
      {{ $t('dronevideo') }}
      <img src="/dronevideo.png" alt="Drone Video Screenshot" class="w-fit hidden transition duration-1600 ease-in-out" />
    </a>
  </div>
</template>

<script lang="ts">
  export default {
    name: "DroneButton",
  };
</script>

<style>
  body{
    font-family: 'Avenir', sans-serif;
  }

  a {
    text-decoration: none;
  }

  a:hover img {
    display: block;
  }

  .drop-shadow-lg {
      text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.4),
                   0px 0px 6px rgba(255, 255, 255, 0.4);
  }
</style>
