<script setup lang="ts">
withDefaults(defineProps<{
    color: string,
    leftRounded: boolean,
    rightRounded: boolean,
}>(), {
    color: "#3A9BD2",
    leftRounded: true,
    rightRounded: true
});
</script>

<template>
  <div>
    <div id="pill" 
        :style="{
            backgroundColor: color, 
            borderTopLeftRadius: leftRounded ? '100vmax' : '0',
            borderBottomLeftRadius: leftRounded ? '100vmax' : '0',
            borderTopRightRadius: rightRounded ? '100vmax' : '0',
            borderBottomRightRadius: rightRounded ? '100vmax' : '0',
            marginLeft: leftRounded ? '24px' : '-12px',
            marginRight: rightRounded ? '24px' : '-12px'
        }">
        <slot ></slot>
    </div>
  </div>
</template>

<style scoped>
#pill {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 12px solid rgba(255, 255, 255, 0.25);
  outline: 8px solid rgba(176, 176, 176, 0.25);
  padding: 8px;
  height: 100%;
  width: 100%;
  color: rgba(255, 255, 255, 0.739);
  font-size: 1.5rem;
}
</style>
