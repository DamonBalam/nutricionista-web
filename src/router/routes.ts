import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [{ path: '', component: () => import('pages/Auth/Index.vue') }]
  },
  {
    path: '/',
    redirect: '/inicio',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/inicio',
        component: () => import('pages/Inicio/Index.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/pacientes',
        component: () => import('pages/Pacientes/Index.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/productos',
        component: () => import('pages/Productos/Index.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/productos/nuevo',
        component: () => import('pages/Productos/Nuevo.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/ajustes',
        component: () => import('pages/Ajustes/Index.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
