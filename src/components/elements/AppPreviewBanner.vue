<script setup lang="ts">
import StraightPill from '@/components/elements/StraightPill.vue';
defineProps<{
    icon: string,
    color: string
}>();
</script>

<template>
  <div id="container">
    <div class="pillHolder">
      <straight-pill :color="color" class="pill large"></straight-pill>
      <straight-pill :color="color" class="pill small"></straight-pill>
      <straight-pill :color="color" class="pill large"></straight-pill>
      <straight-pill :color="color" class="pill small"></straight-pill>
      <straight-pill :color="color" class="pill large"></straight-pill>
      <straight-pill :color="color" class="pill small"></straight-pill>
      <straight-pill :color="color" class="pill large"></straight-pill>
      <straight-pill :color="color" class="pill small"></straight-pill>
      <straight-pill :color="color" class="pill large"></straight-pill>
    </div>
    <img id="logo" :src="icon" />
  </div>
</template>

<style scoped>
#container {
  position: relative;
  height: 450px;
  width: 30%;
  z-index: -1;
}

#logo {
  position: absolute;
  top: 65px;
  left: 65px;
  height: auto;
  width: 75%;
  background-color: #1e1e1e;
  border-radius: 50px;
  box-shadow: 0 0 0px 7px #1e1e1e;
}

.pillHolder {
  position: absolute;
  left: -60px;
  top: -200px;
  column-count: 3;
  transform: rotate(40deg);
  -webkit-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  width: 250px;
  overflow: hidden;
}

.pill {
  margin: 35px 12px;
}

.large {
  height: 350px;
}

.small {
  height: 250px;
}
</style>
