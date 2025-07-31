<template>
  <HeaderDashboard title="Dashboard" :showSearch="true"/>
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
import HeaderDashboard from '../layouts/Header/Header.vue'
import Button from '../components/Button.vue'

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
