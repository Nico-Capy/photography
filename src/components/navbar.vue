<template>
  <nav class="bg-black py-2" style="height: 10vh;">
    <button class="menu-button" @click="showDrawer = true" :style="buttonStyle" v-if="isLargeScreen">Menu</button>
    <button class="hamburger-button" @click="showDrawer = true" :style="buttonStyle" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
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
    return { height: '6vh', margin: '1rem' };
  } else {
    return { height: '16vh', margin: '1rem' };
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

@media screen and (min-width: 768px) {
  .hamburger-button {
    padding: 0.75rem;
    top: 0rem;
    right: 0.75rem;
  }
}
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
  padding: 0.5rem;
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
  bottom: 0;
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
  .hamburger-button {
  margin-top: 12%;
  background-color: transparent;
  padding: 0.5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
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