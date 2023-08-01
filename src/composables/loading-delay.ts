import { ref, watch, type Ref } from "vue";

export const useLoadingDelay = (isLoading: Ref<boolean>, delay: number) => {
  const isLoadingWithDelay = ref(true);

  watch(
    () => isLoading.value,
    (loading: boolean) => {
      if (!loading) {
        setTimeout(() => {
          isLoadingWithDelay.value = false;
        }, delay);
      }
    }
  );

  return { isLoadingWithDelay };
};
