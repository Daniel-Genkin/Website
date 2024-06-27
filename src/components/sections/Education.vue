<script setup lang="ts">

defineProps<{
  content: Education[]
}>();
</script>

<template>
  <div>
    <div v-for="item in content">
      <div class="cols">
        <h3>{{ item.startingDate }} - {{ item.endingDate }}</h3>
        <ul>
          <li v-for="achievement in item.achievements" :key="achievement">
            {{ achievement }}
          </li>
        </ul>
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