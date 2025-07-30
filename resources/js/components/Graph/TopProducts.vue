<template>
  <div class="flex-[5] bg-white rounded-xl shadow p-6 min-w-[250px] overflow-x-auto">
    <h2 class="text-lg font-semibold mb-4">Top Products</h2>
    <table class="w-full text-sm text-left">
      <thead class="text-sm text-gray-400 border-b border-gray-200">
        <tr>
          <th class="py-2">#</th>
          <th class="py-2">Name</th>
          <th class="py-2">Popularity</th>
          <th class="py-2">Sales</th>
        </tr>
      </thead>
      <tbody class="text-gray-800 text-xs">
        <tr
          v-for="(product, index) in topProducts"
          :key="index"
          class="border-b border-gray-200"
        >
          <td class="py-2">{{ product.id }}</td>
          <td class="py-2 w-[200px]">{{ product.name }}</td>
          <td class="py-2 w-[140px]">
            <div class="w-30 h-1 rounded-full overflow-hidden" :class="product.bgBase">
              <div
                class="h-1"
                :class="product.bgColor"
                :style="{ width: product.percent + '%' }"
              ></div>
            </div>
          </td>
          <td class="py-2">
            <span
              class="border rounded px-2 py-1"
              :class="[
                product.bgBase,
                product.bgColor,
                'text-' + product.bgColor.replace('bg-', ''),
                'border-' + product.bgColor.replace('bg-', '')
              ]"
            >
              {{ product.percent }}%
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const topProducts = [
  {
    id: '01',
    name: 'Home Decor Range',
    percent: 80,
    bgColor: 'bg-[#0095FF]',
    bgBase: 'bg-blue-50',
  },
  {
    id: '02',
    name: "Disney Princess Pink Bag 18'",
    percent: 60,
    bgColor: 'bg-[#00E58F]',
    bgBase: 'bg-green-50',
  },
  {
    id: '03',
    name: 'Bathroom Essentials',
    percent: 90,
    bgColor: 'bg-[#884DFF]',
    bgBase: 'bg-purple-50',
  },
  {
    id: '04',
    name: 'Apple Smartwatches',
    percent: 40,
    bgColor: 'bg-[#FF8900]',
    bgBase: 'bg-orange-50',
  },
]
</script>
