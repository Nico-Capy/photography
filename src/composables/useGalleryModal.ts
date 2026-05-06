import { Ref, ref } from "vue";

export type GalleryModalDirection = "left" | "right";

export function useGalleryModal(photosLength: Ref<number>, initialIndex = 0) {
  const showModal = ref(false);
  const selectedIndex = ref(initialIndex);

  const open = (index: number) => {
    selectedIndex.value = index;
    showModal.value = true;
  };

  const close = () => {
    showModal.value = false;
  };

  const showNext = () => {
    selectedIndex.value = (selectedIndex.value + 1) % photosLength.value;
  };

  const showPrevious = () => {
    selectedIndex.value = (selectedIndex.value + photosLength.value - 1) % photosLength.value;
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!showModal.value) return;

    switch (event.key) {
      case "ArrowRight":
        showNext();
        break;
      case "ArrowLeft":
        showPrevious();
        break;
      case "Escape":
        close();
        break;
    }
  };

  const attachKeyListener = () => {
    document.addEventListener("keydown", handleKeyDown);
  };

  const detachKeyListener = () => {
    document.removeEventListener("keydown", handleKeyDown);
  };

  return {
    showModal,
    selectedIndex,
    open,
    close,
    showNext,
    showPrevious,
    attachKeyListener,
    detachKeyListener,
  };
}

