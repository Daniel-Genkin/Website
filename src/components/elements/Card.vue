<script setup lang="ts">
import RightPill from '@/components/elements/RightPill.vue';
withDefaults(defineProps<{
    center: boolean,
    caption: string,
    pillColor: string | undefined
}>(), {
    center: false,
    pillColor: undefined
});
</script>

<template>
  <div>
    <div id="card" :style="{
      justifyContent: center ? 'center' : 'start',
      marginLeft: pillColor ? '24px' : '0'
    }">
      <slot></slot>
      <h3 :style="{textAlign: center ? 'center' : 'left'}">{{ caption }}</h3>
      <right-pill v-if="pillColor" class="pill" :color="pillColor"/>
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
  left: -50px;
}
</style>
