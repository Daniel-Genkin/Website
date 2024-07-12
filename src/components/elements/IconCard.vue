<script setup lang="ts">
import Icon from './Icon.vue';

defineProps<{
    caption: string,
    icon: string,
    color: string
}>();

</script>

<template>
  <div>
    <div id="card" :style="{
      borderColor: color
    }">
      <icon :src="icon" class="cardIcon" :color="color" />
      <h3 style="text-align: center;">{{ caption }}</h3>
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
  justify-content: center;
  border-style: solid;
  border-width: 5px;
}

.pill {
  position: absolute;
  height: 250px;
  left: -50px;
}
</style>
