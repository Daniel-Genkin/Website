<script setup lang="ts">

const props = defineProps<{
  technologies: TechnologyEntry[],
  color: string
}>();

function onHover(e: any) {
  e.target.style.borderColor = props.color;
}

function onUnHover(e: any) {
  e.target.style.borderColor = "transparent";
}

</script>

<template>
  <div>
    <h1>Techologies Used</h1>
    <div class="techGrid">
      <div 
        v-for="tech in technologies" 
        :key="tech.technology"
        class="card"
        :data-title="tech.technology"
        @mouseover="onHover"
        @mouseleave="onUnHover">
        <img :src="tech.icon" class="icon" />
    </div>
    </div>
  </div>
</template>

<style scoped>
.techGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  max-width: 100%;
  overflow-x: hidden;
}

.icon {
  object-fit: contain;
  width: 150px;
  height: 150px;
  margin-left: 25px;
}

.label {
  text-align: center;
  visibility: hidden;
}

.card {
  height: 200px;
  width: 200px;
  margin: 24px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  clip-path: polygon(30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%, 0 30%);
  border: 12px solid transparent;
  border-left-style: double;
  border-right-style: double;
  border-radius: 60px;
}

[data-title]:hover:after {
    opacity: 1;
    transition: all 0.3s ease;
    visibility: visible;
}
[data-title]:after {
    content: attr(data-title);
    color: #cecece;
    font-size: 150%;
    padding: 1px 5px 2px 5px;
    text-align: center;
    opacity: 0;
    z-index: 99999;
    visibility: hidden;
}
[data-title] {
    position: relative;
}
</style>