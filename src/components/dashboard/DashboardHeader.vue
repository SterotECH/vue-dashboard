<script lang="ts" setup>
import { profile } from 'console';
import { useSidebar } from '~/composables/useSidebar'

const auth = useAuthStore()

const name = computed(() => {
  return `${auth.user!.first_name} ${auth.user!.last_name}`
})
const dropdownOpen = ref(false)
const { isOpen } = useSidebar()
</script>

<template>
  <header
    class="flex items-center justify-between border-b-4 border-indigo-600 bg-white px-6 py-4"
  >
    <div class="flex items-center">
      <button
        class="text-gray-500 lg:hidden focus:outline-none"
        @click="isOpen = true"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </button>
    </div>

    <div class="flex items-center">
      <div class="relative">
        <a class="flex items-center gap-4" href="#" @click="dropdownOpen = !dropdownOpen">
          <span class="hidden text-right lg:block">
            <span class="text-md block text-gray-900 uppercase">{{ name }} </span>
            <span class="block text-xs font-bold uppercase text-gray-500">{{ auth.user!.user_type }}</span>
          </span>

          <svg
            :class="dropdownOpen && 'rotate-180'" class="hidden fill-current sm:block" fill="none" height="8"
            viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
              fill=""
              fill-rule="evenodd"
            />
          </svg>
        </a>
        <div
          v-show="dropdownOpen"
          class="fixed inset-0 z-10 h-full w-full"
          @click="dropdownOpen = false"
        />

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-show="dropdownOpen"
            class="absolute right-0 z-20 mt-2 w-48 rounded-md bg-white py-2 shadow-xl"
          >
            <router-link
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
              to="profile"
            >
            Profile
          </router-link>
            <a
              class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white cursor-pointer"
              @click="auth.logout"
            >
              Log out
            </a>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>
