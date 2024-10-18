// router/index.ts
// import { createMemoryHistory, createRouter } from 'vue-router'

// import HomeView from '../views/HomeView.vue';
// import AboutView from '../views/AboutView.vue';

// const routes = [
//   { path: '/', component: HomeView },
//   { path: '/about', component: AboutView },
// ]

// const router = createRouter({
//   history: createMemoryHistory(),
//   routes,
// })

// export default router



import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import UserView from '../views/UserView.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/user/:id', name: 'User', component: UserView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Uses HTML5 history mode
  routes,
});

export default router;
