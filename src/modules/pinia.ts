import { type PiniaPluginContext, createPinia } from 'pinia'
import type { Router } from 'vue-router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { type UserModule } from '~/types'

export const pinia = createPinia()
// Setup Pinia
// https://pinia.vuejs.org/
export const install: UserModule = ({ isClient, initialState, app, router }) => {
  app.use(pinia)

  pinia.use(({ store }: PiniaPluginContext) => {
    store.router = markRaw(router)
  })

  pinia.use(({ store }: PiniaPluginContext) => {
    store.$subscribe((mutation) => {
      // eslint-disable-next-line no-console
      console.log(`🍍 ${mutation.storeId}: ${mutation.type}.`)
    })
  })

  pinia.use(piniaPluginPersistedstate)
  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (isClient)
    pinia.state.value = (initialState.pinia) || {}

  else
    initialState.pinia = pinia.state.value
}

declare module 'pinia' {
  interface PiniaCustomProperty {
    router: Router
  }
}
