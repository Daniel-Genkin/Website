<script setup lang="ts">
withDefaults(defineProps<{
  extrasEnabled?: boolean
  imageSrc?: string
  includeBackground?: boolean
}>(), {
  extrasEnabled: false, // TODO IMPLEMENT THEM. THESE ARE THE 2 EXTRA PILLS. ONE ABOVE AD ONE BELOW THE IMAGE
  imageSrc: undefined,
  includeBackground: false
});
</script>

<template>
  <div>
    <div id="root">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 1077">
        <defs>
          <clipPath id="clip">
            <path fill="red" d="M255.8 384.6C437 264.7 426.8 235 541 235.8c193-3.7 229.4 178.3 226.4 260.4l-1.7 636c-.5 149.7-72.9 267.6-224.7 266.9-118-.6-191.9-118.2-191.9-118.2l-465.6-621.6s367.9-270.6 372.4-275v.3" style="transform-origin:921.278px 554.479px" transform="rotate(37 0 0)"/>
          </clipPath>
          <filter id="background">
            <!-- <feFlood flood-color="white" result="bg"  /> -->
            <feImage preserveAspectRatio="none" result="bg" xlink:href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1024 1024' %3E%3Crect fill='white' x='55px' y='0' rx='60px' ry='60px' width='89%' height='100%'/%3E%3C/svg%3E"/>
            <feMerge>
                <feMergeNode in="bg"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path fill="#323335" fill-opacity=".7" d="M279.7 503.3c-.5-185.2 118.6-284.9 243.2-284.2 165.2.7 250.3 129 250.3 284.2l-1.6 636c0 171.3-89 293.3-248.6 291.1-129.8-2.2-245.1-119.8-245.1-291.1 1.4-425.2 1.8-672.4 1.8-636Z" style="transform-origin:923.337px 584.043px" transform="rotate(37 0 0)"/>
        <path fill="#6BB4DD" d="M297 505.4c.6-144.6 110.5-261.3 224.7-260.6 155.7.6 227 117.2 226.5 260.4l-1.7 636c-.6 149.8-73 267.6-224.8 267-118-.7-227-118.4-226.4-267l1.7-636v.2Z" style="transform-origin:925.133px 587.808px" transform="rotate(37 0 0)"/>
        <path fill="#3A9BD2" d="M331.8 507.3c.5-125.4 95.9-226.7 190.8-226.2 139.3.6 196.3 101.6 195.8 225.2l-1.7 636c-.5 126.3-58.4 228.8-194.7 228.2-98-.5-192.4-102.7-192-228.2l1.8-635Z" style="transform-origin:927.77px 586.156px" transform="rotate(37 0 0)"/>
        
        <image width="65%" y="53%" x="50px" v-if="imageSrc && includeBackground" :href="imageSrc" clip-path="url(#clip)" filter="url(#background)"/>
        <image height="90%" y="10%" v-else-if="imageSrc" :href="imageSrc" clip-path="url(#clip)"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
#root {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: end;
  overflow: hidden;
}

svg {
  position: relative;
  top: -55px;
  right: -40px;
  height: 100%;
  z-index: -1;
} 

.background {
  display: block;
  background-color: #E9E9E9;
  border-radius: 25px;
  padding: 12px;
}
</style>
