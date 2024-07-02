<script setup lang="ts">
import LeftPill from '@/components/elements/LeftPill.vue';
withDefaults(defineProps<{
    center: boolean,
    caption: string,
    includeLeftPill: boolean
}>(), {
    center: false,
    includeLeftPill: false
});
</script>

<template>
  <div>
    <div id="card" :style="{
      justifyContent: center ? 'center' : 'start',
      marginLeft: includeLeftPill ? '24px' : '24px'
    }">
      <slot></slot>
      <h3>{{ caption }}</h3>

      <left-pill class="pill"/>
    </div>
  </div>
</template>

<style scoped>
#card {
  display: flex;
  flex-direction: column;
  background-color: #3D4041;
  border-radius: 25px;
  padding: 12px;
  margin: 24px;
  position: relative;
}

.pill {
  position: absolute;
  height: 250px;
  left: -130px;
}
</style>
