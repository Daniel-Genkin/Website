<script setup lang="ts">

</script>

<template>
    <div class="oddBackground">
      <slot></slot>
    </div>
</template>

<style scoped>
.oddBackground {
  width: 100%;
  margin-bottom: 100px;
  margin-top: 75px;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #303030;
  clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 92%);
}

@media screen and (max-width: 700px) {
  .oddBackground {
    clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
  }
}

@media screen and (max-width: 500px) {
  .oddBackground {
    clip-path: polygon(0 0, 100% 2%, 100% 100%, 0 98%);
  }
}
</style>
