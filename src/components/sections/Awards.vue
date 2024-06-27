<script setup lang="ts">

defineProps<{
  content: Award[]
}>();
</script>

<template>
  <div>
    <div v-for="item in content">
      <div class="cols">
        <h2>{{ item.title }}</h2>
        <p>{{ item.organization }}</p>
        <h1>{{ item.year }}</h1>
      </div>
    </div>
  </div>
</template>

<style lag="scss" scoped>
.rows {
  display: flex;
  flex-direction: row;
}
.cols {
  display: flex;
  flex-direction: column;
}

</style>