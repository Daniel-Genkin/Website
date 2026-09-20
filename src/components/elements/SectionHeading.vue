<script setup lang="ts">
defineProps<{
  section: SiteSection
}>();
</script>

<template>
  <header class="section-heading">
    <img :src="section.icon" alt="" />
    <h2 :id="section.id">{{ section.title }}</h2>
  </header>
</template>