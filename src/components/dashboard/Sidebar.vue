<script lang="ts" setup>
import { useSidebar } from '~/composables/useSidebar';

const { isOpen } = useSidebar()

const activeClass = ref(
  'bg-gray-50 bg-opacity-25 text-gray-100 border-gray-100',
)
const inactiveClass = ref(
  'border-gray-900 text-white hover:bg-gray-600 hover:bg-white hover:text-gray-900 rounded-lg flex items-center px-2 py-2 duration-500 transition-all ',
)
</script>

<template>
  <div class="flex">
    <!-- Backdrop -->
    <div :class="isOpen ? 'block' : 'hidden'" class="fixed inset-0 z-20 bg-black opacity-50 transition-opacity lg:hidden"
      @click="isOpen = false" />
    <!-- End Backdrop -->

    <div :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-[200px] transform overflow-y-auto bg-['#445569'] transition duration-500 lg:static lg:inset-0 lg:translate-x-0 px-[10px] py-[10px]">
      <div class="h-[50px] bg-[#445569] flex justify-center items-center rounded-t-lg border-b border-gray-500">
        <h1 class="text-[#fff] font-bold text-2xl uppercase">Dashboard</h1>
      </div>

      <nav class="h-[calc(100vh-70px)] bg-[#445569] py-[20px] rounded-b-lg">
        <div class="flex flex-col justify-between h-full">
          <div class="px-[8px] flex flex-col py-[5px] justify-between space-y-[10px]">
            <router-link :class="[$route.name === '/' ? activeClass : inactiveClass]" class="flex items-center  px-4 py-2 duration-500 rounded-lg" to="/">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                  fill="currentColor" />
                <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor" />
              </svg>
              <span class="mx-4">Dashboard</span>
            </router-link>
            <router-link :class="[$route.name === '/' ? activeClass : inactiveClass]" class="flex items-center  px-4 py-2 duration-500 rounded-lg" to="/">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                  fill="currentColor" />
                <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor" />
              </svg>
              <span class="mx-4">Teachers</span>
            </router-link>
            <router-link :class="[$route.name === '/' ? activeClass : inactiveClass]" class="flex items-center  px-4 py-2 duration-500 rounded-lg" to="/">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                  fill="currentColor" />
                <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor" />
              </svg>
              <span class="mx-4">Student</span>
            </router-link>
            <router-link :class="[$route.name === '/' ? activeClass : inactiveClass]" class="flex items-center  px-4 py-2 duration-500 rounded-lg" to="/">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                  fill="currentColor" />
                <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor" />
              </svg>
              <span class="mx-4">Attendance</span>
            </router-link>
            <router-link :class="[$route.name === '/' ? activeClass : inactiveClass]" class="flex items-center  px-4 py-2 duration-500 rounded-lg" to="/">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                  fill="currentColor" />
                <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor" />
              </svg>
              <span class="mx-4">Subjects</span>
            </router-link>
            <router-link :class="[$route.name === '/' ? activeClass : inactiveClass]" class="flex items-center  px-4 py-2 duration-500 rounded-lg" to="/">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                  fill="currentColor" />
                <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor" />
              </svg>
              <span class="mx-4">Classes</span>
            </router-link>
            <router-link :class="[$route.name === '/' ? activeClass : inactiveClass]" class="flex items-center  px-4 py-2 duration-500 rounded-lg" to="/">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                  fill="currentColor" />
                <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor" />
              </svg>
              <span class="mx-4">Exams</span>
            </router-link>
            <router-link :class="[$route.name === '/' ? activeClass : inactiveClass]" class="flex items-center  px-4 py-2 duration-500 rounded-lg" to="/">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                  fill="currentColor" />
                <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor" />
              </svg>
              <span class="mx-4">Payment</span>
            </router-link>
          </div>
          <div class="h-[90px] px-[8px]">
            <router-link :class="[$route.fullPath.startsWith('settings') ? activeClass : inactiveClass]" to="/settings" class="mt-2 flex items-center px-6 py-2 duration-200">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                  fill="currentColor" />
                <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor" />
              </svg>

              <span class="mx-4">Settings</span>
            </router-link>
            <router-link :class="[$route.fullPath.startsWith('logout') ? activeClass : inactiveClass]" to="/logout" class="mt-2 flex items-center px-6 py-2 duration-200">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                  fill="currentColor" />
                <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor" />
              </svg>

              <span class="mx-4">Logout</span>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
