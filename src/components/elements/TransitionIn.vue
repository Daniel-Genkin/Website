<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

defineProps<{
    transition: string
}>();

const showContent = ref(false);
const root = ref();

let observer: IntersectionObserver | undefined;

onMounted(() => {
  observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          showContent.value = true;
          observer?.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '20px',
        threshold: 0.3
      }
    )

    observer.observe(root.value);
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <div ref="root" id="root">
    <Transition :name="transition">
      <slot v-if="showContent"></slot>
    </Transition>
  </div>
</template>

<style scoped>
#root {
  width: 100%;
  height: 100%;
  min-width: 20px;
  min-height: 20px;
}
</style>
