<template>
  <div class="max-w-screen-xl mx-auto px-4 pb-0 pt-0 bg-white sticky top-0 z-50">
    <div class="flex items-center justify-between gap-4 h-16">
      <h1 class="text-2xl font-bold">{{ title }}</h1>

      <div v-if="showSearch" class="flex-1 mx-4 max-w-md relative">
        <img
          src="/assets/icons/search-icon.svg"
          alt="Search Icon"
          class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search here..."
          class="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="flex items-center gap-4">
        <div class="flex items-center gap-1 text-gray-700 cursor-pointer">
          <img src="/assets/images/img-eng.svg" alt="Language" class="w-5 h-5" />
          <span class="text-sm font-medium">Eng (US)</span>
          <img src="/assets/icons/arrow-down-icon.svg" alt="Arrow" class="w-3 h-3" />
        </div>
        <div class="relative">
          <img src="/assets/icons/notification-icon.png" alt="Notifikasi" class="w-10 h-10 cursor-pointer" />
          <span class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">3</span>
        </div>
        <div class="flex items-center gap-4 cursor-pointer">
          <img src="/assets/images/img-profile.png" alt="Profile" class="w-8 h-8 rounded-full object-cover" />
          <div class="flex flex-col leading-tight text-sm text-right">
            <span class="font-medium">Musfiq</span>
            <span class="text-gray-500 text-xs text-start">Admin</span>
          </div>
          <img src="/assets/icons/arrow-down-bold-icon.png" alt="Arrow" class="w-3 h-3 -translate-y-1.5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  showSearch: {
    type: Boolean,
    default: true
  }
})
</script>
