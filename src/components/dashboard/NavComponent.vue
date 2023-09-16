<script setup lang="ts">
const store = useThemeStore()
const auth = useAuthStore()
</script>

<template>
  <nav class="fixed top-0 z-50 w-full border-b border-gray-700 bg-gray-800 dark:border-gray-700 dark:bg-gray-800 md:pl-20 sm:pl-0">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button
            aria-controls="sidebar" type="button" class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 sm:hidden hover:bg-gray-100 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            @click="store.toggleSidebar()"
          >
            <svg
              v-if="store.isSideBarOpen" class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <svg v-else class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              >
                <title>Menu</title>
              </path>
            </svg>
          </button>
          <a href="https://flowbite.com" class="ml-2 flex md:mr-24">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="FlowBite Logo">
            <span class="self-center whitespace-nowrap text-xl font-semibold text-white sm:text-2xl">Smart Notes</span>
          </a>
        </div>
        <div class="flex items-center">
          <div class="ml-3 flex items-center">
            <div>
              <div relative flex justify-between text-gray-900 dark:text-white>
                <button p-2 text-xl icon-btn title="toggle_dark" @click="toggleDark()">
                  <div i="carbon-sun dark:carbon-moon" />
                </button>
                <button p-2 text-xl icon-btn @click="store.toggleDropDown">
                  <div i="carbon-user-avatar-filled dark:carbon-user-avatar" />
                </button>
              </div>
            </div>
            <div
              id="dropdown-user"
              class="absolute right-0 top-13 z-50 mx-2 my-4 list-none rounded bg-white text-base shadow divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600" :class="store.isDropDownOpen ? '' : 'hidden'"
            >
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  {{ auth.user.name }}
                </p>
                <p class="truncate text-sm font-medium text-gray-900 dark:text-gray-300" role="none">
                  {{ auth.user.email }}
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >Dashboard</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >Settings</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem" @click="auth.logout"
                  >Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
