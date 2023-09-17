<script lang="ts" setup>
import { Icon } from '@iconify/vue';
const { isOpen } = useSidebar()

const activeClass = ref(
  'bg-white border-gray-100 text-[#445569]',
)
const inactiveClass = ref(
  'border-gray-900 text-white hover:bg-gray-600 hover:bg-white hover:text-[#445569] rounded-lg flex items-center px-2 py-2 duration-1000 transition-all ',
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
              <Icon icon="ic:outline-dashboard" />
              <span class="mx-4">Dashboard</span>
            </router-link>
            <router-link :class="[$route.fullPath.startsWith('/teachers') ? activeClass : inactiveClass]" class="flex items-center  px-4 py-2 duration-500 rounded-lg" to="/teachers">
              <Icon icon="carbon:group-presentation" />
              <span class="mx-4">Teachers</span>
            </router-link>
            <router-link :class="[$route.fullPath.startsWith('students')  ? activeClass : inactiveClass]" class="flex items-center  px-4 py-2 duration-500 rounded-lg" to="/students">
              <Icon icon="carbon:education" />
              <span class="mx-4">Student</span>
            </router-link>
            <router-link :class="[$route.fullPath.startsWith('/attendance') ? activeClass : inactiveClass]" class="flex items-center  px-4 py-2 duration-500 rounded-lg" to="/attendance">
              <Icon icon="carbon:user-admin" />
              <span class="mx-4">Attendance</span>
            </router-link>
            <router-link :class="[$route.fullPath.startsWith('/subjects') ? activeClass : inactiveClass]" class="flex items-center  px-4 py-2 duration-500 rounded-lg" to="/subjects">
              <Icon icon="carbon:book" />
              <span class="mx-4">Subjects</span>
            </router-link>
            <router-link :class="[$route.fullPath.startsWith('/classes') ? activeClass : inactiveClass]" class="flex items-center  px-4 py-2 duration-500 rounded-lg" to="/classes">
              <Icon icon="carbon:group-access" />
              <span class="mx-4">Classes</span>
            </router-link>
            <router-link :class="[$route.fullPath.startsWith('/exams') ? activeClass : inactiveClass]" class="flex items-center  px-4 py-2 duration-500 rounded-lg" to="/exams">
              <Icon icon="carbon:exam-mode" />
              <span class="mx-4">Exams</span>
            </router-link>
            <router-link :class="[$route.fullPath.startsWith('payment') ? activeClass : inactiveClass]" class="flex items-center  px-4 py-2 duration-500 rounded-lg" to="/payment">
              <Icon icon="carbon:wallet" />
              <span class="mx-4">Payment</span>
            </router-link>
          </div>
          <div class="h-[90px] px-[5px]">
            <router-link :class="[$route.fullPath.startsWith('settings') ? activeClass : inactiveClass]" to="/settings" class="mt-2 flex items-center px-6 py-2 duration-200">
              <Icon icon="carbon:settings" />
              <span class="mx-4">Settings</span>
            </router-link>
            <router-link :class="[$route.fullPath.startsWith('logout') ? activeClass : inactiveClass]" to="/logout" class="mt-2 flex items-center px-6 py-2 duration-200">
              <Icon icon="carbon:logout" />
              <span class="mx-4">Logout</span>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
