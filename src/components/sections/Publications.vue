<script setup lang="ts">
import BlogPost from '@/assets/icons/blog-post.vue';
import Paper from '@/assets/icons/paper.vue';
import Pill from '../elements/Pill.vue';
import TransitionIn from '../elements/TransitionIn.vue';

defineProps<{
  content: PublicationEntry[],
  color: string
}>();
</script>

<template>
  <div>
    <h1>Publications</h1>
    <div v-for="item in content" style="margin-bottom: 25px;">
      <transition-in transition="slide-left">
        <div class="rows">
          <pill
            class="verticalPill"
            :color="color"
            :half-height="false"
            :has-bottom-decor="false"/>

          <div class="cols fullWidth">
            <a :href="item.link" target="_blank" style="text-decoration: none; color: inherit;">
              <h2 :style="{color: color, margin: 0}">{{ item.title }}</h2>
            </a>
            <h3 :style="{ marginLeft: '12px', display: 'flex', gap: '8px' }">
              <paper v-if="item.type === 'paper'" color="white"/>
              <blog-post v-else-if="item.type === 'article'" color="white"/>
              <!-- TODO ADD OTHERS AS NECESSARY -->
              {{ item.location }}</h3>
            <p>{{ item.abstract }}</p>
          </div>
          <h1 class="date">{{ item.year }}</h1>
        </div>
      </transition-in>
    </div>
  </div>
</template>

<style scoped>

</style>
