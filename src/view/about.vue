<template>
  <div class="flex flex-col items-center justify-center">
    <h2 class="text-3xl text-white drop-shadow-xl m-6 mb-0">About</h2>
  </div>

  <div class="mx-auto flex flex-row m-2 mt-6 w-10/12 items-center text-center">
    <h3 class="text-3xl text-white indent-14 drop-shadow-xl">Hi, I'm</h3>
    <a href="https://www.youtube.com/watch?v=5rr0zAtdEvw" target="_blank" rel="noopener noreferrer">
      <h3 class="text-3xl text-black bg-white px-3 ml-6 shadow cursor-pointer">Nico</h3>
    </a>
  </div>

  <div class="mx-auto flex flex-row w-4/5 justify-center align-center">
    <div class="flex flex-col text-white drop-shadow-xl m-2">
      <p class="text-xl p-4">I'm a developer, photographer, drone pilot, videographer, and brewer. Sometimes, I merge these pursuits. Behold, an online photo gallery!</p>
      <br />
      <br />
      <p class="text-xl p-4">Photography was not my calling. I stumbled into it as a means to escape the tedium of school. But I realized that the answer was to innovate. And experiment, I did. From drones to pinhole lenses, from infrared to analog, from street photography to studio portraits — I explored it all. Suffice to say, I reveled in the thrill of discovery.</p>
    </div>
  </div>

  <div class="flex justify-center align-center">
    <video src="/nico.mp4" alt="Admiral Nico, flying his drone" class="w-3/5 justify-center align-center m-2 mb-20" preload='auto' autoplay loop playsinline muted></video>
  </div>
</template>

<style>
  h2, p {
    font-family: 'Avenir', sans-serif;
  }
  
  .drop-shadow-lg {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.4), 0px 0px 6px rgba(255, 255, 255, 0.4);
  }
  
  .shadow {
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  }
  
  /* Hide the video controls */
  video::-webkit-media-controls {
    display:none !important;
  }
  video::-webkit-media-controls-enclosure {
    display:none !important;
  }
  video::-webkit-media-controls-overlay-play-button {
    display:none !important;
  }
  video::-webkit-media-controls-play-button {
    display:none !important;
  }
  video::-webkit-media-controls-start-playback-button {
    display:none !important;
  }
  video::-webkit-media-controls-current-time-display {
    display:none !important;
  }
  video::-webkit-media-controls-time-remaining-display {
    display:none !important;
  }
  video::-webkit-media-controls-mute-button {
    display:none !important;
  }
  video::-webkit-media-controls-volume-slider-container {
    display:none !important;
  }
  video::-webkit-media-controls-fullscreen-button {
    display:none !important;
  }
</style>
