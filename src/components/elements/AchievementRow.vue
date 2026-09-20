<script setup lang="ts">
defineProps<{
  item: AchievementDisplay
}>();
</script>

<template>
  <component
    :is="item.link ? 'a' : 'div'"
    class="achievement-row"
    :href="item.link"
    :target="item.link ? '_blank' : undefined"
    :rel="item.link ? 'noreferrer' : undefined"
  >
    <div class="achievement-card surface-panel accent-panel">
      <img :src="item.icon" alt="" />
      <div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.source }}</p>
      </div>
    </div>
    <strong>{{ item.year }}</strong>
  </component>
</template>
