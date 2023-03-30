import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Inicio/Index.vue') }],
  },
  {
    path: '/pacientes',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Pacientes/Index.vue') }],
  },
  {
    path: '/productos',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Productos/Index.vue') }],
  },
  {
    path: '/ajustes',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Ajustes/Index.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
