<script setup lang="ts">
withDefaults(defineProps<{
    color: string,
    hasBottomDecor: boolean
}>(), {
    color: "#3A9BD2",
    hasBottomDecor: false
});
</script>

<template>
  <div>
    <div class="pill" 
         :style="{
             backgroundColor: color,
             borderColor: `darken(${color}, 10%)`
         }">
         <slot ></slot>
    </div>
    <div v-if="hasBottomDecor" 
         class="pill decor" 
         :style="{
             backgroundColor: color,
             borderColor: `darken(${color}, 10%)`
         }">
    </div>
</div>
</template>

<style scoped>
.pill {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 7px solid #353535a8;
  outline: 8px solid #2c2d2e;
  padding: 8px;
  height: 100%;
  width: 100%;
  color: rgba(255, 255, 255, 0.739);
  font-size: 1.5rem;
  margin: 12px;
  border-radius: 100vmax;
}

.decor {
  height: 45px;
  width: 60%;
  margin-left: 20%;
}
</style>
