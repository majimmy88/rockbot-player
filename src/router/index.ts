import { createRouter, createWebHistory } from 'vue-router';
import NowPlaying from '../views/NowPlaying.vue';
import Search from '../views/Search.vue';

const routes = [
  {
    path: '/',
    name: 'NowPlaying',
    component: NowPlaying,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
