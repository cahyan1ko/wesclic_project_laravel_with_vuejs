<template>
  <div class="flex">
    <aside class="w-64 h-screen overflow-y-auto custom-scrollbar overflow-x-hidden bg-white fixed">
      <Sidebar />
    </aside>

    <main class="ml-64 flex-1 min-h-screen bg-[#F9FAFB] text-gray-900 overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './layouts/Sidebar.vue'
</script>
