import {ViteSSG} from 'vite-ssg'
import {setupLayouts} from 'virtual:generated-layouts'

// import Previewer from 'virtual:vue-component-preview'
import {routes} from 'vue-router/auto/routes'
import App from './App.vue'
import type {UserModule} from './types'
import './assets/main.css'

export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
  },
  (ctx) => {
    Object.values(
      import.meta.glob<{ install: UserModule }>('./modules/*.ts', {
        eager: true,
      }),
    ).forEach(i => i.install?.(ctx))
    // ctx.app.use(Previewer)
  },
)
