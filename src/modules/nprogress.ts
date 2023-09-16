import NProgress from 'nprogress'
import { type UserModule } from '~/types'
import { useAuthStore } from '~/stores/useAuthStore'
import { pinia } from '~/modules/pinia'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from) => {
      if (to.path !== from.path)
        NProgress.start()

    //   const authStore = useAuthStore(pinia)

    //   const isAuthenticated = authStore.authenticated
    //   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

    //   if (requiresAuth && !isAuthenticated)
    //     return '/auth/login'
    //   else if (!requiresAuth && isAuthenticated)
    //     return '/'
    })

    router.afterEach((_to) => {
      NProgress.done()
    })
  }
}
