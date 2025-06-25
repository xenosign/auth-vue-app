import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/RegisterPage.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginPage.vue'),
    },
    {
      path: '/check',
      name: 'check',
      component: () => import('../pages/CheckPage.vue'),
    },
    {
      path: '/kakao',
      name: 'kakao',
      component: () => import('../pages/KakaoPage.vue'),
    },
    {
      path: '/kakao-check',
      name: 'kakao-check',
      component: () => import('../pages/KakaoCheckPage.vue'),
    },
  ],
});

export default router;
