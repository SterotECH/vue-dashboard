<script setup lang="ts">
const { isOpen } = useSidebar()
const logout = () => {
  //router.post(route('logout'));
};
</script>

<template>
  <div class="flex bg-[#F1F4FA]">
    <!-- Sidebar-->
    <SidebarComponent />
    <main class="w-full px-[10px] py-[10px]">
      <div class="h-[50px] bg-[#fff] flex justify-between items-center rounded-lg">
        <div class="flex">
          <div class="flex items-center pl-[10px]">
            <button class="text-gray-500 lg:hidden focus:outline-none" @click="isOpen = true">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" />
              </svg>
            </button>
          </div>
          <div
            class="hidden text-[#445569] text-xl capitalize font-bold pl-[15px] lg:block lg:flex md:block md:flex sm:hidden">
            Dashboard
          </div>
        </div>
        <div class="hidden lg:block lg:flex sm:hidden">
          <TextInput type="search" placeholder="Search ..."
            class="mt-1 block w-full px-[5px] place-content-center text-slate-900 border-gray-500" />
        </div>
        <div>
          <div class="ml-3 relative">
            <Dropdown align="right" width="48">
              <template #trigger>
                <button
                  class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition mr-[10px]">
                  <img class="h-8 w-8 rounded-full object-cover"
                    src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Kurt&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&graphicType=Cumbia&eyeType=Side&eyebrowType=Default&mouthType=Smile&skinColor=DarkBrown'
                    alt="auth.user.name">
                </button>
              </template>

              <template #content>
                <DropdownLink href="/profile">
                  Profile
                </DropdownLink>
                <div class="border-t border-gray-200" />

                <DropdownLink href="/notifcation">
                  Notifications
                </DropdownLink>
                <div class="border-t border-gray-200" />

                <form @submit.prevent="logout">
                  <DropdownLink as="button">
                    Log Out
                  </DropdownLink>
                </form>
              </template>
            </Dropdown>
          </div>
        </div>
      </div>
      <div class="h-[calc(100vh-90px)] mx-[5px] my-[10px] rounded-lg"></div>
    </main>
  </div>
</template>
