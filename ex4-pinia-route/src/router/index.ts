import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import BasicSearchView from '../views/BasicSearchView2.vue';
import AdvancedSearchView from '../views/AdvancedSearchView.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/basic-search', name: 'basic-search', component: BasicSearchView },
  { path: '/advanced-search', name: 'advanced-search', component: AdvancedSearchView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Uses HTML5 history mode
  routes,
});

export default router;
