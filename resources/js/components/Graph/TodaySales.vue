<template>
  <div class="flex-[3] bg-white rounded-xl shadow p-6 min-w-[300px]">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-lg font-semibold">Today's Sales</h2>
        <p class="text-xs text-gray-500 font-light">Sales Summary</p>
      </div>
      <Button
        text="Export"
        textColor="#0F3659"
        bgColor="#FFFFFF"
        hoverColor="#f4f4f4"
        hoverTextColor="#0F3659"
        padding="0.5rem 1rem"
        fontSize="0.875rem"
        borderRadius="0.5rem"
        border="1px solid #D1D5DB"
      >
        <template #icon>
          <img src="/assets/icons/export-icon.png" alt="Export Icon" class="w-4 h-4" />
        </template>
      </Button>

    </div>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div
        v-for="(item, index) in cards"
        :key="index"
        :class="`rounded-[16px] p-4 text-start w-full border border-gray-200 ${item.bg}`"
      >
        <img :src="item.icon" :alt="`Icon ${index + 1}`" class="w-8 h-8 mb-2" />
        <p class="text-lg font-semibold">{{ item.value }}</p>
        <p class="text-xs text-gray-700 font-medium">{{ item.label }}</p>
        <p class="text-[10px] text-[#4079ED] font-medium mt-1">+8% from yesterday</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    icon: '/assets/icons/today-sales1-icon.png',
    value: '$1k',
    label: 'Total Sales',
    bg: 'bg-[#FFE2E5]',
  },
  {
    icon: '/assets/icons/today-sales2-icon.png',
    value: '300',
    label: 'Total Order',
    bg: 'bg-[#FFF4DE]',
  },
  {
    icon: '/assets/icons/today-sales3-icon.png',
    value: '5',
    label: 'Product Sold',
    bg: 'bg-[#DCFCE7]',
  },
  {
    icon: '/assets/icons/today-sales4-icon.png',
    value: '8',
    label: 'New Customers',
    bg: 'bg-[#F3E8FF]',
  },
]
</script>
