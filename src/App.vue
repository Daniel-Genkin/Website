<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

var scrollPosition = ref("0");

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll(event: Event): void {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - (window.innerHeight);

  scrollPosition.value = `${100 / scrollHeight * currentScroll}%`;
  console.log(scrollPosition.value);
}
</script>

<template>
  <header>
    <nav ref="nav">
      <RouterLink to="/">Daniel Genkin</RouterLink>
      <span style="width: 100%"></span>
      <RouterLink to="/#Projects">Projects</RouterLink>
      <RouterLink to="/#WorkExperience">WorkExperience</RouterLink>
      <RouterLink to="/#Education">Education</RouterLink>
      <RouterLink to="/#Awards">Awards</RouterLink>
      <RouterLink to="/#Contact">Contact</RouterLink>
      <span id="navScrollBar" :style="{width: scrollPosition}"></span>
    </nav>
  </header>
  <RouterView @scroll="handleScroll" />
</template>

<style scoped>

</style>
