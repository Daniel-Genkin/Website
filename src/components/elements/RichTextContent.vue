<script setup lang="ts">
defineProps<{
  blocks: RichTextBlock[]
}>();
</script>

<template>
  <div class="rich-text">
    <template v-for="(block, blockIndex) in blocks" :key="blockIndex">
      <p v-if="block.type === 'paragraph'">
        <component
          :is="part.href ? 'a' : 'span'"
          v-for="(part, partIndex) in block.parts"
          :key="partIndex"
          :href="part.href"
          :target="part.href ? '_blank' : undefined"
          :rel="part.href ? 'noreferrer' : undefined"
        >{{ part.text }}</component>
      </p>
      <ul v-else>
        <li v-for="item in block.items" :key="item">{{ item }}</li>
      </ul>
    </template>
  </div>
</template>