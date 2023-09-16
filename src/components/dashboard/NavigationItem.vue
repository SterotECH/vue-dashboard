<script lang="ts">
export default defineComponent({
  name: 'NavigationItem',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const route = useRoute()

    const navItemClasses = computed(() => {
      for (const matchedRoute of route.matched) {
        if (matchedRoute.path === props.to)
          return 'bg-slate-600 dark:bg-slate-600 text-white'
      }
      return ''
    })

    return { navItemClasses }
  },
})
</script>

<template>
  <router-link
    :to="to" :class="navItemClasses"
    class="w-full flex items-center rounded-lg p-2 text-base font-normal text-white transition duration-75 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
  >
    <i
      class="group h-6 w-6 flex-shrink-0 text-white transition-all duration-500 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
    >
      <slot name="icon" />
    </i>
    <span class="ml-3 text-white dark:text-white">
      <slot />
    </span>
  </router-link>
</template>
