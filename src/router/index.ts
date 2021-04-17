import { createRouter, createWebHistory } from 'vue-router';
import NowPlaying from '../components/NowPlaying.vue';
import Search from '../components/Search.vue';

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
