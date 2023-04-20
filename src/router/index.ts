import { route, store } from 'quasar/wrappers'
import { useAuthStore } from 'stores/auth'
import { LocalStorage } from 'quasar'
import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  // const createHistory = process.env.SERVER
  //   ? createMemoryHistory
  //   : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createWebHistory(process.env.VUE_ROUTER_BASE)
    // history: createHistory(process.env.VUE_ROUTER_BASE),
  })

  Router.beforeEach((to, from, next) => {
    const access_token = LocalStorage.getItem('access_token')
    const user = JSON.parse(LocalStorage.getItem('user') || '{}')
    const store = useAuthStore()

    const { setUser } = store

    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (access_token != null) {
        setUser({ user: user, token: access_token })
        next()
      } else {
        next({ path: '/login' })
      }
    } else {
      next()
    }
  })

  return Router
})
