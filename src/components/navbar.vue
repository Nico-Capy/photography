<template>
  <nav class="bg-black py-2">
    <button class="text-white hover:bg-white hover:text-black px-1 py-1 m-3 p-3 ml-6" @click="showDrawer = true" :style="buttonStyle">
      Menu
    </button>
    <div class="drawer" v-if="showDrawer" :style="drawerStyle">
      <div class="drawer-buttons" :class="{'flex-col': isSmallScreen, 'flex-row': isLargeScreen}">
        <button>Home</button>
        <button>Galleries</button>
        <button>About</button>
        <button class="close-button" @click="showDrawer = false">X</button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  setup() {
    const showDrawer = ref(false);

    const buttonStyle = computed(() => {
      if (window.innerWidth >= 768) {
        return { height: '6vh' };
      } else {
        return { height: '16vh' };
      }
    });

    const drawerStyle = computed(() => {
      if (window.innerWidth >= 992) {
        return { width: '100vw', height: '6vh', left: 0, top: '2.5vh' };
      } else {
        return { width: '100vw', height: '42vh', left: 0, top: 0 };
      }
    });

    const isSmallScreen = computed(() => window.innerWidth < 992);
    const isLargeScreen = computed(() => window.innerWidth >= 992);

    return {
      showDrawer,
      buttonStyle,
      drawerStyle,
      isSmallScreen,
      isLargeScreen,
    };
  },
});
</script>

<style scoped>
.close-button {
  margin: 1rem;
  padding: 0.5rem 0.5rem;
  font-size: 1rem;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 0px;
}

.close-button:hover {
  background-color: white;
  color: black;
  cursor: pointer;
  transition: background-color 1.6s ease, color 1.6s ease;
}

button {
  background-color: transparent;
  color: white;
  transition: background-color 1.6s ease, color 1.6s ease;
}

button:hover {
  background-color: White;
  color: black;
  transition: background-color 1.6s ease, color 1.6s ease;
}

.drawer button {
  margin: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.drawer-buttons {
  display: flex;
  justify-content: flex-end;
}

.drawer {
  position: fixed;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation-duration: 3.2s;
  animation-timing-function: ease;
}

@media screen and (min-width: 1200px) {
  .drawer {
    width: 100vw;
    height: 16vh;
    top: 2.5vh;
    left: 0;
    animation-name: slideFromLeft;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .drawer {
    width: 100vw;
    height: 6vh;
    top: 2.5vh;
    left: 0;
    animation-name: slideFromLeft;
  }
}

@media screen and (max-width: 991px) {
  .drawer {
    background-color: black;
    width: 100vw;
    height: 42vh;
    top: 0;
    left: 0;
    animation-name: slideFromTop;
  }
}

@keyframes slideFromLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
navbar{
  font-family: 'Avenir', sans-serif;
}
</style>