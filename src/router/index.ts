import { ALL_PROJECTS } from '@/data/data';
import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/IndexView.vue';

const router = createRouter({
  history:  createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/greenar',
      name: 'greenar',
      component: () => import('../views/ProjectDetailView.vue')
    },
    {
      path: '/slappy-sandwich',
      name: 'slappy-sandwich',
      component: () => import('../views/ProjectDetailView.vue')
    },
    {
      path: '/spaceship-simulator',
      name: 'spaceship-simulator',
      component: () => import('../views/ProjectDetailView.vue')
    },
    {
      path: '/project-gameplan',
      name: 'project-gameplan',
      component: () => import('../views/ProjectDetailView.vue')
    }
  ]
});

// prevent navigating to non existant project pages
router.beforeEach((to, from) => {
  if (to.path !== '/') {
    if (ALL_PROJECTS.findIndex(x => x.pageLink === to.path) === -1) {
      return { name: "home" };
    }
  }
  return true;
});

export default router;
