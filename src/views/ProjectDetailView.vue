<script setup lang="ts">
import { ALL_PROJECTS, SITE_CONTENT } from '@/data/data';
import { PROJECT_DETAILS_CONTENT } from '@/data/projectDetails';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const projectDetailsContent = PROJECT_DETAILS_CONTENT;
const {
  previousScreenshot,
  nextScreenshot,
  galleryArrow,
  technologiesUsed: technologiesUsedLabel,
  history: historyLabel,
  awards: awardsLabel
} = PROJECT_DETAILS_CONTENT;
const selectedScreenshotIndex = ref(0);
const mediaAspectRatio = ref('16 / 9');
const isImageSpotlightOpen = ref(false);
const project = computed(() => ALL_PROJECTS.find((item) => item.pageLink === route.path));
const technologies = computed(() => project.value?.pageSections.technologiesUsed.join(', ') ?? '');
const features = computed(() => project.value?.features ?? project.value?.highlights.map((item) => item.caption).join('; ') ?? '');
const preview = computed(() => project.value?.pageSections.screenshots[selectedScreenshotIndex.value]);
const isVideo = computed(() => preview.value?.endsWith('.mp4'));
const projectButtons = computed(() => [...(project.value?.projectButtons ?? [])].sort((first, second) => Number(second.disabled) - Number(first.disabled)));

function changeScreenshot(direction: number) {
  const count = project.value?.pageSections.screenshots.length ?? 0;
  if (count === 0) return;
  selectedScreenshotIndex.value = (selectedScreenshotIndex.value + direction + count) % count;
}

function updateMediaAspectRatio(event: Event) {
  const media = event.currentTarget as HTMLImageElement | HTMLVideoElement;
  const width = media instanceof HTMLVideoElement ? media.videoWidth : media.naturalWidth;
  const height = media instanceof HTMLVideoElement ? media.videoHeight : media.naturalHeight;
  if (width > 0 && height > 0) mediaAspectRatio.value = `${width} / ${height}`;
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') isImageSpotlightOpen.value = false;
}

watch(() => route.path, () => {
  selectedScreenshotIndex.value = 0;
  isImageSpotlightOpen.value = false;
});

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
</script>

<template>
  <main v-if="project" class="project-page" :style="{ '--active-accent': project.accentColor }">
    <button class="backdrop" type="button" :aria-label="projectDetailsContent.close" @click="router.push('/')"></button>
    <article class="project-dialog surface-panel" role="dialog" aria-modal="true" :aria-labelledby="`title-${route.name?.toString()}`">
      <span class="accent-rail"></span>
      <header class="dialog-header">
        <div class="project-label"><span></span>{{ projectDetailsContent.label }}</div>
        <button class="close-button icon-button" type="button" :aria-label="projectDetailsContent.close" @click="router.push('/')">{{ projectDetailsContent.closeSymbol }}</button>
      </header>

      <div class="dialog-content">
        <aside class="project-visual surface-panel">
          <div class="character-stage">
            <img :src="`/${project.projectLogo}`" :alt="`${project.title} ${SITE_CONTENT.controls.logoSuffix}`" />
          </div>
          <div class="status-chip"><span></span>{{ project.projectButtons.some((button) => !button.disabled) ? projectDetailsContent.inProduction : projectDetailsContent.inDevelopment }}</div>
          <dl class="metadata">
            <div>
              <dt>{{ projectDetailsContent.technology }}</dt>
              <dd>{{ technologies }}</dd>
            </div>
            <div>
              <dt>{{ projectDetailsContent.platform }}</dt>
              <dd>{{ project.highlights[0]?.caption ?? projectDetailsContent.fallbackPlatform }}</dd>
            </div>
            <div>
              <dt>{{ projectDetailsContent.status }}</dt>
              <dd>{{ project.highlights[project.highlights.length - 1]?.caption ?? projectDetailsContent.fallbackStatus }}</dd>
            </div>
          </dl>
        </aside>

        <section class="project-information">
          <div class="title-group">
            <h1 :id="`title-${route.name?.toString()}`">{{ project.title }}</h1>
            <span></span>
          </div>
          <p class="overview">{{ project.description }}</p>

          <div v-if="preview" class="project-media">
            <div v-if="isVideo" class="project-media-stage" :style="{ aspectRatio: mediaAspectRatio }">
              <video
                :src="`/${preview}`"
                muted
                autoplay
                loop
                playsinline
                controls
                @loadedmetadata="updateMediaAspectRatio"
              ></video>
            </div>
            <button
              v-else
              class="project-media-stage project-media-trigger"
              type="button"
              :style="{ aspectRatio: mediaAspectRatio }"
              :aria-label="projectDetailsContent.openImageSpotlight"
              @click="isImageSpotlightOpen = true"
            >
              <img
                :src="`/${preview}`"
                :alt="`${project.title} ${SITE_CONTENT.controls.previewSuffix}`"
                @load="updateMediaAspectRatio"
              />
            </button>
          </div>
          <div v-if="project.pageSections.screenshots.length > 1" class="gallery-controls">
            <button
              class="gallery-arrow previous"
              type="button"
              :aria-label="previousScreenshot"
              @click="changeScreenshot(-1)"
            >
              <img :src="galleryArrow" alt="" />
            </button>
            <div class="media-dots">
              <button
                v-for="(_, index) in project.pageSections.screenshots"
                :key="index"
                type="button"
                :class="{ active: index === selectedScreenshotIndex }"
                :aria-label="`${projectDetailsContent.screenshotLabel} ${index + 1}`"
                @click="selectedScreenshotIndex = index"
              ></button>
            </div>
            <button
              class="gallery-arrow next"
              type="button"
              :aria-label="nextScreenshot"
              @click="changeScreenshot(1)"
            >
              <img :src="galleryArrow" alt="" />
            </button>
          </div>

          <div class="features">
            <h2>{{ projectDetailsContent.features }}</h2>
            <p>{{ features }}</p>
          </div>

          <div class="project-actions">
            <component
              :is="button.disabled ? 'span' : 'a'"
              v-for="button in projectButtons"
              :key="button.caption"
              :class="{ disabled: button.disabled }"
              :href="button.disabled ? undefined : button.link"
              :target="button.disabled ? undefined : '_blank'"
              :rel="button.disabled ? undefined : 'noreferrer'"
            >
              {{ button.caption }}
              <span v-if="!button.disabled" aria-hidden="true">{{ SITE_CONTENT.controls.projectActionArrow }}</span>
            </component>
          </div>
        </section>
      </div>

      <div class="project-detail-sections">
        <section v-if="project.pageSections.awards.length" class="project-detail-section">
          <h2>{{ awardsLabel }}</h2>
          <div class="project-awards">
            <article v-for="award in project.pageSections.awards" :key="`${award.year}-${award.title}`">
              <strong>{{ award.year }}</strong>
              <div>
                <h3>{{ award.title }}</h3>
                <p>{{ award.organization }}</p>
              </div>
            </article>
          </div>
        </section>

        <section v-if="project.pageSections.technologiesUsed.length" class="project-detail-section">
          <h2>{{ technologiesUsedLabel }}</h2>
          <div class="technology-list">
            <span v-for="technology in project.pageSections.technologiesUsed" :key="technology">{{ technology }}</span>
          </div>
        </section>

        <section v-if="project.pageSections.history.length" class="project-detail-section">
          <h2>{{ historyLabel }}</h2>
          <div class="history-list">
            <article v-for="entry in project.pageSections.history" :key="entry.year">
              <time>{{ entry.year }}</time>
              <ul>
                <li v-for="event in entry.events" :key="event">{{ event }}</li>
              </ul>
            </article>
          </div>
        </section>
      </div>
    </article>
  </main>
  <main v-else class="project-error">
    <p>{{ projectDetailsContent.notFound }}</p>
    <RouterLink to="/">{{ projectDetailsContent.returnHome }}</RouterLink>
  </main>
  <Teleport to="body">
    <div
      v-if="project && preview && !isVideo && isImageSpotlightOpen"
      class="image-spotlight"
      role="dialog"
      aria-modal="true"
      :aria-label="projectDetailsContent.openImageSpotlight"
      @click.self="isImageSpotlightOpen = false"
    >
      <img :src="`/${preview}`" :alt="`${project.title} ${SITE_CONTENT.controls.previewSuffix}`" />
      <button
        class="image-spotlight-close icon-button"
        type="button"
        :aria-label="projectDetailsContent.closeImageSpotlight"
        @click="isImageSpotlightOpen = false"
      >
        {{ projectDetailsContent.closeSymbol }}
      </button>
    </div>
  </Teleport>
</template>