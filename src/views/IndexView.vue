<script setup lang="ts">
import AchievementRow from '@/components/elements/AchievementRow.vue';
import HeroParticles from '@/components/elements/HeroParticles.vue';
import RichTextContent from '@/components/elements/RichTextContent.vue';
import SectionHeading from '@/components/elements/SectionHeading.vue';
import { ACHIEVEMENTS, ALL_PROJECTS, EDUCATION, ENTREPRENEURSHIP_CONTENT, HOME_SECTIONS, PROJECT_ORDER, SITE_CONTENT, WORK_EXPERIENCE } from '@/data/data';
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

const showAllAchievements = ref(false);
const achievementExpansionContent = ref<HTMLElement>();
const featuredAchievements = computed(() => ACHIEVEMENTS.slice(0, 4));
const additionalAchievements = computed(() => ACHIEVEMENTS.slice(4));
const achievementExpansionHeight = computed(() => showAllAchievements.value
  ? `${achievementExpansionContent.value?.scrollHeight ?? 0}px`
  : '0px');
const featuredProjects = computed(() => [...ALL_PROJECTS].sort((first, second) => PROJECT_ORDER.indexOf(first.title) - PROJECT_ORDER.indexOf(second.title)));
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

</script>

<template>
  <main class="portfolio">
    <section class="hero">
      <HeroParticles />
      <div class="social-links">
        <a v-for="link in SITE_CONTENT.socialLinks" :key="link.href" :href="link.href" target="_blank" rel="noreferrer">
          <img :src="link.icon" alt="" />
          {{ link.label }}
        </a>
      </div>
      <div class="hero-identity">
        <div class="hero-portrait-stage">
          <span class="portrait-panel" aria-hidden="true"></span>
          <span class="portrait-bracket portrait-bracket-top" aria-hidden="true"></span>
          <span class="portrait-bracket portrait-bracket-bottom" aria-hidden="true"></span>
          <img class="portrait" :src="SITE_CONTENT.hero.portrait" :alt="SITE_CONTENT.hero.portraitAlt" />
        </div>
        <h1><span>{{ SITE_CONTENT.name.first }}</span><span>{{ SITE_CONTENT.name.last }}</span></h1>
      </div>
      <p class="hero-copy surface-panel accent-panel" :style="{ marginTop: 0 }">{{ SITE_CONTENT.hero.introduction }}</p>
    </section>

    <section class="portfolio-section projects-section" :aria-labelledby="HOME_SECTIONS.projects.id">
      <SectionHeading :section="HOME_SECTIONS.projects" />
      <div class="project-grid">
        <RouterLink
          v-for="project in featuredProjects"
          :key="project.title"
          :to="project.pageLink"
          class="project-card"
          :style="{ '--project-accent': project.accentColor }"
        >
          <h3>{{ project.spotlightTitle ?? project.title }}</h3>
          <div class="project-console surface-panel">
            <img :src="`/${project.projectLogo}`" :alt="`${project.title} ${SITE_CONTENT.controls.logoSuffix}`" />
            <ul>
              <li v-for="highlight in project.highlights" :key="highlight.caption">
                {{ highlight.shortCaption ?? highlight.caption }}
              </li>
            </ul>
            <span class="project-arrow">{{ SITE_CONTENT.controls.projectArrow }}</span>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="portfolio-section" :aria-labelledby="HOME_SECTIONS.work.id">
      <SectionHeading :section="HOME_SECTIONS.work" />
      <div class="experience-list">
        <article
          v-for="(item, index) in WORK_EXPERIENCE"
          :key="`${item.organization}-${item.startingDate}`"
          class="experience-row"
          :class="{ offset: index % 3 !== 0 }"
        >
          <div class="employer-logo"><img :src="`/${item.logo}`" :alt="item.organization" /></div>
          <div
            class="experience-card surface-panel accent-panel"
            :class="{ ongoing: item.endingDate === 'Ongoing' }"
          >
            <div class="experience-title">
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.organization }}</p>
              </div>
              <time>{{ item.startingDate }} - {{ item.endingDate }}</time>
            </div>
            <p class="experience-description" v-html="item.description"></p>
          </div>
        </article>
      </div>
    </section>

    <section class="portfolio-section achievements-section" :aria-labelledby="HOME_SECTIONS.achievements.id">
      <SectionHeading :section="HOME_SECTIONS.achievements" />
      <div class="achievement-list">
        <AchievementRow
          v-for="item in featuredAchievements"
          :key="`${item.year}-${item.title}`"
          :item="item"
        />
        <div
          class="achievement-expansion"
          :class="{ expanded: showAllAchievements }"
          :style="{ height: achievementExpansionHeight }"
          :aria-hidden="!showAllAchievements"
        >
          <div ref="achievementExpansionContent" class="achievement-expansion-content">
            <AchievementRow
              v-for="item in additionalAchievements"
              :key="`${item.year}-${item.title}`"
              :item="item"
            />
          </div>
        </div>
      </div>
      <button
        v-if="ACHIEVEMENTS.length > 4"
        class="load-more"
        :class="{ expanded: showAllAchievements }"
        type="button"
        :aria-expanded="showAllAchievements"
        @click="showAllAchievements = !showAllAchievements"
      >
        {{ showAllAchievements ? SITE_CONTENT.controls.showLess : SITE_CONTENT.controls.loadMore }}
        <img
          :src="showAllAchievements ? SITE_CONTENT.controls.showLessIcon : SITE_CONTENT.controls.loadMoreIcon"
          alt=""
        />
      </button>
    </section>

    <section class="portfolio-section education-section" :aria-labelledby="HOME_SECTIONS.education.id">
      <SectionHeading :section="HOME_SECTIONS.education" />
      <div class="education-list">
        <article v-for="item in [...EDUCATION].reverse()" :key="item.startingDate" class="education-row">
          <ul class="surface-panel accent-panel">
            <li v-for="achievement in item.achievements" :key="achievement">{{ achievement }}</li>
          </ul>
          <strong>{{ item.startingDate }} - {{ item.endingDate }}</strong>
        </article>
      </div>
    </section>

    <section class="portfolio-section entrepreneurship-section" :aria-labelledby="HOME_SECTIONS.entrepreneurship.id">
      <SectionHeading :section="HOME_SECTIONS.entrepreneurship" />
      <RichTextContent class="entrepreneurship-copy surface-panel accent-panel" :blocks="ENTREPRENEURSHIP_CONTENT" />
    </section>

    <footer>
      <strong>{{ SITE_CONTENT.name.full }}</strong>
      <button class="icon-button" type="button" :aria-label="SITE_CONTENT.controls.scrollToTop" @click="scrollToTop">
        <span aria-hidden="true">{{ SITE_CONTENT.controls.scrollToTopSymbol }}</span>
      </button>
    </footer>
  </main>
</template>
