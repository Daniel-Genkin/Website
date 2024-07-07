<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const props = defineProps<{
    src: string,
    color: string
}>();

const loadedSVG = defineAsyncComponent(() => import(`@/assets/icons/${props.src}.vue`));

</script>
<template>
   <loadedSVG :color="color" />
</template>

<style scoped>
svg {
    height: 100%;
    width: 100%;
}
</style>