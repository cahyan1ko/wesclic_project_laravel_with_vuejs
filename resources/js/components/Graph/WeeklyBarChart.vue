<template>
  <div class="flex-[5] bg-white rounded-xl shadow p-6 min-w-[250px]">
    <h2 class="text-lg font-semibold mb-2">Total Revenue</h2>
    <canvas ref="barChart" class="w-full h-[200px]"></canvas>
    <div class="flex justify-center gap-4 text-xs mt-2">
      <div class="flex items-center gap-1">
        <span class="inline-block w-3 h-3 rounded-full bg-[#0095FF]"></span> Online Sales
      </div>
      <div class="flex items-center gap-1">
        <span class="inline-block w-3 h-3 rounded-full bg-[#00E096]"></span> Offline Sales
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'

const barChart = ref(null)

onMounted(() => {
  const ctx = barChart.value.getContext('2d')
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: 'Online Sales',
          data: [5000, 12000, 8000, 10000, 20000, 15000, 22000],
          backgroundColor: '#0095FF',
          borderRadius: 6,
          barThickness: 12
        },
        {
          label: 'Offline Sales',
          data: [3000, 9000, 6000, 7000, 15000, 11000, 18000],
          backgroundColor: '#00E096',
          borderRadius: 6,
          barThickness: 12
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          stacked: false,
          grid: { display: false }
        },
        y: {
          stacked: false,
          beginAtZero: true,
          min: 0,
          max: 25000,
          ticks: {
            stepSize: 5000,
            callback: value => (value >= 1000 ? value / 1000 + 'k' : value)
          },
          grid: { color: '#E5E7EB' }
        }
      },
      plugins: { legend: { display: false } }
    }
  })
})
</script>
