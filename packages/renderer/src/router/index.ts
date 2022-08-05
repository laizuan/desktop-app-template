import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import Login from '/@/views/login/index.vue';

import Layout from '/@/layouts/Layout.vue';

export const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        name: 'Redirect',
        path: '/redirect/:path(.*)*',
        component: () => import('/@/views/redirect/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: Login,
  },
  {
    path: '/',
    redirect: '/index/work',
    hidden: true,
  },
  {
    path: '/index',
    name: 'root',
    component: Layout,
    meta: {
      title: '主页',
      icon: 'house',
    },
    children: [
      {
        path: 'work',
        name: 'WorkPage',
        component: () => import('/@/views/home/work.vue'),
        meta: {
          title: '工作台',
          icon: 'house',
          affix: true,
        },
      },
    ],
  },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
