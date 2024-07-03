<script setup lang="ts">
import { onMounted, onUnmounted, ref, Transition } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

var scrollPosition = ref("0");
var showNav = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll(event: Event): void {
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - (window.innerHeight);

  if (!showNav.value && currentScroll > 200) {
    showNav.value = true;
  } else if (showNav.value && currentScroll <= 200) {
    showNav.value = false;
  }

  scrollPosition.value = `${100 / scrollHeight * currentScroll}%`;
}
</script>

<template>
  <header>
    <Transition>
      <nav ref="nav" v-if="showNav">
        <RouterLink to="/">Daniel Genkin</RouterLink>
        <span style="width: 100%"></span>
        <a href="#projects">Projects</a>
        <a href="#work-experience">Work Experience</a><!--TODO GENERATE THESE FROM THE PAGE-->
        <a href="#education">Education</a>
        <a href="#awards">Awards</a>
        <span id="navScrollBar" :style="{width: scrollPosition}"></span>
      </nav>
    </Transition>
  </header>
  <RouterView @scroll="handleScroll" />
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all .5s ease;
  height: 40px;
  opacity: 1;
  overflow: hidden;
}

.v-enter-from,
.v-leave-to{
  height: 0;
  opacity: 0;
}
</style>
