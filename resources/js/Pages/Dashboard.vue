<template>
  <div class="max-w-screen-xl mx-auto px-4 pb-2 pt-2 bg-white">
    <div class="flex items-center justify-between gap-4 h-16">
      <h1 class="text-2xl font-bold">Dashboard</h1>

      <div class="flex-1 mx-4 max-w-md relative">
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

  <div class="max-w-screen-xl mx-auto px-4 pl-6 pr-6 pb-4 pt-6">
    <div class="flex flex-row gap-4 flex-wrap">
      <TodaySales />
      <VisitorInsight />
    </div>
  </div>

  <div class="max-w-screen-xl mx-auto px-4 pl-6 pr-6 pb-4">
    <div class="flex flex-row gap-4 flex-wrap">
      <TotalRevenue />
      <CustomerSatisfaction />
      <TargetReality />
    </div>
  </div>

  <div class="max-w-screen-xl mx-auto px-4 pl-6 pr-6">
    <div class="flex flex-row gap-4 flex-wrap">
      <TopProducts />
      <SalesMapping />
      <VolumeService />
    </div>
  </div>
</template>

<script>
import TodaySales from '@/components/graph/TodaySales.vue'
import VisitorInsight from '@/components/graph/VisitorInsight.vue'
import TotalRevenue from '@/components/graph/TotalRevenue.vue'
import CustomerSatisfaction from '@/components/graph/CustomerSatisfaction.vue'
import TargetReality from '@/components/graph/TargetReality.vue'
import TopProducts from '@/components/graph/TopProducts.vue'
import SalesMapping from '@/components/graph/SalesMapping.vue'
import VolumeService from '@/components/graph/VolumeService.vue'

export default {
  name: 'Dashboard',
  components: {
    TodaySales,
    VisitorInsight,
    TotalRevenue,
    CustomerSatisfaction,
    TargetReality,
    TopProducts,
    SalesMapping,
    VolumeService,
  },
}
</script>

<style scoped>
</style>
