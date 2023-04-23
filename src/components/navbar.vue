<template>
  <nav class="bg-black py-2 h-28 sm:h-14 md:h-14" style="height: 10vh;">
    <button class="text-white hover:bg-white hover:text-black px-4 m-2 ml-6" @click="showDrawer = true" :style="buttonStyle">
      Menu
    </button>
    <div class="drawer" v-if="showDrawer" :style="drawerStyle">
      <div class="drawer-buttons" :class="{'flex-col': isSmallScreen, 'flex-row': isLargeScreen}">
        <button class="px-4 py-1">Home</button>
        <button class="px-4 py-1">Galleries</button>
        <button class="px-4 py-1">About</button>
        <button class="close-button px-4 py-1" @click="showDrawer = false">X</button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';

export default defineComponent({
  setup() {
    const showDrawer = ref(false);
    const screenWidth = ref(window.innerWidth);
    watch(screenWidth, (newVal) => {
      if (newVal >= 992) {
        showDrawer.value = false;
      }
    });

    const buttonStyle = computed(() => {
      if (screenWidth.value >= 768) {
        return { height: '6vh' };
      } else {
        return { height: '16vh' };
      }
    });

    const drawerStyle = computed(() => {
      if (screenWidth.value >= 992) {
        return { width: '100vw', height: '6vh', left: 0, top: '2.5vh', maxHeight: 'calc(16vh - 2rem)' };
      } else {
        return { width: '100vw', height: '42vh', left: 0, top: 0, maxHeight: 'calc(42vh - 2rem)' };
      }
    });

    const isSmallScreen = computed(() => screenWidth.value < 992);
    const isLargeScreen = computed(() => screenWidth.value >= 992);

    window.addEventListener('resize', () => {
      screenWidth.value = window.innerWidth;
    });

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
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.drawer-buttons {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
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

@media screen and (min-width: 768px) and (max-width: 991px) {
  .drawer-buttons {
    flex-direction: column;
  }
}

@media screen and (min-width: 992px) {
  .drawer-buttons {
    flex-direction: row;
  }
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
    top: -42vh;
    left: 0;
    animation-name: slideFromTop;
  }

  .drawer-buttons {
    margin-right: 0.1rem;
  }
  .drawer-buttons button {
    font-size: 0.67rem;
    padding: 0.33rem 0.67rem;
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

@keyframes slideFromTop {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.navbar{
  font-family: 'Avenir', sans-serif;
}

</style>