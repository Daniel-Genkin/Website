import { ALL_PROJECTS } from '@/data/data';
import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/IndexView.vue';

const projectRoutes = ALL_PROJECTS.map((project) => ({
  path: project.pageLink,
  name: project.pageLink.slice(1),
  component: () => import('../views/ProjectDetailView.vue')
}));

const router = createRouter({
  history:  createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...projectRoutes
  ]
});

router.beforeEach((to) => {
  if (to.path !== '/') {
    if (ALL_PROJECTS.findIndex(x => x.pageLink === to.path) === -1) {
      return { name: "home" };
    }
  }
  return true;
});

export default router;
