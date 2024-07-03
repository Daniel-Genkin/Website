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
    <svg width="100%" height="100%" viewBox="0 0 169 257" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M159.336 149.118C170.269 139.597 171.626 122.765 162.367 111.523C153.108 100.28 136.739 98.8849 125.805 108.406L9.17709 209.968C-1.7562 219.489 -3.1134 236.321 6.14573 247.563C15.4048 258.806 31.774 260.201 42.7073 250.68L159.336 149.118Z" :fill="color" fill-opacity=".7" filter="brightness(105%) saturate(1)"/>
      <path d="M43.1938 6.31939C32.2604 -3.20146 15.8913 -1.8058 6.63223 9.4367C-2.62682 20.6792 -1.26951 37.5112 9.66384 47.0321L126.293 148.593C137.226 158.114 153.595 156.719 162.854 145.476C172.113 134.234 170.756 117.402 159.823 107.881L43.1938 6.31939Z" :fill="color" fill-opacity=".7" filter="brightness(105%) saturate(1)"/>
      <path d="M155.909 144.083C163.931 137.118 164.927 124.805 158.133 116.581C151.339 108.357 139.329 107.336 131.307 114.301L45.7335 188.595C37.7114 195.56 36.7156 207.873 43.5093 216.097C50.303 224.321 62.3135 225.342 70.3355 218.377L155.909 144.083Z" :fill="color"/>
      <path d="M70.6925 39.6227C62.6704 32.6581 50.6599 33.679 43.8662 41.9031C37.0726 50.1272 38.0685 62.4401 46.0906 69.4048L131.665 143.699C139.687 150.663 151.697 149.642 158.491 141.418C165.284 133.194 164.289 120.881 156.266 113.917L70.6925 39.6227Z" :fill="color"/>
    </svg>
  </div>
</template>

<style scoped>
svg {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin-left: 24px;
  margin-right: 12px;
}
</style>
