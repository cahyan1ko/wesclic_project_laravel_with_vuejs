<template>
  <aside class="w-64 bg-[#ffffff] flex flex-col justify-between min-h-screen p-4">
    <div class="p-2">
      <div class="flex items-center gap-3 mb-8">
        <img src="/assets/images/dummy_logo.png" alt="Logo" class="h-10 w-10 object-cover" />
        <span class="text-xl font-bold text-primary">Dabang</span>
      </div>

      <nav class="space-y-4 p-1">
        <router-link
          v-for="menu in menus"
          :key="menu.url"
          :to="{ name: menu.url }"
          class="flex items-center gap-4 h-12 px-6 py-2 transition"
          :class="getMenuClass(menu)"
        >
          <img :src="getIcon(menu.icon)" :alt="menu.label" class="h-6 w-6 object-cover" />
          <span class="text-base">{{ menu.label }}</span>
        </router-link>
      </nav>
    </div>

    <div class="p-4">
      <div
        class="bg-blue-100 text-blue-900 rounded-lg p-4 mt-6 relative overflow-hidden"
        :style="{
          backgroundImage: `url(${bgPromotion})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }"
      >
        <div class="relative z-10 flex flex-col items-center">
          <div class="flex flex-col items-center gap-2 mb-3">
            <img :src="logoLight" alt="Pro Logo" class="w-8 h-8" />
            <h3 class="text-md text-white font-semibold">Dabang Pro</h3>
          </div>
          <p class="text-sm text-white text-center mb-3">
            Get access to all features on tetumbas
          </p>
          <button
            class="bg-white text-[#5D5FEF] w-[140px] h-[40px] rounded-md font-semibold hover:bg-blue-100 transition"
          >
            Get Pro
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (url) => route.name === url

const getMenuClass = (menu) => {
  if (isActive(menu.url)) {
    return 'bg-[#5D5FEF] text-white rounded-[16px]'
  } else if (menu.is_danger ?? false) {
    return 'text-red-600 hover:text-red-800'
  } else {
    return 'text-gray-700 hover:text-primary'
  }
}

const menus = [
  { label: 'Dashboard', url: 'dashboard', icon: 'dashboard-icon.png' },
  { label: 'Leaderboard', url: 'leaderboard', icon: 'leaderboard-icon.png' },
  { label: 'Order', url: 'order', icon: 'order-icon.png' },
  { label: 'Products', url: 'products', icon: 'products-icon.png' },
  { label: 'Sales Report', url: 'sales-report', icon: 'sales-report-icon.png' },
  { label: 'Message', url: 'message', icon: 'messages-icon.png' },
  { label: 'Settings', url: 'settings', icon: 'settings-icon.png' },
  { label: 'Sign Out', url: 'signout', icon: 'sign-out-icon.png'},
  { label: 'Useless', url: 'useless', icon: 'sign-out-icon.png'}
]

const getIcon = (filename) => `/assets/icons/${filename}`
const bgPromotion = '/assets/images/bg-promotion.png'
const logoLight = '/assets/images/dummy_logo-light.png'
</script>

<style scoped>
.text-primary {
  color: #5D5FEF;
}
.hover\:text-primary:hover {
  color: #5D5FEF;
}
</style>
