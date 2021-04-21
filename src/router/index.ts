import { createRouter, createWebHistory } from 'vue-router';
import NowPlaying from '../views/NowPlaying.vue';
import Search from '../views/Search.vue';
import Browse from '../views/Browse.vue';

//Routes for NowPlaying and Search pages

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
  {
    path: '/browse',
    name: 'Browse',
    component: Browse,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
