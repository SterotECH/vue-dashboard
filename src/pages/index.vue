<script setup lang="ts">

</script>

<template>
  <div class="flex bg-slate-100">
    <!-- Sidebar-->
    <Sidebar />
    <main class="w-full px-[10px] py-[10px]">
      <div class="h-[50px] bg-[#fff] flex justify-between items-center rounded-lg">
        <div class="text-[#445569] text-xl capitalize font-bold pl-[15px]">
          Dashboard
        </div>
        <div>
          <input type="search" />
        </div>
        <div></div>
      </div>
      <div class="h-[calc(100vh-80px)] mx-[5px] my-[10px] rounded-lg"></div>
    </main>
  </div>
</template>
