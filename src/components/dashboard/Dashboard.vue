<script lang="ts" setup>
const store = useThemeStore()
</script>

<template>
  <div class='leading-normal tracking-normal'>
    <div class='flex flex-wrap'>
      <Sidebar />
      <div
        :class="store.sideBarOpen ? 'fixed inset-0 z-30  bg-gray-900/50' : ''"
        class='min-h-screen w-full pl-0 lg:pl-64'
      >
        <Nav />
        <main relative w-full overflow-y-auto bg-slate-50>
          <div class="px-4 pt-6">
            <router-view />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
