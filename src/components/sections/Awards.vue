<script setup lang="ts">
import Pill from '../elements/Pill.vue';
import TransitionIn from '../elements/TransitionIn.vue';

defineProps<{
  content: AwardEntry[],
  color: string
}>();
</script>

<template>
  <div>
    <h1>Awards</h1>
    <div v-for="item in content" style="margin-bottom: 25px;">
      <transition-in transition="slide-left">
        <div class="rows">
          <pill
            class="verticalPill"
            :color="color"
            :half-height="false"
            :has-bottom-decor="false"/>
          <div class="cols fullWidth">
            <h2 :style="{color: color, margin: 0}">{{ item.title }}</h2>
            <h3>{{ item.organization }}</h3>
          </div>
          <h1 class="date">{{ item.year }}</h1>
        </div>
      </transition-in>
    </div>
  </div>
</template>

<style scoped>

</style>