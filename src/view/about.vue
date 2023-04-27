<template>
    <div class="flex flex-col items-center justify-center">
      <h2 role="heading" class="text-3xl text-white drop-shadow-xl m-6 mb-0">About</h2>
    </div>
    <div class="flex flex-row text-white m-0 p-4">
        <h3 class="text-3xl indent-14 drop-shadow-xl">Hi, I'm</h3>
        <h3 class="text-3xl text-black bg-white px-3 ml-2 shadow">Nico</h3>
    </div>
    <div class="flex flex-col text-white drop-shadow-xl m-6 mt-0">
        <p class="text-xl p-4 indent-4">I'm a developer, photographer, drone pilot, videographer, and brewer. Sometimes, I merge these pursuits. Behold, an online photo gallery!</p>
            <br/>
            <br/>
        <p class="text-xl p-4 indent-4">Photography was not my calling. I stumbled into it as a means to escape the tedium of school. But I realized that the answer was to innovate. And experiment, I did. From drones to pinhole lenses, from infrared to analog, from street photography to studio portraits — I explored it all. Suffice to say, I reveled in the thrill of discovery.</p>
    </div>
    <div>
    <div class="flex justify-center align-center">
      <img src="../assets/DJI_0970.jpg" alt="Admiral Nico, flying his drone" class="w-2/4 justify-center align-center m-2" />
    </div>
  </div>
</template>

<style>
 h2, p {
   font-family: 'Avenir', sans-serif;
 }

  .drop-shadow-lg {
      text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.4),
                   0px 0px 6px rgba(255, 255, 255, 0.4);
  }

  .shadow{
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  }
</style>