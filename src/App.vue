<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { goToHash } from './data/helpers';

var scrollPosition = ref("0");
var showNav = ref(false);
var menuItems = ref<MenuItem[]>();
var accentColor = ref<string>("#3A9BD2");

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

function onLoaded(payload: OnLoadData): void {
  menuItems.value = payload.menuItems;
  accentColor.value = payload.accentColor ?? "#3A9BD2";
}

function onHover(e: any) {
  e.target.style.color = accentColor.value;
}

function onUnHover(e: any) {
  e.target.style.color = "white";
}
</script>

<template>
  <header>
    <Transition>
      <nav v-if="showNav">
        <RouterLink to="/" @focusin="onHover" @focusout="onUnHover" @mouseover="onHover" @mouseleave="onUnHover">
          Daniel Genkin
        </RouterLink>
        <div class="items">
          <a v-for="menuItem in menuItems" :key="menuItem.link" class="item" @click="goToHash(menuItem.link)"
            @focusin="onHover" @focusout="onUnHover" @mouseover="onHover" @mouseleave="onUnHover">
            {{ menuItem.label }}
          </a>
        </div>
        <span id="navScrollBar" :style="{ width: scrollPosition, backgroundColor: accentColor }"></span>
      </nav>
    </Transition>
  </header>
  <RouterView @scroll="handleScroll" @onLoaded="onLoaded" />
</template>

<style scoped>
.item {
  min-width: auto;
}

.items {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.items::-webkit-scrollbar {
  display: none;
}

.v-enter-active,
.v-leave-active {
  transition: all .5s ease;
  height: 40px;
  opacity: 1;
  overflow: hidden;
}

.v-enter-from,
.v-leave-to {
  height: 0;
  opacity: 0;
}

@media screen and (max-width: 500px) {

  /* TODO FIND A WAY TO MAKE THIS DYNAMIC BASED ON WHAT ITEMS ARE IN THE LIST */
  .items {
    justify-content: unset;
    /* breaks scrolling */
  }
}
</style>
