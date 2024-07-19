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
      <h3 class="caption">{{ caption }}</h3>
    </div>
  </div>
</template>

<style scoped>
.cardIcon {
  height: 65%;
}
.caption {
  margin: 0;
  text-align: center;
}
#card {
  background-color: #3D4041;
  padding: 12px;
  margin: 24px;
  border-radius: 25px;
  border-style: solid;
  border-width: 5px;
  height: 100%;
}
</style>
